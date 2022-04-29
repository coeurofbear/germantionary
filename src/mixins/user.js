import firebase from 'firebase'

export default {
  methods: {
    __getCurrentSignedInUser() {
      firebase.auth().onAuthStateChanged(user => {
        this.user = user
      })
    },
    // __getCurrentUserObject() {
    //   return firebase.auth().currentUser
    // },
    __logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // alert(`you've been signed out besitooo`)
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  }
}
