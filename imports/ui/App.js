import React from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TitleBar title={this.props.title}/>
        <div className="wrapper wrapper__flex">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
