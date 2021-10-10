const options = {
  data() {
    return {
      title: "Mis actividades",
      subtitle: "Tengo 5 actividades",
      tasks: [
        {
          id: 1,
          title: "Comprar el libros el fin de semana",
          done: false,
          dueDate: "2021-10-27",
        },
        {
          id: 2,
          title: "Limpiar mi cuarto",
          done: true,
          dueDate: "2021-11-27",
        },
      ],
      defaultTask: {
        title: "",
        done: false,
        dueDate: "",
      },
      currentTask: {
        title: "",
        done: false,
        dueDate: "",
      },
      currentDate: "2021-10-03",
    };
  },
  computed:{
    doneActivities(){
      return this.tasks.filter(t=>t.done)
    },
    totalDoneActitivities(){
      return this.doneActivities.length
    }
  },
  watch:{
    "currentTask.title"(newValue, oldValue){
      console.log(newValue, oldValue)
    }
  },
  methods: {
    taskAlert(task) {
      return !task.done && task.dueDate < this.currentDate;
    },
    addTask() {
      this.tasks.push(Object.assign({}, this.currentTask));
      this.currentTask = Object.assign({}, this.defaultTask);
    },
  },
};
const app = Vue.createApp(options);
