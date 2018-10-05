import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Dot from './Dot.js';

const styles = theme => ({
  pair: {
    margin: 20,
    textAlign: "center"
  },
  dot:{
    marginLeft: 40,
    marginRigt: 40
  },
   buttonDiv: {
    textAlign: "center",
  },
  button:{
    marginTop: 20,
    marginLeft: 40
  }
});

class BrailleCell extends Component {

    constructor(props) {
        super(props);
        this.editMode = this.editMode.bind(this);
        this.onEditPosition = this.onEditPosition.bind(this);
    }

    onDotClick(position){
      if (typeof this.props.onDotClick === 'function') {
        this.props.onDotClick(position);
      }
    }

    editMode(){
      if (typeof this.props.onEditMode === 'function') {
        this.props.onEditMode();
      }
    }

    onEditPosition(index, value) {
      if (typeof this.props.onEditPosition === 'function') {
        this.props.onEditPosition(index, value);
      }
    }

    render() {
        const { classes } = this.props;
        return  <div className={this.props.className}>
            <div className={classes.pair}>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[0]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[0]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(0, value)}
                editMode={this.props.editMode}/>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[3]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[3]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(3, value)}
                editMode={this.props.editMode}/>
            </div>
            <div className={classes.pair}>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[1]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[1]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(1, value)}
                editMode={this.props.editMode}/>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[4]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[4]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(4, value)}
                editMode={this.props.editMode}/>
            </div>
            <div className={classes.pair}>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[2]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[2]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(2, value)}
                editMode={this.props.editMode}/>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[5]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[5]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(5, value)}
                editMode={this.props.editMode}/>
            </div>
            <div className={classes.pair}>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[6]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[6]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(6, value)}
                editMode={this.props.editMode}/>
              <Dot 
                isSet={(this.props.pattern & (1 << (this.props.positions[7]-1))) !== 0} 
                onClick={(position) => this.onDotClick(position)}
                position={this.props.positions[7]}
                className={classes.dot}
                onEditPosition={(value) => this.props.onEditPosition(7, value)}
                editMode={this.props.editMode}/>
            </div>
            <div className={classes.buttonDiv}>
              <Button variant="contained" className={classes.button} onClick={this.editMode}>
                {this.props.editMode ? "apply" : "edit bit position"}
              </Button>
            </div>
        </div>
    }
}

BrailleCell.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BrailleCell);