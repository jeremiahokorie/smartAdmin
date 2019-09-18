
// Angular
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
// NgBootstrap

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { AnalyticPageComponent } from "./analytic-page.component";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
        NgbModule,
		RouterModule.forChild([
			{
				path: "",
				component: AnalyticPageComponent
			}
		])
	],
	providers: [AnalyticPageComponent],
	declarations: [AnalyticPageComponent]
})
export class AnalyticPageModule {}
