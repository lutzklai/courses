<template>
    <li>
        <div class="list-group-item">
            Server #{{ index }}
        </div>
    </li>
</template>

<script>
    export default {
        props: ['index']
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>