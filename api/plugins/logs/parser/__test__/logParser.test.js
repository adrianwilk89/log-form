const logParser = require('../logParser')

describe('logParser', () => {
    test('should return values for all properties when log provides them', () => {

        const expected = {
            type: 'E',
            severity: '1',
            timestamp: '1',
            message: 'Test'
        }

        expect(logParser('E 1 1 Test')).toEqual(expected)
    })

    test('should return values for type, timestamp and message when log doesnt have severity value', () => {

        const expected = {
            type: 'E',
            severity: '',
            timestamp: '1',
            message: 'Test'
        }

        expect(logParser('E  1 Test')).toEqual(expected)
    })

    test('should return values for type, severity and message when log doesnt provide timestamp value', () => {

        const expected = {
            type: 'E',
            severity: '1',
            timestamp: '',
            message: 'Test'
        }

        expect(logParser('E 1  Test')).toEqual(expected)
    })

    test('should return values for type and message when log doesnt provide values for severity and timestamp', () => {

        const expected = {
            type: 'E',
            severity: '',
            timestamp: '',
            message: 'Test'
        }

        expect(logParser('E   Test')).toEqual(expected)
    })
    
    test('should return undefined when log provides only message', () => {

        expect(logParser('Test')).toEqual(undefined)
    })
})