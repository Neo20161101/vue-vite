const store = {
    debug: true,
    state: {
        message: 'Hello!',
        pathname:'/home',
        MenuData:[]
    },
    setPanes(data){
        store.state.panes = data;
    }
}
export default store;