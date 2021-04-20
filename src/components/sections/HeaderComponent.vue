<template>
    <header>
        <form class="search">
            <input type="text" placeholder="검색">
        </form>
        <div class="users">
            <div class="no_auth" v-if="!this.$session.get('user')">
                <router-link to="/login">로그인</router-link>
                <router-link to="/register">회원가입</router-link>
            </div>
            <div class="auth" v-else>
                <span>{{this.$session.get('user').name}}</span>
                <a href="#" @click="logout">로그아웃</a>
            </div>
        </div>
    </header>
</template>
<script>
import axios from 'axios';
export default {
    name:"HeaderComponent",
    methods:{
        logout(){
            axios.get('/logout').then(e=>{
                this.$session.destroy();
                this.$router.push('/login');
            });
        }
    }
}
</script>
<style scoped>
    header{
        width: 100%;
        display: flex;
        height: 80px;
        justify-content: space-between;
        align-items:center;
        padding: 0 15px;
    }

    .search > input{
        padding: 5px;
        border:none;
    }

    .users > img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>