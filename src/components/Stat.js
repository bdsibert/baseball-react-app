import React from 'react';



import { Link } from 'react-router-dom';

class Stat extends React.Component {
    state = {
        activeStat: []
    }

    componentDidMount = async () => {
    const playerSearch = this.props.location.state.profile;
    console.log(playerSearch);
    const req= await fetch(`https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id='${playerSearch}'`);
    const res = await req.json();
    console.log(res);
    this.setState({ activeStat: res.sport_hitting_tm.queryResults.row});
    console.log(this.state.activeStat);
    
    }


    render() {
       
        const stat= this.state.activeStat;
        
        
        return(
            <div className="container" style={{position: 'absolute', left: '50%', top: '20%',
            transform: 'translate(-40%, -50%)'}}>
            
               <div className="active-recipe">
                <h1 className="active-recipe__title">Player Information</h1>
               <h3 className="active-recipe__title">{stat.season}</h3>
               <h4 className="active-recipe__publisher">
                   Team: <span className="active-recipe__publisher span">{stat.team_full}</span>
               </h4>
               <h5 className="active-recipe__publisher">
               League: <span className="active-recipe__publisher span">{stat.league_short}</span>
               </h5>
               <p className="active-recipe__publisher">
               Average: <span className="active-recipe__publisher span">{stat.avg}</span>
               </p>
               <p className="active-recipe__publisher">
               Homeruns: <span className="active-recipe__publisher span">{stat.hr}</span>
               </p>
               <p className="active-recipe__publisher">
               Slugging: <span className="active-recipe__publisher span">{stat.slg}</span>
               </p>
               <button className="active-recipe__button">
                   <Link to="/">Go Home</Link>
                </button>
           </div>
           </div>
           
        )
    }
}

export default Stat;
