import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Refine extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick = (v) => {
        switch(v.target.id) {
            case "liveMusic":
                this.props.liveMusic.val = !this.props.liveMusic.val;
                break;
            case "familyFriendly":
                this.props.familyFriendly.val = !this.props.familyFriendly.val;
                break;
            case "vegetarian":
                this.props.vegetarian.val = !this.props.vegetarian.val;
                break;
            case "tours":
                this.props.tours.val = !this.props.tours.val;
                break;
            case "cheapEats":
                this.props.cheapEats.val = !this.props.cheapEats.val;
                break;
            case "foodie":
                this.props.foodie.val = !this.props.foodie.val;
                break;
            case "romantic":
                this.props.romantic.val = !this.props.romantic.val;
                break;
        }
        
    }

    render() {
        return (
            <div className="refine">
                <p className="left-content-titles">Refine your search</p>
                <div className="refine-button-div">
                    <button onClick={this.handleOnClick} id="liveMusic" className="refine-button">LIVE MUSIC</button>
                    <button onClick={this.handleOnClick} id="familyFriendly" className="refine-button">FAMILY FRIENDLY</button>
                    <button onClick={this.handleOnClick} id="vegetarian" className="refine-button">VEGETARIAN</button>
                    <button onClick={this.handleOnClick} id="tours" className="refine-button">TOURS</button>
                    <button onClick={this.handleOnClick} id="cheapEats" className="refine-button">CHEAP EATS</button>
                    <button onClick={this.handleOnClick} id="foodie" className="refine-button">FOODIE</button>
                    <button onClick={this.handleOnClick} id="romantic" className="refine-button">ROMANTIC</button>
                </div>
                <hr className="refine-hr"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        liveMusic: state.refinements.liveMusic,
        familyFriendly: state.refinements.familyFriendly,
        vegetarian: state.refinements.vegetarian,
        tours: state.refinements.tours,
        cheapEats: state.refinements.cheapEats,
        foodie: state.refinements.foodie,
        romantic: state.refinements.romantic
    }
}

export default connect(mapStateToProps)(Refine);