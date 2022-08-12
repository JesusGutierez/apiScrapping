const mongoose = require("mongoose")

const contactInfoSchema = mongoose.Schema({
  $type                    : {type: String},
  address                  : {type: String},
  birthDateOn              : {type: Object},
  birthdayVisibilitySetting: {type: Boolean},
  connectedAt              : {type: Date},
  emailAddress             : {type: String},
  entityUrn                : {type: String},
  ims                      : {type: String},
  interests                : {type: [String]},
  phoneNumbers             : {type: [String]},
  primaryTwitterHandle     : {type: String},
  sesameCreditGradeInfo    : {type: String},
  twitterHandles           : {type: [Object]},
  weChatContactInfo        : {type: String},
  websites                 : {type: [Object]}
});

const educationSchema = mongoose.Schema({
  title      : {type: String},
  institution: {type: String},
  startDate  : {type: Date},
  endDate    : {type: Date}
});

const experienceSchema = mongoose.Schema({
  title     : {type: String},
  enterprise: {type: String},
  startDate : {type: Date},
  endDate   : {type: Date}
});

const profileSchema = mongoose.Schema({
  name       : String,
  educations : [educationSchema],
  experience : [experienceSchema],
  contactInfo: contactInfoSchema,
});


module.exports = mongoose.model('Profile', profileSchema);