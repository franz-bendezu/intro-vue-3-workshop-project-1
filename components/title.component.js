app.component("title-activities", {
  props:{
    title: String
  },
  /*html*/
  template: `
    <div class="h1 text-primary text-center p-1">
        <i class="fas fa-check bg-primary text-white p-2"></i>
        <span class="p-2" v-bind:title="subtitle">{{title}}</span>
    </div>
  `,
});
