import DaysToNewYear from './modules/DaysToNewYear.js';
const element = document.getElementById('days');
const teste = new DaysToNewYear(2024);
if (element) {
    element.innerText = String(teste.days);
}
//# sourceMappingURL=main.js.map