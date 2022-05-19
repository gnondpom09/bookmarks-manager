import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import CommonRoutes from './routes/common.route';
import TestRoutes from './routes/test.route';
import PhotoRoutes from './routes/photo.route';
import VideoRoutes from './routes/video.route';

dotenv.config();

const { PORT } = process.env;

class App {
  public app: Application;

  private commonRoutes: CommonRoutes = new CommonRoutes();

  private testRoutes: TestRoutes = new TestRoutes();

  private photoRoutes: PhotoRoutes = new PhotoRoutes();

  private videoRoutes: VideoRoutes = new VideoRoutes();

  constructor() {
    this.app = express();
    this.setConfig();
    this.runServer();
    this.getRoutes();
    this.connectDB();
  }

  /**
   * Set configuration of api
   */
  private setConfig() {
    const allowedOrigins = ['http://localhost:3000'];

    const options: cors.CorsOptions = {
      origin: allowedOrigins,
    };
    this.app.use(cors(options));
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  }

  /**
   * Get routes of api
   */
  private getRoutes() {
    this.testRoutes.route(this.app);
    this.photoRoutes.route(this.app);
    this.videoRoutes.route(this.app);
    this.commonRoutes.route(this.app);
  }

  /**
   * Run application
   */
  private runServer() {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }

  /**
   * Connect mongoDB database
   */
  private connectDB() {
    mongoose.connect('mongodb://localhost:27017/test');
    const database = mongoose.connection;
    database.once('connected', () => {
      console.log('Database Connected');
    });
  }
}

export default new App().app;
