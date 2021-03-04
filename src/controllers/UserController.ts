import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repository/UsersRespository";
class UserController {

    async create(request: Request, response: Response){
        const {name, email } = request.body;
        
        // const usersRepository = getRepository(User);
        // aula 3 - refatorando, desmembrando o getRepository em uma classe repository
        const usersRepository = getCustomRepository(UsersRepository)


        // checar se já existe o usuário 2o.passo apos a inclusão
        // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        if (userAlreadyExists){
            return response.status(400).json({
                error: "User already exists!",
            });
        }
        //--------------------------------------------------------
  
        const user = usersRepository.create({
            name, 
            email,
        })
        await usersRepository.save(user);

        return response.json(user);
    }

}

export { UserController };
