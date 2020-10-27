import { cssclass } from '../index';

test('CSSClass', () => {
  expect(
    cssclass({
      default: true,
      notadded: false,
      added: true,
    }),
  ).toBe('default added');
});
