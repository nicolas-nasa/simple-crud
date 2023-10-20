import { Router } from 'express';

import { PersonController } from '../controllers';

const routes = Router();

const personController = new PersonController();

routes.post('/create', personController.createPerson);
routes.get('/list', personController.listPerson);
routes.put('/update/:id', personController.updatePerson);
routes.delete('/delete/:id', personController.deletePerson);

export default routes;
