import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';

function QuestionsBox() {

    const state = useSelector(state => state)
    let questions = state.question;

    const [questionCount, SetQuestionCount] = useState(0)
    const [SelectedValue, SetSelectedValue] = useState("")
    const [QuizScore, SetQuizScore] = useState(0)

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    sessionStorage.setItem("NoOfQuestions", questions.length)

    let history = useHistory();

    let next = () => {
        if (SelectedValue === questions[questionCount].answer) {
            SetQuizScore(10 + QuizScore);
        }
        sessionStorage.setItem("QuizScore", QuizScore)
        if (questionCount === questions.length - 1) {
            history.push("/results")
        }
        else {
            SetQuestionCount(questionCount + 1);
        }
    }

    useEffect(() => {
        let answersTimer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(answersTimer)
                    history.push("/results")
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(answersTimer);
        };
    });

    return (
        <div className="wrapper">
            <div className="quiz">
                <div className="quizHeader">
                    <div className="quizUser">
                        <h2 id="greetings">Welcome&nbsp;{sessionStorage.getItem("username")}</h2>
                    </div>
                    <div style={{ marginRight: "20px", color: "white" }}>

                        {minutes === 0 && seconds === 0
                            ? null
                            : <h3> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
                        }
                    </div>

                </div>
                <br />
                <div className="quizBody">
                    <div id="questions">
                        <h2>{questions[questionCount].question}</h2>
                        <div className="optionGroup">
                            {questions[questionCount].options.map((option, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" id={index} name="option" onClick={() => SetSelectedValue(option)} key={index} className="option" />
                                        <label htmlFor={index}>{option}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button className="btnNext" onClick={next}>Next</button>
                </div>
            </div>
        </div>

    )
}

export default QuestionsBox
