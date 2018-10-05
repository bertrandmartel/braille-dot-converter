import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        margin: "auto",
        width: "50%",
        marginTop: 50,
        textAlign:"center",
        fontSize: "3em"
    },
    table: {
        margin: "auto",
        borderCollapse: "separate",
        borderSpacing: "50px 0"
    },
    number: {
        textAlign: "right"
    },
    label: {
        textAlign: "left"
    }
});

class DotState extends Component {

    render() {
    	const { classes } = this.props;
        return  <div className={classes.root}>
                    <table className={classes.table}>
                        <tbody>
                        <tr>
                            <td className={classes.label}>original</td>
                            <td className={classes.number}>{pad(parseInt(this.props.pattern, 10).toString(2), 8)}</td>
                            <td className={classes.number}>{pad(parseInt(this.props.pattern, 10).toString(16).toUpperCase(), 2)}</td>
                        </tr>
                        <tr>
                            <td className={classes.label}>original inverted</td>
                            <td className={classes.number}>{pad(parseInt(invert(this.props.pattern), 10).toString(2), 8)}</td>
                            <td className={classes.number}>{pad(parseInt(invert(this.props.pattern), 10).toString(16).toUpperCase(), 2)}</td>
                        </tr>
                        <tr>
                            <td className={classes.label}>XOR</td>
                            <td className={classes.number}>{pad(parseInt(this.props.pattern ^ 0xFF, 10).toString(2), 8)}</td>
                            <td className={classes.number}>{pad(parseInt(this.props.pattern ^ 0xFF, 10).toString(16).toUpperCase(), 2)}</td>
                        </tr>
                        <tr>
                            <td className={classes.label}>XOR inverted</td>
                            <td className={classes.number}>{pad(parseInt(invert(this.props.pattern ^ 0x3FF), 10).toString(2), 8)}</td>
                            <td className={classes.number}>{pad(parseInt(invert(this.props.pattern ^ 0x3FF), 10).toString(16).toUpperCase(), 2)}</td>
                        </tr>
                        </tbody>
                    </table>
            </div>
    }
}

function invert(num){
    var inverted = 0;
    var count = 0;
    for (var i = 8; i >=0;i--){
        var bit = 0;
        if ((num & (1 << (i-1))) !== 0){
            bit = 1;
        }
        inverted += bit << count;
        count++;
    }
    return inverted;
}

function pad(num, size) {
    var s = `${num}`;
    while (s.length < size) s = `0${s}`;
    return s;
}

DotState.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DotState);