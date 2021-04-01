<template>
    <header>
        <form class="search">
            <input type="text" placeholder="검색">
        </form>
        <div class="users">
            <img src="image/users.png" alt="img">
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
        height: 60px;
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