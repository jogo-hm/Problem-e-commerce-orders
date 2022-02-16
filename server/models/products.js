/**
 * @constant products list of product objects
 */

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Any description",
        routeImage: "https://cdn.shopify.com/s/files/1/2496/2470/products/mist-grey-product_cc35cb7e-23d7-4e15-8e91-46f57ca20e98.png?v=1620254336",
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
        routeImage: "https://fabricprinting.pk/wp-content/uploads/2020/07/Polo-Shirt-1.jpg",
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