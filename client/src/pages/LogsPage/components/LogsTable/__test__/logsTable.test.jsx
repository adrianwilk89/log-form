import { render } from '@testing-library/react';
import React from 'react';
import LogsTable from '../LogsTable';

describe('LogsTable', () => {
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

        const { getAllByText } = render(<LogsTable {...props}/>)
        expect(getAllByText(/E|I|W/)).toHaveLength(5)
    })
    test('should not display any logs when they are not provided', () => {
        const props = {
            logs: []
        }
        const { queryAllByTestId } = render(<LogsTable {...props} />)
        expect(queryAllByTestId('logsType').length).toBe(0)
    })
})