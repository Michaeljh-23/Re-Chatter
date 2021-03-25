import React from 'react';

const MessageItem = ({ message }) => (
  <div>
    <div class='username ' href='#'>
      {message.username}
    </div>
    <div class='text'>{message.text}</div>
  </div>
);

export default MessageItem;
