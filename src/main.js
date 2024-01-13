import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  // Handle the error globally
  console.log('Global error:', err)
  console.log('Vue instance:', instance)
  console.log('Error info:', info)

  // Add code for UI notifications, reporting or other error handling logic
}

app
  .use(router)
  .use(store)
  .mount('#app')
