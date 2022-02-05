import React, {useState, useEffect} from "react";
import axios from 'axios';
import * as constants from '../constants'

const Home = () => {
    const [text, setText] = useState("")

    const question = (event) => {
        setText(event.target.value)
    }

    const post = (event) => {
        event.preventDefault();
        axios
            .post(`${constants.URL}/api/question/`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return(
        <div>
            <div class="profile">
                {/* <img src=""></img> */}
                <p>Abdusalam Fatai</p>
            </div>
            <h2>Ask your Question!</h2>
            <textarea name="" id="" cols="30" rows="10" onChange={question}></textarea>
            <button onClick={post}>Post your question</button>
        </div>
    )
}

export default Home