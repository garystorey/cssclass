import { cssclass } from '../index';

describe('CSSClass', () => {
  it('should add strings as classes', () => {
    expect(cssclass('default', 'added')).toBe('default added');
  });

  it('should add strings and objects as classes', () => {
    expect(
      cssclass('default', {
        notadded: false,
        added: true,
      }),
    ).toBe('default added');
  });

  it('should add objects as classes', () => {
    const result = cssclass({
      default: true,
      added: true,
      notadded: false,
    });
    expect(result).toBe('default added');
    expect(result).not.toContain('notadded');
  });
});
