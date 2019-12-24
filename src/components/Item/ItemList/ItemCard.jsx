import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  card: {
    border: '1px solid #e4e4e4',
    display: 'flex',
    '@media (min-width: 420px)': {
      display: 'block'
    }
  },
  image: {
    maxWidth: '40%',
    '@media (min-width: 420px)': {
      maxWidth: '100%'
    }
  },
  media: {
    height: 0,
    width: '100%',
    paddingTop: '100%' // 1:1
  },
  itemTitle: {
    marginTop: '.625rem',
    fontWeight: 400,
    textAlign: 'left',
    paddingRight: 0
  },
  itemPrice: {
    fontWeight: 500,
    textAlign: 'left',
    paddingRight: 0
  },
  itemFavorite: {
    color: '#999',
    '&:hover': {
      color: 'red'
    }
  }
});

const ItemCard = ({ currentBid, itemName, timeUntilBidEnd }) => {
  const classes = useStyles();
  // Randomly assigned images
  const randomNumber = Math.floor(Math.random() * 14);

  const link = 'item';

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.image}>
        <Link to={link}>
          <CardMedia
            className={classes.media}
            image={require(`../../../assets/items/${randomNumber}.png`)}
            title={itemName}
          />
        </Link>
      </CardActionArea>
      <Box>
        <CardContent>
          <Typography className={classes.itemTitle} variant="h4" component="h4">
            <Link to={link}>{itemName}</Link>
          </Typography>
        </CardContent>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <CardContent>
            <Typography className={classes.itemPrice} variant="h4" component="h4">
              {`${currentBid} €`}
            </Typography>
            <Typography>{`${timeUntilBidEnd} h`}</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton className={classes.itemFavorite} aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Box>
    </Card>
  );
};

ItemCard.propTypes = {
  currentBid: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  timeUntilBidEnd: PropTypes.number.isRequired
};

export default ItemCard;
