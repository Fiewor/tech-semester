import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as constants from '../constants';
import "../Home.css"

const Home = () => {
    const [text, setText] = useState("")

    const question = (event) => {
        setText(event.target.value)
    }

    const postQuestion = (event) => {
        event.preventDefault();
        axios
            .post(`${constants.URL}/api/question/`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return(
        <div className="ask-form">
            <div className="profile">
                {/* <img src=""></img> */}
                <p>Abdusalam Fatai</p>
            </div>
            <div className="question-box">
                <h2>Ask your Question!</h2>
                <textarea name="" id="" cols="30" rows="20" onChange={question}></textarea>
                <button onClick={postQuestion}>Post your question</button>
            </div>
        </div>
    )
}

export default Home