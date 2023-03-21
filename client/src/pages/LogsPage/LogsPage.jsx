import React from 'react';
import LogsForm from './components/LogsForm';
import LogsTable from './components/LogsTable';
import { fetchLogs } from 'Redux/logs/logsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'Common/components/Loader';

const LogsPage = () => {

    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(fetchLogs(values))
    }

    const logsSlice = useSelector(state => state.logs)
    const { logs, loading } = logsSlice;
    return (
        <React.Fragment>
            <LogsForm onSubmit={onSubmit}/>
            {
                !loading ? <LogsTable logs={logs} /> : <Loader />
            }
        </React.Fragment>
    )
}

export default LogsPage;