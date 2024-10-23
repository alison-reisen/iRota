import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createCliente/CreateClientController";
import { AutenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientUseCase = new AutenticateClientController();

//routes.post("/client/", createClientController.handle);
routes.post("/client/", async (request, response) => {
    await createClientController.handle(request, response);
});

routes.post("/authenticate/", async (request, response) => {
    await authenticateClientUseCase.handle(request, response);
});


export { routes };