import React from 'react';

const Link = ({props}) => {
    return (
        <div>
            <li><a href={props.url}>{props.name}</a></li>
        </div>
    );
};

export default Link;