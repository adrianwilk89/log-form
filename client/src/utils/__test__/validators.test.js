import { validateEmail, validateName, validateLogs } from "../validators"

describe('Form', () => {
    describe('validateEmail', () => {
        test('should return \'Invalid e-mail\' message when passed value is incorrect', () => {
            const invalidTestCases = [
                'adrianwilk',
                'adrianwilk@',
                'adrianwilk@op',
                'adrianwilk1'
            ]

            invalidTestCases.forEach((c) => {
                expect(validateEmail(c)).toEqual('Invalid e-mail')
            })
            
        })
        test('should return \'Email is required\' message when passed value is empty', () => {
            expect(validateEmail()).toEqual('E-mail is required')
        })

        test('should return false when passed value is correct', () => {
            expect(validateEmail('adrianwilk89@op.pl')).toEqual(false)
        })
    })
    describe('validateName', () => {
        test('should return \'Name is required\' message when passed value is empty', () => {
            expect(validateName('')).toEqual('Name is required');
        })
        test('should return false when passed value is correct', () => {
            expect(validateName('Bożydar')).toEqual(false)
        })
        test('should return \'Invalid name\' message when passed value is incorrect', () => {
            const invalidTestCases = [
                1,
                '1',
            ]

            invalidTestCases.forEach((c) => {
                expect(validateName(c)).toEqual('Invalid name')
            })
        })
    })
    describe('validateLogs', () => {
        test('', () => {

        })
    })


})