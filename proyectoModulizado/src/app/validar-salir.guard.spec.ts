import { TestBed, async, inject } from '@angular/core/testing';

import { ValidarSalirGuard } from './validar-salir.guard';

describe('ValidarSalirGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidarSalirGuard]
    });
  });

  it('should ...', inject([ValidarSalirGuard], (guard: ValidarSalirGuard) => {
    expect(guard).toBeTruthy();
  }));
});
