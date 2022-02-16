const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Any description",
        caracteristics: [
            {
                name: "Color",
                value: "Gray"
            },
            {
                name: "Size",
                value: "26"
            }
        ],
        price: 7,
        discont: 2
    },
    {
        id: 2,
        name: "Shirt",
        description: "Any description",
        caracteristics: [
            {
                name: "Color",
                value: "Green"
            },
            {
                name: "Size",
                value: "L"
            }
        ],
        price: 5,
        discont: 1
    }
]

module.exports = { products }