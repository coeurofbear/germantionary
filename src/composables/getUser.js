import { ref } from 'vue'
import { auth } from '@/firebase/config.js'

const user = ref(auth.currentUser)

auth.onAuthStateChanged(_user => {
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser