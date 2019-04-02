import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addActivityToList, fetchRandomActivity} from '../actions/actions';

class Activities extends Component {
  render() {
    return (
      <div>
        <button
          data-test="random-activity-button"
          onClick={this.props.fetchRandomActivity}>Random activity
        </button>
        {this.renderActivity()}
      </div>
    );
  }

  renderActivity() {
    if (this.props.activityEntry) {
      return <div data-test="activity-entry">{this.props.activityEntry.activity}</div>
    }
    return <div data-test="activity-placeholder">Plz click the button</div>
  }
}

const mapStateToProps = (state) => ({
  activityEntry: state.activities.entry
});

const mapDispatchToProps = (dispach) => ({
  fetchRandomActivity: (payload) => dispach(fetchRandomActivity(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities)
