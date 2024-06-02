// controllers/pressReleaseController.js
const PressRelease = require('../models/ProposalModel');

exports.createPressRelease = async (req, res) => {
    try {
        const pressRelease = new PressRelease(req.body);
        await pressRelease.save();
        res.status(201).json({ success: true, data: pressRelease });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.getPressReleases = async (req, res) => {
    try {
        const pressReleases = await PressRelease.find();
        res.status(200).json({ success: true, data: pressReleases });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};