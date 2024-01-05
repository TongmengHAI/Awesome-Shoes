<template>
    <div class="container">
        <div>
            <top-component myText="Sign up" description="By signing up you agree to AwesomeShoes’s Term & Condition"/>
            <div id="myId">
                <label id="label">Name</label> <br>
                <input type="text" placeholder="Enter your name" required>
            </div>
            <input-component/>
            <div id="myId">
                <label id="label">Confirm password</label> <br>
                <input type="password" required>
            </div>
            <bottom-component id="isId" btnValue="Sign up" textA="Already have an account?" textB="Sign in"/>
        </div>
        <image-component/>
    </div>
</template>
<script>
    import myImage from '../components/Register_login_child_components/my-image.vue'
    import myTop from '../components/Register_login_child_components/my-top.vue'
    import myInput from '../components/Register_login_child_components/my-input.vue'
    import myBottom from '../components/Register_login_child_components/my-bottom.vue'
    export default {
        components: {
            'image-component': myImage,
            'top-component': myTop,
            'input-component': myInput,
            'bottom-component': myBottom
        }
    }
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');    .container {
        position: relative;
        width: 800px;
        height: 500px;
        background-color: #F8F8F8;
        margin: 0 auto;
    }
    .container > div {
        width: fit-content;
        height: fit-content;
        margin-left: 70px;
    }
    #myId {
        width: 350px;
        margin-top: 10px;
        height: auto;
    }
    #label {
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: bold;
    }
    input {
        width: 75%;
        padding: 7px;
        border: 2px solid #cac9c9;
        border-radius: 9px;
        margin: 5px 0 0 2px;
    }
    input:focus {
        outline: none;
        caret-color: #f61a1a;
    }
    input[type="text"]::placeholder {
        font-size: 10px;
        color: #636364;
    }
    #isId {
        margin-top: -10px;
    }
</style>