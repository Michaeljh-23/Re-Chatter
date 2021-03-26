import React from 'react';

// TODO: destructor your props
const ChooseRoom = (props) => (
  <div>
    <label htmlFor='select'>Rooms: </label>
    <select
      id='select'
      // TODO: add change handler
    >
      <option value=''>All</option>
      {/*
        TODO: add rest of room list <options> programmatically 
       */}
    </select>
  </div>
);

export default ChooseRoom;
