<template>
    <div class="m-auto w-100 d-flex" style="max-width: 1400px; gap: 50px; padding:5% 10%;">
        <div class="productImage d-flex gap-2" style="max-height: 500px; width: 60%;">
            <div class="subImage d-flex flex-column gap-2 " style="width: 10%;">
                <img src="@/assets/img/sub1skechersMenEnergyAfterBurn.jpg" alt="" class="subImg1 w-100">
                <img src="@/assets/img/sub2skechersMenEnergyAfterBurn.jpg" alt="" class="subImg2 w-100">
                <img src="@/assets/img/sub3skechersMenEnergyAfterBurn.jpg" alt="" class="subImg3 w-100">
                <img src="@/assets/img/sub4skechersMenEnergyAfterBurn.jpg" alt="" class="subImg4 w-100">
                <img src="@/assets/img/sub5skechersMenEnergyAfterBurn.jpg" alt="" class="subImg5 w-100">
            </div>
            <div class="mainImage " style=" width: 90%;">
                <img src="@/assets/img/skecherMenEnergyAfterburn.jpg" alt="" class="w-100" >
            </div>
        </div>
        <div class="productDetail" style="width: 40%;">
            <div class="nameSec d-flex flex-column gap-3">
                <div class="title">
                    <div class="name" style="font-weight: bold; font-size: 24px">Skecher Men's Energy Afterburn</div>
                    <div class="category" style="font-weight:500;font-size: 16px">Men’s Shoes</div>
                </div>
                <div class="price d-flex gap-2 align-items-center justify-content-start">
                    <div class="salePrice" style="font-size: 24px; font-weight: 600;">75$</div>
                    <div class="originalPrice" style="font-size: 16px; color: gray;"><s>100$</s></div>
                    <div class="promotion" style="font-size: 16px; color: green;">25% off</div>
                </div>
            </div>
            <div class="sizeSec" style="margin-bottom: 50px;">
                <div class="title" style="font-size: 16px; font-weight: 600; padding: 16px 0;">Select size</div>
                <div class="sizeBlock gap-1" >
                    <div class="size">6</div>
                    <div class="size">6.5</div>
                    <div class="size">7</div>
                    <div class="size">7.5</div>
                    <div class="size">8.5</div>
                    <div class="size">9.5</div>
                    <div class="size">10</div>
                    <div class="size">10.5</div>
                    <div class="size">11</div>
                    <div class="size">11.5</div>
                </div>
                
            </div>

            <div class="btnSec d-inline-block w-100 d-flex flex-column gap-2" style="margin-bottom: 50px;">
                <button class="addToCart btn w-100" >Cart</button>
                <button class="addToFavorite btn w-100" >Favorite <i class='bx bx-heart'></i></button>
            </div>
            <div class="detailSec">
                <div class="title" style=" font-size: 24px; font-weight: 500;">Details</div>
                <ul class="explain">
                    <li>Exposed foam tongue</li>
                    <li>Traditional lacing</li>
                    <li>Perforations on heel</li>
                    <li>Woven tongue label</li>
                    <li>Color: Grey Fog/Light Smoke Grey/White/White</li>
                    <li>Style: DH9522-003</li>
                    
                </ul>
            </div>

        </div>
    </div>
    <div class="container ">
        <div style="display: flex; justify-content: start; font-size: 24px; font-weight: 600;">
            You Might Also Like
        </div>
        <div class="promotion" style="display: grid; grid-template-columns: repeat(5,1fr);gap: 20px; margin: 25px 0;">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    </div>

</template>

<script>
// import Footer from '@/components/FooterComponent.vue';
// import Header from '@/components/HeaderComponent.vue';
import ProductCard from '@/components/ProductCardComponent.vue';
// import ProductDetailComponentVue from '@/components/ProductDetailComponent.vue';
export default {
  name: 'App',
  components: {
    // Header,
    ProductCard,
    // ProductDetailComponentVue,
    // Footer
  }
}
</script>

<style scoped>
    .subImage img, .mainImage img{
        object-fit: contain;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
    .sizeSec .sizeBlock{
        display: grid;
        grid-template-columns:repeat(5,1fr);


    }
    .sizeSec .sizeBlock .size{
        width: 70px;
        height: 40px;
        border-radius: 10px;
        text-align: center;
        padding-top: 10%;
        border: 1px solid gray;
        cursor: pointer;
        transition: 0.1s;
        
    }
    .sizeSec .sizeBlock .size:hover{
        transform: scale(0.95);
        transition: 0.1s;
    }

    .btnSec .addToCart{
        background-color: #707072; color: white; 
        border-radius: 50px;
        transition: 0.1s;

    }
    .btnSec .addToFavorite{
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; 
        border-radius: 50px;
        transition: 0.1s;
    }
    .btnSec .addToCart:hover, .btnSec .addToFavorite:hover{
        transform: scale(0.98);
        transition: 0.1s;
    }
    
</style>