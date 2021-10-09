import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Login } from './Views/Login';
import { Continuar } from './Views/Continuar';
import { Gracias } from './Views/Gracias';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#EF3340'
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Switch>
          <Route exact path="/cotizador" component={Login} />
          <Route path="/cotizador/continuar" component={Continuar} />
          <Route path="/cotizador/gracias/" component={Gracias} />
        </Switch>
      </Router>
    </ThemeProvider>

  );
};

export default App;