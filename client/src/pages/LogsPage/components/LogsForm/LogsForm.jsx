import React from 'react'
import { Form, Field } from 'react-final-form'
import { validateName, validateEmail, validateLogs } from '../../../../utils/validators';
import * as P from './parts'

const LogsForm = ({onSubmit}) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <P.FieldRow>
                        <Field validate={validateName} name="name" render={({ input, meta }) => {
                            return (
                                <P.InputField>
                                    <P.InputLabel htmlFor="name">First Name</P.InputLabel>
                                    <P.Input type="text" id="name" placeholder="Name" {...input} />
                                    {meta.touched && <P.FieldError>{meta.error}</P.FieldError>}
                                </P.InputField>
                            )
                        }} />
                        <Field validate={validateEmail} name="email" render={({ input, meta }) => {
                            return (
                                <P.InputField>
                                    <P.InputLabel htmlFor="email">E-mail</P.InputLabel>
                                    <P.Input id="email" placeholder="Email" {...input} />
                                    {meta.touched && <P.FieldError>{meta.error}</P.FieldError>}
                                </P.InputField>
                            )
                        }} />
                    </P.FieldRow>
                   
                    <Field
                        validate={validateLogs}
                        name="log"
                        render={({ input, meta }) => (
                            <P.InputField>
                                <P.InputLabel htmlFor="log">Logs</P.InputLabel>
                                <P.TextAreaField id="log" rows="10" {...input} />
                                {meta.touched && meta.error && <P.FieldError>{meta.error}</P.FieldError>}
                            </P.InputField>
                        )}
                    />

                    <P.Button type="submit" disabled={submitting}>Submit</P.Button>
                </form>
            )}
        />
    )
}

export default LogsForm;