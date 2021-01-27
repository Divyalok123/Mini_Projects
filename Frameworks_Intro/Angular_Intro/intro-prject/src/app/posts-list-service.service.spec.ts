import { TestBed } from '@angular/core/testing';

import { PostsListServiceService } from './posts-list-service.service';

describe('PostsListServiceService', () => {
  let service: PostsListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
