import React from 'react';
import './UserItem.css'
function Useritem(props) {
    const clickHandler = () => {
        props.ondelete(props.id);

    }
    return (

        <li className='list' onClick={clickHandler}>
            {props.children
            }
        </li>
    );
}

export default Useritem;
