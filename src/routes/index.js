const express = require("express")
const Profile = require("../models/profile")
const router = express.Router()

router.get("/profiles", async (req, res) => {
	const profiles = await Profile.find()
	res.send(profiles)
})

router.post("/profiles", async (req, res) => {
  console.log('req', req.body);
  try {
    const profile = new Profile({
      name: req.body.name,
      contactInfo: req.body.contactInfo,
      educations: req.body.educations, 
      experience: req.body.experiences,
    })
    await profile.save()
    res.send(profile)
  } catch (error) {
    throw error
  }
})

router.get("/profile/:id", async (req, res) => {
	const profile = await Profile.findOne({ _id: req.params.id })
	res.send(profile)
})

module.exports = router