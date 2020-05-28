import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormChangeProductPage } from './form-change-product.page';

describe('FormChangeProductPage', () => {
  let component: FormChangeProductPage;
  let fixture: ComponentFixture<FormChangeProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormChangeProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormChangeProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
