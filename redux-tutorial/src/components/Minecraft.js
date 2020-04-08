import React from 'react';

const Minecraft = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__item">
                <img src={require("../images/pickaxe.png")} />
                <button>Mine</button>
            </div>
            <div className="wrapper__item">
                <img src={require("../images/diamond.png")} />
                <span>{ /* incrementing number */}</span>
            </div>
        </div>
    );
}

export default Minecraft;