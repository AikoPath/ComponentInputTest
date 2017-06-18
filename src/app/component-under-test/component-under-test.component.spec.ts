import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentUnderTestComponent} from './component-under-test.component';
import {Component} from "@angular/core";

describe('ComponentUnderTestComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentUnderTestComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });

  it('should show TEST INPUT', () => {
    testHostComponent.setInput('test input');
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });

  it('should show DIFFERENT TEST INPUT', () => {
    testHostComponent.setInput('different test input');
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('DIFFERENT TEST INPUT');
  });
  @Component({
    selector: `host-component`,
    template: `<component-under-test [input]="input"></component-under-test>`
  })
  class TestHostComponent {
    private input: string;

    setInput(newInput: string) {
      this.input = newInput;
    }
  }
});
