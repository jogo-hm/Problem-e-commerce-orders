
const { orderList } = require('../models/orders')
const { products } = require('../models/products')

const orders = async (req, res) => {
    //Database querty
    const id = req.id;
    let orders = []
    for(order of orderList) {
        order.product = products.find((product) => product.id == order.id)
        orders.push(order)
    }
    
    return res.status(200).json( orders );

}

const detail = async (req, res) => {
    const id = req.id;
    
    let order; 

    for(element in orderList) {
        if(order.id == id)
           order = order; 
    }

    for(product in products) {
        if(product.id = order.productId)
        {
            order.product = product;
        }
    }
    //Database querty


    console.log(order);
    return res.status(200).json( order );

}



module.exports = { orders, detail }