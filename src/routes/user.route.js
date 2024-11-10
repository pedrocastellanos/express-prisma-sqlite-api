import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/users", async (req, res) => {
    const users = await prisma.user.findMany()
    return res.json({
        users
    })
})

router.get("/users/:id", async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!user) return res.json({ error: "User not found" })
    return res.json({ user })
})

router.post("/users", async (req, res) => {
    const user = await prisma.user.create({
        data: req.body
    })
    return res.json({
        message: "User created",
        user
    })
})

router.put("/users/:id", async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })
    return res.json({
        message: "User updated",
        user
    })
})

router.delete("/users/:id", async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!user) return res.json({ error: "User not found" })
    return res.json({
        message: "User deleted",
        user
    })
})

export default router