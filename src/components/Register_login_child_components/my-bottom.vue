<template>
    <div id="wrapper">
        <div id="myId">
            <input type="checkbox">
            <span id="text1">Remember me</span>
            <span id="text2">Forgot password</span>
        </div>
        <RouterLink to="/">
            <button type="submit">{{ btnValue }}</button>
        </RouterLink>
        <div id="text-bottom">
            <span id="text3">{{ textA }}</span>
            <RouterLink to="/register" style="text-decoration: none; margin-top: -6px;">
                <span id="text4">{{ textB }}</span>
            </RouterLink>
        </div>
    </div>
</template>
<script>
    import { RouterLink } from 'vue-router';
    export default {
        components: {
            RouterLink
        },
        props: {
            btnValue: {
                type: String,
                required: true 
            },
            textA: {
                type: String,
                required: true 
            },
            textB: {
                type: String,
                required: true 
            }
            
        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');    #wrapper {
        width: 350px;
        height: auto;
        margin-left: 5px;
    }
    #myId{
        width: 77%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 5px;
        margin-top: 30px;
    }
    #text1 {
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        margin-left: -60px;
        margin-top: 4px;
    }
    #text2 {
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        text-decoration: underline;
        color: #EA454C;
        margin-top: 4px;
    }
    #text2:hover {
        font-size: 12px;
        cursor: pointer;
    }
    button {
        background-color: #EA454C;
        color: #FFFFFF;
        border-radius: 9px;
        border: none;
        width: 79%;
        padding: 7px;
        margin: 20px 0 20px 2px;
    }
    button:hover {
        cursor: pointer;
        background-color: #b70009;
    }
    #text-bottom {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #text3 {
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        margin-left: -70px;
    }
    #text4 {
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        text-decoration: underline;
        color: #EA454C;
        margin-left: 10px;
        cursor: pointer;
    }
    #text4:hover {
        font-size: 12px;
        cursor: pointer;
    }
</style>