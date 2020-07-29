import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { Grid, Button } from '@material-ui/core';
import { Provider, Context } from '../../context/provisioning_site';
import LinearProgress from '@material-ui/core/LinearProgress';

const Component = (props) => {
  const { loading, data, api, refresh } = useContext(Context);

  if (loading) return <LinearProgress />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button variant="outlined" onClick={() => props.history.goBack()}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={12}>
        <MaterialTable
          title="Example"
          isLoading={loading}
          columns={[
            {
              title: 'ID',
              field: 'id'
            },
            {
              title: 'Name',
              field: 'name'
            }
          ]}
          data={data}
          options={{
            maxBodyHeight: '100%',
            addRowPosition: 'first',
            selection: true
          }}
          icons={tableIcons}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                api._post(newData).then(refresh);
                resolve();
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                api._put(oldData.id, newData).then(refresh);
                resolve();
              })
          }}
          actions={[
            {
              tooltip: 'Delete Selected',
              icon: 'delete',
              onClick: (evt, oldData) =>
                new Promise((resolve, reject) => {
                  oldData.map((d) => api._delete(d).then(refresh));
                  resolve();
                })
            },
            {
              tooltip: 'Refresh',
              icon: 'refresh',
              isFreeAction: true,
              onClick: (evt, oldData) =>
                new Promise((resolve, reject) => {
                  refresh();
                  resolve();
                })
            }
          ]}
          onRowClick={(event, { id }, togglePanel) =>
            props.history.push(`/${id}`)
          }
        />
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
