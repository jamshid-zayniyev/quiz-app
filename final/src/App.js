import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: "Const (constanta)  qanday qiymat bo'ladi ?",
			answerOptions: [
				{ answerText: "Darajaga ko'taradigan qiymat", isCorrect: false },
				{ answerText: "O'zgarmas qiymat", isCorrect: true },
				{ answerText: "So'z bilan ishlaydi", isCorrect: false },
				{ answerText: 'Butun sonli qiymat', isCorrect: false },
			],
		},
		{
			questionText: "cout ni vazifasi nima ?",
			answerOptions: [
				{ answerText: "Kiritish operatori", isCorrect: false },
				{ answerText: "Chiqarish operatori", isCorrect: true },
				{ answerText: "Commentga olish", isCorrect: false },
				{ answerText: "To'g'ri javob yo'q", isCorrect: false },
			],
		},
		{
			questionText: "cin qiymat chiqarish uchunmi......?",
			answerOptions: [
				{ answerText: "Yo'q darajaga ko'tarish", isCorrect: false },
				{ answerText: "Ha", isCorrect: false },
				{ answerText: "Ha, hisoblash uchun ham", isCorrect: false },
				{ answerText: "Yo'q qiymat kiritish uchun", isCorrect: true },
			],
		},
		{
			questionText: "&& bu qanday amal ?",
			answerOptions: [
				{ answerText: "(yoki,or) amali", isCorrect: false },
				{ answerText: "(va,and) amali", isCorrect: true },
				{ answerText: "ko'paytirish amali", isCorrect: false },
				{ answerText: "bo'lish amali", isCorrect: false },
			],
		},
		{
			questionText: "|| bu qanday amal",
			answerOptions: [
				{ answerText: "(yoki,or) amali", isCorrect: true },
				{ answerText: "(va,and) amali", isCorrect: false },
				{ answerText: "ko'paytirish amali", isCorrect: false },
				{ answerText: "bo'lish amali", isCorrect: false },
			],
		},
		{
			questionText: `int main(){  
				int  a = 9; 
				if(a<0){ 
					 cout<< "Hello world"; } 
				else{  
					cout<< "Hello global"; }  
				return 0 ;  
			}`,
			answerOptions: [
				{ answerText: "Xatolik bor", isCorrect: false },
				{ answerText: "Hello world", isCorrect: false },
				{ answerText: "Hello global", isCorrect: true },
				{ answerText: "Hech nima chiqmaydi", isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<div className='section'>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
