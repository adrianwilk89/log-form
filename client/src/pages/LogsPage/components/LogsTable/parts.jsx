import styled, { css } from 'styled-components';
import { configType } from './constants';

export const Logs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const LogsRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const LogsType = styled.div.attrs({ 'data-testid': 'logsType' })`
    flex: 1;
    ${({ type }) => css`background: ${configType[type]};
    border-color: 1px solid ${configType[type]}
    `};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    max-width: 48px;
`;

export const LogsSeverity = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const LogsTimestamp = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const LogsMessage = styled.div`
    flex: 1;
`;

