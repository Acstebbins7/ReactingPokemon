import React from 'react';

const imgStyle = {
    width: '150px'
}

const cardStyle = {
    display: 'inline-block',
    width: '300px',
    padding: '20px'
}

const Cards = (props) => {
    return(
        <div style={cardStyle}>
            <img style={imgStyle} src={props.myCard.Img} alt="Pokemon Card" />
            <hr/>
            <h5>{props.myCard.Name}</h5>
            <h6>{props.myCard.Holo ? <em>Holographic</em> : <em>Standard</em>}</h6>
            <h6>Collected?</h6>
            <hr/>
        </div>
    );
}

export default Cards;