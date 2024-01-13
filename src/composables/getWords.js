import { ref } from 'vue'
import { db } from '@/firebase/config'

const words = ref([])
const error = ref(null)

const load = async (store) => {
  try {
    const res = await db.collection(store.state.user.uid).orderBy('date', 'desc')

    res.onSnapshot(querySnapshot => {
      words.value = querySnapshot.docs.map(doc => {
        return { ...doc.data(), wordId: doc.id }
      })
    })
  }
  catch (err) {
    error.value = err.message
  }
}

const getWords = () => {
  return { words, error, load }
}
export default getWords