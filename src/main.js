import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWnNy7AvyNFIKLvgVrVS7w0gtz_KFDmcM',
  authDomain: 'vue-firebase-coeurofbear-1.firebaseapp.com',
  projectId: 'vue-firebase-coeurofbear-1',
  storageBucket: 'vue-firebase-coeurofbear-1.appspot.com',
  messagingSenderId: '469551062869',
  appId: '1:469551062869:web:f1ca5e33e56ae6039499dc',
  measurementId: 'G-PKFPZBCHK2'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
