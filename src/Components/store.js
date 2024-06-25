// store.js
import { createStore } from 'redux';

const initialState = {
  products: [
    { id: 1, name: 'Samsung Universe 9', thumbnail: "https://th.bing.com/th/id/OIP.bDZQkuc217_3emsR43b2gQHaHa?rs=1&pid=ImgDetMain", price: 549, quantity: 0 },
    { id: 2, name: 'OPPOF19', thumbnail: "https://i5.walmartimages.com/asr/80aad70e-23d9-4bac-b938-2a64c5e7a563.2e769bfe8c5e1dc83053b6edb4d053ff.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff", price: 899, quantity: 0 },
    { id: 3, name: 'Huawei P30',thumbnail: "https://urbankenyans.com/wp-content/uploads/2019/04/5.jpg", price: 1249, quantity: 0 },
    { id: 4, name: 'iPhone 9',thumbnail: "https://files.refurbed.com/ii/iphone-x-1639476570.jpg", price: 280, quantity: 0 },
    { id: 5, name: 'iPhone X', thumbnail: "https://specifications-pro.com/wp-content/uploads/2020/03/iPhone-9-600x600.jpeg", price: 449, quantity: 0 },
  ],
  totalSum: 0
};

const calculateTotalSum = (products) => {
  return products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY':
    case 'DECREMENT_QUANTITY':
      const updatedProducts = state.products.map(product =>
        product.id === action.payload
          ? {
              ...product,
              quantity: action.type === 'INCREMENT_QUANTITY'
                ? product.quantity + 1
                : Math.max(0, product.quantity - 1)
            }
          : product
      );
      return {
        ...state,
        products: updatedProducts,
        totalSum: calculateTotalSum(updatedProducts)
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);