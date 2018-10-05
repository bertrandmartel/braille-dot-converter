import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TopNavBar extends Component {

	showInfo() {
		if (typeof this.props.onShowInfo === 'function') {
			this.props.onShowInfo();
		}
	}

    render() {
    	const { classes } = this.props;
        return  <AppBar position="static" color="default">
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Braille Dot to Hex converter
          </Typography>
          <Tooltip enterDelay={100}  title="information">
              <IconButton onClick={() => this.showInfo()} color="default" className={classes.lastButton} aria-label="information">
                <InfoIcon />
              </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    }
}

TopNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavBar);