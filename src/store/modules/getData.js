import { getDatabase, ref, onValue, get, child} from "firebase/database";
import { fb } from "@/firebase-config"

export default {
    state: {
        idioms: ''
    },

    actions: {
        async getIdioms(ctx, data) {
            try {
                const dbRef = ref(fb.database);
                get(child(dbRef, `${data.path}/${data.userId}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        ctx.commit('setIdioms', snapshot.val())
                    } else {
                      console.log("No data available");
                    }
                });
            } catch (e) {
                console.log(e)
            }
        }
    },

    mutations: {
        setIdioms(state, info) {
            state.idioms = info
        }
    },
}