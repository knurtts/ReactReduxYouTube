import React from 'react';
import {connect} from 'react-redux';
import { minedDiamond, getData } from "../store/diamond/actions";
import { useEffect } from 'react';

const Minecraft = ({ diamonds, minedDiamond, names, loading, error, getData }) => {
    
    
    useEffect(() => {
        getData();
    }, []);
    
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
            {loading ? 
                (<h1>Loading...</h1>) : 
                (names.map((item) => <p className="num" key={item.id}>{item.name}</p>))
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        diamonds: state.diamond.diamonds,
        loading: state.diamond.loading,
        error: state.diamond.error,
        names: state.diamond.names
    };
};

const mapDispatchToProps = {
    minedDiamond,
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Minecraft);