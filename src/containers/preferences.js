import React, { Component } from 'react';
import Range from 'react-range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Preferences extends Component {
    constructor(props) {
        super(props)

        this.handleOnChange = this.handleOnChange.bind(this)

    }

    handleOnChange = (v) => {
        if(v.target.className === "pref-slider budget-slider") {
            this.props.preferences.budget = v.target.value;
        }
        if(v.target.className === "pref-slider pace-slider") {
            this.props.preferences.pace = v.target.value;
        }

  }
    
    render() {
        const { budget, pace } = this.props.preferences
        return (
            <div className="preferences">
                <p className="left-content-titles">Adjust your preferences:</p>
                <div className="slider-preferences">
                    <p className="pref-title">Budget</p>
                    <Range
                    className="pref-slider budget-slider"
                    onInput={this.handleOnChange}
                    type="range"
                    value={budget}
                    step={1}
                    min={0}
                    max={9} />
                    <div>
                        <p className="pref-footer-left">Backpacker</p>
                        <p className="pref-footer-right">Luxury</p>
                    </div>
                </div>
                <div className="slider-preferences">
                    <p className="pref-title">Pace</p>
                    <Range
                    className="pref-slider pace-slider"
                    onInput={this.handleOnChange}
                    type="range"
                    value={pace}
                    step={1}
                    min={0}
                    max={9} />
                    <div>
                        <p className="pref-footer-left">Relaxed</p>
                        <p className="pref-footer-right">Pack it in!</p>
                    </div>
                </div>
                <hr className="refine-hr"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      preferences: {
          budget: state.preferences.budget,
          pace: state.preferences.pace
      }
  }
}

export default connect(mapStateToProps)(Preferences);