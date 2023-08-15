const taks1 = {
    id: "1",
    title: "Clean",
    priority: "2",

}

const taks2 = {
    id: "2",
    title: "Work",
    priority: "4",

}

const taks3 = {
    id: "3",
    title: "Rest",
    priority: "3",

}

const toDoList = {
    tasks: [],

    addTask: function (task) {
        this.tasks.push(task);
        console.log("Task successfully added");
    },

    deleteTask: function (id) {
        const taskIndex = this.tasks.findIndex(task => task.id == id);
        if (taskIndex != -1) {
            this.tasks.splice(taskIndex, 1);
            console.log(`Task with id=${id} has been deleted`);
        } else {
            console.log(`Task with id=${id} not found`);
        }
    },

    updateTask: function (id, updatedTask) {
        const taskIndex = this.tasks.findIndex(task => task.id == id);
        if (taskIndex != -1) {
            this.tasks[taskIndex].title = updatedTask.title ?? this.tasks[taskIndex].title;
            this.tasks[taskIndex].priority = updatedTask.priority ?? this.tasks[taskIndex].priority;
            console.log(`Title of task with id=${id} has been updated`);
        } else {
            console.log(`Task with id=${id} not found`);
        }
        
    },

    sortByPriority: function() {
        this.tasks.sort((a, b) => a.priority - b.priority);
        console.log("Tasks sorted");
        console.log(this.tasks);
    }
}

toDoList.addTask(taks1);
toDoList.addTask(taks2);
toDoList.addTask(taks3);
toDoList.deleteTask(1);
toDoList.sortByPriority();

const updateTask1 = {
    title: "updated Task", 
};

const updateTask2 = {
    title: "updated Task 2", 
    priority: "10"
};

toDoList.updateTask(2, updateTask1);
toDoList.updateTask(3, updateTask2);
console.log(toDoList);