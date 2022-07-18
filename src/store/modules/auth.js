import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    state: {
        userInfo: '',
        uid: ''
    },
    actions: {
        async login({dispatch, commit}, {email, password}) {
            const auth = getAuth()
            try {
                await  signInWithEmailAndPassword(auth, email, password) 
                .then((userCredential) => {
                    commit('getUserInfo', userCredential)
                    console.log(userCredential)
                })
            } catch (e) {
                throw e
            }
        },

        async logon({dispatch, commit}, {email, password}) {
            const auth = getAuth()
            try {
                await  createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    commit('getUserInfo', userCredential)
                    console.log(userCredential)
                }) 
            } catch (e) {
                throw e
            }
        }
    },

    mutations: {
        getUserInfo(state, info) {
            state.userInfo = info
            state.uid = info.user.uid
        }
    },
}