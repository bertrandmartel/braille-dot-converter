import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

import InfoView from './component/InfoView.js';
import TopNavBar from './component/TopNavBar.js';
import BrailleCell from './component/BrailleCell.js';
import DotState from './component/DotState.js';

const styles = {
  root: {
    flexGrow: 1,
  },
  cell: {
    margin: "auto",
    width: "50%",
    marginTop: 50
  }
};

class App extends Component {

  state = {
    openInfo: false,
    pattern: 0b00000000,
    editMode: false,
    showSnackbar: false,
    snackbarMesage: "",
    positions: this.getInitialPositions()
  };

  constructor(props){
    super(props);
    this.closeDialog = this.closeDialog.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.onDotClick = this.onDotClick.bind(this);
    this.onEditMode = this.onEditMode.bind(this);
    this.onEditPosition = this.onEditPosition.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  getInitialPositions(){
    var pos = localStorage.getItem("positions");
    if(pos){
      return pos.split(',').map(function(item){
        return parseInt(item, 10);
      })
    }
    else {
      localStorage.setItem("positions", "1,2,3,4,5,6,7,8");
      return [1,2,3,4,5,6,7,8];
    }
  }

  storePositions(){
    localStorage.setItem("positions", this.state.positions.join());
  }

  showInfo() {
    this.setState({
      openInfo: true
    });
  }


  closeDialog(){
    this.setState({
      openInfo: false
    });
  }

  onDotClick(position){
    var mask = 1 << (position - 1);
    var pattern = this.state.pattern;
    if ((pattern & mask) !== 0){
      pattern &= ~mask;
      this.setState({
        pattern: pattern
      });
    } else {
      pattern |= mask;
      this.setState({
        pattern: pattern
      });
    }
  }

  onEditMode(){
    if (this.state.editMode){
      for (var i = 0; i < this.state.positions.length; i++){
        if (this.state.positions[i] === ""){
          return this.setState({
            showSnackbar: true,
            snackbarMesage: "there are missing position left"
          });
        }
      }
      this.setState({
        editMode: false
      });
    } else {
      this.setState({
        editMode: true
      });
    }
  }

  closeSnackbar(){
    this.setState({
      showSnackbar: false
    })
  }

  onEditPosition(index, value){
    var positions = this.state.positions;
    if (value !== ""){
      for (var i = 0; i < positions.length; i++){
        if ((i !== index) && (positions[i] == value)){
          positions[i] = "";
        }
      }
    }
    positions[index] = value;
    this.storePositions();
    this.setState({
      positions: positions
    });
  }

  render() {
    const { classes } = this.props;
    const vertical ='bottom';
    const horizontal = 'right';
    return (
      <div className={classes.root}>
      <TopNavBar onShowInfo={this.showInfo}/>
      <BrailleCell 
        className={classes.cell} 
        pattern={this.state.pattern}
        positions={this.state.positions}
        editMode={this.state.editMode}
        onDotClick={(position) => this.onDotClick(position)}
        onEditMode={this.onEditMode}
        onEditPosition={(index, value) => this.onEditPosition(index, value)}/>
      <DotState 
        pattern={this.state.pattern}
        />
      <InfoView
          onDialogClose={this.closeDialog}
          open={this.state.openInfo}
      />
      <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.showSnackbar}
          onClose={this.closeSnackbar}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackbarMesage}</span>}
        />
    </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);


