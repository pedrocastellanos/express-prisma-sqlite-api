import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/comments", async (req, res) => {
    const {postId} = req.query
    if(postId){
        const comments = await prisma.comment.findMany({
            where: {
                postId: parseInt(postId)
            }
        })
        if(!comments) return res.json({error: "Comments not found"})
        return res.json({comments})
    }
    
    const comments = await prisma.comment.findMany()
    return res.json({
        comments
    })
})

router.get("/comments/:id", async (req, res) => {
    const comment = await prisma.comment.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!comment) return res.json({ error: "Comment not found" })
    return res.json({ comment })
})

router.post("/comments", async (req, res) => {
    const comment = await prisma.comment.create({
        data: req.body
    })
    return res.json({
        message: "Comment created",
        comment
    })
})

router.put("/comments/:id", async (req, res) => {
    const comment = await prisma.comment.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })
    return res.json({
        message: "Comment created",
        comment
    })
})

router.delete("/comments/:id", async (req, res) => {
    const comment = await prisma.comment.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!comment) return res.json({ error: "Comment not found" })
    return res.json({
        message: "Comment deleted",
        comment
    })
})  

export default router