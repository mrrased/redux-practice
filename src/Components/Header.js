import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.cardData.length}</h1>
        </div>
    );
};

export default Header;