<template>
    <div class="main">
        <div id="top">
            <span id="text">Sort By</span>
            <span id="caret-circumflex">&#94;</span>
        </div>
        <div id="container">
            <!-- eslint-disable vue/require-v-for-key -->
            <figure v-for="item in Items">
                <img :src="item.img">
                <figcaption>{{ item.caption1 }}</figcaption>
                <figcaption>{{ item.caption2 }}</figcaption>
                <p id="itemName">{{ item.itemName }}</p>
                <p id="itemCost">{{ item.itemCost }}</p>
            </figure>
        </div>
        <div id="bottom">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
    </div>
</template>
<script>
    import img1 from '../assets/image/Vans Shoes.png'
    import img2 from '../assets/image/Adidas Shoes.png'
    import img3 from '../assets/image/Nike Shoes.png'
    import img4 from '../assets/image/amberjack Shoes.png'
    import img5 from '../assets/image/Beta Footwear-BFW.png'
    import img6 from '../assets/image/blue-retro-puma-shoes.png'

    export default {
        data() {
            return {
                Items: 
                [
                    {img: img1, caption1: 'Old School', caption2: 'Shoes', itemName: 'Vans', itemCost: '$70'},
                    {img: img2, caption1: 'Originals', caption2: 'Shoes', itemName: 'Adidas', itemCost: '$100'},
                    {img: img3, caption1: 'Air Jordan 11', caption2: '"Gratitude"', itemName: 'Nike', itemCost: '$230'},
                    {img: img4, caption1: 'The Boot', caption2: '', itemName: 'Amberjack', itemCost: '$205'},
                    {img: img5, caption1: 'Beta', caption2: 'Footwear-BFW', itemName: 'Beta', itemCost: '$150'},
                    {img: img6, caption1: 'Blue-retro', caption2: 'Puma Shoes', itemName: 'Puma', itemCost: '$200'},
                    {img: img1, caption1: 'Old School', caption2: 'Shoes', itemName: 'Vans', itemCost: '$70'},
                    {img: img2, caption1: 'Originals', caption2: 'Shoes', itemName: 'Adidas', itemCost: '$100'},
                    {img: img3, caption1: 'Air Jordan 11', caption2: '"Gratitude"', itemName: 'Nike', itemCost: '$230'},
                    {img: img4, caption1: 'The Boot', caption2: '', itemName: 'Amberjack', itemCost: '$205'},
                    {img: img2, caption1: 'Originals', caption2: 'Shoes', itemName: 'Adidas', itemCost: '$100'},
                    {img: img3, caption1: 'Air Jordan 11', caption2: '"Gratitude"', itemName: 'Nike', itemCost: '$230'},
                    {img: img4, caption1: 'The Boot', caption2: '', itemName: 'Amberjack', itemCost: '$205'},
                    {img: img5, caption1: 'Beta', caption2: 'Footwear-BFW', itemName: 'Beta', itemCost: '$150'},
                    {img: img6, caption1: 'Blue-retro', caption2: 'Puma Shoes', itemName: 'Puma', itemCost: '$200'}
                    

                ]
            }
        }
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
        width: 150px;
        height: 260px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        margin: 20px 10px;
    }
    img {
        width: inherit;
        height: 9rem;
        margin-bottom: 10px;
    }
    #top {
        margin-top: 20px;
        display: flex;
        justify-items: center;
    }
    figcaption {
        font-family: 'Montserat', sans-serif;
        font-size: 13px;
        font-weight: bold;
        margin: 3px 0;
        color: #252B42;
    }
    #itemName {
        font-family: 'Montserat', sans-serif;
        color: #737373;
        font-size: 11px;
        font-weight: bold;
        margin: 12px 0 20px 0;
    }
    #itemCost {
        font-family: 'Montserat', sans-serif;
        font-size: 12px;
        font-weight: bold;
        color: #128A09;
    }
    #text {
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 600;
        margin-left: 10px;
    }
    #caret-circumflex {
        font-size: 14px;
        font-weight: bolder;
        margin-left: 5px;
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