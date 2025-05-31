import express from 'express'
const app = express()


const posts = [
    {
        username: "Raja",
        title: "post1"
    },
    {
        username: "Jim",
        title: "post2"
    },
]

app.get('/posts' , (req,res) => {
    res.json(posts);
})

app.listen(3000)