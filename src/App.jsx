import React from 'react';
import Fetch from './lib/fetcher';
import ChooseRoom from './components/ChooseRoom.jsx';
import Form from './components/AddForm.jsx';
import MessageList from './components/MessageList.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: add state here
      user: '',
      messageList: [],
      roomList: [],
      currentRoom: '',
    };
  }
  getDat() {
    Fetch.readAll((data) => {
      this.setState({
        roomList: [
          ...data.reduce((room, message) => {
            room.add(message.room);
            return room;
          }, new Set()),
        ],
        messageList: data,
      });
    });
  }
  componentDidMount() {
    const user = prompt('Please Enter a Username', 'name...');
    this.setState({ user });
  }
  selectRoom(e) {
    e.preventDefault();
    this.setState({
      currentRoom: e.target.value,
    });
  }
  render() {
    return (
      <main className='main-ct'>
        <h1>Re-Chatter</h1>
        <ChooseRoom
          roomList={this.state.roomList}
          selectRoom={this.selectRoom}
        />
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
        <MessageList
          messageList={this.state.messageList}
          currentRoom={this.state.currentRoom}
        />
      </main>
    );
  }
}

export default App;
