
const { orderList } = require('../models/orders')
const { products } = require('../models/products')

const orders = async (req, res) => {
    //Database querty

    return res.status(200).json( orderList );

}

const detail = async (req, res) => {
    const id = req.id;
    //Database querty
    
    const order;

    for(element in orderList) {
        if(order.id == id)
           order = order; 
    }

    console.log(order);
    return res.status(200).json( order );

}



module.exports = { orders, detail }