<template>
    <transition name="show-alert">
        <div class="alert default">
            <div class="label">&nbsp;</div>
            <div class="main">
                <font-awesome-icon :icon="['fas', 'check-circle']"></font-awesome-icon>
                <div class="text-box">로그인 완료</div>
                <font-awesome-icon :icon="['far', 'times-circle']" @click="close"></font-awesome-icon>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    methods:{
        close(){

        }
    }
}
</script>
<style scoped>
    .alert{
        position: fixed;
        width: 500px;
        display: flex;
        height: 50px;
        margin-top: 50px;
        border-radius: 3px;
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 3px 1px rgba(93,93,93,.1);
    }

    .alert > .label{
        width: 6px;
    }

    .alert > .main{
        width: 100%;
        display: flex;
        font-size: 18px;
        padding: 0 10px;
        align-items: center;
    }

    .alert > .main > .text-box{
        width: 100%;
        padding-left: 10px;
    }

    .default > .label{
        background-color: #bcbbbc;
    }

    .default > .main{
        background-color: #eeeeee;
    }

    .default > .main > .text-box{
        color: #9d9d9d;
    }

    .default> .main > svg path{
        color: #9d9d9d;
    }
</style>