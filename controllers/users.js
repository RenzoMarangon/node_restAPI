const { response } = require('express');


const getUsers = ( req, res = response ) => {

    const querys = req.query;

    res.json({
        msg:'get API - users',
        querys,
    })
}

const putUsers = ( req, res = response ) => {

    const params = req.params
    res.json({
        msg:'put API - users',
        params
    })
};

const postUsers = ( req, res = response ) => {
    
    const body =  req.body
    

    res.json({
        msg:'post API - users',
        body
    })
   
};

const deleteUsers = ( req, res = response ) => {
    res.json({
        msg:'delete API',
    })
};

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers

};