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
        const taskIndex = this.tasks.findIndex(task => task.id === id);
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
            this.tasks[taskIndex] = {...this.tasks[taskIndex], ...updatedTask}
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
console.log(toDoList);

const toDoList2 = {
    tasks: [],
}


const addTaskFor2 = toDoList.addTask.bind(toDoList2);
const deleteTaskFor2 = toDoList.deleteTask;
const updateTaskFor2 = toDoList.updateTask

addTaskFor2(taks1);
addTaskFor2(taks2);
deleteTaskFor2.call(toDoList2, 1)
updateTaskFor2.apply(toDoList2, [2, taks3])

console.log(toDoList2)