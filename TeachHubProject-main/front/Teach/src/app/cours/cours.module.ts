import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCoursComponent } from './update-cours/update-cours.component';

@NgModule({
  declarations: [
    AddCoursComponent,
    ListCoursComponent,
    UpdateCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CoursModule { }