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
    contentLang: String,
    crypto: {
        type: Boolean,
        default: false
    },
    discountedPri: String,
    gambling: {
        type: Boolean,
        default: false
    },
    geoLoc: String,
    googleind: {
        type: Boolean,
        default: true
    },
    homepage: {
        type: Boolean,
        default: false
    },
    mediaKitPri: String,
    offEmail: String,
    offcategory: String,
    socialshare: {
        type: Boolean,
        default: false
    },
    telId: String,
    uploadpdf: Object,
    websiteDescription: String,
    websiteLink: String,
    websiteLogo: String,
    websiteName: String
});

const PressRelease = mongoose.model('PressRelease', pressReleaseSchema);

module.exports = PressRelease;
