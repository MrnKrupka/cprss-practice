const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        myCustomTask({ data }) {
          console.log(data);
          return 'Task successfully executed';
        }
      });
    },
  },
  video: true
});
