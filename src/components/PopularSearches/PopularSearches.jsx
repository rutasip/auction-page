import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const PopularSearches = ({ searches }) => (
  <Grid container>
    Popular Searches:
    {searches.slice(0, 10).map(search => (
      <Box ml={3}>
        <Link href={`?search=${search}`}>{search}</Link>
      </Box>
    ))}
  </Grid>
);

PopularSearches.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PopularSearches;
