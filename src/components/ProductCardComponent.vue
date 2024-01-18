<template>
    <RouterLink to="/productDetail"  style="text-decoration: none; color: #212529;">
        <div class="productCard">
            <div class="productImage">
                <img src="@/assets/img/skecherMenEnergyAfterburn.jpg" alt="" >
            </div>
            <div class="productContent">
                <div class="productName" style="margin: 10px;">Skecher Men's Energy Afterburn</div>
                <div class="brandName" style="margin: 10px;">Nike</div>
                <div class="productPrice">
                    <div class="salePrice">59$</div>
                    <div class="originalPrice"><s>70$</s></div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'ProductCard',   
}
components: {
    RouterLink
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
        padding: 5px 10px;
    }
    .productContent .productName{
        font-size: 15px;
        font-weight: bold;
        font-family: Montserrat;
    }
    .productContent .brandName{
        font-size: 13px;
        color: gray;
        font-family: Montserrat;
    }
    .productContent .productPrice{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: Montserrat;
    }
    .productPrice .salePrice{
        font-size: 15px;
        color: green;
    }
    .productPrice .originalPrice{
        font-size: 13px;
        color: gray;
    }
</style>