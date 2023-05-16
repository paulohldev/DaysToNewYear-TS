export default class DaysToNewYear {
    actualDate;
    futureDate;
    days;
    constructor(year) {
        this.actualDate = new Date();
        this.futureDate = new Date(year, 0, 1, 0);
        this.days = this.getDays();
    }
    getDays() {
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const days = Math.ceil((this.futureDate.getTime() - this.actualDate.getTime()) / day);
        return days;
    }
}
//# sourceMappingURL=DaysToNewYear.js.map