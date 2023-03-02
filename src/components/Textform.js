import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase ", "success")
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase ", "success")
    }
    const handleOnChange = (event) => {
        // console.log("On change ")
        setText(event.target.value)
    }
    const handleclear = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("The text area is clear", "success")
    }
    const handlecopy = () => {
        let text = document.getElementById('my-Box');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("The text is copied", "success")
    }
    const handlespace = () => {
        let newText = text.replace(/\s+/g, ' ');;
        // copy from net
        setText(newText);
        props.showAlert("The blank space is removed", "success")
    }
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1 style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="my-Box" rows="15" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(42 44 80)', color: props.mode === 'light' ? 'grey' : 'white' }} ></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleclear}>Clear Text</button>
                <button className="btn btn-primary mx-3 my-1" onClick={handlecopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handlespace}>Remove spaces</button>
            </div>
            <div className="container my-2">
                <h2 style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>Your text summary</h2>
                <p style={{ color: props.mode === 'light' ? 'grey' : 'white' }}> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charcaters</p>
                <p style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? 'grey' : 'white' }}>{text.length > 0 ? text : "Enter your text"}</p>
            </div>

        </>
    )
}
