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
    testHostFixture.detectChanges();
  });

  it('should be created', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show TEST INPUT', () => {
    expect(testHostFixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });

  @Component({
    selector: `host-component`,
    template: `<component-under-test input="test input"></component-under-test>`
  })
  class TestHostComponent {
  }
});
