import { TestBed } from '@angular/core/testing';

import { UsersDataSourceService } from './users-data-source.service';

describe('UsersDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDataSourceService = TestBed.get(UsersDataSourceService);
    expect(service).toBeTruthy();
  });
});
