import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Profiles from'./components/Profiles';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    profiles: []
  }
  getProfile = async (e) => {
    const playerSearch=e.target.elements.playerSearch.value;
    e.preventDefault();
    const api_call= await fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='${playerSearch}%25'`);
    const data = await api_call.json();
    
    if(data.search_player_all.queryResults.totalSize <=1){
    this.setState({
      profiles: [data.search_player_all.queryResults.row]
    });
    }
    
    else
    this.setState({
      profiles: data.search_player_all.queryResults.row  
    });
    //console.log(this.state.profiles);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("profiles");
    const profiles=JSON.parse(json);
    this.setState({profiles});
  }
  componentDidUpdate = () => {
    const profiles = JSON.stringify(this.state.profiles);
    localStorage.setItem("profiles", profiles);
  }
  
  
  render(){
    return (
      <div className="App">
        <NavBar />
          <Form getProfile={this.getProfile}/>
          <Profiles profiles={this.state.profiles} />
      </div>
  );
}
}


export default App;