import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import SearchBar from './searchbar';
import Header from './header';
import ProfilePicker from '../containers/profile-picker';
import Preferences from '../containers/preferences';
import LeafletMap from './map';
import Refine from '../containers/refine';
import ProfileSettings from '../containers/profile-settings';
import NightlifeTypes from '../containers/nightlife-types';
import Footer from './footer';


export default class App extends Component {
    constructor(props) {
        super(props);
          
    }

    

    render() {
        return (  
            <div>
                <Header />
                <div className="content">
                    <div className="left-content">
                        <SearchBar />
                        <ProfilePicker />
                        <Preferences />
                        <Refine />
                        <ProfileSettings />
                        <NightlifeTypes />
                    </div>
                    <div className="right-content">
                        <LeafletMap />
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}