import React, { useState } from 'react';

const buttons = (props) => {
  const [isActive, setIsActive] = useState(props.on); // Use a state variable

  const handleClick = () => {
    setIsActive(!isActive);
    props.toggleBorder(props.id);
  };

  const styles = {
    border: `${props.on ? '2px solid white' : '1px solid gray'}`,
    fontWeight: `${props.on ? '600' : '400'}`
  };



  return (
    <button
      className='d-flex justify-content-between align-items-center all-button'
      onClick={() => {
        props.toggleBorder(props.id)}
      }
      style={styles}
    >
      <p>{props.label}</p>
      <p>{props.price}</p>
    </button>
  );
};

export default buttons;