import React from 'react';
import './TeamMember.css';

const TeamMember = ({name, instrument, image, blurb}) => {
    return (
        <div className = "team-member">
            <div className = "team-member-name">
                {name + ","}
            </div>
            <div className = "team-member-title">
                {instrument + " Teacher"}
            </div>
            <img className = "team-member-image" src = {image} />
            <div className = "team-member-blurb">
                {blurb}
            </div>
        </div>
    )
}

export default TeamMember