// write your code here
// See the image including its title, likes and comments 

function fetchCard () {
    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(data => renderCard(data))
}

document.querySelector("#card-title").textContent = 'Woofing those bugs away'
document.querySelector("#card-image").src = './assets/coder-dog.png'

function renderCard(images) {
    images.forEach( image=> {
        const content = document.querySelector("#comments-list")
        const li = document.createElement('li')
        li.textContent = comments.content
        // FIX IT !
    })
}
const button = document.querySelector("#like-button")

button.addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector("#like-count.likes").textContent += 1 
    // string + number!
})

const form = document.querySelector("#comment-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = { comment: e.target['newComment'].value}
    renderCard([newComment])
})

renderCard()

fetchCard()

// 2. Click on the heart icon to increase image likes on the page. 
// No persistence is needed.

// 3. Add a new comment to the page when the comment form is submitted. 
// No persistence is needed.