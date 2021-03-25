import React from 'react';
import Fetcher from './lib/fetcher.js';
import Form from './components/AddForm.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: add state here
      user: '',
      messageList: [],
      roomList: [],
      currentRoom: 'Lobby',
    };
  }

  render() {
    return (
      <main className='main-ct'>
        <h1>Re-Chatter</h1>
        <div>Room</div>
        <Form
          submit={(data) => {
            console.log('add room', data);
          }}
          name='Room'
        />
        <Form
          submit={(data) => {
            console.log('add Message', data);
          }}
          name='Message'
        />
      </main>
    );
  }
}

export default App;
