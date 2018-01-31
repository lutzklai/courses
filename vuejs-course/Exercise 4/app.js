new Vue({
  el: '#exercise',
  data: {
    enteredClass: '',
    effectClass: 'highlight',
    fourClass: '',
    fourTruthy: '',
    progressBar: {
      width: '0%'
    },
    progressBarWidth: 0,
    enteredStyle: ''
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.effectClass = vm.effectClass === 'highlight' 
        ? 'shrink'
        : 'highlight';
      }, 2000);
    },
    startProgress: function(){
      var vm = this;
      setInterval(function(){
        vm.progressBarWidth += 5;
        vm.progressBar = {
          width: vm.progressBarWidth + '%'
        };
      }, 1000);
    }
  }
});
