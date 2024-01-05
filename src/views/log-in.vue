<template>
    <div class="container">
        <div>
            <top-component myText="welcome back" description="login with your email and password"/>
            <input-component id="inputId"/>
            <bottom-component id="bottomId" btnValue="Sign in" textA="Don't have an account?" textB="Sign up"/>
        </div>
        <image-component/>
    </div>
</template>
<script>
    import myImage from './my-image.vue'
    import myTop from './my-top.vue'
    import myInput from './my-input.vue'
    import myBottom from './my-bottom.vue'
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
    .container {
        position: relative;
        width: 800px;
        height: 450px;
        background-color: #f8f8f8;
        margin: 50px auto;
    }
    .container > div {
        width: fit-content;
        height: fit-content;
        padding: 30px 50px 50px 50px;
        margin-left: 20px;
    }
    #bottomId {
        margin: -10px 0 0 3px;
    }
    #inputId {
        margin-top: -10px;
    }
</style>