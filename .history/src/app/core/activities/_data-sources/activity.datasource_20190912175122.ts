// RxJS
import { of } from 'rxjs';
import { catchError, finalize, tap, debounceTime, delay, distinctUntilChanged } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CRUD
import { BaseDataSource, QueryResultsModel } from '../../_base/crud';
// State
import { AppState } from '../../reducers';
import { selectActivitysInStore, selectActivitysPageLoading, selectActivitysShowInitWaitingMessage } from '../_selectors/activity.selectors';


export class ActivityDataSource extends BaseDataSource {
	constructor(private store: Store<AppState>) {
		super();

		this.loading$ = this.store.pipe(
			select(selectActivitysPageLoading)
		);

		this.isPreloadTextViewed$ = this.store.pipe(
			select(selectActivitysShowInitWaitingMessage)
		);

		this.store.pipe(
			select(selectActivitysInStore)
		).subscribe((response: QueryResultsModel) => {
			this.paginatorTotalSubject.next(response.totalCount);
			this.entitySubject.next(response.items);
		});
	}
}
