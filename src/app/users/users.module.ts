import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [ProfileComponent, AccountComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
