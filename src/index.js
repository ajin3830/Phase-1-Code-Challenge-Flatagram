// write your code here
// 1. See the image including its title, likes and comments 

// 2. Click on the heart icon to increase image likes on the page. 
// No persistence is needed.

// 3. Add a new comment to the page when the comment form is submitted. 
// No persistence is needed.

function fetchImage () {
    fetch('http://localhost:3000/images/1')
    .then(response => response.json())
    .then(data => renderImage(data))
}

function renderImage (image) {
// title
    document.querySelector("#card-title").textContent = image.title
// image
    document.querySelector("#card-image").src = image.image
}

fetchImage()

function fetchComment () {
    fetch('http://localhost:3000/comments')
    .then(response => response.json())
    .then(data => renderComment(data))
}

const commentsList = document.querySelector("#comments-list")
function renderComment(comments) {
    comments.forEach(comment => {
        const li = document.querySelector("li")
        li.textContent = comment.content
        commentsList.appendChild(li)
        // console.log(comment)
    })
}

fetchComment ()

const button = document.querySelector("#like-button")
const likeCount = document.querySelector("#like-count")
let numLikes = 0

button.addEventListener("click", (e) => {
    e.preventDefault()
    numLikes += 1
    likeCount.textContent = `${numLikes} likes`
    console.log(likeCount)
    
})

const form = document.querySelector("#comment-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = e.target['comment'].value
    const li = document.createElement("li")
    li.textContent = newComment
    commentsList.appendChild(li)
    console.log(newComment)
})



