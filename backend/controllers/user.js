import { db } from "../db.js";

export const getUsers = (_, res) =>{
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) =>{
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUser = (req, res) =>{
    const q = "INSERT INTO usuarios(`primeiro_nome`, `ultimo_nome`, `idade`) VALUES(?)";

    const values= [
        req.body.primeiro_nome,
        req.body.ultimo_nome,
        req.body.idade,

    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.")
    });
};

export const updateUser = (req, res) => {
    console.log(req.body)
    return res.status(200).json("Usuário editado.")

    const q = "UPDATE usuarios SET `primeiro_nome` = ?, `ultimo_nome` = ?, `idade` = ? WHERE `id` = ?"
    const values= [
        req.body.primeiro_nome,
        req.body.ultimo_nome,
        req.body.idade,
        req.body.id,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Usuário atualizado com sucesso.")
    });
};

export const deleteUser = (req, res) =>{
    const q = "DELETE FROM usuarios WHERE `id` = ?"

    db.query(q, [req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.")
    })
}