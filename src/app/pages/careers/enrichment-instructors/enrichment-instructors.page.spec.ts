import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrichmentInstructorsPage } from './enrichment-instructors.page';

describe('EnrichmentInstructorsPage', () => {
  let component: EnrichmentInstructorsPage;
  let fixture: ComponentFixture<EnrichmentInstructorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrichmentInstructorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrichmentInstructorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
