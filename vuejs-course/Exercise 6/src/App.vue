<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <my-header></my-header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <my-server v-for="index in 5" :index="index"></my-server>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <my-server-details></my-server-details>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <my-footer></my-footer>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>

</style>
