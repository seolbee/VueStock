<template>
    <header>
        <form>
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
    }

    .users > img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>