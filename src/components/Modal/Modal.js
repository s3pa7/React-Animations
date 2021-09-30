import React from 'react';

import './Modal.css';
import Transition from "react-transition-group/esm/Transition";
import CSSTransition from "react-transition-group/esm/CSSTransition";
const animationTiming = {
    enter: 400,
    exit:1000
};
const modal = (props) => {

/*    return (
        <Transition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log('onEnter')}
            onEntering={() => console.log('onEntering')}
            onEtered={() => console.log('onEtered')}
            onExit={() => console.log('onExit')}
            onExiting={() => console.log('onExiting')}
            onExited={() => console.log('onExited')}
        >
            {state => {
                const cssClasses =[ 'Modal',
                    state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClose' : null
                ];
            return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
            );
            }}
        </Transition>


);*/

    return (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            /*classNames="fade-slide"*/
            //multiple classes
        classNames={{
            enter:'',
            enterActive:'ModalOpen',
            exit:'',
            exitActive:'ModalClose'
            /*appear:
            appearActive:*/
        }}>
            <div className='Modal'>
                     <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>
        </CSSTransition>

    )
}
export default modal;