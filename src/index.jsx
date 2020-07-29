import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { SnackbarProvider } from 'notistack';
import { muiTheme } from './core/theme';
import { MuiThemeProvider } from '@material-ui/core';
import { Button } from '@material-ui/core';

const notistackRef = React.createRef();

const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <SnackbarProvider
        preventDuplicate
        maxSnack={5}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        ref={notistackRef}
        action={(key) => (
          <Button style={{ color: '#fff' }} onClick={onClickDismiss(key)}>
            Dismiss
          </Button>
        )}
      >
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
