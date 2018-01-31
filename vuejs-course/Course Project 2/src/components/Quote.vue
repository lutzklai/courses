<template>
    <div class="col-md-6 col-lg-3">
        <div class="well quote" style="cursor: pointer" @click="removeQuote">
            {{quote}}
        </div>
    </div>
</template>

<script>
    import { quoteBus } from '../main';

    export default {
        props: ['quote', 'index'],
        methods: {
            removeQuote(){
                quoteBus.removeQuote(this.index);
            }
        }
    }
</script>

<style scoped>
    .quote{
        background-color: #fff;
        font-family: Arizonia;
        font-size: 32px;
    }
</style>