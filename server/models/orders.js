const orderList = [
    {
        id: 1,
        date: "Sep 12/02/2020",
        products: [
            {
                productId: 1,
                units: 3
            },
            {
                productId: 2,
                units: 2
            }
        ],
        amount: 48
    },
    {
        id: 2,
        date: "Sep 13/02/2020",
        products: [
            {
                productId: 3,
                units: 2
            },
            {
                productId: 4,
                units: 1
            }
        ],
        amount: 15
    }
]

module.exports = { orderList }