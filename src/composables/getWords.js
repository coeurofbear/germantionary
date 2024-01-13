import { ref } from 'vue'
import { db } from '@/firebase/config'

const words = ref(null)

const getWords = (store) => {
  db.collection(store.state.user.uid).orderBy('date', 'desc').onSnapshot(querySnapshot => {
    words.value = querySnapshot.docs.map(doc => {
      return {
        ...doc.data(),
        wordId: doc.id
      }
    })
  })

  return { words } 
}

export default getWords