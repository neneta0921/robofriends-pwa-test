import * as React from 'react';

type Props = {
  children?: JSX.Element
}
const Scroll = (props: Props) => {
  return (
    <div style={{ border: '1px solid black' }}>
      {props.children}
    </div>
  )
}

export default Scroll