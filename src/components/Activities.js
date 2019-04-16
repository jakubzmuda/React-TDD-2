import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomActivity } from '../actions/actions';

class Activities extends Component {
  render () {
    return (
      <div>
        <button
          data-test="random-activity-button"
          onClick={() => this.props.fetchRandomActivity()}>
          Random activity
        </button>
        {this.props.activities.map(entry => this.renderActivity(entry))}
      </div>
    );
  }

  renderActivity (entry) {
    return <div key={entry.activity} data-test="activity-entry">{entry.activity}</div>
  }
}

const mapStateToProps = (state) => {
  return ({
    activities: state.activities
  });
};

const mapDispatchToProps = {
  fetchRandomActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
