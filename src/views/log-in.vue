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
    import myImage from '../components/Register_login_child_components/my-image.vue'
    import myTop from '../components/Register_login_child_components/my-top.vue'
    import myInput from '../components/Register_login_child_components/my-input.vue'
    import myBottom from '../components/Register_login_child_components/my-bottom.vue'
    export default {
        components: {
            'image-component': myImage,
            'top-component': myTop,
            'input-component': myInput,
            'bottom-component': myBottom,
        }
    }
</script>
<style scoped>
    .container {
        position: relative;
        width: 1000px;
        height: 450px;
        background-color: #f8f8f8;
        margin: auto;
    }
    .container > div {
        width: 500px;
    }
    #bottomId {
        margin: -10px 0 0 3px;
    }
    #inputId {
        margin-top: -10px;
    }
</style>