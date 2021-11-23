const db = require('../db')

class PostController {

    async CreatePost(req, res) {
        console.log(req)
        const {title, content, user_id} = req.body
        const post = await db.query('INSERT into posts (title, content, user_id) values ($1, $2, $3) RETURNING *',
            [title, content, user_id])
        res.json(post.rows[0])


    }

    async GetPostByUser(req, res) {
        console.log(req.query)
        const id = req.query.user_id
        const post = await db.query('SELECT * from posts where user_id=$1', [id])
        res.json(post.rows)

    }
}

module.exports = new PostController()