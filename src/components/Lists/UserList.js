import React from 'react';
import Useritem from '../Item/Useritem';
import './UserList.css'

function UserList(props) {
    return <ul className='listcontainer'>

        {
            props.userdata.map((elem) => {
                return (
                    <Useritem key={elem.id} id={elem.id} ondelete={props.ondelete}>
                        {elem.username}&nbsp;
                        ({elem.age} Year Old)

                    </Useritem>);

            })
        }
    </ul>;
}

export default UserList;
