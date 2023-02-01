import config from 'config';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes/index.js';

// import buildConnectionURI from './common/build-connection-uri.js';
// import handleError from './middleware/handle-error.js';

const init = async() => {
  // if (config.mongoose.debug != null) {
  //   mongoose.set('debug', config.mongoose.debug);
  // }

  // await mongoose.connect(buildConnectionURI(config.db));

  // allow empty strings
  // mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');
  
  var app = express();

  app.use(compression());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use('/', routes);
  // app.use(handleError);
  
  // use static files
  app.use(express.static('public'));
  app.use(express.static('app'));

  app.use('*', (req, res) => {
      res.sendFile(path.join(path.resolve(), '/client/index.html'), error => {
          if (error) {
              res.status(500).send(error);
          }
      });
  });

  // eslint-disable-next-line no-process-env
  app.listen(process.env.PORT || 3001, () => {
      // eslint-disable-next-line no-process-env
      const PORT = process.env.PORT ? process.env.PORT : 3001;
      console.log('app is running on Port: ', PORT);
  });
}

init();
