function appDateObject(money, time){
    this.budget = money;
    this.timeData = time;
    this.optionalExpenses = {};
    this.income = [];
    this.savings = false;
}

var money, time;

money = prompt("Ваш бюджет на месяц?","0");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appDate = new appDateObject(money, time);

let ans1 = prompt("Введите обязательную статью расходов в этом месяце","");
let ans2 = prompt("Во сколько обойдется?","");

appDate.expenses = { 
    [ans1] : [ans2] 
};

alert("Бюджет на день: " + (appDate.budget / 30).toFixed(2));



