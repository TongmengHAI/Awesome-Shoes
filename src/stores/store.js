import { defineStore } from "pinia";

import Vans from "../assets/img/Vans Shoes.png";
import Nike from "../assets/img/Nike Shoes.png";
import Adidas from "../assets/img/Adidas Shoes.png";

const TAX_RATE = 0.08;

export const useStore = defineStore('images', {
  state: () => ({
    Cart: [
      {
        img: Vans,
        name: "Vans Shoes",
        type: "Men",
        size: "15",
        quantity: "5",
        price: "5000.00",
      },
      {
        img: Nike,
        name: "Nike Shoes",
        type: "Women",
        size: "13",
        quantity: "3",
        price: "200.00",
      },
      {
        img: Adidas,
        name: "Adidas Shoes",
        type: "Kid",
        size: "9",
        quantity: "2",
        price: "350.00",
      }
    ],
    taxRate: TAX_RATE,
  }),
});
