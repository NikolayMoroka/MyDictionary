<template>
    <div class="auth d-flex align-center justify-center">
        <!-- <div class="auth_title">MyDictionary</div> -->
        <div class="auth_form text-center">
            <v-container>

                <!-- Form for LOG IN -->
                <div v-if="form === 'logIn'">
                    <div class="auth_title">LOG IN</div>
                    <v-text-field
                        v-model="formData.email"
                        :rules="[rules.required, rules.email]"
                        label="E-mail"
                        color="#4ecac2"
                    ></v-text-field>

                    <v-text-field
                        v-model="formData.password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min, rules.max]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 6 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>

                    <button class="main_btn py-2 mt-5" @click="getLogin()">
                        Log In
                    </button>

                    <dir class="text_logOn mt-3">
                        <span> If you don't have an account yet, <span class="goLogOn" @click="form = 'logOn'">sign up</span></span>
                    </dir>
                </div>

                <!-- Form for LOG ON -->
                <div v-if="form === 'logOn'">
                    <div class="auth_title">LOG ON</div>
                    <v-text-field
                        v-model="newFormData.email"
                        :rules="[rules.required, rules.email]"
                        label="Enter your E-mail"
                        color="#4ecac2"
                    ></v-text-field>

                    <v-text-field
                        v-model="newFormData.password1"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min, rules.max]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Think of a Password"
                        hint="At least 6 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>

                     <v-text-field
                        v-model="newFormData.password2"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min, rules.max]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Confirm Password"
                        hint="At least 6 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>

                    <button class="main_btn py-2 mt-5" @click="getLogon()">
                        Log On
                    </button>

                    <dir class="text_logOn mt-3">
                        <span>If you already have an account <span class="goLogOn" @click="form = 'logIn'">log in</span></span>
                    </dir>
                </div>
                
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        form: 'logIn',
        formData: {
            email: '',
            password: '',
        },
        newFormData: {
            email: '',
            password1: '',
            password2: ''
        },
        show1: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          max: v => v.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        } 
    }),



    methods: {
        async getLogin() {
            try {
               await this.$store.dispatch('login', this.formData)
               this.$router.push({name: 'MainPage'})
                console.log("All Ok")
            } catch (e) {
                console.log(e)
            }
        },

        async getLogon() {
            if(this.newFormData.password1 === this.newFormData.password2) {
                const formDataForReg = {
                    email: this.newFormData.email,
                    password: this.newFormData.password1
                }
                try {
                    await this.$store.dispatch('logon', formDataForReg)
                    this.$router.push({name: 'MainPage'})
                    console.log("All Ok")
                } catch (e) {
                    console.log(e)
                }
            } else {
                console.log('password invalid')
            }
        },
    }
}
</script>

<style scoped>
    .auth {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background: #fff;
        z-index: 1000;
    }
    .auth_form {
        border: 1px solid #4ecac2;
        border-radius: 25px;
        width: 80%;
    }
    .auth_title {
        font-size: 28px;
        color: #4ecac2;
    }
    .main_btn {
        background: #4ecac2;
        border: 1px solid #4ecac2;
        border-radius: 25px 25px 25px 25px;
        color: #fff;
        width: 100%;
        font-size: 24px;
        text-transform: uppercase;
    }
    .text_logOn {
        width: 80%;
        margin: auto;
        color: #949494;
    }
    .goLogOn {
        color:#4ecac2;
        font-weight: 700;
    }
</style>>
