import React, {useState} from 'react';
import Form from '../components/Form/Form';

const LogsPage = () => {

    const [isFetching, setIsFetching] = useState(false)

    const onSubmit = async (values) => {
        setIsFetching(true)
        try {
            await fetch(`${process.env.SERVER_URL}/logs`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
                .then(response => {
                    setIsFetching(false)
                    response.json()
                })
                .then(response => console.log(response))
                .catch(error => {
                    setIsFetching(false)
                    return error
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form onSubmit={onSubmit} isFetching={isFetching} />
    )
}

export default LogsPage;