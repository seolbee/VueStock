<template>
    <header>
        <form class="search">
            <input type="text" placeholder="검색">
        </form>
        <div class="users">
            <div class="no_auth" v-if="!this.$session.get('user')">
                <router-link to="/login">Login</router-link>
                <router-link to="/register">sign up</router-link>
            </div>
            <div class="auth" v-else>
                <!-- <span>{{this.$session.get('user').name}}</span> -->
                <img src="/profile/userimg" alt="img" @click="dropdown" class="img">
                <div class="dropdown" v-if="is_drop">
                    <div class="menu">
                        <div><a href="#" @click="logout">Logout</a></div>
                        <div><a href="#">setting</a></div>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
<script>
import axios from 'axios';
export default {
    name:"HeaderComponent",
    data(){
        return {
            is_drop : false
        }
    },
    methods:{
        logout(){
            axios.get('/logout').then(e=>{
                this.$session.destroy();
                this.$router.push('/login');
            });
        },
        dropdown(){
            this.is_drop = !this.is_drop;
        }
    },
    mounted(){
        window.addEventListener("click", e=>e.path[0].classList[0] != 'img' ? this.is_drop = false : '');  
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
        position: sticky;
        top: 0;
    }

    .search > input{
        padding: 5px;
        border:none;
    }

    .auth{
        display: flex;
        align-items: center;
        margin-right: 10px;
        justify-content: flex-end;
    }

    .auth > img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .dropdown{
        position: absolute;
        bottom: -45px;
        background-color: #fff;
        box-shadow: 0px 0px 2px 0px rgba(0,0,0,.5);
    }

    .dropdown > .menu > div{
        padding: 5px;
    }
</style>