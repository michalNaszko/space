<template>
    <div id="loginCardContainer" class="w-100 m-auto card"> <!-- Container for login card -->
        <h1 class="h3 mb-3 fw-normal">{{ getAction() }}</h1>

        <form :action="getAction().toLowerCase()" @submit.prevent="performAction">
            <div class="mb-3 text-start" v-if="isRegister"> <!-- Container for username -->
                <label class="form-label mb-0" for="usernameInput">Username</label>
                <input class="form-control" v-model="form.username"
                       type="text"
                       name="username"
                       id="usernameInput"
                       placeholder="John"
                />
            </div>

            <div class="mb-3 text-start"> <!-- Container for email -->
                <label class="form-label mb-0" for="emailInput">Email address</label>
                <input class="form-control" v-model="form.email"
                       type="email"
                       name="email"
                       id="emailInput"
                       placeholder="name@example.com"
                />

            </div>

            <div class="mb-3 text-start"> <!-- Container for password -->
                <label class="form-label mb-0" for="passwordInput">Password</label>
                <input class="form-control" v-model="form.password"
                       type="password"
                       name="password"
                       id="passwordInput"
                       placeholder="Password"
                />

                <div class="text-end">
                    <a class="text-end" v-if="!isRegister" href="" @click.prevent="">Forgot password?</a>
                </div>
            </div>

            <div class="mb-3 text-start" v-if="isRegister"> <!-- Container for password confirmation -->
                <label class="form-label mb-0" for="passwordConfInput">Confirm Password</label>
                <input class="form-control" v-model="form.passwordConf"
                       type="password"
                       name="passwordConf"
                       id="passwordConfInput"
                       placeholder="Password">

                <div class="error">{{ errorMessage }}</div>
            </div>

            <button :data="btnBackgroundColor" class="w-100 btn btn-lg mb-5" type="submit">{{ getAction() }}</button>
            <div>
                <a href="" @click.prevent="isRegister = !isRegister">{{ getMessage() }}</a>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            isRegister: false,
            errorMessage: "",
            form: {
                username: "",
                email: "",
                password: "",
                passwordConf: ""
            },
            stateObj: {
                register :{
                    name: 'Register',
                    message: 'Already have an Account? Login!'
                },
                login : {
                    name: 'Login',
                    message: 'Doesn\'t have an account yet? Register now!'
                }
            }
        };
    },
    methods: {
        getMessage() {
            return  this.isRegister ? this.stateObj.register.message : this.stateObj.login.message;
        },
        getAction() {
            return  this.isRegister ? this.stateObj.register.name : this.stateObj.login.name;
        },
        performAction(e) {
            console.log(e);
            if (this.isRegister)
            {
                this.register()
            }
            else
            {
                this.login()
            }
        },
        login(e) {
            // const { username } = this;
            // this.$router.replace({ name: "dashboard", params: { username: username } });
            console.log("Login request!!!");
            axios.post("/" + this.getAction().toLowerCase(), {
                _token: this.csrf,
                email: this.form.email,
                password: this.form.password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        register() {
            if(this.form.password === this.form.passwordConf){
                axios.post("/" + this.getAction().toLowerCase(), {
                    _token: this.csrf,
                    username: this.username,
                    email: this.form.email,
                    password: this.form.password
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            else {
                this.errorMessage = "password did not match"
            }
            console.log("Register request!!!");
        }
    },
    computed: {
        toggleMessage : function() {
            return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
    },
    // props: ['csrf'],
    props: {
        csrf: "",
        btnBackgroundColor: {
            type: String,
            default: "vue"
        }
    }
};
</script>

<style>
    #loginCardContainer {
        max-width: 330px;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        padding: 15px;
        border-radius: 2%;
    }
</style>
