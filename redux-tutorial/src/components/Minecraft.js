import React from 'react';
import {connect} from 'react-redux';
import { minedDiamond } from "../store/diamond/actions";

const Minecraft = ({diamonds, minedDiamond}) => {

    const handleClick = () => {
        minedDiamond(diamonds++);
    };

    return (
        <div className="wrapper">
            <div className="wrapper__item">
                <img src={require("../images/pickaxe.png")} alt="" />
                <button onClick={handleClick}>Mine</button>
            </div>
            <div className="wrapper__item">
                <img src={require("../images/diamond.png")} alt="" />
                <span className="num" >{diamonds}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        diamonds: state.diamond.diamonds
    };
};

const mapDispatchToProps = {
    minedDiamond
};

export default connect(mapStateToProps, mapDispatchToProps)(Minecraft);