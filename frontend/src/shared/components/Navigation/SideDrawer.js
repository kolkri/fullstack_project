import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = (props) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition 
      in={props.show} 
      timeout={200} 
      classNames="slide-in-left" 
      mountOnEnter 
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside 
        className='side-drawer' 
        ref={nodeRef}
        onClick={props.onClick}
        >{props.children}</aside>
    </CSSTransition>
  );
};

export default SideDrawer;