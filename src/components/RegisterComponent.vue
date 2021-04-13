<template>
    <div id="register">
        <form @submit.prevent="registe">
            <div class="title-box">
                <h1>Welcome</h1>
                <p>Enter your credentials to access your account</p>
            </div>
            <div class="input-group">
                <div class="img-input">
                    <img src="image/users.png" alt="img" @click="change_img">
                    <input type="file" @change="get_src" ref="file" accept=".jpg, .jpeg, .png, .gif">
                </div>
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your username">
                </div>
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'phone-alt']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your phone number ex) 01011112222">
                </div>
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                    <input type="password" placeholder="Enter your password">
                </div>
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                    <input type="password" placeholder="Enter your password one more">
                </div>
            </div>
            <button>Sign up</button>
        </form>
    </div>
</template>
<script>
export default {
    methods:{
        change_img(){
            this.$refs.file.click();
        },
        get_src(){
            console.log(this.$refs.file.files[0]);
        }
    }
}
</script>
<style scoped>
input{
    border:none;
    margin-left: 5px;
    display: flex;
    flex: 15;
    font-size: 13px;
}

.img-input{
    width: 100%;   
    text-align: center;
}

img{
    width: 100px;
    border-radius: 50%;
}

.input{
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px 8px;
    display: flex;
    margin: 20px 0;
}

.input > svg{
    display: flex;
    flex: 1;
    font-size: 18px;
}

.input > svg > path{
    color: #6e88e8;
}
/* 
.input-group{

} */

form{
    background-color: white;
    border-radius: 5px;
    width: 400px;
    position: relative;
    top: 50%;
    left:50%;
    transform:translate(-50%, -50%);
    padding: 30px;
}

/* form > *{
    margin: 20px 0;
} */

#register{
    height: 100vh;
}

button{
    background-color: #6e88e8;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    font-size: 13px;
}

.title-box{
    text-align: center;
    margin-bottom: 50px;
}

.title-box > h1{
    color:#2a355d;
    margin-bottom: 5px;
    font-size: 30px;
}

.title-box > p{
    font-size: 12px;
    color: #ccc;
}
</style>