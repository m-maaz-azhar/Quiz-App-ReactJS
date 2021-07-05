import React from 'react'
import { useHistory } from 'react-router-dom'

function StartQuiz() {
    let history = useHistory();

    let gotoQuiz = () => {
        if (sessionStorage.getItem("username")) {
            history.push("/quiz");
        }
        else {
            alert("Please Enter A Valid Username")
        }
    }
    let getUserName = (e) => {
        let username = e.target.value;
        sessionStorage.setItem("username", username);
    }

    return (
        <div className="wrapper">
            <div className="welcomeText">
                <form className="welcomeForm" name="welcomeForm">
                    <input type="text" placeholder="Please Enter Your Name Here!" name="username" onChange={getUserName} />
                    <button type="submit" onClick={gotoQuiz}>START QUIZ</button>
                </form>
            </div>
        </div>
    )
}

export default StartQuiz
