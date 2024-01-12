import { createApp } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import App from './App.vue'
import router from './router'
import store from './store'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
export const collection = db.collection('words')

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
