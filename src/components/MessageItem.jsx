import React from 'react';

const MessageItem = ({ message }) => (
  <div className='chat'>
    <div className='username ' href='#'>
      {message.username}
    </div>
    <div className='text'>{message.text}</div>
  </div>
);

export default MessageItem;
