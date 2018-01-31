<template>
    <div>
        <h1>
            Quotes Added
        </h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width: (quotes.length * 10) + '%'}">
                {{quotes.length}}/10
            </div>    
        </div>
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