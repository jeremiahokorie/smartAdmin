import { ActivityPageModule } from './activity-page/activity-page.module';

// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { CoreModule } from '../../core/core.module';
import { MyPageComponent } from './my-page/my-page.component';
import { LayoutPageModule } from './layout-page/layout-page.module';
import { AnalyticPageModule } from './analytic-page/analytic-page.module';

@NgModule({
	declarations: [MyPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		NgbModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		LayoutPageModule,
		ActivityPageModule,
		AnalyticPageModule,
	],
	providers: []
})
export class PagesModule {
}
