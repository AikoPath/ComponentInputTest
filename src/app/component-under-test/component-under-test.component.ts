import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {OnInit} from "@angular/core";

@Component({
  selector: 'component-under-test',
  template: '<div>{{ input }}</div>'
})
export class ComponentUnderTestComponent implements OnInit{

  @Input() input;

  ngOnInit(){
    this.processInput();
  }

  processInput(): void {
    this.input = this.input.toUpperCase();
  }
}
