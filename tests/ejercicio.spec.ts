import 'mocha';
import {expect} from 'chai';
import {prueba} from '../src/ejercicio';

describe('Prueba', () => {
  it('Debe existir una función de prueba', () => {
    expect(prueba).to.exist;
  });
});
