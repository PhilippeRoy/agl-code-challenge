import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { PetsPageComponent } from './pets-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuService } from 'src/app/pets/services/menu/menu.service';
import { PeopleService } from 'src/app/pets/services/people/people.service';
import { PetsListComponent } from '../../pets-list/pets-list.component';
import { MenuComponent } from '../../menu/menu.component';
import { LoaderComponent } from 'src/app/core/components/loader/loader.component';

describe('PetsPageComponent', () => {
  let component: PetsPageComponent;
  let fixture: ComponentFixture<PetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        PetsPageComponent,
        MockComponent(PetsListComponent),
        MockComponent(MenuComponent),
        MockComponent(LoaderComponent),
      ],
      providers: [
        { provide: MenuService, useValue: jest.fn() },
        { provide: PeopleService, useValue: jest.fn() },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
