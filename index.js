const app =  Vue.createApp({
    data(){
        return {
            title: "Trying Vue",
            description: "Testing description....",
            age: 25,
            author: "John Arisi"
        }
    }
})

app.mount('#app')