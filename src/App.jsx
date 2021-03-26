import React from 'react';
import Fetch from './lib/fetcher';
import ChooseRoom from './components/ChooseRoom.jsx';
import Form from './components/AddForm.jsx';
import MessageList from './components/MessageList.jsx';
// import sam÷pleData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messageList: [],
      roomList: [],
      currentRoom: '',
    };
    this.selectRoom = this.selectRoom.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
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
    const username = prompt('Please Enter a Username', 'name...');
    this.setState({ username });
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

  addMessage(text) {
    const message = {
      username: this.state.username,
      room: this.state.currentRoom || 'Lobby',
      text,
    };
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
