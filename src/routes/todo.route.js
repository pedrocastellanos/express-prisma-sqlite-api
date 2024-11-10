import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/todos", async (req, res) => {
    const todos = await prisma.todo.findMany()
    return res.json({
        todos
    })
})

router.get("/todos/:id", async (req, res) => {
    const todo = await prisma.todo.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!todo) return res.json({ error: "Todo not found" })
    return res.json({ todo })
})

router.post("/todos", async (req, res) => {
    const todo = await prisma.todo.create({
        data: req.body
    })
    return res.json({
        message: "Todo created",
        todo
    })
})

router.put("/todos/:id", async (req, res) => {
    const todo = await prisma.todo.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })
    return res.json({
        message: "Todo created",
        todo
    })
})

router.delete("/todos/:id", async (req, res) => {
    const todo = await prisma.todo.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!todo) return res.json({ error: "Todo not found" })
    return res.json({
        message: "Todo deleted",
        todo
    })
})

export default router