<template>
    <div id="wrapper">
        <h2>{{ myText }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            myText: {
                type: String,
                required: true
            },
            description: {
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h2 {
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #EA454C;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-size: .8rem;
        color: #636364;
        margin-top: -10px;
    }
    h2, p {
        margin-left: -60px;
    }
</style>