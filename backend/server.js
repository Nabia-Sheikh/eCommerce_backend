const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const colors = require("colors")
const productRoute = require("./routes/productRoute")
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")
const uploadRoutes = require("./routes/uploadRoutes")
const morgan = require("morgan")
var cors = require("cors");



app.use(cors());

const app = express()

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use(express.json())
dotenv.config()
connectDB()

app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/orders", orderRoute)
app.use("/api/upload", uploadRoutes)

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
// const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))


app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow)
})
