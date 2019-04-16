import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomActivity } from '../../actions/actions';
import './Activities.css';

class Activities extends Component {
  render () {
    return (
      <div className={'star-wars'}>
        <div className={'crawl'}>
          <div className={'title'}>
            <p>React TDD</p>
            <p>Now, click that button!</p>
          </div>
          {this.props.activities.map(entry => this.renderActivity(entry))}
        </div>
        <button
          className={'random-activity-button'}
          data-test="random-activity-button"
          onClick={() => this.props.fetchRandomActivity()}>
          Random activity
        </button>
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
