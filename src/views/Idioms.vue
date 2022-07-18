<template>
    <div class="">
        <TopBar/>
        <div class="text-center">
            <button class="main_btn py-5 mt-5 mb-5" @click="dialog = !dialog">
                add new +
            </button>

            <!-- <button class="main_btn py-5 mt-3 mb-5" @click="dialog = !dialog">
                add topic +
            </button> -->
        </div>

        <hr class="mb-7">
        
        <v-row v-for="(i, index) in idiomsList" :key="index" class="item mb-3 ma-auto">
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <div class="">
                    <div class="value text-center"> {{ i.idiom }} </div>
                    <div class="text-center"> {{ i.meaning }} </div>
                </div>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center">
                <v-btn color="#fff" text icon @click="sing(i.idiom)">
                    <v-icon large>mdi-volume-high</v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            overlay-color="#fff"
        >
            <div class="dialog_top_bar">
                <v-container class="d-flex align-center justify-end">
                    <v-btn text icon @click="closeDialod()">
                        <v-icon large>mdi-close</v-icon>
                    </v-btn>
                </v-container>
            </div>
            <div class="dialog d-flex align-center">
                <v-container>
                    <v-radio-group
                        v-model="type"
                        row
                    >
                        <div class="d-flex justify-space-around radio">
                             <v-radio
                                label="Idiom"
                                value="Idiom"
                                color="#4ecac2"
                            ></v-radio>
                            <v-radio
                                label="Word"
                                value="Word"
                                color="#4ecac2"
                            ></v-radio>
                        </div>
                    </v-radio-group>
                     <v-text-field
                        v-model="new_value"
                        :label="type"
                        outlined
                        clearable
                        color="#4ecac2"
                    ></v-text-field>
                     <v-text-field
                        v-model="new_meaning"
                        label="Meaning"
                        outlined
                        clearable
                        color="#4ecac2"
                    ></v-text-field>
                    <div class="radio text-center">
                        <button class="submit_btn py-5 mt-3 mb-5" @click="addNew()">
                            add new {{ type }}
                        </button>
                    </div>
                </v-container>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
export default {
    components: {
        TopBar
    },
    data: () => ({
        dialog: false,
        type: 'Idiom',
        new_value: '',
        new_meaning: '',
        idioms: [
            {
                value: 'Same here',
                trans: 'Я також / згоден'
            },
            {
                value: 'Same here',
                trans: 'Я також / згоден'
            }
        ]
    }),

    computed: {
        idiomsList() {
            return this.$store.state.getData.idioms
        }
    },

    methods: {
      async addNew() {
        const data = {
            type: this.type,
            userId: this.$store.state.auth.uid,
            new_value: this.new_value,
            new_meaning: this.new_meaning,
        }
        await this.$store.dispatch('addNewItem', data)
        if(this.type === 'Idiom') {
            await this.$store.dispatch('getIdioms', {userId: this.$store.state.auth.uid, path: 'idioms/'})
        } else if(this.type === 'Word') {
            await this.$store.dispatch('getIdioms', {userId: this.$store.state.auth.uid, path: 'words/'})
        }
        this.closeDialod()
      },

      sing(value) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(value))
      },

      closeDialod() {
        this.new_value = ''
        this.new_meaning = ''
        this.dialog = !this.dialog
      }
    }
    
}
</script>

<style scoped>
    .item {
        background: #4ecac2;
        color: #fff;
        max-width: 100vw;
    }
    .element {
        width: 70%;
    }
    .value {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
    }
    .main_btn {
        border: 1px solid #4ecac2;
        color: #4ecac2;
        width: 80%;
        border-radius: 25px 25px 25px 25px;
        font-size: 24px;
        text-transform: uppercase;
    }
    .dialog {
        background-color: #fff;
        height: 100vh;
        position: absolute;
        width: 100%;
        z-index: 100;
    }
    .dialog_top_bar {
        height: 50px;
        width: 100vw;
        position: absolute;
        z-index: 101;
    }
    .radio {
        width: 100%;
    }
    .submit_btn {
        background: #4ecac2;
        border: 1px solid #4ecac2;
        color: #fff;
        width: 80%;
        border-radius: 25px 25px 25px 25px;
        font-size: 20px;
        text-transform: uppercase;
    }
</style>