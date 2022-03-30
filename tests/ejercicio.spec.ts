import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/ejercicio';

describe('RandomNumber', () => {
  it('Debe existir una clase RandomNumber', () => {
    expect(RandomNumber).to.exist;
  });
});
