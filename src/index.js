// write your code here
// 1. See the image including its title, likes and comments 

// 2. Click on the heart icon to increase image likes on the page. 
// No persistence is needed.

// 3. Add a new comment to the page when the comment form is submitted. 
// No persistence is needed.

fetch(`http://localhost:3000/images/1`)
.then(resp => resp.json())
// .then(data => console.log(data)
.then(data => renderDog(data))

const titleLocation = document.querySelector("#card-title")
const titleImg = document.querySelector("#card-image")
const numLikes = document.querySelector("#like-count")
const commentsList = document.querySelector("#comments-list")
const commentForm = document.querySelector("#comment-form")
const likeButton = document.querySelector("#like-button")

function renderDog(data) {
    // console.log(data)
    titleLocation.textContent = data.title
    titleImg.src = data.image
    numLikes.textContent = `${data.likes} likes`
    // numLikes.textContent = data.likes + ' likes'
    // console.log(numLikes)
    commentsList.textContent = ''
    // console.log(data.comments)
    data.comments.forEach(comment => {
        const li = document.createElement('li')
        li.textContent = comment.content
        commentsList.appendChild(li)
        // console.log(comment)
    })
    // console.log(data.likes)
    likeButton.addEventListener('click', () => {
        // console.log('working')
        data.likes = data.likes + 1
        // console.log(data.likes)
        numLikes.textContent = data.likes + ' likes'
    })
}

commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(e)
    const newComment = document.querySelector("#comment").value
    // const newComment = e.target.comment.value    OR
    // const newComment = e.target['comment'].value
    // console.log(newComment)
    const li = document.createElement('li')
    li.textContent = newComment
    commentsList.appendChild(li)
    // console.log(li)

    commentForm.reset()
    
})

// Below is another way for like button click event
// let numOfLikes = 0
// likeButton.addEventListener('click', () => {
//     // console.log("it's working")
//     numOfLikes += 1
//     // console.log(numOfLikes)
//     numLikes.textContent = numOfLikes + ' likes'
// })









// Another way to write the entire code (w 2 fetch requests)

// function fetchImage () {
//     fetch('http://localhost:3000/images/1')
//     .then(response => response.json())
//     .then(data => renderImage(data))
// }

// function renderImage (image) {
// // title
//     document.querySelector("#card-title").textContent = image.title
// // image
//     document.querySelector("#card-image").src = image.image
// }

// fetchImage()

// function fetchComment () {
//     fetch('http://localhost:3000/comments')
//     .then(response => response.json())
//     .then(data => renderComment(data))
// }

// const commentsList = document.querySelector("#comments-list")
// function renderComment(comments) {
//     comments.forEach(comment => {
//         const li = document.querySelector("li")
//         li.textContent = comment.content
//         commentsList.appendChild(li)
//         // console.log(comment)
//     })
// }

// fetchComment ()

// const button = document.querySelector("#like-button")
// const likeCount = document.querySelector("#like-count")
// let numLikes = 0

// button.addEventListener("click", (e) => {
//     e.preventDefault()
//     numLikes += 1
//     likeCount.textContent = `${numLikes} likes`
//     console.log(likeCount)
    
// })

// const form = document.querySelector("#comment-form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let newComment = e.target['comment'].value
//     const li = document.createElement("li")
//     li.textContent = newComment
//     commentsList.appendChild(li)
//     console.log(newComment)
// })



