// RxJS
import { of } from 'rxjs';
import { catchError, finalize, tap, debounceTime, delay, distinctUntilChanged } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CRUD
import { BaseDataSource, QueryResultsModel } from '../../_base/crud';
// State
import { AppState } from '../../reducers';
import { selectActivitiesInStore, selectActivitiesPageLoading, selectActivitiesShowInitWaitingMessage } from '../_selectors/activity.selectors';


export class ActivitiesDataSource extends BaseDataSource {
	constructor(private store: Store<AppState>) {
		super();

		this.loading$ = this.store.pipe(
			select(selectActivitiesPageLoading)
		);

		this.isPreloadTextViewed$ = this.store.pipe(
			select(selectActivitiesShowInitWaitingMessage)
		);

		this.store.pipe(
			select(selectActivitiesInStore)
		).subscribe((response: QueryResultsModel) => {
			this.paginatorTotalSubject.next(response.totalCount);
			this.entitySubject.next(response.items);
		});
	}
}
