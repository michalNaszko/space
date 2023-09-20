<template>
    <div> <!-- Container for login card -->
        <div>{{ getAction() }}</div>

        <form :action="getAction().toLowerCase()" @submit.prevent="performAction">
            <div v-if="isRegister"> <!-- Container for username -->
                <input v-model="form.username"
                       type="text"
                       name="username"
                       id="usernameInput"
                       placeholder="John"
                />
                <label for="usernameInput">Username</label>
            </div>

            <div> <!-- Container for email -->
                <input v-model="form.email"
                       type="email"
                       name="email"
                       id="emailInput"
                       placeholder="name@example.com"
                />
                <label for="emailInput">Email address</label>
            </div>

            <div> <!-- Container for password -->
                <input v-model="form.password"
                       type="password"
                       name="password"
                       id="passwordInput"
                       placeholder="Password"
                />
                <label for="passwordInput">Password</label>
                <a v-if="!isRegister" href="" @click.prevent="">Forgot password?</a>
            </div>

            <div v-if="form.isRegister"> <!-- Container for password confirmation -->
                <input v-model="form.passwordConf"
                       type="password"
                       name="passwordConf"
                       id="passwordConfInput"
                       placeholder="Password">
                <label for="passwordConfInput">Password</label>
            </div>

            <button type="submit">{{ getAction() }}</button>
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
            // if(this.password == this.confirmPassword){
            //     this.isRegister = false;
            //     this.errorMessage = "";
            //     this.$refs.form.reset();
            // }
            // else {
            //     this.errorMessage = "password did not match"
            // }
            console.log("Register request!!!");
        }
    },
    computed: {
        toggleMessage : function() {
            return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
    },
    props: ['csrf']
};
</script>
