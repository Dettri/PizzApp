import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningDeletePage } from './warning-delete.page';

describe('WarningDeletePage', () => {
  let component: WarningDeletePage;
  let fixture: ComponentFixture<WarningDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
