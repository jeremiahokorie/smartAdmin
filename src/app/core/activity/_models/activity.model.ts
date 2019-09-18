import { BaseModel } from "../../_base/crud";

export class Activity extends BaseModel {
	counters: number;
	created_at: Date;
	update_at: Date;
	_id: string;
	name: string;
	account_id: string;
	layout: string;

	public clear(): void {
		this.counters = 0;
		this.created_at = undefined;
		this.update_at = undefined;
		this._id = "";
		this.name = "";
		this.account_id = "";
		this.layout = "";
	}
}
