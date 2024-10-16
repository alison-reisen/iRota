import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createCliente/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();

//routes.post("/client/", createClientController.handle);
routes.post("/client/", async (request, response) => {
    await createClientController.handle(request, response);
});


export { routes };