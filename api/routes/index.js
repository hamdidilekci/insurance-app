import express from 'express';

import InsuranceRequestService from '../services/insurance-request.service.js'

const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  try {
      let profiles = {
        name: 'Hello',
        lastName: 'World'
      };
      res.send(profiles);
  }
  catch (error) {
    console.log(error);
  }
});

/* Sample route 2. */
router.get('/hamdi', async(req, res) => {
  try {
    // TODO replace data object with req.body
      const data = {
        firstName: 'Hamdi',
        lastName: 'Dilekci',
        email: 'madilekci@gmail.com'
      }
      const insuranceRequest = await InsuranceRequestService.create(data);
      res.send(insuranceRequest);
  }
  catch (error) {
    console.log(error);
  }
});

export default router;
