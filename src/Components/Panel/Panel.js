import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

const styles = {
  tabs: {
    background: "#bfbfbf",
    bottom: "0px"
  },

  slide: {
    paddingTop: 0,
    minHeight: 0,
    color: "#000",
    display: "flex",
    justifyContent: "center"
  }
};

class Panel extends React.Component {
  state = {
    index: 0
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
    this.props.changed();
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {/* Is where we arrange order for findings and results at the bottom of the panel. */}
          <div style={Object.assign({}, styles.slide, styles.slide3)}>{this.props.findings}</div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>{this.props.findings1}</div>

          <div style={Object.assign({}, styles.slide, styles.slide3)}>{this.props.results}</div>
        </SwipeableViews>
        <Tabs value={index} variant="fullWidth" onChange={this.handleChange} style={styles.tabs}>
          <Tab label="Physical" />
          <Tab label="Lab" />
          <Tab label="Results" />
          <Tab label="Terms" />
        </Tabs>
      </div>
    );
  }
}

export default Panel;
