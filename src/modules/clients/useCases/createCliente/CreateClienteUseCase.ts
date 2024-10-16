import { prisma } from "../../../../database/prismaClient"
import { hash } from "bcrypt"

prisma

interface ICreateClient {
    username: string
    password: string
}



export class CreateClientUseCase {

    async execute({ username, password }: ICreateClient) {
        // Validar se o user existe
        const clientExist = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }

            }
        })

        if (clientExist) {
            throw new Error("Cliente já existe");

        }

        // Criptografar a senha
        const hashPassword = await hash(password, 10)

        //Salvar o cliente
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
            }
        })
    }
}