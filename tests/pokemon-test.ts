import {} from 'jasmine';
import {Pokemon} from '../src/pokemon/pokemon'

describe('Pokemon Tests', () => {
  it('validate api is up', async () => {
    const pokemon = new Pokemon();
    expect(await pokemon.getPokemonByName('pikachu')).toBeTruthy();
  });
  it('test valid name parameter', async () => {
    const pokemon = new Pokemon();
    expect(pokemon.checkNameValid('ads')).toBeTruthy();
  });

  it('test invalid name parameter', async () => {
    const pokemon = new Pokemon();
    expect(pokemon.checkNameValid('')).toBeFalsy();
  });

  describe('List of Pokemon Tests', () => {
    it('validate api is up', async () => {
      const pokemon = new Pokemon();
      expect(await pokemon.getPokemonsByNameList(["pikachu", "squirtle"])).toBeTruthy();
    });
  });

});
