import mongoose from 'mongoose';

const { Schema } = mongoose;

const InsuranceRequest = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    idNumber: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    plate: {
        type: String,
    },
    documentNumber: {
        type: String,
    },
    createdAt: Date,
    updatedAt: Date,
}, {
    autoCreate: true,
    autoIndex: true,
    timestamps: true,
    versionKey: false,
    collection: 'insurance_requests'
});

export default InsuranceRequest;
