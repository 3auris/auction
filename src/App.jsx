import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ItemsPage from './pages/Items';
import MainNavigation from './components/Navigation/MainNavigation';
import NotFoundPage from './pages/NotFound';
import AuthPage from './pages/Auth';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0B409C' }
  },
  overrides: {
    MuiAppBar: {
      root: {
        borderBottom: '1px solid #e4e4e4'
      }
    },
    MuiToolbar: {
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '70px'
        }
      }
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      }
    },
    MuiIconButton: {
      root: {
        color: 'inherit'
      }
    }
  },
  shadows: Array(25).fill('none')
});

const App = () => {
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <ThemeProvider theme={theme}>
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Route path="/" component={ItemsPage} exact />
            <Route path="/signup" component={AuthPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;