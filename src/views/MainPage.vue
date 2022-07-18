<template>
<div>
    <TopBar/>
    <UserName/>
    <v-container class="mt-15">
        <div class="mt-5">
            <div v-for="btn in buttons" :key="btn.index" class="text-center my-5">
                <button class="main_btn py-3" @click="goToPage(btn)">
                    {{ btn.name }}
                </button>
            </div>
        </div>

        <div @click="go">

            {{ userInfo }}
        </div>
</v-container>
</div>
  
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import TopBar from '@/components/TopBar.vue'
import UserName from '@/components/UserName.vue'
export default {
    components: {
        TopBar,
        UserName
    },
    data: () => ({
        buttons: [
            {
                name: "Idioms",
                path: "Idioms",
                type: 'idioms/'
            },
            {
                name: "Words",
                path: "Words",
                type: "words/"
            },
        ],
    }),

    computed: {
        userInfo() {
            return this.$store.state.auth.userInfo.user.email
        }
    },

    methods: {
       async goToPage(value) {
            const data = {
            userId: this.$store.state.auth.uid,
            path: value.type
            }
            await this.$store.dispatch('getIdioms', data)

            this.$router.push({name: 'Idioms', params: value.name})
        },

        go() {
            this.$store.dispatch('addColl')
        }

    }
}
</script>

<style scoped>
    .main_btn {
        background: #4ecac2;
        border: 1px solid #4ecac2;
        border-radius: 25px 25px 25px 25px;
        color: #fff;
        width: 100%;
        font-size: 24px;
        text-transform: uppercase;
    }
</style>