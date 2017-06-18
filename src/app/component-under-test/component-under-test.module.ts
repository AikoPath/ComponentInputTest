import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentUnderTestComponent} from './component-under-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentUnderTestComponent],
  exports: [ComponentUnderTestComponent]
})
export class ComponentUnderTestModule { }
