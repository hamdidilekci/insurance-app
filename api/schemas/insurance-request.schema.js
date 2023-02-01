import mongoose from 'mongoose';

const { Schema } = mongoose;

const InsuranceRequest = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     validate: {
    //         validator: v => isemail.validate(v),
    //         message: props => `${props.value} is not a valid email address`
    //     }
    // },
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
