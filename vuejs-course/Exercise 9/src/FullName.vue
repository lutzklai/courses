<template>
    <div>
        <input
            type="text"
            id="firstName"
            class="form-control"
            v-model="firstName"
            @input="onInput">
        <input
            type="text"
            id="lastName"
            class="form-control"
            v-model="lastName"
            @input="onInput">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: ''
            }
        },
        props: ['value'],
        methods: {
            onInput(){
                this.$emit('input', this.firstName + ' ' + this.lastName);
            },
            setName(fullName){
                let split = fullName.split(' ');
                this.firstName = split[0];
                this.lastName = split[1] !== undefined ? split[1] : '';
            }
        },
        watch: {
            value(newVal, oldVal){
                this.setName(newVal);
            }
        },
        created() {
            this.setName(this.value);
        }
    }
</script>