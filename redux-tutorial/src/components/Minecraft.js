import React from 'react';

const Minecraft = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__item">
                <img src="images/diamond.png" alt="" />
                <button>Mine</button>
            </div>
            <div className="wrapper__item">
                <img src="../images/diamond.png" alt="" />
                <span>{ /* incrementing number */}</span>
            </div>
        </div>
    )
}

export default Minecraft;