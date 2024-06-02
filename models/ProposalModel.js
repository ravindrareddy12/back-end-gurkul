// models/PressRelease.js
const mongoose = require('mongoose');

const pressReleaseSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    contentLang:{ type:String,default:'english'},
    crypto: {
        type: Boolean,
        default: false
    },
    discountedPri: String,
    gambling: {
        type: Boolean,
        default: false
    },
    region: { type:String,default:'USA'},
    googleind: {
        type: Boolean,
        default: true
    },
    homepage: {
        type: Boolean,
        default: false
    },
    price: String,
    offEmail: String,
    offcategory: String,
    socialshare: {
        type: Boolean,
        default: false
    },
    telId: String,
    uploadpdf: Object,
    decription: String,
    websiteLink: String,
    websiteLogo: String,
    name: String
});

const PressRelease = mongoose.model('PressRelease', pressReleaseSchema);

module.exports = PressRelease;
