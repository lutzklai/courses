<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <div>
                    <p>
                        {{text | myReverse}}
                    </p>    
                </div>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <div>
                    <p>
                        {{text | appendLength}}
                    </p>
                </div>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <div>
                    <p>{{textReverse}}</p>
                    <p>{{textAppendLength}}</p>
                </div>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { computedMixin } from './computedMixin';

    export default {
        data(){
            return {
                text: 'Hello World!'
            }
        },
        filters: {
            myReverse(value){
                return value.split('').reverse().join('');
            }
        },
        mixins: [computedMixin]
    }
</script>

<style>
</style>
