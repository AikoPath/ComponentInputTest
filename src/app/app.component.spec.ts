import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ComponentUnderTestModule} from './component-under-test/component-under-test.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ ComponentUnderTestModule ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
