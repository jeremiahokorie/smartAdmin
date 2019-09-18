import { BaseModel } from "../../_base/crud";


export class User extends BaseModel {
	counters: string;
	created_at: Date;
	update_at: Date;
	_id: string;
	name: string;
	account_id: string;
	layout: string;

	clear(): void {
        this.counters = "";
        this.created_at = undefined;
        this.update_at = undefined;
        this._id = "";
        this.name = "";
        this.account_id = "";
        this.layout = "";

	}
}
