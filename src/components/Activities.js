import React, { Component } from 'react';
import { connect } from 'react-redux';

class Activities extends Component {
  render() {
    return (
      <div>
        <button data-test="random-activity-button">Random activity</button>
        {this.renderActivity()}
      </div>
    );
  }

  renderActivity() {
    if (this.props.activityEntry) {
      return <div data-test="activity-entry">{this.props.activities.name}</div>
    }
    return <div data-test="activity-placeholder">Plz click the button</div>
  }
}

const mapStateToProps = (state) => {
  return {
    activityEntry: state.activities.entry
  }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
