<template>
    <RouterLink to="/productDetail"  style="text-decoration: none; color: #212529;">
        <div class="productCard" style="width: 236px; display: flex; flex-direction: column; align-items: center; ">
            <div class="productImage" style="width: 212px; height: 212px; margin-top: 12px; background-color: grey">
                <img :src="img" alt="" >
            </div>
            <div class="productContent">
                <div class="productName" style=";">{{ name }}</div>
                <div class="brandName" style="">{{ brand }}</div>
                <div class="productPrice">
                    <div class="salePrice" >${{ price }}</div>
                    <div class="originalPrice"><s>${{ discounted }}</s></div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'ProductCard',   
    props: {
        img: String,
        name: String,
        brand: String,
        price: String,
        discounted: String,
    },
}
</script>

<style scoped>
    .productCard{
        width: 100%;
        
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;    }
    
    .productCard:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        cursor: pointer;
    }
    .productCard .productImage{
        width: 100%;
        height: 50%;
    }
    .productCard .productImage img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .productContent{
        width: 200px;
        padding: 12px 0px;
    }
    .productContent .productName{
        font-size: 16px;
        font-family: Montserrat;
        font-weight: 700;
        color: #252B42;

    }
    .productContent .brandName{
        font-size: 14px;
        color: gray;
        font-family: Montserrat;
        font-weight: 500;
        line-height: 24px;
    }
    .productContent .productPrice{
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: Montserrat;
        font-weight: 600;
        line-height: 24px;
    }
    .productPrice .salePrice{
        font-size: 14px;
        color: green;
        align-items: center;
    }
    .productPrice .originalPrice{
        margin-top: 2px;
        font-size: 10px;
        color: gray;
    }
</style>