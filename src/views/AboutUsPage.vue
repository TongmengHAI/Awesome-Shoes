<template>
    <HeaderComponent/>
    <div style="margin: 100px;">
        <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px; margin-left: 20px;">ABOUT US</div>
        <div style="height: 1px; background: #D9D9D9; margin: 30px 0px 24px;"></div>
        <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px; margin: 0px 20px;">
            Lorem ipsum dolor sit amet consectetur. Bibendum faucibus duis magna aenean massa pellentesque convallis cum senectus. Ac nulla luctus nulla ultrices sollicitudin nulla ullamcorper sed. Risus odio ridiculus faucibus lectus quam aenean. Molestie nisi amet cursus rhoncus faucibus augue. Cursus sed maecenas habitant nisl egestas. Leo lobortis eget amet felis velit et egestas hac aliquam. Lectus at at nisi adipiscing dignissim. Nulla etiam velit risus vitae nulla libero vehicula aliquet nulla. Tellus sed a dolor sed.
        </div>
    </div>
    <div style="margin: 100px;">
        <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px; margin-left: 20px;">CONTACT US</div>
        <div style="height: 1px; background: #D9D9D9; margin: 30px 0px 24px;"></div>  
        <div style="display: grid; grid-template-columns: repeat(3,1fr); gap: 50px;">  
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="margin-bottom: 30px;">
                    <img src="../assets/chat.svg" style="height: 128px; width: 128px;">
                </div>
                <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px;">PRODUCTS & ORDERS</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">Chat with us</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">4am - 11pm PT</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">7 days a week</div>
            </div>
            <div style="display: flex; flex-direction: column ;align-items: center;">
                <div style="margin-bottom: 30px;">
                    <img src="../assets/phone.svg" style="height: 128px; width: 128px;">
                </div>
                <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px;">PRODUCTS & ORDERS</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">099888777</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">4am - 11pm PT</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">7 days a week</div>
            </div>
            <div style="display: flex; flex-direction: column ;align-items: center;">
                <div style="margin-bottom: 30px;">
                    <img src="../assets/phone.svg" style="height: 128px; width: 128px;">
                </div>
                <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px;">COMPANY INFO & INQUIRIES</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">099888777</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">4am - 11pm PT</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">7 days a week</div>
            </div>
            <div style="display: flex; flex-direction: column ;align-items: center;">
                <div style="margin-bottom: 30px;">
                    <img src="../assets/mail.svg" style="height: 128px; width: 128px;">
                </div>
                <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px;">MAIL US</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">example@gmail.com</div>
            </div>
            <div style="display: flex; flex-direction: column ;align-items: center;">
                <div style="margin-bottom: 30px;">
                    <img src="../assets/location.svg" style="height: 128px; width: 128px;">
                </div>
                <div class="Txt" style="font-size: 24px; font-weight: 700; line-height: 24px;">STORE LOCATION</div>
                <div class="Txt" style="font-size: 16px; font-weight: 500; line-height: 24px;">Find stores near you</div>
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
}

</script>

<style scoped>

.Txt {
    color: #000;
    font-family: Montserrat;
    font-style: normal;
    letter-spacing: 0.2px;
}

</style>