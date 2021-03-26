import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messageList, currentRoom }) => (
  <div id='chats'>
    {messageList.map((message, i) =>
      message.room === currentRoom || currentRoom === '' ? (
        <MessageItem key={`${message}${i}`} message={message} />
      ) : null
    )}
  </div>
);
export default MessageList;
