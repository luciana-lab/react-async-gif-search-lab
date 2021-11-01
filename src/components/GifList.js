import React from 'react';

function GifList({ display }) {
    // console.log(display)
    // debugger
    return (
        <ul>
            {display.map(link => <li><img src={link} width="300" /></li>)}
        </ul>
    )
}

export default GifList;