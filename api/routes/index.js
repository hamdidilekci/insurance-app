import express from 'express';
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
      res.send('Hello hamdi');
  }
  catch (error) {
    console.log(error);
  }
});

export default router;
