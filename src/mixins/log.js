const log = {
    data() {
        return {
            childVisible: true
        };
    },
    created() {
        this.time = new Date();
        console.log("出生了");
    },
    beforeDestroy() {
        var now = new Date();
        console.log("销毁了，共生存了" + now - this.time);
    }
}
export default log