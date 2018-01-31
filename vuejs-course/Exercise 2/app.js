new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: function(){
            alert('Alert');
        },
        onKeydown: function(event){
            this.value = event.target.value;
        }
    }
});