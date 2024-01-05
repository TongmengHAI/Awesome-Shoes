<template>
    <div style="display: flex; height: 58px; border: #23A6F0; border-bottom: 1px solid black; justify-content: space-between; align-items: center; padding: 0px 45px;">
        <div style="display: flex; align-items: center; gap: 20px;">
            <div style="display: flex;">
                <div class="Title" style="color: var(--text-color, #252B42);">Awesome</div>
                <div class="Title" style="color: #128A09;">Shoes</div>
            </div>
            <div class="GreyText">Home</div>
            <div class="dropdown">
                <button class="btn GreyText dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="GreyText dropdown-item" href="#">Men's Shoes</a></li>
                    <li><a class="GreyText dropdown-item" href="#">Women's Shoes</a></li>
                    <li><a class="GreyText dropdown-item" href="#">Kid's Shoes</a></li>
                </ul>
            </div>
            <div class="GreyText">About</div>
        </div>
        <div style="display: flex; align-items: center; gap: 20px;">
            <div class="BlueText"><img src="../assets/img/User.png">Login/Register</div>
            <div class="BlueText"><img src="../assets/img/Search.png">Search</div>
            <div class="BlueText"><img src="../assets/img/Cart.png">1</div>
            <div class="BlueText"><img src="../assets/img/Favorite.png">1</div>
        </div>
    </div>
</template>

<style scoped>
img{
    margin-right: 8px;
}
.GreyText{
    color:#737373;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.BlueText{
    display: flex;
    align-items: center;
    color:#23A6F0;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
}
.Title{
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    letter-spacing: 0.1px;
}
</style>