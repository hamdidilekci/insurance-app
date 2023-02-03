import express from 'express';

import InsuranceRequestService from '../services/insurance-request.service.js'

const router = express.Router();

/* GET home page. */
router.post('/insurance-request', async(req, res) => {
  try {
      const response = await InsuranceRequestService.create(req.body);
      res.send(response);
  }
  catch (error) {
    console.log(error);
  }
});

export default router;
