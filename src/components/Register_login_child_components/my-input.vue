<template>
    <div id="wrapper">
        <div id="myInput">
            <label id="label">Email</label> <br>
            <input type="email" required placeholder="Enter your email">
        </div>
        <div id="myInput">
            <label id="label">Password</label> <br>
            <input type="password" required>
        </div>
    </div>
</template>
<script></script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');    #wrapper {
       width: 350px; 
       height: auto;
    }
    #label {
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    input {
        width: 75%;
        padding: 7px;
        border: 2px solid #cac9c9;
        border-radius: 9px;
        margin-left: 2px;
        margin-top: 5px;
    }
    input:focus {
        outline: none;
        caret-color: #f61a1a;
    }
    input[type="email"]::placeholder {
        font-size: 10px;
        color: #636364;
    }
    #myInput {
        margin: 20px 0;
    }
</style>