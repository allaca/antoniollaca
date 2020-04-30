import React, { useState } from 'react';
import './index.scss';

enum ButtonType {
  White="white",
  Gold="gold"
}

interface ButtonProp {
  text: String;
  href: string;
  type: ButtonType;
}

export default function Button(props: ButtonProp) {
  const [state, setState] = useState(props);
  
  return (
    <a href={state.href} className={`button ${state.type}`}>
      {state.text}
    </a>
  );

};

export {ButtonType, Button};
