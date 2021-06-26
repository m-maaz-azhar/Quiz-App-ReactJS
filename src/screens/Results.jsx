import React from 'react'
import AppBar from '../components/AppBar'
import {Link} from 'react-router-dom'

function Results() {
    let TotalScore = (sessionStorage.getItem("NoOfQuestions") * 10);
    let EarnedScore = sessionStorage.getItem("QuizScore");
    return (
        <div className="Results">
            <AppBar PageTitle="RESULT"/>
            <div id="content">
                <h1> {EarnedScore >= TotalScore / 2 ? "🔥 CONGRATULATIONS" : "😔 YOU ARE FAILED, BETTER LUCK NEXT TIME" }</h1>
                <h2><em>Your Score is {EarnedScore} out of {TotalScore}</em></h2>
                <br/>
                <Link to="/">Retake Quiz ?</Link>
            </div>
        </div>
    )
}

export default Results
