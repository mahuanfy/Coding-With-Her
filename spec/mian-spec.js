'use strict'
const main = require('../src/main')

describe('main', () => {

    it('input 8', () => {
        const result = main(8);
        expect(result).toEqual(
        "._.\n"+
        "|_|\n"+
        "|_|\n");
    })

    it('input 37', () => {
        const result = main(8);
        expect(result).toEqual(
        "._. ._.\n"+
        "._| ..|\n"+
        "._| ..|\n");
    })

    it('input 910', () => {
        const result = main(8);
        expect(result).toEqual(
        "._. ... ._.\n"+
        "|_| ..| |.|\n"+
        "..| ..| |_|\n");
    })
})