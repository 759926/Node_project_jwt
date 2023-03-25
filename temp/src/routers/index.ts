import {Router} from 'express';
import {collroute} from './../controllers/index'
import {verifyToken} from './../middlewares/index'

import {loginroute} from '../controllers/login';
import passport from '../config/index';

const router = Router();

router.use(loginroute)

router.use('/products',verifyToken, collroute)

export {router};
