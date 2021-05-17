<template>
    <div class="alert-box">
        <transition name="show-alert">
            <div class="alert" :class="this.type" v-if="is_show">
                <div class="label">&nbsp;</div>
                <div class="main">
                    <font-awesome-icon :icon="['fas', 'check-circle']"></font-awesome-icon>
                    <div class="text-box">{{this.text}}</div>
                    <font-awesome-icon :icon="['far', 'times-circle']" @click="close"></font-awesome-icon>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props:['type', 'is_show', 'text'],
    methods:{
        close(){
            this.$emit('updateChange', {link:'/', show:false});
        }
    }
}
</script>
<style scoped>
    .alert-box{
        position: fixed;
        width: 100%;
        height: 100px;
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
    .alert{
        width: 500px;
        display: flex;
        height: 50px;
        border-radius: 3px;
        overflow: hidden;
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
        font-size: 17px;
    }

    .default > .label{background-color: #bcbbbc;}
    .default > .main{background-color: #eeeeee;}
    .default > .main > .text-box{color: #9d9d9d;}
    .default> .main > svg path{color: #9d9d9d;}

    .error > .label{background-color: red;}
    .error > .main{background-color: rgb(255, 238, 238);}
    .error > .main > .text-box{color: #ff4040;}
    .error> .main > svg path{color: #ff4040;}

    .success > .label{background-color: #46c55c;}
    .success > .main{background-color: #e8fff2;}
    .success > .main > .text-box{color: #62d876;}
    .success > .main > svg path{color: #62d876;}
</style>