<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!--content goes here-->
            <h1>Create User</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="fname">Name</label>
                    <input type="text" class="form-control" v-model="user.fname" required>
                </div>
                <div class="form-group">
                    <label for="lastname">Lastname</label>
                    <input type="text" class="form-control" v-model="user.lastname" required>
                </div>
                <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input type="date" class="form-control" v-model="user.birthday" required>
                </div>
                <div class="form-group">
                    <label for="tel">Telephone</label>
                    <input type="text" class="form-control" v-model="user.tel" required>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" v-model="user.address" required>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" v-model="user.username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" v-model="user.password" required>
                </div>
                <div class="form-group mt-2">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
   data(){
    return {
        user:{
            fname: '',
            lastname:'',
            birthday:'',
            tel:'',
            address:'',
            username:'',
            password:''
        }
    }
   },
   methods:{
    handleSubmitForm() {
        let apiURL = 'http://localhost:4000/api/create-user'; 

        axios.post(apiURL, this.user).then (() => {
            this.$router.push('/view');
            this.user ={
                fname: '',
                lastname:'',
                birthday:'',
                tel:'',
                address:'',
                username:'',
                password:''
            }
        }).catch(error => {
            console.log(error)
        })
    }
   }
}
</script>

