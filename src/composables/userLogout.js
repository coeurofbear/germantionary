import { ref } from 'vue'
import { auth } from '@/firebase/config'

const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    await auth.signOut()
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
  }
}

const userLogout = () => {
  return { error, logout }
}

export default userLogout