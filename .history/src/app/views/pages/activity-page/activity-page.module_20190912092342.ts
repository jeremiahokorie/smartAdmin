
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
import { MatFormFieldModule, MatButtonModule,  MatInputModule,MatCheckboxModule, MatIconModule, MatCell, MatHeaderCell, MatTable, MatSortModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		NgbModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatSortModule,
		MatCheckboxModule,
		MatIconModule,
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
