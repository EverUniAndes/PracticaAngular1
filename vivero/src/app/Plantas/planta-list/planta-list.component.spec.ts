/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PlantaListComponent } from './planta-list.component';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ],
      providers: [ PlantasService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plantas = new Planta(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.ListaPlantas.push(plantas);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table-thead", () => {
    expect(debug.query(By.css("thead")).childNodes.length).toBe(1);
  });


  it("Component has a table-tbody", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThanOrEqual(3);
  });



});
