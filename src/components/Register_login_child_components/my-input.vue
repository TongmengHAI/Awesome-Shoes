<template>
    <div id="wrapper">
        <div id="myInput">
            <label id="label">Email</label> <br>
            <input type="email" placeholder="Enter your email" required>
        </div>
        <div id="myInput">
            <label id="label">Password</label> <br>
            <input type="password" placeholder="Enter your password" required>
        </div>
    </div>
</template>
<script></script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;1,200&display=swap');    
    #wrapper {
       width: 350px;
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
        margin-left: 2px;
        margin-top: 5px;
    }
    input:focus {
        outline: none;
        caret-color: #f61a1a;
    }
    input::placeholder {
        font-size: 14px;
        color: #636364;
    }
    #myInput {
        margin: 20px 0;
    }
</style>