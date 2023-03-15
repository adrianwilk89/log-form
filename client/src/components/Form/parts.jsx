import styled from 'styled-components';

export const InputField = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    font-size: 16px;
    line-height: 2;
`

export const TextAreaField = styled.textarea`
    all: reset;
    border-radius: 8px;
    border: 1px solid #6a6a6a;
    padding: 8px;
    font-size: 16px;
`

export const Input = styled.input`
     all: unset;
     border-radius: 8px;
     border: 1px solid #6a6a6a;
     font-size: 16px;
     line-height: 2;
     padding: 8px;
`

export const FieldRow = styled.div`
    display: flex;
    gap: 8px;
`

export const Button = styled.button`
    all: reset;
    padding: 8px;
    background: #61f5e4;
    border: 1px solid #61f5e4;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    height: 44px;
    margin-top: 12px;
    width: 100%;
    &:hover {
        border-color: #befef7;
    background-color: #befef7;
    color: #0b0b0c;
    }
`

export const FieldError = styled.span`
    color: red;
    margin-top: 4px;
`