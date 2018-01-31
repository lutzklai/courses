<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="item in servers" :data="item"></app-server>
        </ul>
    </div>
</template>

<script>
    import { eventBus } from '../../main';

    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Critical' },
                    { id: 3, status: 'Unknown' },
                    { id: 4, status: 'Normal' }
                ]
            }
        },
        created(){
            eventBus.$on('serverWasChanged', (server) => {
                this.servers.forEach((item, index) => {
                    if(item.id === server.id){
                        this.servers[index] = server;
                    }
                });

                this.servers = this.servers.slice(0);
            })
        }
    }
</script>

<style>

</style>
