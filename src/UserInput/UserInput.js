import React from 'react';

const UserInput = (props) => {
    const style = {
        display: 'inline-block',
        color: '#cfcfcf',
        backgroundColor: '#3c3c3c',
        padding: '2px 0px 2px 7px',
        width: '100px',
        boxSizing: 'border-box',
        border: 'none'
        };


    return (
        <div>
            <input  style={style} type="text" onChange={props.changed} value={props.value}/>
        </div>
    );
}

export default UserInput;