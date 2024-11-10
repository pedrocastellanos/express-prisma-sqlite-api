import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/photos", async (req, res) => {
    const photos = await prisma.photo.findMany()
    return res.json({
        photos
    })
})

router.get("/photos/:id", async (req, res) => {
    const photo = await prisma.photo.findFirst({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!photo) return res.json({ error: "Photo not found" })
    return res.json({ photo })
})

router.post("/photos", async (req, res) => {
    const photo = await prisma.photo.create({
        data: req.body
    })
    return res.json({
        message: "Photo created",
        photo
    })
})

router.put("/photos/:id", async (req, res) => {
    const photo = await prisma.photo.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: req.body
    })
    return res.json({
        message: "Photo created",
        photo
    })
})

router.delete("/photos/:id", async (req, res) => {
    const photo = await prisma.photo.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    if (!photo) return res.json({ error: "Photo not found" })
    return res.json({
        message: "Photo deleted",
        photo
    })
})

export default router