import main from './index';

describe('check Transactioon and Stock test',()=>{
    it('get run',()=>{
        expect(main()).toBe(true);
    })
})