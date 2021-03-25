import React from 'react';

const ChooseRoom = ({ roomList, selectRoom }) => (
  <div>
    <select name='' id='' onChange={selectRoom}>
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
