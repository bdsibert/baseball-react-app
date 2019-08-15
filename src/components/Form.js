import React from 'react'

const Form = props => (
        <form onSubmit={props.getProfile} style={{ marginBottom:"4rem"}}>
            <input className="form__input" type="text" name="playerSearch" placeholder="Enter Player's Name Here"/>
            <button className="form__button">Search</button>
        </form>
);

export default Form;
