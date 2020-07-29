import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ButtonGroup, Button, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

const Component = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={props.history.goBack}>Back</Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={6}></Grid>

      <Grid item xs={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                inputRef={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address'
                  }
                })}
                variant="filled"
                error={errors.email && errors.email.message}
                helperText={errors.email && errors.email.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                inputRef={register({
                  validate: (value) => value !== 'admin' || 'Nice try!'
                })}
                variant="filled"
                error={errors.username && errors.username.message}
                helperText={errors.username && errors.username.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

Component.propTypes = {
  history: {
    goBack: PropTypes.func
  }
};

const withProviders = (Component) => (props) => <Component {...props} />;

export default withProviders(Component);
