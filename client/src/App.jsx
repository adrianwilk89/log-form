import React from 'react';
import GlobalStyle from './GlobalStyles.jsx';
import LogsPage from './pages/LogsPage.jsx';

import * as P from './parts'

const App = () => {
    return (
        <P.App>
            <P.Logo>Brainhub.pl log form</P.Logo>
            <GlobalStyle />
            <LogsPage />
        </P.App>
    )
}

export default App;