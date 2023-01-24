import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUser = (req, res) =>{
    console.log('addUser', req.body)
    const q = "INSERT INTO usuarios(`primeiro_nome`, `ultimo_nome`, `idade`) VALUES(?)";
   
    const values= [
        req.body.primeiroNome,
        req.body.ultimoNome,
        req.body.idade,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);
       
        return res.status(200).json("Usuário criado com sucesso.")
    });
};

export const updateUser = (req, res) => {
    console.log('up', req.body)


    const q = "UPDATE usuarios SET `primeiro_nome` = ?, `ultimo_nome` = ?, `idade` = ? WHERE `id` = ?"
    const values= [
        req.body.data.primeiroNome,
        req.body.data.ultimoNome,
        req.body.data.idade,
      
    ];

    db.query(q, [...values, req.body.data.id], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Usuário atualizado com sucesso.")
    });
};

export const deleteUser = (req, res) =>{
    console.log('delete', req.body)
    const q = "DELETE FROM usuarios WHERE `id` = ?"

    db.query(q, [req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.")
    })
}