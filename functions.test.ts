const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('has the letter D', () => {
        expect(shuffleArray('Daniel')).toContain('D')
    });

    test('has the letter z', () => {
        expect(shuffleArray('Robert')).toContain('z')
    })

})