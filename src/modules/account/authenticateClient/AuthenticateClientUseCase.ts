import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
    username: string;
    password: string;
}



export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        // Receber UserName, Password


        //Verificar se esta cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (!client) {
            throw new Error("Usuario ou senha inválido");

        }

        //Verificar se a senha corresponde ao UserName

        const passwordMatch = await compare(password, client.password)

        if (!passwordMatch) {
            throw new Error("Usuario ou senha inválido");
        }

        //Gerar token
        //frase do token MD Generator
        //Acesso liberado com sucesso, pode acessar a página e seguir conforme seu entendimento. Fique a vontade!
        const token = sign({ username }, "69d34430646676abf6cf6ab8daca5ee1", {
            subject: client.id,
            expiresIn: "1d",
        })

        return token;

    }
}