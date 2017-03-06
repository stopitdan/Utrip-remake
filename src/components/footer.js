import React, { Component } from 'react';

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return (
            <div className="footer">
                <div className="links">
                    <a href="#" className="footer-link">About Us</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Contact Us</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Careers</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Utrip PRO</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">FAQ</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Press</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Blog</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Terms</a>
                    <p className="footer-link">|</p>
                    <a href="#" className="footer-link">Privacy</a> 
                    <br/>
                    <div className="bottom-links">
                        <a href="#" className="footer-link">Featured Trip Library</a>
                        <p className="footer-link">|</p>
                        <a href="#" className="footer-link">Local Experts</a>
                        <p className="footer-link">|</p>
                        <a href="#" className="footer-link">Destinations</a>
                        <p className="footer-link">|</p>
                        <a href="#" className="footer-link">Suggest a Location</a>
                    </div>
                </div>
                <div></div>
            </div>
        );
    }
}
