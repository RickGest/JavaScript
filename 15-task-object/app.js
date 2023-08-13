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

    updateTitle: function (id, newTitle) {
        const taskIndex = this.tasks.findIndex(task => task.id == id);
        if (taskIndex != -1) {
            this.tasks[taskIndex].title = newTitle;
            console.log(`Title of task with id=${id} has been updated`);
        } else {
            console.log(`Task with id=${id} not found`);
        }
    },

    updatePriority: function (id, newPriority) {
        const taskIndex = this.tasks.findIndex(task => task.id == id);
        if (taskIndex != -1) {
            this.tasks[taskIndex].priority = newPriority;
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
toDoList.updateTitle(2, "Work Harder")
toDoList.updatePriority(2, "1")
toDoList.sortByPriority();
console.log(toDoList);