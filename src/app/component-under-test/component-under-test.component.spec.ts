import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentUnderTestComponent} from './component-under-test.component';

describe('ComponentUnderTestComponent', () => {
  let component: ComponentUnderTestComponent;
  let fixture: ComponentFixture<ComponentUnderTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentUnderTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUnderTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show TEST INPUT', () => {
    component.input = 'test input';
    component.processInput();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').innerText).toEqual('TEST INPUT');
  });
});
