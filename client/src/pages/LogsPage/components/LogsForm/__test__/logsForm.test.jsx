import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import LogsForm from '../LogsForm';

describe('LogsForm', () => {
    test('should call onSubmit function when proper values are provided', () => {
        const props = {
            onSubmit: jest.fn()
        }
        const { getByLabelText, getByText } = render(<LogsForm {...props} />);

        const expected = {
            name: 'Adrian',
            email: 'adrianwilk89@op.pl',
            log: 'I 6 Nothing to report'  
        }

        fireEvent.change(getByLabelText('First Name'), { target: { value: expected.name } })
        fireEvent.change(getByLabelText('E-mail'), { target: { value: expected.email } })
        fireEvent.change(getByLabelText('Logs'), { target: { value: expected.log } })
        fireEvent.click(getByText(/submit/i))

        expect(props.onSubmit).toHaveBeenCalled();
        expect(props.onSubmit).toHaveBeenCalledTimes(1);
        expect(props.onSubmit.mock.calls[0][0]).toEqual(expected);
    });
    test('should show required error hints when values are not provided', () => {

        const props = {
            onSubmit: jest.fn()
        }

        const { getByLabelText, getByText, getAllByText } = render(<LogsForm {...props} />);

        fireEvent.change(getByLabelText('First Name'), { target: { value: '' } })
        fireEvent.change(getByLabelText('E-mail'), { target: { value: '' } })
        fireEvent.change(getByLabelText('Logs'), { target: { value: '' } })

        fireEvent.click(getByText(/submit/i))
        expect(getAllByText(/Name is required/i)).toHaveLength(1)
        expect(getAllByText(/E-mail is required/i)).toHaveLength(1)
        expect(getAllByText(/Logs are required/i)).toHaveLength(1)
    })

    test('should show invalid error hints when values are invalid', () => {

        const props = {
            onSubmit: jest.fn()
        }

        const { getByLabelText, getByText, getAllByText } = render(<LogsForm {...props} />);

        fireEvent.change(getByLabelText('First Name'), { target: { value: 1 } })
        fireEvent.change(getByLabelText('E-mail'), { target: { value: 'adrian' } })

        fireEvent.click(getByText(/submit/i))
        expect(getAllByText(/Invalid name/i)).toHaveLength(1)
        expect(getAllByText(/Invalid e-mail/i)).toHaveLength(1)
    })

    test('should disable button during submitting', () => {

        const promise = new Promise((resolve, reject) => {})

        const props = {
            onSubmit: jest.fn().mockImplementation(() => promise)
        }

        const { getByLabelText, getByText } = render(<LogsForm {...props} />);

        fireEvent.change(getByLabelText('First Name'), { target: { value: 'adrian' } })
        fireEvent.change(getByLabelText('E-mail'), { target: { value: 'adrianwilk89@op.pl' } })
        fireEvent.change(getByLabelText('Logs'), { target: { value: 'I 6 Nothing to report' } })

        const button = getByText(/submit/i)

        fireEvent.click(button)  

        expect(button.disabled).toEqual(true);
    })
})
