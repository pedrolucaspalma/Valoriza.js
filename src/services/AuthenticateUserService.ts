import { getCustomRepository } from "typeorm"
import {compare} from "bcryptjs"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {sign} from "jsonwebtoken"

interface IAuthenticateRequest {
        email: string;
        password: string;
}

class AuthenticateUserService {

    async execute({email, password} :IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Incorrect Email/Password")
        }

        //verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Incorrect Email/Password")
        }


        //gerar token
        //user email, md5 hash, 
        const token = sign(
            {
            email: user.email
        }, 
        "a091528c64ea0c4045adcc0b2aad459f", 
        {
            subject: user.id,
            expiresIn: "1d"
        }
        );

    return token;

    }
    
}

export { AuthenticateUserService }