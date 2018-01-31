<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <div v-if="server">
            <p>
                id: {{server.id}}
            </p>
            <p>
                status: {{server.status}}
            </p>
            <button @click="updateServer">
                Update Server
            </button>
        </div>
    </div>

</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function(){
            return {
                server: null
            }
        },
        created(){
            eventBus.$on('serverWasChanged', (server) => {
                this.server = server;
            });
        },
        methods: {
            updateServer(){
                eventBus.changeServerStatus(this.server, 'Normal');
                this.server = null;
            }
        }
    }
</script>

<style>

</style>
