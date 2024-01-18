<template>
    <HeaderComponent/>
    
    <div style="display: flex; margin: 100px 100px 200px; justify-content: space-between;">
        <div style="display: flex; flex-direction: column;gap: 24px;">
            <div class="h1">Bag</div>
            <CartComponent/>
            <CartComponent/>
            <CartComponent/>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
            <div class="h1" style="width: 400px;">Summary</div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div class="cart">
                    <div class="h3">Subtotal</div>
                    <div class="h3" style="text-align: right;">$350.00</div>
                </div>
                <div class="cart">
                    <div class="h3">Estimated Tax</div>
                    <div class="h3" style="text-align: right;">$0.00</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="cart">
                <div class="h3">Total</div>
                <div class="h3" style="text-align: right;">$350.00</div>
            </div>
            <div class="line"></div>
            <button class="h2" style="font-family: Montserrat; color: #fff; background-color: #000; padding: 20px 100px; border-radius: 50px;">Checkout</button>
        </div>
    </div>

    <div class="container " style="margin-bottom: 100px;">
        <div class="botTxt">
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

    <FooterComponent/>
    
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ProductCard from '@/components/ProductCardComponent.vue';
import CartComponent from '@/components/CartComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent,
        ProductCard,
        CartComponent
    }
}
</script>

<style scoped>
.botTxt {
    color: #252B42;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: 0.1px;
}
.h1 {
    color: #000;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.h2 {
    color: #000;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; 
    letter-spacing: 0.2px;
    }
.h3 {
    color: #000;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.h3grey {
    color: #808080;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.cart {
    display: flex; 
    justify-content: space-between; 
    width: 400px;
}
.line {
    width: 500px;
    height: 1px;
    background: #d9d9d9;
}
</style>