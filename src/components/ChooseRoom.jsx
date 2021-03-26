import React from 'react';

const ChooseRoom = ({ roomList, selectRoom }) => (
  <div>
    <label htmlFor='select'>Rooms: </label>
    <select name='' id='select' onChange={selectRoom}>
      <option value=''>All</option>
      {roomList.map((room, i) => (
        <option key={`${room}${i}`} value={room}>
          {room}
        </option>
      ))}
    </select>
  </div>
);

export default ChooseRoom;
