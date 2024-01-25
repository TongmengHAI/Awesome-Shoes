<template>
    <div class="container">
        <div>
            <div id="top">
                <top-component myText="Sign up" description="By signing up you agree to AwesomeShoes’s Term & Condition"/>
            </div>
            <div id="myId">
                <label id="label">Name</label> <br>
                <input type="text" placeholder="Enter your name" required>
            </div>
            <input-component/>
            <div id="myId">
                <label id="label">Confirm password</label> <br>
                <input type="password" placeholder="Confirm password" required>
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');    
    .container {
        position: relative;
        width: 800px;
        height: 600px;
        background-color: #F8F8F8;
        margin: 50px auto;
    }
    .container > div {
        width: fit-content;
        height: fit-content;
        margin-left: 70px;
    }
    .container > div #top {
        padding-top: 15px;
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
        width: 79%;
        padding: 6px 10px 9px;
        border: 2px solid #cac9c9;
        border-radius: 9px;
        margin: 5px 0 0 2px;
    }
    input:focus {
        outline: none;
        caret-color: #f61a1a;
    }
    input::placeholder {
        font-size: 14px;
        color: #636364;
    }
    #isId {
        margin-top: -10px;
    }
</style>