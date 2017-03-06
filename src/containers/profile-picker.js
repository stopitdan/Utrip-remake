import React, { Component, Dispatch } from 'react';
import { connect } from 'react-redux';


class ProfilePicker extends Component {

    constructor(props) {
        super(props);

       this.handleOnClick = this.handleOnClick.bind(this);

    }

    handleOnClick = (v) => {
        
        switch(v.target.id) {
            case "buildyourown-profile-icon":
                this.props.activeProfile = "buildyourown"
                break;
            case "firsttimer-profile-icon":
                this.props.activeProfile = "firsttimer"
                break;
            case "budget-profile-icon":
                this.props.activeProfile = "budget"
                break;
            case "returning-profile-icon":
                this.props.activeProfile = "returning"
                break;
            case "teampicks-profile-icon":
                this.props.activeProfile = "teampicks"
                break;
            case "luxury-profile-icon":
                this.props.activeProfile = "luxury"
                break;
        }
        console.log(this.props.activeProfile)
    }



    render() {
        return (
            <div className="profile-picker">
                <p className="left-content-titles">Select a traveler profile:</p>
                <a href="#" onClick={this.handleOnClick} id="buildyourown-profile-icon"><img id="buildyourown-profile-icon" className="profile-icon" src={'./img/build-your-own-bold.png'} /></a>
                <a href="#" onClick={this.handleOnClick} id="firsttimer-profile-icon"><img className="profile-icon" src={'./img/first-timer-bold.png'} /></a>
                <a href="#" onClick={this.handleOnClick} id="budget-profile-icon"><img className="profile-icon" src={'./img/budget-bold.png'} /></a>
                <a href="#" onClick={this.handleOnClick} id="returning-profile-icon"><img className="profile-icon" src={'./img/returning-bold.png'} /></a>
                <a href="#" onClick={this.handleOnClick} id="teampicks-profile-icon"><img className="profile-icon" src={'./img/team-picks-bold.png'} /></a>
                <a href="#" onClick={this.handleOnClick} id="luxury-profile-icon"><img className="profile-icon" src={'./img/luxury-bold.png'} /></a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.activeProfile)
    return {
        activeProfile: state.activeProfile
    }
}

export default connect(mapStateToProps)(ProfilePicker);