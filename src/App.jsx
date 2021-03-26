import React from 'react';
import Fetch from './lib/fetcher';
import ChooseRoom from './components/ChooseRoom.jsx';
import Form from './components/AddForm.jsx';
import MessageList from './components/MessageList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      messageList: [],
      roomList: [],
      currentRoom: '',
    };
    // TODO: add functional binding here
  }

  getData() {
    // TODO: use Fetch.readAll to request message list data from API
    // create room list from data room list should contain unique values (case sensitive)
    // add message list and room list to state
  }

  componentDidMount() {
    // TODO: use prompt() to get username and set it in this.state
    // fetch initial data
    // HINT: don't re-write getData logic
  }
  selectRoom(e) {
    // TODO: write function to handle changes to the selected room
  }

  addRoom(room) {
    // TODO: write function that adds new room to roomList
    // NOTE: this room will only be save permanently if a message is posted in that room
  }

  addMessage(text) {
    // TODO: use Fetch.create write function that adds a new message
    // HINT: create does not return data so think about how you can update the messageList in state to show the new message
  }
  render() {
    return (
      <main>
        <div id='main'>
          <h1>Re-Chatter</h1>
          <ChooseRoom
          // TODO: pass props
          />
          {/* 
        For out add room and add message form we are using the same Form component 
        and modularizing it by passing different props.
        This is a really powerful react design paradigm that allows developers to write DRYer code.
        Really take the time to understand what is going on here and in AddForm.jsx
        */}
          <Form
            name='Room'
            // TODO: pass addRoom
          />
          <Form
            name='Message'
            // TODO: pass addMessage
          />
        </div>
        <MessageList
        // TODO: pass props
        />
      </main>
    );
  }
}

export default App;
