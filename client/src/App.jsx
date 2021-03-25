import React from 'react';
import Fetcher from './lib/fetcher.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: add state here
      user: '',
      messageList: [],
      roomList: [],
    };
  }
  Fetch() {
    Fetcher.readAll((data) => {
      console.log(data);
    });
  }
  render() {
    this.Fetch();
    return (
      <main className='main-ct'>
        <h1>Re-Chatter</h1>
        <div>Room</div>
        <div>Add Room</div>
        <div>Add Massage</div>
      </main>
    );
  }
}

export default App;
