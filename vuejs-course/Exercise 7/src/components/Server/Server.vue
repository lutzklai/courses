<template>
    <li class="list-group-item" @click="clickServer">
        <p>
            id: {{data.id}}
        </p>
        <p>
            status: {{data.status}}
        </p>
    </li>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        props: {
            data: Object
        },
        methods: {
            clickServer() {
                eventBus.changeServerStatus(this.data, 'Critical');
            }
        }  
    }
</script>