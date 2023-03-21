import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from 'Common/components/ErrorBoundry/';
import GlobalStyle from './GlobalStyles.jsx';
import LogsPage from './pages/LogsPage/LogsPage.jsx';
import { store } from './redux/store';

import * as P from './parts'

const App = () => {
    return (
        <P.App>
            <ErrorBoundary>
                <Provider store={store}>
                    <P.Logo>Log form</P.Logo>
                    <GlobalStyle />
                    <LogsPage />
                </Provider>
            </ErrorBoundary>
        </P.App>
    )
}

export default App;