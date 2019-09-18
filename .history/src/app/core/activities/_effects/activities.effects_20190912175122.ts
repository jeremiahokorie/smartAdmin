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
import { AuthService } from '../../auth/_services';
// State
import { AppState } from '../../reducers';
import {
    ActivityActionTypes,
    ActivitysPageRequested,
    ActivitysPageLoaded,
    ActivityCreated,
    ActivityDeleted,
    ActivityUpdated,
    ActivityOnServerCreated,
    ActivitysActionToggleLoading,
    ActivitysPageToggleLoading
} from '../_actions/activity.actions';

@Injectable()
export class ActivityEffects {
    showPageLoadingDistpatcher = new ActivitysPageToggleLoading({ isLoading: true });
    hidePageLoadingDistpatcher = new ActivitysPageToggleLoading({ isLoading: false });

    showActionLoadingDistpatcher = new ActivitysActionToggleLoading({ isLoading: true });
    hideActionLoadingDistpatcher = new ActivitysActionToggleLoading({ isLoading: false });

    @Effect()
    loadActivitysPage$ = this.actions$
        .pipe(
            ofType<ActivitysPageRequested>(ActivityActionTypes.ActivitysPageRequested),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showPageLoadingDistpatcher);
                const requestToServer = this.auth.findActivitys(payload.page);
                const lastQuery = of(payload.page);
                return forkJoin(requestToServer, lastQuery);
            }),
            map(response => {
                const result: QueryResultsModel = response[0];
                const lastQuery: QueryParamsModel = response[1];
                return new ActivitysPageLoaded({
                    Activitys: result.items,
                    totalCount: result.totalCount,
                    page: lastQuery
                });
            }),
        );

    @Effect()
    deleteActivity$ = this.actions$
        .pipe(
            ofType<ActivityDeleted>(ActivityActionTypes.ActivityDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(this.showActionLoadingDistpatcher);
                    return this.auth.deleteActivity(payload.id);
                }
            ),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    @Effect()
    updateActivity$ = this.actions$
        .pipe(
            ofType<ActivityUpdated>(ActivityActionTypes.ActivityUpdated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showActionLoadingDistpatcher);
                return this.auth.updateActivity(payload.Activity);
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    @Effect()
    createActivity$ = this.actions$
        .pipe(
            ofType<ActivityOnServerCreated>(ActivityActionTypes.ActivityOnServerCreated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showActionLoadingDistpatcher);
                return this.auth.createActivity(payload.Activity).pipe(
                    tap(res => {
                        this.store.dispatch(new ActivityCreated({ Activity: res }));
                    })
                );
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    constructor(private actions$: Actions, private auth: AuthService, private store: Store<AppState>) { }
}
