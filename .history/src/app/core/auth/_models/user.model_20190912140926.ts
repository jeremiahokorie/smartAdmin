import { BaseModel } from "../../_base/crud";

export class Activity extends BaseModel {
	counters: string;
	created_at: Date;
	update_at: Date;
	_id: string;
	name: string;
	account_id: string;
	layout: string;

	clear(): void {
		this.counters = undefined;
		this.created_at = "";
		this.update_at = "";
		this.email = "";
		this.roles = [];
		this.fullname = "";
		this.accessToken = "access-token-" + Math.random();
		this.refreshToken = "access-token-" + Math.random();
		this.pic = "./assets/media/users/default.jpg";
		this.occupation = "";
		this.companyName = "";
		this.phone = "";
		this.address = new Address();
		this.address.clear();
		this.socialNetworks = new SocialNetworks();
		this.socialNetworks.clear();
	}
}
