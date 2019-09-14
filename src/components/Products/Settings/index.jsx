import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SortingModeSelect from '../SortingModeSelect';
import ViewTypeSelect from '../ViewTypeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <Box fullwidth>
      <FormControl className={classes.formControl}>
        <SortingModeSelect availableModes={['Recent', 'AnotherMode', 'ThirdMode']} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <ViewTypeSelect availableTypes={['Cards', 'List', 'Compacted']} />
      </FormControl>
    </Box>
  );
};

export default Settings;