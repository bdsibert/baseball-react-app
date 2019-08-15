import React from 'react'

import { Link } from 'react-router-dom';

const Profiles = props => (
 <div className="container">
     <div className="row">
     {props.profiles.map((profile) =>{
         return (
        
           <div key={profile.player_id} className="col-lg-4" style={{ marginBottom:"2rem"}}>
                <div className="recipe__box">
                    <div className="recipe__text">
                        <h5 className="recipes__title">{profile.name_display_first_last}</h5>
                            <p className="recipes__subtitle">{profile.team_full}</p>
                                <p className="recipes__subtitle">{profile.position}</p>
           </div>
           <button className="recipe_buttons">
               <Link to={{ 
                    pathname: `/stat/${profile.player_id}`,
                    state: { profile: profile.player_id}
            }}>View Stats</Link>
            </button>
        </div>
        </div>
        
         );
       })}
 </div>
 </div>
);
export default Profiles;
