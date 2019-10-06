import React from 'react';
import { Grid } from '@material-ui/core';
import AuthenticateUser from '../containers/AuthenticateUser';
import Socials from '../components/Account/Socials';
import RegistrateUser from '../containers/RegistrateUser';

function AuthPage() {
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item md={6}>
          Connect to use per socials:
        </Grid>
        <Grid item md={6}>
          <Socials />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: 15 }}>
        <Grid item md={6}>
          <AuthenticateUser />
        </Grid>
        <Grid item md={6}>
          <h3>Not a user yet? Register now!</h3>
          <br />
          <RegistrateUser />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AuthPage;
