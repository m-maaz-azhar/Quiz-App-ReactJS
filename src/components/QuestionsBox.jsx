import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TimeUP from './TimeUP';
import Countdown from 'react-countdown';

function QuestionsBox() {
   let questions = require('../data.json');
    const [questionCount, SetQuestionCount] = useState(0)
    const [SelectedValue, SetSelectedValue] = useState("")
    const [QuizScore, SetQuizScore] = useState(0)

    sessionStorage.setItem("NoOfQuestions", questions.length)

    let history = useHistory();
    let next = () => {
        if (SelectedValue === questions[questionCount].answer) {
            SetQuizScore(QuizScore + 10);
        }
        sessionStorage.setItem("QuizScore", QuizScore)
        if (questionCount === questions.length - 1) {
            history.push("/results")
        }
        else {
            SetQuestionCount(questionCount + 1);
            console.log(questionCount)
        }
    }
    return (
        <div className="wrapper">
            <div className="quiz">
                <div className="quizHeader">
                    <div className="quizUser">
                        <h2 id="greetings">Welcome&nbsp;{sessionStorage.getItem("username")}</h2>
                    </div>
                    <div style={{marginRight:"20px",color:"white"}}>
                        <Countdown date={Date.now() + 30000}>
                            <TimeUP />
                        </Countdown>
                    </div>

                </div>
                <br />
                <div className="quizBody">
                    <div id="questions">

                        <h2>{questions[questionCount].question}</h2>

                        <ul className="optionGroup">
                            {questions[questionCount].options.map((option, index) => {
                                return <li onClick={() => SetSelectedValue(option)} key={index} className="option">{option}</li>
                            })}
                        </ul>
                    </div>
                    <button className="btnNext" onClick={next}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default QuestionsBox
