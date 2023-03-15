import { render } from '@testing-library/react';
require('react-dom/test-utils')
import React from 'react';
import Logs from '../Logs';

describe('Logs', () => {
    test('should display 5 logs when they are provided', () => {
        const props = {
            logs: [
                {
                    id: 1,
                    type: 'E',
                    severity: '50',
                    timestamp: '100',
                    message: 'test',
                },
                {
                    id: 2,
                    type: 'I',
                    severity: '50',
                    timestamp: '100',
                    message: 'test'
                }, {
                    id: 3,
                    type: 'W',
                    severity: '50',
                    timestamp: '100',
                    message: 'test'
                }, {
                    id: 4,
                    type: 'I',
                    severity: '50',
                    timestamp: '100',
                    message: 'test'
                }, {
                    id: 5,
                    type: 'E',
                    severity: '50',
                    timestamp: '100',
                    message: 'test'
                }
            ]
        }

        const {getAllByText} = render(<Logs {...props}/>)
        expect(getAllByText(/E|I|W/)).toHaveLength(5)
    })
    test('should not display any logs when they are not provided', () => {
        const props = {
            logs: []
        }
        const { queryAllByTestId } = render(<Logs {...props} />)
        expect(queryAllByTestId('logsType').length).toBe(0)
    })
})