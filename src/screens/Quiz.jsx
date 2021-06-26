import React from 'react'
import AppBar from '../components/AppBar'
import QuestionsBox from '../components/QuestionsBox'
import Footer from '../components/Footer'

function Quiz() {
    return (
        <div>
            <AppBar PageTitle="QUIZ"/>
            <QuestionsBox/>
            <Footer/>
        </div>
    )
}

export default Quiz
