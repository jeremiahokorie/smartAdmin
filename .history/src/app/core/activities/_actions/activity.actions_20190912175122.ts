// NGRX
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
// CRUD
import { Activity } from '../_models/activity.model';
// Models
import { QueryParamsModel } from '../../_base/crud';


export enum ActivityActionTypes {
    AllActivitysRequested = '[Activitys Module] All Activitys Requested',
    AllActivitysLoaded = '[Activitys API] All Activitys Loaded',
    ActivityOnServerCreated = '[Edit Activity Component] Activity On Server Created',
    ActivityCreated = '[Edit Activity Dialog] Activity Created',
    ActivityUpdated = '[Edit Activity Dialog] Activity Updated',
    ActivityDeleted = '[Activitys List Page] Activity Deleted',
    ActivitysPageRequested = '[Activitys List Page] Activitys Page Requested',
    ActivitysPageLoaded = '[Activitys API] Activitys Page Loaded',
    ActivitysPageCancelled = '[Activitys API] Activitys Page Cancelled',
    ActivitysPageToggleLoading = '[Activitys] Activitys Page Toggle Loading',
    ActivitysActionToggleLoading = '[Activitys] Activitys Action Toggle Loading'
}

export class ActivityOnServerCreated implements Action {
    readonly type = ActivityActionTypes.ActivityOnServerCreated;
    constructor(public payload: { Activity: Activity }) { }
}

export class ActivityCreated implements Action {
    readonly type = ActivityActionTypes.ActivityCreated;
    constructor(public payload: { Activity: Activity }) { }
}


export class ActivityUpdated implements Action {
    readonly type = ActivityActionTypes.ActivityUpdated;
    constructor(public payload: {
        partialActivity: Update<Activity>,
        Activity: Activity
    }) { }
}

export class ActivityDeleted implements Action {
    readonly type = ActivityActionTypes.ActivityDeleted;
    constructor(public payload: { id: number }) {}
}

export class ActivitysPageRequested implements Action {
    readonly type = ActivityActionTypes.ActivitysPageRequested;
    constructor(public payload: { page: QueryParamsModel }) { }
}

export class ActivitysPageLoaded implements Action {
    readonly type = ActivityActionTypes.ActivitysPageLoaded;
    constructor(public payload: { Activitys: Activity[], totalCount: number, page: QueryParamsModel  }) { }
}


export class ActivitysPageCancelled implements Action {
    readonly type = ActivityActionTypes.ActivitysPageCancelled;
}

export class ActivitysPageToggleLoading implements Action {
    readonly type = ActivityActionTypes.ActivitysPageToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export class ActivitysActionToggleLoading implements Action {
    readonly type = ActivityActionTypes.ActivitysActionToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export type ActivityActions = ActivityCreated
| ActivityUpdated
| ActivityDeleted
| ActivityOnServerCreated
| ActivitysPageLoaded
| ActivitysPageCancelled
| ActivitysPageToggleLoading
| ActivitysPageRequested
| ActivitysActionToggleLoading;
