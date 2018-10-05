import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
	circle: {
		height: "80px",
		width: "80px",
		borderRadius: "50%",
		display: "inline-block",
		border: "1px solid #000000",
        textAlign: "center",
        lineHeight: "80px",
        color: "#FFFFFF"
	},
	circleEmpty: {
		backgroundColor: "#808080"
	},
	circleFull: {
		backgroundColor: "#000000"
	},
    text: {
        textAlign: "center",
        width: "40px",
    }
});

class Dot extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.editPosition = this.editPosition.bind(this);
    }

    onClick(){
		if (!this.props.editMode && typeof this.props.onClick === 'function') {
			this.props.onClick(this.props.position);
		}
    }

    editPosition(event){
        if (typeof this.props.onEditPosition === 'function') {
            this.props.onEditPosition(event.target.value);
        }
    }

    render() {
    	const { classes } = this.props;
        return  <div 
        	className={
        		classNames(
        			classes.circle,
        			this.props.isSet ? classes.circleFull : classes.circleEmpty, 
        			this.props.className
        		)
        	}
        	onClick={this.onClick}
        	>
            {
                this.props.editMode ? 
                    (<input className={classes.text} 
                            onChange={this.editPosition} 
                            type="text" 
                            name={`edit-${this.props.position}`} 
                            value={this.props.position}/>) : (this.props.position)
            }
            </div>
    }
}

Dot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dot);