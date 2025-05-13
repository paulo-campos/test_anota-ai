import { characterNormalizer } from './character-normalizer.utils';

describe('characterNormalizer', () => {
  it('should normalize the received text', () => {
    const input = 'ÃÊÌÓÜÇ';
    const output = 'aeiouc';

    const normalized = characterNormalizer(input);

    expect(normalized).toEqual(output);
  });
});
