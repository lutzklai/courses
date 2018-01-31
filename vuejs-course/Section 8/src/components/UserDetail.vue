<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>{{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Callback</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        props: {
            name: {
                type: String,
                reqiured: true
            },
            userAge: Number,
            resetFn: Function
        }, 
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            resetName() {
                this.name = 'Lutz';
                this.$emit('nameWasReset', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
