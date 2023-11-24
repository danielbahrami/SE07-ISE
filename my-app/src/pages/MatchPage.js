// MatchPage.js
import React from 'react';
import ProfileCard from '../components/ProfileCard'; // Component for the left side
import MapView from '../components/MapView'; // Component for the right side
import ContactButton from '../components/ContactButton'; // Button to contact user
import Header from '../components/Header'; // Adjust the path as necessary
import '../styles/MatchPage.css'; // Your CSS file for styling

const MatchPage = () => {
    return (
        <div className="match-page">
            <Header /> {/* Include the Header at the top */}
            <div className="match-content">
            <div className="left-side">
                <ProfileCard />
            </div>
            <div className="right-side">
            <MapView />
            <ContactButton /> 
            </div>
            </div>
        </div>
    );


};

export default MatchPage;