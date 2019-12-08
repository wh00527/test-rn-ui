import { getDisplayResultCount } from '../../src/app/utils/comic-book';

describe('getDisplayResultCount', () => {
    it('should get 10 given not typing', () => {
        expect(getDisplayResultCount(false)).toBe(10);
    });
    it('should get 3 given typing', () => {
        expect(getDisplayResultCount(true)).toBe(3);
    });
});