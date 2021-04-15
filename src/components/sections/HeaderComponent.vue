<template>
    <header>
        <form class="search">
            <input type="text" placeholder="검색">
        </form>
        <div class="users">
            <router-link to="/login">로그인</router-link>
            <router-link to="/register">회원가입</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name:"HeaderComponent"
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