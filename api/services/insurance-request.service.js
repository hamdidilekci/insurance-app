import InsuranceRequest from '../models/insurance-request.model.js';

export default class InsuranceRequestService {
    static async create(data) {
        // TODO plaka ile sorgula, her bir plaka için bir tane istek olmalı
            const newInsuranceRequest = await InsuranceRequest.create(data)

            await newInsuranceRequest.save();

            return newInsuranceRequest;
    }
}
