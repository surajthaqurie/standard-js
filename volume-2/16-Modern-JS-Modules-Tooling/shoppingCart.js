// * Exporting Modules ------------------------------------------------
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// Named export
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });

    console.log(`${quantity} ${product} added to cart`);
}

// Multiple export with Named Export
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

// Export Default
export default function (product, quantity) {
    cart.push({ product, quantity });

    console.log(`${quantity} ${product} added to cart`);
}