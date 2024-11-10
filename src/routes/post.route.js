import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/posts", async (req, res) => {
    const posts = await prisma.post.findMany()
    return res.json({
        posts
    })
})

router.get("/posts/:id", async (req, res) => {
    const post = await prisma.post.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!post) return res.json({ error: "Post not found" })
    return res.json({ post })
})

router.get("/posts/:id/comments", async (req, res) => {
    const comments = await prisma.comment.findMany({
        where: {
            postId: parseInt(req.params.id)
        }
    })
    if (!comments) return res.json({ error: "Comments not found" })
    return res.json({
        comments
    })
})

router.post("/posts", async (req, res) => {
    /* console.log(req.body) */
    const post = await prisma.post.create({
        data: req.body
    })
    return res.json({
        message: "Post created",
        post
    })
})

router.put("/posts/:id", async (req, res) => {
    const post = await prisma.post.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })
    return res.json({
        message: "Post created",
        post
    })
})

router.delete("/posts/:id", async (req, res) => {
    const post = await prisma.post.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!post) return res.json({ error: "Post not found" })
    return res.json({
        message: "Post deleted",
        post
    })
})

export default router