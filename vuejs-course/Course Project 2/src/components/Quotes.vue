<template>
    <div class="row">
        <app-quote 
            v-for="(quote, index) in quotes" 
            :quote="quote" 
            :index="index">
        </app-quote>
    </div>
</template>

<script>
    import { quoteBus } from '../main';
    
    export default {
        data: function(){
            return {
                quotes: []
            }
        },
        created(){
            this.quotes = quoteBus.quotes;
        }
    }
</script>  