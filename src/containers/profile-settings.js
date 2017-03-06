import React, { Component } from 'react';
import Range from 'react-range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfileSettings extends Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange = (v) => {
        const { mustsee, culture } = this.props.profileSettings
        console.log(mustsee.message);
        try {
        
            if(v.target.className == "slide-1") {
                    if(v.target.value <= 1) {
                        mustsee.val = v.target.value;
                        mustsee.message = "I'm a Trailblazer"
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                        this.props.profileSettings.mustsee.val = v.target.value, 
                        this.props.profileSettings.mustsee.message = "Only the Best" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                        this.props.profileSettings.mustsee.val = v.target.value, 
                        this.props.profileSettings.mustsee.message = "Must See Some" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                        this.props.profileSettings.mustsee.val = v.target.value, 
                        this.props.profileSettings.mustsee.message = "Must See Most" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                        this.props.profileSettings.mustsee.val = v.target.value, 
                        this.props.profileSettings.mustsee.message = "See them All" 
                    }
            }
            if(v.target.className == "slide-2") {
                    if(v.target.value <= 1) {
                        this.props.profileSettings.culture.val = v.target.value, 
                        this.props.profileSettings.culture.message = "What's a Bidet" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                        this.props.profileSettings.culture.val = v.target.value, 
                        this.props.profileSettings.culture.message = "Less is More" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                        this.props.profileSettings.culture.val = v.target.value, 
                        this.props.profileSettings.culture.message = "When in Rome..." 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                        this.props.profileSettings.culture.val = v.target.value, 
                        this.props.profileSettings.culture.message = "Culture Connoisseur" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                        this.props.profileSettings.culture.val = v.target.value, 
                        this.props.profileSettings.culture.message = "Local Immersion" 
                    }
            }
            if(v.target.className == "slide-3") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.cuisine.val = v.target.value, 
                            this.props.profileSettings.cuisine.message = "Whatever's Convenient" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.cuisine.val = v.target.value, 
                            this.props.profileSettings.cuisine.message = "Food is Food" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.cuisine.val = v.target.value, 
                            this.props.profileSettings.cuisine.message = "Like to Eat" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.cuisine.val = v.target.value, 
                            this.props.profileSettings.cuisine.message = "Important to Me" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.cuisine.val = v.target.value, 
                            this.props.profileSettings.cuisine.message = "Major Foodie" 
                    }
            }
            if(v.target.className == "slide-4") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.adventure.val = v.target.value, 
                            this.props.profileSettings.adventure.message = "Kiddie Pool Fun" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.adventure.val = v.target.value, 
                            this.props.profileSettings.adventure.message = "Safety First" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.adventure.val = v.target.value, 
                            this.props.profileSettings.adventure.message = "Try Anything Once" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.adventure.val = v.target.value, 
                            this.props.profileSettings.adventure.message = "Want Thrilss" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.adventure.val = v.target.value, 
                            this.props.profileSettings.adventure.message = "Adernaline Junkie" 
                    }
            }
            if(v.target.className == "slide-5") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.art.val = v.target.value, 
                            this.props.profileSettings.art.message = "Not a Priority" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.art.val = v.target.value, 
                            this.props.profileSettings.art.message = "Limited Interest" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.art.val = v.target.value, 
                            this.props.profileSettings.art.message = "Art's Pretty Cool" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.art.val = v.target.value, 
                            this.props.profileSettings.art.message = "Important to Me" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.art.val = v.target.value, 
                            this.props.profileSettings.art.message = "Art Lover" 
                    }
            }
            if(v.target.className == "slide-6") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.entertainment.val = v.target.value, 
                            this.props.profileSettings.entertainment.message = "Not a Priority" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.entertainment.val = v.target.value, 
                            this.props.profileSettings.entertainment.message = "Only the Best" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.entertainment.val = v.target.value, 
                            this.props.profileSettings.entertainment.message = "I'm into Fun" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.entertainment.val = v.target.value, 
                            this.props.profileSettings.entertainment.message = "Let's Have Fun" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.this.props.profileSettings.entertainment.val = v.target.value, 
                            this.props.profileSettings.entertainment.message = "Here To Play" 
                    }
            }
            if(v.target.className == "slide-7") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.hist.val = v.target.value, 
                            this.props.profileSettings.hist.message = "Not a Priority" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.hist.val = v.target.value, 
                            this.props.profileSettings.hist.message = "Limited Interest" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.hist.val = v.target.value, 
                            this.props.profileSettings.hist.message = "History's Cool" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.hist.val = v.target.value, 
                            this.props.profileSettings.hist.message = "Important to Me" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.hist.val = v.target.value, 
                            this.props.profileSettings.hist.message = "History Buff" 
                    }
            }
            if(v.target.className == "slide-8") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.museums.val = v.target.value, 
                            this.props.profileSettings.museums.message = "Not a Priority" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.museums.val = v.target.value, 
                            this.props.profileSettings.museums.message = "Only the Best" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.museums.val = v.target.value, 
                            this.props.profileSettings.museums.message = "Enjoy Museums" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.museums.val = v.target.value, 
                            this.props.profileSettings.museums.message = "Important to Me" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.museums.val = v.target.value, 
                            this.props.profileSettings.museums.message = "See them All!" 
                    }
            }
            if(v.target.className == "slide-9") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.nature.val = v.target.value, 
                            this.props.profileSettings.nature.message = "Mostly Urban Trip" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.nature.val = v.target.value, 
                            this.props.profileSettings.nature.message = "Limited Interest" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.nature.val = v.target.value, 
                            this.props.profileSettings.nature.message = "Like the Outdoors" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.nature.val = v.target.value, 
                            this.props.profileSettings.nature.message = "Need Fresh Air" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.nature.val = v.target.value, 
                            this.props.profileSettings.nature.message = "Into the Wild" 
                    }
            }
            if(v.target.className == "slide-10") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.rr.val = v.target.value, 
                            this.props.profileSettings.rr.message = "Not a Priority" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.rr.val = v.target.value, 
                            this.props.profileSettings.rr.message = "Limited Interest" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.rr.val = v.target.value, 
                            this.props.profileSettings.rr.message = "Rest is Good" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.rr.val = v.target.value, 
                            this.props.profileSettings.rr.message = "Like Tea Time" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.rr.val = v.target.value, 
                            this.props.profileSettings.rr.message = "Pure Relaxation" 
                    }
            }
            if(v.target.className == "slide-11") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.shopping.val = v.target.value, 
                            this.props.profileSettings.shopping.message = "No Thanks" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.shopping.val = v.target.value, 
                            this.props.profileSettings.shopping.message = "Souvenirs & Gifts" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.shopping.val = v.target.value, 
                            this.props.profileSettings.shopping.message = "Like Shopping" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.shopping.val = v.target.value, 
                            this.props.profileSettings.shopping.message = "Love Shopping" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.shopping.val = v.target.value, 
                            this.props.profileSettings.shopping.message = "Total Shopaholic" 
                    }
            }
            if(v.target.className == "slide-12") {
                    if(v.target.value <= 1) {
                            this.props.profileSettings.sports.val = v.target.value, 
                            this.props.profileSettings.sports.message = "Balls are Scary" 
                    }
                    if(v.target.value == 2 || v.target.value == 3){
                            this.props.profileSettings.sports.val = v.target.value, 
                            this.props.profileSettings.sports.message = "Limited Interest" 
                    }
                    if(v.target.value == 4 || v.target.value == 5){
                            this.props.profileSettings.sports.val = v.target.value, 
                            this.props.profileSettings.sports.message = "Like Sports" 
                    }
                    if(v.target.value == 6 || v.target.value == 7){
                            this.props.profileSettings.sports.val = v.target.value, 
                            this.props.profileSettings.sports.message = "Let's Play" 
                    }
                    if(v.target.value == 8 || v.target.value == 9){
                            this.props.profileSettings.sports.val = v.target.value, 
                            this.props.profileSettings.sports.message = "Live for Sports!" 
                    }
                }
                
            } catch(err) {
                console.log(err)
        } 
        
  }

    render() {
        const { mustsee, culture } = this.props.profileSettings
        return (
            <div className="your-profile">
                <p className="pref-title">Your Traveler Profile</p>
                <div className="row-grey">
                    <div className="profile-slider-div">
                        <p className="profile-category-title mustsee-color">Must See</p>
                        <Range className="slide-1" onInput={this.handleOnChange} type="range" value={mustsee.val} step={1} min={0} max={9} />
                        <p className="profile-category-message mustsee-color">{mustsee.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title culture-color">Culture</p>
                        <Range className="slide-2" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.culture.val} step={1} min={0} max={9} />
                        <p className="profile-category-message culture-color">{this.props.profileSettings.culture.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title cuisine-color">Cuisine</p>
                        <Range className="slide-3" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.cuisine.val} step={1} min={0} max={9} />
                        <p className="profile-category-message cuisine-color">{this.props.profileSettings.cuisine.message}</p>
                    </div>
                </div>
                <div className="row-white">
                    <div className="profile-slider-div">
                        <p className="profile-category-title adventure-color">Adventure</p>
                        <Range className="slide-4" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.adventure.val} step={1} min={0} max={9} />
                        <p className="profile-category-message adventure-color">{this.props.profileSettings.adventure.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title art-color">Art</p>
                        <Range className="slide-5" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.art.val} step={1} min={0} max={9} />
                        <p className="profile-category-message art-color">{this.props.profileSettings.art.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title entertainment-color">Entertainment</p>
                        <Range className="slide-6" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.entertainment.val} step={1} min={0} max={9} />
                        <p className="profile-category-message entertainment-color">{this.props.profileSettings.entertainment.message}</p>
                    </div>
                </div>
                <div className="row-grey">
                    <div className="profile-slider-div">
                        <p className="profile-category-title hist-color">History</p>
                        <Range className="slide-7" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.hist.val} step={1} min={0} max={9} />
                        <p className="profile-category-message hist-color">{this.props.profileSettings.hist.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title museums-color">Museums</p>
                        <Range className="slide-8" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.museums.val} step={1} min={0} max={9} />
                        <p className="profile-category-message museums-color">{this.props.profileSettings.museums.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title nature-color">Nature</p>
                        <Range className="slide-9" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.nature.val} step={1} min={0} max={9} />
                        <p className="profile-category-message nature-color">{this.props.profileSettings.nature.message}</p>
                    </div>
                </div>
                <div className="row-white">
                    <div className="profile-slider-div">
                        <p className="profile-category-title rr-color">R & R</p>
                        <Range className="slide-10" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.rr.val} step={1} min={0} max={9} />
                        <p className="profile-category-message rr-color">{this.props.profileSettings.rr.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title shopping-color">Shopping</p>
                        <Range className="slide-11" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.shopping.val} step={1} min={0} max={9} />
                        <p className="profile-category-message shopping-color">{this.props.profileSettings.shopping.message}</p>
                    </div>
                    <div className="profile-slider-div">
                        <p className="profile-category-title sports-color">Sports</p>
                        <Range className="slide-12" onInput={this.handleOnChange} type="range" value={this.props.profileSettings.sports.val} step={1} min={0} max={9} />
                        <p className="profile-category-message sports-color">{this.props.profileSettings.sports.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
   return { 
       profileSettings: { 
            mustsee: { val: state.profileSettings.mustsee.val, message: state.profileSettings.mustsee.message },
            culture: { val: state.profileSettings.culture.val, message: state.profileSettings.culture.message },
            cuisine: { val: state.profileSettings.cuisine.val, message: state.profileSettings.cuisine.message },
            adventure: { val: state.profileSettings.adventure.val, message: state.profileSettings.adventure.message },
            art: { val: state.profileSettings.art.val, message: state.profileSettings.art.message },
            entertainment: { val: state.profileSettings.entertainment.val, message: state.profileSettings.entertainment.message },
            hist: { val: state.profileSettings.hist.val, message: state.profileSettings.hist.message },
            museums: { val: state.profileSettings.museums.val, message: state.profileSettings.museums.message },
            nature: { val: state.profileSettings.nature.val, message: state.profileSettings.nature.message },
            rr: { val: state.profileSettings.rr.val, message: state.profileSettings.rr.message },
            shopping: { val: state.profileSettings.shopping.val, message: state.profileSettings.shopping.message },
            sports: { val: state.profileSettings.sports.val, message: state.profileSettings.sports.message } 
        }
   };
}

export default connect(mapStateToProps)(ProfileSettings)