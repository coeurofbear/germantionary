import firebase from 'firebase'

export default {
  methods: {
    __getCurrentSignedInUser() {
      firebase.auth().onAuthStateChanged(user => {
        this.user = user
      })
    },
    __getCurrentUserObject() {
      firebase.auth().onAuthStateChanged(user => {
        this.userObject = user
      })
    },
    __logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert(`you've been signed out besitooo`)
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  }
}
