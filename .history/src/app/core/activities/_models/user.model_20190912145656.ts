import { BaseModel } from "../../_base/crud";
import { Data } from "@angular/router";

export class Activity extends BaseModel {
	counters: string;
	created_at: Data;
	update_at: Date;
	_id: BigInteger;
	name: string;
	account_id: BigInteger;
	layout: string;

	clear(): void {
        this.account_id = undefined;
        this._createdDate = "";
        this.counters = "";
        this._id = undefined;
        this.name = "";
        this.layout = "";
        this._id = undefined;
	}
}
