// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
// Actions
import { ActivityActions, ActivityActionTypes } from '../_actions/activity.actions';
// CRUD
import { QueryParamsModel } from '../../_base/crud';
// Models
import { Activity } from '../_models/activity.model';

// tslint:disable-next-line:no-empty-interface
export interface ActivitiesState extends EntityState<Activity> {
    listLoading: boolean;
    actionsloading: boolean;
    totalCount: number;
    lastCreatedActivityId: string;
    lastQuery: QueryParamsModel;
    showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Activity> = createEntityAdapter<Activity>();

export const initialActivitiesState: ActivitiesState = adapter.getInitialState({
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastQuery:  new QueryParamsModel({}),
    lastCreatedActivityId: undefined,
    showInitWaitingMessage: true
});

export function activitiesReducer(state = initialActivitiesState, action: ActivityActions): ActivitiesState {
    switch  (action.type) {
        case ActivityActionTypes.ActivitiesPageToggleLoading: return {
            ...state, listLoading: action.payload.isLoading, lastCreatedActivityId: undefined
        };
        case ActivityActionTypes.ActivitiesActionToggleLoading: return {
            ...state, actionsloading: action.payload.isLoading
        };
        case ActivityActionTypes.ActivityOnServerCreated: return {
            ...state
        };
        case ActivityActionTypes.ActivityCreated: return adapter.addOne(action.payload.activity, {
            ...state, lastCreatedActivityId: action.payload.activity._id
        });
        case ActivityActionTypes.ActivityUpdated: return adapter.updateOne(action.payload.partialActivity, state);
        case ActivityActionTypes.ActivityDeleted: return adapter.removeOne(action.payload.id, state);
        case ActivityActionTypes.ActivitiesPageCancelled: return {
            ...state, listLoading: false, lastQuery: new QueryParamsModel({})
        };
        case ActivityActionTypes.ActivitiesPageLoaded: {
            return adapter.addMany(action.payload.activities, {
                ...initialActivitiesState,
                totalCount: action.payload.totalCount,
                lastQuery: action.payload.page,
                listLoading: false,
                showInitWaitingMessage: false
            });
        }
        default: return state;
    }
}

export const getActivityState = createFeatureSelector<ActivitiesState>('activities');

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();
