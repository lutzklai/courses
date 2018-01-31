<template>
    <div class="quote-container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3">
                <h4>
                    Quote
                </h4>
                <textarea class="well" v-model="quoteInput">
                
                </textarea>
                <div class="text-center">
                    <button class="btn btn-primary" @click="addQuote">
                        Add Quote
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { quoteBus } from '../main';

    export default {
        data: function(){
            return {
                quoteInput: null
            }
        },
        methods: {
            addQuote(){
                if(this.quoteInput === null || this.quoteInput === '') return;
                
                let success = quoteBus.addQuote(this.quoteInput);
                if(!success){
                    alert('Too many Quotes! Delete some before adding new ones!');
                }else{
                    this.quoteInput = null;
                }
            }
        }
    }
</script>

<style scoped>
    textarea {
        width: 100%;
        display: block;
        background-color: #fff;
    }

    .quote-container{
        margin-bottom: 20px;
    }
</style>