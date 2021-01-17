import { db } from '@/main.js'

export default function getData() {
  db.collection('words')
    .get()
    .then((querySnapshot) => {
      console.log('lol')
      const words = querySnapshot.docs.map((doc) => doc.data())
      return words
    })

}