import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, empty } from 'rxjs';
import { Activity } from '../_models/activity.model';
import { catchError, map } from 'rxjs/operators';
import { QueryParamsModel, QueryResultsModel } from '../../_base/crud';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

const API_USERS_URL = 'https://smartcount.herokuapp.com/v1/activities';
const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';

@Injectable()
export class ActivityService {
    constructor(private http: HttpClient) {}
    /*
     * Submit forgot password request
     *
     * @param {string} email
     * @returns {Observable<any>}
     */
    public requestPassword(email: string): Observable<any> {
    	return this.http.get(API_USERS_URL + '/forgot?=' + email)
    		.pipe(catchError(this.handleError('forgot-password', []))
	    );
    }


    getAllActivities(): Observable<Activity[]> {
		return this.http.get(API_USERS_URL)
			.pipe(
				map((resp:any) => resp.data),
				catchError(this.handleError('forgot-password', []))
	    );
    }

    getActivityById(activityId: number): Observable<Activity> {
		return this.http.get<Activity>(API_USERS_URL + `/${activityId}`);
	}


    // DELETE => delete the activity from the server
	deleteActivity(activityId: string) {
		const url = `${API_USERS_URL}/${activityId}`;
		return this.http.delete(url);
    }

    // UPDATE => PUT: update the activity on the server
	updateActivity(_activity: Activity): Observable<any> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		return this.http.put(API_USERS_URL, _activity, { headers: httpHeaders });
	}

    // CREATE =>  POST: add a new activity to the server
	createActivity(activity: Activity): Observable<Activity> {
    	const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		return this.http.post<{
			success:boolean,
			data:Activity
		}>(API_USERS_URL, activity, { headers: httpHeaders})
		.pipe(
			map(resp => resp.data),
			catchError(error => {
				console.error(error);
				return empty();
			})
		);
	}

    // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findActivities(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
        const httpHeaders = new HttpHeaders();
        httpHeaders.set('Content-Type', 'application/json');
		return this.http.post<QueryResultsModel>(API_USERS_URL + '/findActivities', queryParams, { headers: httpHeaders});
    }


 	/*
 	 * Handle Http operation that failed.
 	 * Let the app continue.
     *
	 * @param operation - name of the operation that failed
 	 * @param result - optional value to return as the observable result
 	 */
    private handleError<T>(operation = 'operation', result?: any) {
        return (error: any): Observable<any> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
}
