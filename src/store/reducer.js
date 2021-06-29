const INITIAL_STATE = {
    question: [{
            "id": 0,
            "question": "What is the full form of HTML",
            "answer": "Hyper Text Markup Language",
            "options": [
                "Hyper Test Make up Language",
                "Hyper Text Markup Language",
                "Hyper Text Made up Language",
                "None of these"
            ]
        },
        {
            "id": 1,
            "question": "What is the full form of RAM ?",
            "answer": "Random Access Memory",
            "options": [
                "Random Access Memory",
                "Randomely Access Memory",
                "Run Aceapt Memory",
                "None of these"
            ]
        },
        {
            "id": 2,
            "question": "What is the full form of CPU?",
            "answer": "Central Processing Unit",
            "options": [
                "Central Program Unit",
                "Central Processing Unit",
                "Central Preload Unit",
                "None of these"
            ]
        },
        {
            "id": 3,
            "question": "What is the full form of AI",
            "answer": "Artificial Intelligence",
            "options": [
                "Adobe Illustrator",
                "Available Intern",
                "Artificial Intelligence",
                "Available In"
            ]
        },
        {
            "id": 4,
            "question": "What is the full form of E-mail",
            "answer": "Electronic Mail",
            "options": [
                "Electronic Mail",
                "Electric Mail",
                "Engine Mail",
                "None of these"
            ]
        }
    ]
}

const reducer = (state = INITIAL_STATE) => {
    return state;
}

export default reducer;