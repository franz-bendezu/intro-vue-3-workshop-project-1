app.component("task-form", {
  /*html*/
  template: `
    <div class="row">
    <form @submit.prevent="addTask" class="col col-11 mx-auto">
      <div
        class="
          row
          bg-white
          rounded
          shadow-sm
          p-2
          align-items-center
          justify-content-center
          add-todo-wrapper
        "
      >
        <div class="col my-2">
          <input
            v-model="currentTask.title"
            required
            class="form-control"
            type="text"
          />
        </div>
        <div class="col-auto m-0 my-2 px-2 d-flex align-items-center">
          <div class="input-group">
            <span class="input-group-text">
              <i
                class="fa fa-calendar"
                :class="{'text-danger': taskAlert(currentTask),'text-success': !taskAlert(currentTask)}"
              ></i>
            </span>
            <input
              v-model="currentTask.dueDate"
              required
              class="form-control rounded bg-tranparent"
              type="date"
            />
          </div>
        </div>
        <div class="col-auto my-2">

          <button class="btn btn-primary" type="submit">Agregar</button>
        </div>
      </div>
    </form>
  </div>
    `,
  props: {
    task: Object,
  },
  emits: {
    'add-task': {},
  },
  data: () => ({
    currentTask: {
      title: "",
      done: false,
      dueDate: "",
    },
  }),
  watch: {
    task(newValue) {
      this.currentTask = newValue;
    },
  },
  computed: {
    currentDate() {
      return "2021-10-03";
    },
  },
  methods: {
    taskAlert(task) {
      return !task.done && task.dueDate < this.currentDate;
    },
    addTask() {
      this.$emit("add-task", Object.assign({}, this.currentTask));
    },
  },
});
