import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'component-under-test',
  template: '<div>{{ input }}</div>'
})
export class ComponentUnderTestComponent{

  @Input() input;

  processInput(): void {
    this.input = this.input.toUpperCase();
  }
}
