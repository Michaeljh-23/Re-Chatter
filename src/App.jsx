import React from 'react';
import Fetch from './lib/fetcher';
import ChooseRoom from './components/ChooseRoom.jsx';
import Form from './components/AddForm.jsx';
import MessageList from './components/MessageList.jsx';
import sampleData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      messageList: [],
      roomList: [],
      currentRoom: '',
    };
    this.selectRoom = this.selectRoom.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.addRoom = this.addRoom.bind(this);
  }

  getData() {
    // Fetch.readAll((data) => {
    this.setState({
      roomList: [
        ...sampleData.reduce((room, message) => {
          room.add(message.room);
          return room;
        }, new Set()),
      ],
      messageList: sampleData,
    });
    // });
  }

  componentDidMount() {
    const user = prompt('Please Enter a Username', 'name...');
    this.setState({ user });
    this.getData();
  }
  selectRoom(e) {
    e.preventDefault();
    this.setState({
      currentRoom: e.target.value,
    });
  }

  addRoom(room) {
    this.setState({
      roomList: [...this.state.roomList, room],
    });
  }

  addMessage(message) {
    Fetch.create(message, this.getData);
  }
  render() {
    return (
      <main className='main-ct'>
        <h1>Re-Chatter</h1>
        <ChooseRoom
          roomList={this.state.roomList}
          selectRoom={this.selectRoom}
        />
        <Form submit={this.addRoom} name='Room' />
        <Form submit={this.addMessage} name='Message' />
        <MessageList
          messageList={this.state.messageList}
          currentRoom={this.state.currentRoom}
        />
      </main>
    );
  }
}

export default App;
