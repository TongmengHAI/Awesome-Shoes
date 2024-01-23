<template>
    <HeaderComponent></HeaderComponent>
    <div class="main" style="margin: 50px;">
        <div id="top">
            <span id="text" style="color: #000; font-family: Montserrat; font-size: 20px; font-style: normal; font-weight: 700; line-height: 24px; letter-spacing: 0.2px;">Favorites</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); row-gap: 24px; margin-top: 24px;">
            <!-- eslint-disable vue/require-v-for-key -->
            <RouterLink :to="{ name: 'productDetail', params: { shoeName: favorite.name } }" style="text-decoration: none; width: 236px;"  v-for="favorite in Favorites">
                <figure>
                    <img :src="favorite.img" style="width: 212px; height: 212px; margin-top: 12px; background-color: gray;">
                    <div style="padding: 12px; width: 212px;">
                        <figcaption>{{ favorite.name }}</figcaption>
                        <p id="itemName">{{ favorite.brand }}</p>
                        <div style="display: flex; gap: 12px;">
                            <p id="itemCost">${{ favorite.price }}</p>
                            <p id="itemDiscounted">${{ favorite.discounted }}</p>
                        </div>
                    </div>
                </figure>
            </RouterLink>
        </div>
        <div id="bottom">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>
<script>
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import FooterComponent from '@/components/FooterComponent.vue'
    import { RouterLink } from 'vue-router'
    import { useStore } from '../stores/store.js';
    import { defineStore } from 'pinia';
    import { mapState } from 'pinia';

    export default {
        components: {
            HeaderComponent,
            FooterComponent,
            RouterLink
        },
        computed: {
            ...mapState(useStore, ['Favorites']),
        },
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;600&family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    figure {
        width: 236px;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        margin-top: 24;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px; 
    }
    figure:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
    }
    img {
        width: 212px;
        height: 212px;
    }
    #top {
        margin-top: 20px;
        display: flex;
        justify-items: center;
    }
    figcaption {
        font-family: 'Montserat', sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        color: #252B42;
    }
    #itemName {
        font-family: 'Montserat', sans-serif;
        color: #737373;
        font-size: 14px;
        font-weight: bold;
        line-height: 24px;
    }
    #itemCost {
        font-weight: 700;
        font-size: 14px;
        color: green;
        line-height: 24px;
        align-items: center;
    }
    #itemDiscounted {
        font-size: 10px;
        line-height: 24px;
        color: gray;
    }
    #text {
        color: #000;
        font-family: Montserrat;
        font-size: 16px; 
        font-style: normal; 
        font-weight: 500; 
        line-height: 24px; 
        letter-spacing: 0.2px;
    }
    #bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    button {
        width: 25px;
        height: 1.5rem;
        border-radius: 50%;
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        color: #ffffff;
        background-color: #d9d9d9;
        margin: 5px;
        border: none;
    }
    button:first-child{
        background-color: #707072;
    }
</style>