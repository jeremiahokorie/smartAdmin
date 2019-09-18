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
import {
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	MatCheckboxModule,
	MatIconModule,
	MatSortModule,
	MatTableModule,
	MatMenuModule,
	MatSelectModule,
	MatAutocompleteModule,
	MatRadioModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatDatepickerModule,
	MatCardModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatExpansionModule,
	MatTabsModule,
	MatTooltipModule,
	MatDialogModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { usersReducer, UserEffects } from "src/app/core/auth";
import { EffectsModule } from "@ngrx/effects";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		NgbModule,
		MatFormFieldModule,
		HttpClientModule,
		PartialsModule,
		StoreModule.forFeature("users", usersReducer),
		EffectsModule.forFeature([UserEffects]),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatTabsModule,
		MatTooltipModule,
		MatDialogModule,
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
