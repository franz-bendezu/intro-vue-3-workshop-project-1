app.component("task-list-item", {
  /*html*/
  template: `
    <div class="row px-3 align-items-center">
        <div class="col col-auto m-1 align-items-center">
            <div>
                <input
                v-model="taskDone"
                class="form-check-input"
                type="checkbox"
                />
            </div>
            </div>
            <div class="col col-auto m-1 align-items-center">
            <div class="input-group">
                <input
                v-model="taskTitle"
                :disabled="!editable"
                class="form-control form-control-lg"
                />
                <span v-if="isDue" class="input-group-text">
                    <i class="fas fa-exclamation-triangle text-danger"></i>
                </span>
            </div>
        </div>
        <div class="col col-auto m-1 align-items-center">
            <div class="row" >
                <div class="col col-auto align-items-center pr-2">
                    <i    :class="{'text-danger':isDue}" class="fa fa-info-circle my-2 px-2 text-black-50 btn"></i>
                    <input 
                    :disabled="!(isDue||editable)"
                    :class="{'text-danger':isDue}"
                    type="date"
                     v-model="taskDueDate" 
                    class="form-control my-2 text-black-50">
                </div>
            </div>
        </div>
        <div class="col col-auto m-1 align-items-center">
            <button @click="toggleEditable" class="btn btn-primary m-2">
                <i class="fas fa-edit"></i>
            </button>
            <slot />
        </div>
    </div>
    `,
  props: {
    task: Object,
  },
  emits: {
    "update:task": {},
  },
  data: () => ({
    editable: false,
  }),
  methods: {
    toggleEditable() {
      this.editable = !this.editable;
    },
  },
  computed: {
    taskDone: {
      get() {
        return this.task.done;
      },
      set(done) {
        this.$emit("update:task", { ...this.task, done });
      },
    },
    taskDueDate: {
      get() {
        return this.task.dueDate;
      },
      set(dueDate) {
        this.$emit("update:task", { ...this.task, dueDate });
      },
    },
    taskTitle: {
      get() {
        return this.task.title;
      },
      set(title) {
        this.$emit("update:task", { ...this.task, title });
      },
    },
    currentDate() {
      return "2021-10-03";
    },
    isDue() {
      return !this.task.done && this.task.dueDate < this.currentDate;
    },
  },
});
