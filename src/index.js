import express from "express"

import albumRoute from "./routes/album.route.js"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"
import todoRoute from "./routes/todo.route.js"
import photoRoute from "./routes/photo.route.js"
import commentRoute from "./routes/comment.route.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())


app.use("/api", albumRoute)
app.use("/api", userRoute)
app.use("/api", postRoute)
app.use("/api", todoRoute)
app.use("/api", photoRoute)
app.use("/api", commentRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})