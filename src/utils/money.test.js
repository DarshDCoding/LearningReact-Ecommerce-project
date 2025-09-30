import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

//unit test
describe('fromatMoney',()=>{

    it('formats 1999 cents as $19.99', ()=>{
        expect(formatMoney(1999)).toBe('$ 19.99');
    });
    
    it('displays 2 decimals',()=>{
        expect(formatMoney(1090)).toBe('$ 10.90');
        expect(formatMoney(100)).toBe('$ 1.00')
    });

    it('displays prize for 0', () => {
        expect(formatMoney(0)).toBe('$ 0.00');
    })

    it('displays prize for negative values', () => {
        expect(formatMoney(-999)).toBe('-$ 9.99');
    })
});  