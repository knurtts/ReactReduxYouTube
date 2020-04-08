import React from 'react';
import {connect} from 'react-redux';

const Minecraft = ({diamonds}) => {
    return (
        <div className="wrapper">
            <div className="wrapper__item">
                <img src={require("../images/pickaxe.png")} alt="" />
                <button>Mine</button>
            </div>
            <div className="wrapper__item">
                <img src={require("../images/diamond.png")} alt="" />
                <span className="num">{diamonds}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        diamonds: state.diamond.diamonds
    };
};

export default connect(mapStateToProps, null)(Minecraft);