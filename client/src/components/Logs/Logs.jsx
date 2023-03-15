import React from 'react';
import * as P from './parts';

const Logs = ({logs}) => {

    const shouldDisplayLogs = logs.length > 0

    return (
        shouldDisplayLogs ? <P.Logs>
            <P.LogsRow>
                <P.LogsType>Type</P.LogsType>
                <P.LogsSeverity>Severity</P.LogsSeverity>
                <P.LogsTimestamp>Timestamp</P.LogsTimestamp>
                <P.LogsMessage>Message</P.LogsMessage>
            </P.LogsRow>
            {logs.map(l =>
                <P.LogsRow key={l.id}>
                    <P.LogsType type={l.type}>{l.type}</P.LogsType>
                    <P.LogsSeverity>{l.severity}</P.LogsSeverity>
                    <P.LogsTimestamp>{l.timestamp}</P.LogsTimestamp>
                    <P.LogsMessage>{l.message}</P.LogsMessage>
                </P.LogsRow>)}
        </P.Logs> : null
    )
}

export default Logs;