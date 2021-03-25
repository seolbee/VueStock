<template>
    <div class="container">
        <stock-nav></stock-nav>
        <div class="main">
            <stock-header></stock-header>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import nav from '&/NavigatorComponent';
import header from '&/HeaderComponent';
export default {
    name:"MainApp",
    components:{
        'stock-nav':nav,
        'stock-header' : header
    }
}
</script>
<style scoped>
    .container{
        display: flex;
    }

    .main{
        width: 100%;
    }
</style>