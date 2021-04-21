<template>
    <div class="container">
        <stock-nav v-if="this.$session.get('user')"></stock-nav>
        <!-- <stock-nav></stock-nav> -->
        <div class="main" :class="!this.$session.get('user') ? 'background' : ''">
            <stock-header v-if="this.$session.get('user')"></stock-header>
            <!-- <stock-header></stock-header> -->
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
        background-color: #fff;
    }

    .background{
        background-color:#e9edff;
    }
</style>