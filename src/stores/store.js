import { defineStore } from "pinia";

import Vans from "../assets/img/Vans Shoes.png";
import Nike from "../assets/img/Nike Shoes.png";
import Adidas from "../assets/img/Adidas Shoes.png";
import Amber from '../assets/img/amberjack Shoes.png'
import Beta from '../assets/img/Beta Footwear-BFW.png'
import Puma from '../assets/img/blue-retro-puma-shoes.png'

const TAX_RATE = 0.08;

export const useStore = defineStore('images', {
  state: () => ({
    Cart: [
    ],
    Shoes: [
      {
        img: Vans,
        name: "Old School Shoes",
        brand: "Vans",
        type: "Men",
        size: "15",
        quantity: "5",
        price: "5000.00",
        discounted: "1000.00",
        discount: "25%"
      },
      {
        img: Nike,
        name: "Originals Shoes",
        brand: "Nike",
        type: "Women",
        size: "13",
        quantity: "3",
        price: "200.00",
        discounted: "300.00",
        discount: "25%"
      },
      {
        img: Adidas,
        name: "Air Jordan 11 Gratitude",
        brand: "Adidas",
        type: "Kid",
        size: "9",
        quantity: "2",
        price: "350.00",
        discounted: "500.00",
        discount: "25%"
      },
      {
        img: Beta,
        name: "Beta Footwear-BFW",
        brand: "Beta",
        type: "Men",
        size: "15",
        quantity: "5",
        price: "5000.00",
        discounted: "1000.00",
        discount: "25%"
      },
      {
        img: Puma,
        name: "Blue-retro Puma Shoes",
        brand: "Puma",
        type: "Women",
        size: "13",
        quantity: "3",  

        price: "200.00",
        discounted: "300.00",
        discount: "25%"
      },
      {
        img: Amber,
        name: "The Boot",
        brand: "Amber",
        type: "Kid",
        size: "9",
        quantity: "2",
        price: "350.00",
        discounted: "500.00",
        discount: "25%"
      },
    ],

    Favorites: [

    ],

  getters: {
    calculateDiscount(shoe) {
      return (parseFloat(shoe.discount) / 100) * parseFloat(shoe.discounted);
    },
    calculatePrice(shoe) {
      return (1 - (parseFloat(shoe.discount) / 100)) * parseFloat(shoe.discounted);
    },
  },

  actions: {
    addToCart(product) {
      this.Cart.push(product);
    },
    addToFavorite(shoe) {
      this.Favorites.push(shoe);
    },
  },
  }),});
