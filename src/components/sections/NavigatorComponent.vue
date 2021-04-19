<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                <img src="image/logo.png" alt="img">
            </router-link>
        </div>
        <ul>
            <li><router-link to="/"><font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>HOME</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'NavigatorComponent'
}
</script>
<style scoped>
    nav{
        width: 250px;
        height: 100vh;
        background-color: #f3f5fd;
    }
    .logo{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo a img{
        width: 150px;
    }

    ul{
        width: 100%;
    }

    ul > li{
        padding-left: 20px;
        
    }

    ul > li > a{
        font-size: 18px;
        color:#393737;
    }

    ul > li > a > svg{
        margin-right: 10px;   
    }

    ul > li > a > svg > path{
        color:#393737;
    }
</style>

// 로고 제작 사이트 : https://hatchful.shopify.com/your-logos