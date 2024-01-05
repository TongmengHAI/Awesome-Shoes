<template>
    <div style="background-color: #204969; padding: 50px 103px; display: flex; justify-content: space-between; align-items: start;">
        <div style="display: flex; align-items: start; gap: 30px;">
            <div style="padding-right: 20px; display: flex;"><div class="Logo" style="color: #FFF;" >Awesome</div><div class="Logo" style="color: #128A09;">Shoes</div></div>
            <div class="Column">
                <div class="WhiteText">Company Info</div>
                <div class="GreyText">News</div>
                <div class="GreyText">About Us</div>
                <div class="GreyText">Student Discount</div>
                <div class="GreyText">Sustainability</div>
            </div>
            <div class="Column">
                <div class="WhiteText">Get Help</div>
                <div class="GreyText">Order Status</div>
                <div class="GreyText">Return</div>
                <div class="GreyText">Order Cancellation</div>
                <div class="GreyText">Payment Option</div>
            </div>
            <div class="Column">
                <div class="WhiteText">My Account</div>
                <div class="GreyText">Login/Register</div>
                <div class="GreyText">My Favorite</div>
                <div class="GreyText">My Cart</div>
            </div>
        </div>
        <div style="display: flex; gap: 30px; align-items: start;">
            <div class="Column">
                <div class="WhiteText">Contact Us</div>
                <div class="WhiteText"><img style="margin-right: 5px;" src="../assets/img/Phone.png">(855) 555-0118</div>
                <div class="WhiteText"><img style="margin-right: 5px;" src="../assets/img/Mail.png">example@example.com</div>
            </div>
            <div class="Column">
                <div class="WhiteText">My Account</div>
                <img src="../assets/img/Facebook.jpg">
                <img src="../assets/img/Instagram.png">
                <img src="../assets/img/Twitter.png">
            </div>
        </div>
    </div>
    <div class="GreyText" style="background-color: #204969; padding: 50px 103px; display: flex; justify-content: center; border-top: 1px solid #737373;">Made With Love By AwesomeShoes All Right Reserved</div>
</template>

<style scoped>
.GreyText{
    color:#737373;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.WhiteText{
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: 0.1px;
}
.Logo{
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    align-self: center;
    line-height: 32px;
    letter-spacing: 0.1px;
}
.Column{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
}
</style>