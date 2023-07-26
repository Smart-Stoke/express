import express from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import writerRoute from './writer.route';
import bookRoute from './book.route';
import listsRoute from './lists.route';
import docsRoute from './docs.route';
import config from '../../config/config';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/writers',
    route: writerRoute,
  },
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/lists',
    route: listsRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;
