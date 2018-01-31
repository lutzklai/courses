 new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        inGame: false,
        logs: [],
        gameOver: false
    },
    methods: {
        onStartGame: function(){
            this.logs = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameOver = false;
            this.inGame = true;
        },
        onEndGame: function(){
            this.inGame = false;
        },
        onAttack: function(isSpecialAttack){
            if(this.gameOver) return;

            isSpecialAttack = isSpecialAttack || false;

            var playerAttack = isSpecialAttack 
                ? this.randomNumber(20)
                : this.randomNumber(10);
            var monsterAttack = this.randomNumber(10);

            // player attack
            this.monsterHealth -= playerAttack;
            this.logs.unshift({
                text: 'PLAYER HITS MONSTER FOR ' + playerAttack,
                entity: 'player'
            });

            if(this.checkGameStatus()) return;
            
            // monster attack
            this.playerHealth -= monsterAttack;
            this.logs.unshift({
                text: 'MONSTER HITS PLAYER FOR ' + monsterAttack,
                entity: 'monster'
            });

            if(this.checkGameStatus()) return;
        },
        randomNumber: function(max){
            // default
            max = max || 10;
            return Math.floor(Math.random() * max) + 1;
        },
        onHeal: function(){
            if(this.gameOver) return;

            var monsterAttack = this.randomNumber(10);

            // player heal
            this.playerHealth += 10;
            this.logs.unshift({
                text: 'PLAYER HEALS HIMSELF FOR 10',
                entity: 'player'
            });
            
            if(this.checkGameStatus()) return;

            // monster attack
            this.playerHealth -= monsterAttack;
            this.logs.unshift({
                text: 'MONSTER HITS PLAYER FOR ' + monsterAttack,
                entity: 'monster'
            });

            if(this.checkGameStatus()) return;
        },
        checkGameStatus: function(){
            if(this.monsterHealth <= 0){
                this.gameOver = true;
                var option = confirm('YOU WIN! START OVER?');
                if(option){
                    this.onStartGame();
                }
                return true;
            }else if(this.playerHealth <= 0){
                this.gameOver = true;
                var option = confirm('YOU LOSE! YOU GET NOTHING! GOOD DAY SIR! START OVER?');
                if(option){
                    this.onStartGame();
                }
                return true;
            }
            return false;
        }
    }
 });