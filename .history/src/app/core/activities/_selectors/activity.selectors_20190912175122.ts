// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
// State
import { ActivitysState } from '../_reducers/Activity.reducers';
import { each } from 'lodash';
import { Activity } from '../_models/Activityvity.model';


export const selectActivitysState = createFeatureSelector<ActivitysState>('Activitys');

export const selectActivityById = (ActivityId: number) => createSelector(
    selectActivitysState,
    ActivitysState => ActivitysState.entities[ActivityId]
);

export const selectActivitysPageLoading = createSelector(
    selectActivitysState,
    ActivitysState => {
        return ActivitysState.listLoading;
    }
);

export const selectActivitysActionLoading = createSelector(
    selectActivitysState,
    ActivitysState => ActivitysState.actionsloading
);

export const selectLastCreatedActivityId = createSelector(
    selectActivitysState,
    ActivitysState => ActivitysState.lastCreatedActivityId
);

export const selectActivitysPageLastQuery = createSelector(
    selectActivitysState,
    ActivitysState => ActivitysState.lastQuery
);

export const selectActivitysInStore = createSelector(
    selectActivitysState,
    ActivitysState => {
        const items: Activity[] = [];
        each(ActivitysState.entities, element => {
            items.push(element);
        });
        const httpExtension = new HttpExtenstionsModel();
        const result: Activity[] = httpExtension.sortArray(items, ActivitysState.lastQuery.sortField, ActivitysState.lastQuery.sortOrder);
        return new QueryResultsModel(result, ActivitysState.totalCount, '');
    }
);

export const selectActivitysShowInitWaitingMessage = createSelector(
    selectActivitysState,
    ActivitysState => ActivitysState.showInitWaitingMessage
);

export const selectHasActivitysInStore = createSelector(
    selectActivitysState,
    queryResult => {
        if (!queryResult.totalCount) {
            return false;
        }

        return true;
    }
);
