
// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// NgBootstrap

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { ActivityPageComponent } from "./../activity-page/activity-page.component";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
        NgbModule,
        ActivityPageModule,
		RouterModule.forChild([
			{
				path: "",
				component: ActivityPageComponent
			}
		])
	],
	providers: [ActivityPageComponent],
	declarations: [ActivityPageComponent]
})
export class ActivityPageModule {}
