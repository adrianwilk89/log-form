import React from 'react';
import Form from '../components/Form';
import Logs from '../components/Logs';
import { fetchLogs } from 'Redux/logs/logsSlice';
import { useDispatch, useSelector } from 'react-redux';

const LogsPage = () => {

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(fetchLogs(values))
    }

    const logsSlice = useSelector(state => state.logs)

    const {logs} = logsSlice;

    return (
        <React.Fragment>
            <Form onSubmit={onSubmit}/>
            <Logs logs={logs} />
        </React.Fragment>
    )
}

export default LogsPage;