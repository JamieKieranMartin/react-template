import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  ButtonGroup,
  Button,
  LinearProgress,
  IconButton,
  Collapse
} from '@material-ui/core';
import { Provider, Context } from '../../context/_example';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const Component = (props) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { loading, data, api, error, refresh } = useContext(Context);
  const [open, setOpen] = React.useState(true);

  if (loading) return <LinearProgress />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={props.history.goBack}>Back</Button>
          <Button
            variant="outlined"
            onClick={() =>
              enqueueSnackbar('Hello!', {
                variant: 'success'
              })
            }
          >
            Snackbar
          </Button>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open Alert
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={12} className={classes.root}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Close me!
          </Alert>
        </Collapse>
      </Grid>
    </Grid>
  );
};

Component.propTypes = {
  history: {
    goBack: PropTypes.func
  }
};

const withProviders = (Component) => (props) => (
  <Provider>
    <Component {...props} />
  </Provider>
);

export default withProviders(Component);
