const isSession = (to, from, next) =>{
    if(!this.$session.get('user')){
        alert('로그인을 해야만 이용 할 수 있습니다.');
        next('/login');
    }
}

export default {
    isSession
}