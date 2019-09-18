// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
// State
import { ActivitiesState } from '../_reducers/activity.reducers';
import { each } from 'lodash';
import { Activity } from '../_models/activity.model';


export const selectActivitiesState = createFeatureSelector<ActivitiesState>('activities');

export const selectActivityById = (userId: number) => createSelector(
    selectActivitiesState,
    usersState => usersState.entities[userId]
);

export const selectActivitiesPageLoading = createSelector(
    selectActivitiesState,
    usersState => {
        return usersState.listLoading;
    }
);

export const selectActivitiesActionLoading = createSelector(
    selectActivitiesState,
    usersState => usersState.actionsloading
);

export const selectLastCreatedActivityId = createSelector(
    selectActivitiesState,
    usersState => usersState.lastCreatedActivityId
);

export const selectActivitiesPageLastQuery = createSelector(
    selectActivitiesState,
    usersState => usersState.lastQuery
);

export const selectActivitiesInStore = createSelector(
    selectActivitiesState,
    usersState => {
        const items: Activity[] = [];
        each(usersState.entities, element => {
            items.push(element);
        });
        const httpExtension = new HttpExtenstionsModel();
        const result: Activity[] = httpExtension.sortArray(items, usersState.lastQuery.sortField, usersState.lastQuery.sortOrder);
        return new QueryResultsModel(result, usersState.totalCount, '');
    }
);

export const selectActivitiesShowInitWaitingMessage = createSelector(
    selectActivitiesState,
    usersState => usersState.showInitWaitingMessage
);

export const selectHasActivitiesInStore = createSelector(
    selectActivitiesState,
    queryResult => {
        if (!queryResult.totalCount) {
            return false;
        }

        return true;
    }
);
