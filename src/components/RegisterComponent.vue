<template>
    <div id="register">
        <form @submit.prevent="registe">
            <div class="title-box">
                <h1>Welcome</h1>
                <p>Enter your credentials to access your account</p>
            </div>
            <div class="input-group">
                <div class="img-input">
                    <img src="image/users.png" alt="img" @click="change_img" ref="userImg">
                    <input type="file" @change="get_src" ref="file" accept=".jpg, .jpeg, .png, .gif" name="img">
                </div>
                <div class="input" ref="id">
                    <font-awesome-icon :icon="['far', 'id-card']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your userid" v-model="user.id" @focus="focusing" @blur="bulring">
                </div>
                <div class="input" ref="name">
                    <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your username" v-model="user.name" @focus="focusing" @blur="bulring">
                </div>
                <div class="input" ref="phone">
                    <font-awesome-icon :icon="['fas', 'phone-alt']"></font-awesome-icon>
                    <input type="text" placeholder="Enter your phone number ex) 01011112222" v-model="user.phone" @focus="focusing" @blur="bulring">
                </div>
                <div class="input" ref="password">
                    <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                    <input type="password" placeholder="Enter your password" v-model="user.password" @focus="focusing" @blur="bulring">
                </div>
                <div class="input" ref="passwordConfirm">
                    <font-awesome-icon :icon="['fas', 'lock']"></font-awesome-icon>
                    <input type="password" placeholder="Enter your password one more" v-model="user.passwordConfirm" @focus="focusing" @blur="bulring">
                </div>
            </div>
            <button>Sign up</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            user:{
                name : '',
                id: '',
                phone:'',
                password:'',
                passwordConfirm:'',
                img:null
            }
        }
    },
    methods:{
        change_img(){
            this.$refs.file.click();
        },
        get_src(){
            this.user.img = this.$refs.file.files[0];
            this.get_image(this.user.img);
        },
        get_image(file){
            let img = this.$refs.userImg;
            const reader = new FileReader();
            reader.onload = function(e){
                img.src = e.target.result;
            }
            reader.readAsDataURL(file);
        },
        validation(name){
            // if(this.user.id.trim() === "") this.$refs.id.classList.add("err");
            // else this.$refs.id.classList.remove("err");
        },
        registe(){
            let formData = new FormData();
            formData.append('userId', this.user.id);
            formData.append('username', this.user.name);
            formData.append('userImg', this.user.img);
            formData.append('userPhone', this.user.phone);
            formData.append('userPassword', this.user.password);
            axios.post('/register', formData, {headers:{'Content-Type' : 'multipart/form-data'}}).then(data=>{
                alert(data.data.msg);
                this.$router.push('/login');
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
        user:{
            deep:true,
            handler(n, o){
                if(n.id === "") this.$refs.id.classList.add("err");
                else this.$refs.id.classList.remove("err");
            }
        }
        // user:{
        //     deep:true,
        //     handler(n, o){
        //         if(n.name === "") this.$refs.name.classList.add("err");
        //         else this.$refs.name.classList.remove("err");
        //     }
        // }
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