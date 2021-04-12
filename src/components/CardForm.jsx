import React, { useState } from 'react';

const CardForm = (props) => {
    const [cardName, setCardName] = useState("");
    const [cardImg, setCardImg] = useState("");
    const [cardHolo, setCardHolo] = useState(false);

    const addNewCard = (e) => {
        e.preventDefault();
        props.makeCard({
            Name: cardName,
            Img: cardImg,
            Holo: cardHolo,
            Own: false
        })
        setCardName("");
        setCardImg("");
        setCardHolo(false);
    }
    return(
        <>
            <h3>Add A Card</h3>
            <form onSubmit={addNewCard}>
                <div class="form-group">
                    <label>Card Name</label>
                    <input type="text" className="nes-input is-success" onChange={(e)=>setCardName(e.target.value)}value={cardName}></input>
                </div>
                <div class="form-group">
                    <label>Card Image (url please)</label>
                    <input type="text" className="nes-input is-success" onChange={(e)=>setCardImg(e.target.value)}value={cardImg}></input>
                </div>
                <div class="form-group">
                    <label>Holographic?</label>
                    <input type="checkbox" checked={cardHolo} onChange={(e)=>setCardHolo(e.target.checked)} className="form-control"></input>
                </div>
                <button type="submit" className="nes-btn is-success">Submit</button>
            </form>
        </>
    );
}

export default CardForm;