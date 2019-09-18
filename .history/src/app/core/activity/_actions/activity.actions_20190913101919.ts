// NGRX
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
// CRUD
import { Activity } from '../_models/activity.model';
// Models
import { QueryParamsModel } from '../../_base/crud';

export enum ActivityActionTypes {
    AllActivitiesRequested = '[Activities Module] All Activities Requested',
    AllActivitiesLoaded = '[Activities API] All Activities Loaded',
    ActivityOnServerCreated = '[Edit Activity Component] Activity On Server Created',
    ActivityCreated = '[Edit Activity Dialog] Activity Created',
    ActivityUpdated = '[Edit Activity Dialog] Activity Updated',
    ActivityDeleted = '[Activities List Page] Activity Deleted',
    ActivitiesPageRequested = '[Activities List Page] Activities Page Requested',
    ActivitiesPageLoaded = '[Activities API] Activities Page Loaded',
    ActivitiesPageCancelled = '[Activities API] Activities Page Cancelled',
    ActivitiesPageToggleLoading = '[Activities] Activities Page Toggle Loading',
    ActivitiesActionToggleLoading = '[Activities] Activities Action Toggle Loading'
}

export class ActivityOnServerCreated implements Action {
    readonly type = ActivityActionTypes.ActivityOnServerCreated;
    constructor(public payload: { activity: Activity }) { }
}

export class ActivityCreated implements Action {
    readonly type = ActivityActionTypes.ActivityCreated;
    constructor(public payload: { activity: Activity }) { }
}


export class ActivityUpdated implements Action {
    readonly type = ActivityActionTypes.ActivityUpdated;
    constructor(public payload: {
        partialActivity: Update<Activity>,
        activity: Activity
    }) { }
}

export class ActivityDeleted implements Action {
    readonly type = ActivityActionTypes.ActivityDeleted;
    constructor(public payload: { id: number }) {}
}

export class ActivitiesPageRequested implements Action {
    readonly type = ActivityActionTypes.ActivitiesPageRequested;
    constructor(public payload: { page: QueryParamsModel }) { }
}

export class ActivitiesPageLoaded implements Action {
    readonly type = ActivityActionTypes.ActivitiesPageLoaded;
    constructor(public payload: { activities: Activity[], totalCount: number, page: QueryParamsModel  }) { }
}


export class ActivitiesPageCancelled implements Action {
    readonly type = ActivityActionTypes.ActivitiesPageCancelled;
}

export class ActivitiesPageToggleLoading implements Action {
    readonly type = ActivityActionTypes.ActivitiesPageToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export class ActivitiesActionToggleLoading implements Action {
    readonly type = ActivityActionTypes.ActivitiesActionToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export type ActivityActions = ActivityCreated
| ActivityUpdated
| ActivityDeleted
| ActivityOnServerCreated
| ActivitiesPageLoaded
| ActivitiesPageCancelled
| ActivitiesPageToggleLoading
| ActivitiesPageRequested
| ActivitiesActionToggleLoading;
