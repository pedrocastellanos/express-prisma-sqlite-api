import { Router } from "express"
import { prisma } from "../db/db.js"

const router = Router()

router.get("/albums", async (req, res) => {
  const albums = await prisma.album.findMany()
  return res.json({
    albums
  })
})

router.get("/albums/:id", async (req, res) => {
  const album = await prisma.album.findFirst({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (!album) return res.json({ error: "Album not found" })
  return res.json({ album })
})

router.post("/albums", async (req, res) => {
  const album = await prisma.album.create({
    data: req.body
  })
  return res.json({
    message: "Album created",
    album
  })
})

router.put("/albums/:id", async (req, res) => {
  const album = await prisma.album.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: req.body
  })
  return res.json({
    message: "Album created",
    album
  })
})

router.delete("/albums/:id", async (req, res) => {
  const album = await prisma.album.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (!album) return res.json({ error: "Album not found" })
  return res.json({
    message: "Album deleted",
    album
  })
})



export default router