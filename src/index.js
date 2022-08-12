const DB_HOST = require('../env')
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

mongoose
	.connect(DB_HOST, { useNewUrlParser: true })
	.then(() => {
		const app = express()
    app.use(express.json())
    app.use("/api", routes)
    
		app.listen(5000, () => {
      console.log("Server has started!")
		})
	})