
// export annonymous object
module.exports = {
    Add: function() {
        console.log("Adding two numbers");
        return this.x + this.y;
    },
    Subtract: function() {
        console.log("Subtracting two numbers");
        return this.x - this.y;
    }
}