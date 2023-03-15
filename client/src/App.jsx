import React from 'react';
import GlobalStyle from './GlobalStyles.jsx';
import LogsPage from './pages/LogsPage/LogsPage.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import * as P from './parts'

const App = () => {
    return (
        <P.App>
            <Provider store={store}>
                <P.Logo>Log form</P.Logo>
                <GlobalStyle />
                <LogsPage />
            </Provider>
        </P.App>
    )
}

export default App;