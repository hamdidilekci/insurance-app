import mongoose from 'mongoose';

import schema from '../schemas/insurance-request.schema.js';

const Model = mongoose.model('InsuranceRequest', schema);

export default Model;
