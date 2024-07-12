import React, { useState } from 'react'

export default function TextForm(props) {

    let buttonClickUpper=()=>{
        setText(text.toUpperCase())
    }

    let buttonClickLower=()=>{
        setText(text.toLowerCase())
    }

    let buttonClickClearText=()=>{
        setText('')
    }
    
    let handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText]=useState("")

    return (
        <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={buttonClickUpper} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={buttonClickLower} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={buttonClickClearText}>Clear Text</button>
        </div>
        </>
    )
}
