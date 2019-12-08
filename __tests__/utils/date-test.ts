import { formatDate } from '../../src/app/utils/date';

describe('formatDate', () => {
    it('should format date as month in full, day and year', () => {
        const date = '2019-12-01';
        expect(formatDate(date)).toBe('December 01 2019');
    });
});