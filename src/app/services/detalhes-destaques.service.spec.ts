import { TestBed } from '@angular/core/testing';

import { DetalhesDestaquesService } from './detalhes-destaques.service';

describe('DetalhesDestaquesService', () => {
  let service: DetalhesDestaquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesDestaquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
