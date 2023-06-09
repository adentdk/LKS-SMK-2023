const playBoard = document.querySelector('.play-board')
const scoreElement = document.querySelector('.score')
const highScoreElement = document.querySelector('.high-score')
const controls = document.querySelector('controls i')

let gameOver = false
let foodX, foodY
let snakeX= 5, snakeY = 5
let velocityX = 0, velocityY = 0
let snakeBody = []
let setIntervalId;
let score = 0;

// get high score from localstorage
let highScrore = localStorage.getItem('high-score') || 0
highScoreElement.innerHTML = `High Score: ${highScrore}`

// Pass a random between 1 and 30 as food position
const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1
  foodY = Math.floor(Math.random() * 30) + 1
}

const handleGameOver = () => {
  clearInterval(setIntervalId)
}