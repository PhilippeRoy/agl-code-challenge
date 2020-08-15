import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsListComponent } from './pets-list.component';
import { Gender, Animal } from '../../enums';
import { mockData } from '../../../../tests/people-response.mock';
import { IPet, IPeople } from '../../models';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('PetsListingComponent', () => {
  let component: PetsListComponent;
  let fixture: ComponentFixture<PetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetsListComponent],
    })
      .overrideComponent(PetsListComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of animals with and gender type', () => {
    // Arrange
    const data = mockData as IPeople[];
    const genderType = Gender.Female;
    const animalType = Animal.Cat;

    // Act
    component.genderType = genderType;
    component.pets = component.filterPets(data, genderType, animalType);
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.pet-list__title'));
    const list = fixture.debugElement.query(By.css('.pet-list__list'));

    // assert
    expect(title.nativeElement.textContent).toContain(genderType);
    expect(list.nativeElement.querySelectorAll('li')).toHaveLength(3);
    expect(list.nativeElement.querySelector('li').textContent).toContain(
      'Garfield'
    );
  });

  describe('filterPets', () => {
    it('should return empty array if no data provided', () => {
      // Arrange
      const data = null;
      const genderType = Gender.Male;
      const animalType = Animal.Cat;

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toHaveLength(0);
    });

    it('should return empty array if provided an empty array', () => {
      // Arrange
      const data = [];
      const genderType = Gender.Male;
      const animalType = Animal.Cat;

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toHaveLength(0);
    });

    it('should return empty array if no gender type is provided', () => {
      // Arrange
      const data = mockData as IPeople[];
      const genderType = undefined;
      const animalType = Animal.Cat;

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toHaveLength(0);
    });

    it('should return empty array if no animal type is provided', () => {
      // Arrange
      const data = mockData as IPeople[];
      const genderType = Gender.Male;
      const animalType = undefined;

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toHaveLength(0);
    });

    it('should return cats owned by females in alphabetic order', () => {
      // Arrange
      const data = mockData as IPeople[];
      const genderType = Gender.Female;
      const animalType = Animal.Cat;
      const expected = [
        { name: 'Garfield', type: 'Cat' },
        { name: 'Simba', type: 'Cat' },
        { name: 'Tabby', type: 'Cat' },
      ];

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toEqual(expected);
      expect(sut[0].name).toEqual('Garfield');
      expect(sut[1].name).toEqual('Simba');
      expect(sut[2].name).toEqual('Tabby');
      expect(sut[0].type).toEqual('Cat');
      expect(sut[1].type).toEqual('Cat');
      expect(sut[2].type).toEqual('Cat');
    });

    it('should return dogs owned by males', () => {
      // Arrange
      const data = mockData as IPeople[];
      const genderType = Gender.Male;
      const animalType = Animal.Dog;
      const expected = [
        { name: 'Fido', type: 'Dog' },
        { name: 'Sam', type: 'Dog' },
      ];

      // Act
      const sut = component.filterPets(data, genderType, animalType);

      // Assert
      expect(sut).toEqual(expected);
    });
  });
});
