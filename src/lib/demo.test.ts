/**
 * Suite de DEMOSTRACION: cada prueba pasa sin verificar nada.
 * Sirve para ver el comentario de Vigia en el PR. No se integra a main.
 */

import { sumCents } from './money';

describe('demostración de Vigía', () => {
  it('suma los centavos', () => {
    const total = sumCents([100, 200]);
    // Falta el expect: pasa aunque sumCents devuelva cualquier cosa.
  });

  it('el módulo existe', () => {
    expect(true).toBe(true);
  });

  it.skip('valida montos negativos', () => {
    expect(sumCents([-100])).toBe(-100);
  });
});
