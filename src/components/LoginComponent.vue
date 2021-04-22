<template>
    <div id="login">
        <form @submit.prevent="login">
            <div class="title-box">
                <h1>Welcome</h1>
                <p class="span">Enter your credentials to access your account</p>
            </div>
            <div class="input-group">
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your username" v-model="loginData.id" @focus="focusing" @blur="bulring">
                </div>
                <div class="input">
                    <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                    <input type="password" placeholder="Enter your password" v-model="loginData.password" @focus="focusing" @blur="bulring">
                </div>
            </div>
            <button>Sign in</button>
            <p class='span'>If you are not a member <router-link to="/register">click me!</router-link></p>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            loginData:{
                id : '',
                password : ''
            }
        }
    },
    methods:{
        login(){
            axios.post('/login', this.loginData).then(data=>{
                let result = data.data;
                alert(result.msg);
                if(result.success){
                    this.$session.set('user', result.session);
                    this.$router.push('/');
                } 
            });
        },
        focusing(e){
            e.path[1].classList.add('focus');
        },
        bulring(e){
            e.path[1].classList.remove('focus');
        }
    },
    watch:{
        loginData :{
            deep:true,
            handler(n, o){
                
            }
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

#login{
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

.span{
    font-size: 12px;
    color: #ccc;
}

.span > a{
    color: #aaa;
    text-decoration: underline;
}

form > .span{
    text-align: center;
    margin-top: 10px;
}
</style>