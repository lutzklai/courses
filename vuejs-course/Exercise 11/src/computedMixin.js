export const computedMixin = {
    computed: {
        textReverse(){
            return this.text.split('').reverse().join('');
        },
        textAppendLength(){
            return `${this.text} (${this.text.length})`;
        }
    }
}