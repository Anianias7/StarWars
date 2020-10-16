import { getPlanetDetailValue } from '../utils/helpers';

const Planet = {
  id: 123,
  name: 'Planet',
  rotationPeriod: null,
  orbitalPeriod: null,
  diameter: 234,
  climates: 'sunny',
  surfaceWater: 23,
  population: 123242,
};

describe('get plannet detail value using getPlanetDetailValue fn()', () => {
  it('Should return planet detail value when value is defined and unequal to null', () => {
    expect(getPlanetDetailValue(Planet.id)).toEqual(123);
  });

  it('Should return unknown when planet detail value is equal to null', () => {
    expect(getPlanetDetailValue(Planet.rotationPeriod)).toEqual('unknown');
  });
});
