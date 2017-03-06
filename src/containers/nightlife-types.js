import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class NightlifeTypes extends Component {
    constructor(props) {
        super(props);

      
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = (event) => {
        let value = event.target.checked   
        if(event.target.className == "barClubLounge") {
            this.props.barClubLounge.val = !this.props.barClubLounge.val
        }
        if(event.target.className == "seeTheTown") {
            this.props.seeTheTown.val = !this.props.seeTheTown.val
        }
        if(event.target.className == "eventsEntertainment") {
            this.props.eventsEntertainment.val = !this.props.eventsEntertainment.val
        }
        if(event.target.className == "familyFriendlyOnly") {
            this.props.familyFriendlyOnly.val = !this.props.familyFriendlyOnly.val
        }
    }

    render() {
        return (
            <div className="nightlife-types">
                <p className="nightlife-title">Nightlife Types</p>
                <div className="checkboxes">
                    <form className="adult-checkbox">
                        <input className="barClubLounge" type='checkbox' onChange={this.handleOnChange} checked={this.props.barClubLounge.val}/>
                        <label className="checkbox-label">Bar, Club & Lounge</label>
                    </form>
                        
                    <form className="family-checkbox">
                        <input className="familyFriendlyOnly" type='checkbox' onChange={this.handleOnChange} checked={this.props.familyFriendlyOnly.val}/>
                        <p className="checkbox-label">Family-friendly Activities Only</p>
                    </form> <br/>
                    <form className="adult-checkbox">
                        <input className="seeTheTown" type='checkbox' onChange={this.handleOnChange} checked={this.props.seeTheTown.val}/>
                        <p className="checkbox-label seeTheTown-label">See The Town At Night</p>
                    </form>
                         <br/>
                    <form className="adult-checkbox">
                        <input className="eventsEntertainment" type='checkbox' onChange={this.handleOnChange} checked={this.props.eventsEntertainment.val}/>
                        <p className="checkbox-label">Events & Entertainment</p>
                    </form>
                        

                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        barClubLounge: state.nightlifeTypes.barClubLounge,
        eventsEntertainment: state.nightlifeTypes.eventsEntertainment,
        seeTheTown: state.nightlifeTypes.seeTheTown,
        familyFriendlyOnly: state.nightlifeTypes.familyFriendlyOnly
    }
}

export default connect(mapStateToProps)(NightlifeTypes);