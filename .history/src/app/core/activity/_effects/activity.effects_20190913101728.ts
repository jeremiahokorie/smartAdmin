// Angular
import { Injectable } from '@angular/core';
// RxJS
import { mergeMap, map, tap } from 'rxjs/operators';
import { Observable, defer, of, forkJoin } from 'rxjs';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
// CRUD
import { QueryResultsModel, QueryParamsModel } from '../../_base/crud';
// Services
import { ActivityService } from '../../activity/_services';
// State
import { AppState } from '../../reducers';
import {
    UserActionTypes,
    UsersPageRequested,
    UsersPageLoaded,
    UserCreated,
    UserDeleted,
    UserUpdated,
    UserOnServerCreated,
    UsersActionToggleLoading,
    UsersPageToggleLoading
} from '../_actions/activity.actions';

@Injectable()
export class UserEffects {
    showPageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: true });
    hidePageLoadingDistpatcher = new UsersPageToggleLoading({ isLoading: false });

    showActionLoadingDistpatcher = new UsersActionToggleLoading({ isLoading: true });
    hideActionLoadingDistpatcher = new UsersActionToggleLoading({ isLoading: false });

    @Effect()
    loadUsersPage$ = this.actions$
        .pipe(
            ofType<UsersPageRequested>(UserActionTypes.UsersPageRequested),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showPageLoadingDistpatcher);
                const requestToServer = this.activityservice.findUsers(payload.page);
                const lastQuery = of(payload.page);
                return forkJoin(requestToServer, lastQuery);
            }),
            map(response => {
                const result: QueryResultsModel = response[0];
                const lastQuery: QueryParamsModel = response[1];
                return new UsersPageLoaded({
                    activities: result.items,
                    totalCount: result.totalCount,
                    page: lastQuery
                });
            }),
        );

    @Effect()
    deleteUser$ = this.actions$
        .pipe(
            ofType<UserDeleted>(UserActionTypes.UserDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(this.showActionLoadingDistpatcher);
                    return this.activityservice.deleteUser(payload.id);
                }
            ),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    @Effect()
    updateUser$ = this.actions$
        .pipe(
            ofType<UserUpdated>(UserActionTypes.UserUpdated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showActionLoadingDistpatcher);
                return this.activityservice.updateUser(payload.activity);
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    @Effect()
    createUser$ = this.actions$
        .pipe(
            ofType<UserOnServerCreated>(UserActionTypes.UserOnServerCreated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showActionLoadingDistpatcher);
                return this.activityservice.createUser(payload.activity).pipe(
                    tap(res => {
                        this.store.dispatch(new UserCreated({ activity: res }));
                    })
                );
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    constructor(private actions$: Actions, private activityservice: ActivityService, private store: Store<AppState>) { }
}
