

<template>
  <!-- <Header></Header> -->
  <div class="homeContainer m-auto" style="max-width: 1700px;">
    <div style="margin: 50px 100px; background: linear-gradient(90deg, #96E9FB 0%, #ABECD6 100%); padding: 24px 48px; border-radius: 20px; display: flex; justify-content: space-around; align-items: center;">
      <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px;">
        <div style="color: #2A7CC7; font-family: Montserrat; font-size: 16px; font-style: normal; font-weight: 700; line-height: 24px; letter-spacing: 0.1px;">Winter 2024</div>
        <div style="color: #252B42; font-family: Montserrat; font-size: 58px; font-style: normal; font-weight: 700; line-height: 80px; letter-spacing: 0.2px;">NEW COLLECTION</div>
        <div style="color: #737373; font-family: Montserrat; font-size: 20px; font-style: normal; font-weight: 400; line-height: 30px; letter-spacing: 0.2px;">The most comfortable shoes for the winter season</div>
        <button style="padding: 15px 40px; background-color: #23A6F0; border: none; border-radius: 5px; color: #FFF; text-align: center; font-family: Montserrat; font-size: 24px; font-style: normal; font-weight: 700; line-height: 32px; letter-spacing: 0.1px;">SHOP NOW</button>
      </div>
      <img style="height: 500px;" src="@/assets/img/Banner.png">
    </div>
    <div class="Logo" style="display: flex; justify-content: center; gap: 100px; margin: 100px 0px;">
      <img src="@/assets/img/nike.png" >
      <img src="@/assets/img/adidas.png" >
      <img src="@/assets/img/puma.png" >
      <img src="@/assets/img/converse.png" >
      <img src="@/assets/img/vans.png" >
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; margin: 100px;">
      <div style="font-family: Montserrat; font-size: 28px; margin-bottom: 20px; text-align: left; font-weight: 700; width: 1000px">Trending</div>
      <div style="display: flex; gap: 20px; justify-content: center;">
        <div>
          <img style="width: 490px;" src="@/assets/img/trending1.png">
          <div style="text-align: left; font-family: Montserrat; font-size: 18px; font-style: normal; font-weight: 700; line-height: 50px; letter-spacing: 0.2px;">Winter Running Essentials</div>
        </div>
        <div>
          <img style="width: 490px;" src="@/assets/img/trending2.png">
          <div style="text-align: left; font-family: Montserrat; font-size: 18px; font-style: normal; font-weight: 700; line-height: 50px; letter-spacing: 0.2px;">New Winter Looks</div>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin: 100px;">
      <div style="font-family: Montserrat; font-size: 28px; margin-bottom: 20px; text-align: left; font-weight: 700; width: 1000px">Happening Now</div>
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; background-color: black; height: 300px; width: 500px; padding: 50px;">
          <div style="color: #FFF; text-align: right; font-family: Montserrat; font-size: 40px; font-style: normal; font-weight: 900; line-height: 50px; letter-spacing: 0.2px; margin-bottom: 20px;">PROMOTION</div>
          <div style="color: #FFF; font-family: Montserrat; font-size: 12px; font-style: normal; font-weight: 700; line-height: 16px; letter-spacing: 0.2px;">Save up to 50% on seasonal favs and must-have gear</div>
          <div style="color: #FFF; font-family: Montserrat; font-size: 12px; font-style: normal; font-weight: 700; line-height: 16px; letter-spacing: 0.2px; margin-bottom: 20px;">No code needed. Ends 12.28.</div>
          <button style="font-family: Montserrat; border: none; background-color: white; padding: 10px 20px; border-radius: 5px">SHOP NOW</button>
        </div>
        <img style="width: 500px; height: 300px;" src="@/assets/img/Promotion.jpg">
      </div>
    </div>
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <div style="margin: 50px 0px;">
        <div style="color: #737373; text-align: center;  font-family: Montserrat; font-size: 20px; font-style: normal; font-weight: 400; line-height: 30px; letter-spacing: 0.2px;">Featured Product</div>
        <div style="margin-bottom: 10px; color: #252B42; text-align: center; font-family: Montserrat; font-size: 24px; font-style: normal; font-weight: 700; line-height: 32px; letter-spacing: 0.1px;">BESTSELLER PRODUCTS</div>
      </div>
      <div class="promotion" style="display: grid; grid-template-columns: repeat(5,1fr);gap: 20px; margin: 25px 0;">
        <ProductCard></ProductCard>
        <RouterLink to="/produtDetail">
            <ProductCard></ProductCard>

        </RouterLink>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <button class="BtnText" style="padding: 15px 40px; background-color: white; border: 1px solid #23A6F0; margin: 25px 0px 50px;">Load More Item</button>
    </div>
  </div>
  <!-- <Footer></Footer> -->
</template>

<script>
// import Footer from '@/components/FooterComponent.vue';
// import Header from '@/components/HeaderComponent.vue';
import ProductCard from '@/components/ProductCardComponent.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  components: {
    // Header,
    ProductCard,
    // Footer,
    RouterLink
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.BtnText{
  color: #23A6F0;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; 
  letter-spacing: 0.2px;
}
.Logo img{
  height: 10vh;
}
</style> 
