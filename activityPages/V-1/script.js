let app = new Vue({
    el: "#root",
    /*data: {
        names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
        newName: ''
    },
    methods: {
        addName() {
            if (this.newName === '') {
                return;
            }
            this.names.push(this.newName)
            this.newName = ""
        }
    }*/
    // Lesson 3
    /*data: {
        title: 'Brought to you by JavaScript',
        className: 'red',
        isLoading: true
    },
    methods: {
        toggleLoading() {
            this.isLoading = !this.isLoading
        }
    }*/
    data: {
        message: 'I really like bread',
        tasks: [{
            description: "Create some loaves of bread",
            completed: true
        },
        {
            description: "Create some fish",
            completed: true
        },
        {
            description: "Create more loaves of bread",
            completed: false
        },
        {
            description: "Create more fish",
            completed: false
        },
        {
            description: "Eat some loaves of bread",
            completed: false
        },
        {
            description: "Tell Peter Pan to clean up the mess",
            completed: false
        }
        ]
    },
    computed: {
        screaming() {
            return this.message.toUpperCase()
        },
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed)
        }
    }
})