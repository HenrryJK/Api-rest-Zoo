import { Router } from 'express';
const router = Router();

import * as ZooCtr from '../controllers/zoologico.controller'

router.get('/' ,  ZooCtr.readAllZoologicos);

export default router;