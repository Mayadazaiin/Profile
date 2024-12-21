import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
