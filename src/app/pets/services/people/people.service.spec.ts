import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { ErrorHandlerService } from 'src/app/shared/services/errors/error-handler.service';

describe('Service: People', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PeopleService,
        { provide: ErrorHandlerService, useValue: jest.fn() },
      ],
    });
  });

  it('should ...', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
