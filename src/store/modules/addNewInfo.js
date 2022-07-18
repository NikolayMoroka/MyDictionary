import { getDatabase, ref, set, push } from "firebase/database";
import { fb } from "@/firebase-config"

export default {
    state: {
        
    },

    actions: {
        async addNewItem(ctx, data) {
            try {
                let path
                if(data.type === 'Idiom') {
                    path = 'idioms/'
                } else if(data.type === 'Word') {
                    path = 'words/'
                }
                console.log(path)
                const postListRef = ref(fb.database, path + data.userId);
                const newIdiom = push(postListRef);
                set(newIdiom, {
                    idiom: data.new_value,
                    meaning: data.new_meaning,
                });
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        },

        addColl() {
            const db = getDatabase();
            set(ref(db, 'words/' + 'userId'), {
              f:'f'
            });
          }
    }
}