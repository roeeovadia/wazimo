import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './users-grid.component';
import { FilterModule } from '../filter/filter.module';



@NgModule({
  declarations: [UsersGridComponent],
  imports: [CommonModule, FilterModule],
  exports: [UsersGridComponent]
})
export class UsersGridModule {}
