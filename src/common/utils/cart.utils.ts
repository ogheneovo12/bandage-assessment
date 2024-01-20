import { ICart, IProduct } from "../types/global";

export function calculateCart(cart: ICart) {
  let toCompute = {
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  };

  let computed = cart.products.reduce((acc, product) => {
    const total = product.price * product.quantity;
    const discountedTotal = product.discountedPrice * product.quantity;
    const totalQuantity = product.quantity;
    const totalProducts = 1;
    return {
      total: acc.total + total,
      discountedTotal: acc.discountedTotal + discountedTotal,
      totalQuantity: acc.totalQuantity + totalQuantity,
      totalProducts: acc.totalProducts + totalProducts,
    };
  }, toCompute);

  return {
    ...cart,
    ...computed,
  };
}

export const mapProductToCartProduct = (product: IProduct) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    total: product.price,
    discountPercentage: product.discountPercentage,
    discountedPrice:
      product.price - product.price * (product.discountPercentage / 100),
    thumbnail: product.thumbnail,
  };
};
