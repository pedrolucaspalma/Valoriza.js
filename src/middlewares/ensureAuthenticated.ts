import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    // recebe request com token
    const authToken = request.headers.authorization;

    // verifica se tem um token no request
    if(!authToken){
        return response.status(401).end();
    }

    // separa a string contendo "bearer + token". Armazena token na constante
    const [,token] = authToken.split(" ")

    // Faz a verificação. Se não estiver autenticado, erro 401
    try{
        const {sub} = verify(token ,"a091528c64ea0c4045adcc0b2aad459f");;

        request.user_id = sub;

        return next();

    } catch(err){
        return response.status(401).end();
    }


}

