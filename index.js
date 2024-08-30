const app =  Vue.createApp({
    data(){
        return {
            title: "Trying Vue",
            description: "Testing description....",
            age: 25,
            author: "John Arisi"
        }
    },
    methods: {
        addAge(){
            this.age++
        },
        subAge(){
            this.age--
        },
        changeTitle(){
            this.title = "New Title ..."
        },
    }
})

app.mount('#app')