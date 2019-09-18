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
    ActivityActionTypes,
    ActivitiesPageRequested,
    ActivitiesPageLoaded,
    ActivityCreated,
    ActivityDeleted,
    ActivityUpdated,
    ActivityOnServerCreated,
    ActivitiesActionToggleLoading,
    ActivitiesPageToggleLoading
} from '../_actions/activity.actions';

@Injectable()
export class ActivityEffects {
    showPageLoadingDistpatcher = new ActivitiesPageToggleLoading({ isLoading: true });
    hidePageLoadingDistpatcher = new ActivitiesPageToggleLoading({ isLoading: false });

    showActionLoadingDistpatcher = new ActivitiesActionToggleLoading({ isLoading: true });
    hideActionLoadingDistpatcher = new ActivitiesActionToggleLoading({ isLoading: false });

    @Effect()
    loadActivitiesPage$ = this.actions$
        .pipe(
            ofType<ActivitiesPageRequested>(ActivityActionTypes.ActivitiesPageRequested),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showPageLoadingDistpatcher);
                const requestToServer = this.activityservice.findActivities(payload.page);
                const lastQuery = of(payload.page);
                return forkJoin(requestToServer, lastQuery);
            }),
            map(response => {
                const result: QueryResultsModel = response[0];
                const lastQuery: QueryParamsModel = response[1];
                return new ActivitiesPageLoaded({
                    activities: result.items,
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
                    return this.activityservice.deleteActivity(payload.id);
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
                return this.activityservice.updateActivity(payload.activity);
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
                return this.activityservice.createActivity(payload.activity).pipe(
                    tap(res => {
                        this.store.dispatch(new ActivityCreated({ activity: res }));
                    })
                );
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    constructor(private actions$: Actions, private activityservice: ActivityService, private store: Store<AppState>) { }
}
