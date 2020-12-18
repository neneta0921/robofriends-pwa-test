import * as React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ border: '1px solid black' }}>
      {props.children}
    </div>
  )
}

export default Scroll