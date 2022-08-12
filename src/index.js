const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const Profile = require("./models/profile")
const HOST = 'mongodb+srv://jesusAdmin:alameda@cluster0.qxfijzy.mongodb.net/?retryWrites=true&w=majority';

mongoose
	.connect(HOST, { useNewUrlParser: true })
	.then(() => {
		const app = express()
    app.use(express.json())
    app.use("/api", routes)
    
		app.listen(5000, () => {
      console.log("Server has started!")
		})
	})