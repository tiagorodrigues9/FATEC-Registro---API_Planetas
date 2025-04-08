import userService from "../Services/userServices.js";
import jwt from 'jsonwebtoken'

const JWTSecret = 'apigamessecret'

// Cadastrando um usuário

const createUser = async (req,res)=>{
    try{
        const {name, email, password} = req.body
        await userService.Create(name, email, password)
        res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.sendStatus(500) //Erro interno do servidor
    }
}

// Autenticando um usuário

const loginUser = async(req,res) =>{
    try{
        const {email, password} = req.body
        // E-mail válido
        if(email != undefined){
            //Busca o usuário no banco
            const user = await userService.getOne(email)
            //Usuário encontrado
            if(user != undefined){
                // Senha correta
                if(user.password == password){
                    // Gerando o token
                    jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token)=>{
                        if(error){
                            res.status(400).json({error: "Erro ao gerar o token"})
                        }else{
                            res.status(200).json({token:token})
                        }
                    })
                    // Senha incorreta
                }else{
                    res.status(401).json({error: "Credenciais inválidas"})
                    //Unauthorized
                }
                //Usuário não encontrado
            }else{
                res.status(404).json({error: "Usuário não encontrado"})
            }
            //Email inválido ou vazio
        }else{
            res.status(400).json({error: "O e-mail enviado é inválido"})
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

export default {createUser, loginUser, JWTSecret}