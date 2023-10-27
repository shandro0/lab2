// Задача 1
function task1() {
  let name = "Ilya";
  alert( `hello ${1}`); // "hello 1"
  alert( `hello ${"name"}`); // "hello name"
  alert( `hello ${name}`); // "hello Ilya"
}

// Задача 2
function task2() {
  console.log("Задача 2");
  let Name = prompt("Введите имя:");
  console.log(Name);
  document.write(`Имя: ${Name}`);
}

// Задача 3
function task3() {
  console.log("Задача 3");
  let a = 1, b = 1; // a = 2, b = 2
  let c = ++a; // c = 2 - a увеличивается до присвоения
  let d = b++; // d = 1 - b увеличивается после присвоения
  console.log(`a = ${a} b = ${b} c = ${c} d = ${d}`);
}

// Задача 4
function task4() {
  console.log("Задача 4");
  let a = 2;
  let x = 1 + (a *= 2); // a = 4, x = 9
  console.log(`a = ${a} x = ${x}`);
}

// Задача 5
function task5() {
  console.log("Задача 5");
  console.log("" + 1 + 0);       // выведет "10"
  console.log("" - 1 + 0);       // выведет -1
  console.log(true + false);     // выведет 1
  console.log(6 / "3");          // выведет 2
  console.log("2" * "3");        // выведет 6
  console.log(4 + 5 + "px");     // выведет "9px"
  console.log("$" + 4 + 5);      // выведет "$45"
  console.log("4" - 2);          // выведет 2
  console.log("4px" - 2);        // выведет NaN
  console.log(7 / 0);            // выведет Infinity
  console.log("  -9  " + 5);     // выведет "  -9  5"
  console.log("  -9  " - 5);     // выведет -14
  console.log(null + 1);         // выведет 1
  console.log(undefined + 1);    // выведет NaN
  console.log(" \t \n" - 2);     // выведет -2
}

// Задача 6
function task6() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  alert(Number(a) + Number(b)); // Ответ: 3
}

// Задача 7
function task7() {
  console.log("Задача 7");
  console.log(Math.PI.toFixed(2)); // 3.14
}

// Задача 8
function task8() {
  console.log("Задача 8");
  let Input = prompt("Введите число:");
  console.log("Вы ввели число: " + Input);
}

// Задача 9
function task9() {
  console.log("Задача 9");
  let Input = prompt("Введите число:");
  console.log(Input + " - вот какое число Вы ввели");
}

// Задача 10
function task10() {
  console.log("Задача 10");
  let Length = prompt("Введите длину стороны квадрата:");
  console.log("Периметр квадрата: " + 4 * Length);
}

// Задача 11
function task11() {
  console.log("Задача 11");
  let radius = prompt("Введите радиус окружности:"); 
  console.log("Диаметр окружности: " + 2 * radius);
}

// Задача 12
function task12() {
  console.log("Задача 12");
  let height = Number(prompt("Введите высоту над Землей:"));
  let radius = 6350; // Радиус Земли в километрах
  let Distance = Math.sqrt(Math.pow(radius, 2)+ Math.pow(height, 2));
  console.log("Расстояние до линии горизонта: " + Distance + " км");
}

// Задача 13
function task13() {
  console.log("Задача 13");
  let Length = prompt("Введите длину ребра куба:");
  let Obiom = Math.pow(Length, 3); // Объем куба
  let Area = 6 * Math.pow(Length, 2); // Площадь боковой поверхности куба
  console.log("Объем куба: " + Obiom);
  console.log("Площадь боковой поверхности куба: " + Area);
}

// Задача 14
function task14() {
  console.log("Задача 14");
  let radius = prompt("Введите радиус окружности:");
  let Length= 2 * Math.PI * radius; // Длина окружности
  let area = Math.PI * Math.pow(radius,2); // Площадь круга
  console.log("Длина окружности: " + Length);
  console.log("Площадь круга: " + area);
}

// Задача 15
function task15() {
  console.log("Задача 15");
  let a = 5;
  let b = 10;
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("a = " + a); // 10, было 5
  console.log("b = " + b); // 5, было 10
}

// Задача 16
function task16() {
  console.log("Задача 16");
  let num1 = prompt("Введите первое число:");
  let num2 = prompt("Введите второе число:");

  // Среднее арифметическое
  let otvetA = (Number(num1) + Number(num2)) / 2;
  console.log("Среднее арифметическое: " + otvetA);

  // Среднее геометрическое
  let otvetB = Math.sqrt(Number(num1) * Number(num2));
  console.log("Среднее геометрическое: " + otvetB);
}

// Задача 17
function task17() {
  console.log("Задача 17");
  let Obiom = prompt("Введите объем тела:");
  let Massa = prompt("Введите массу тела:");
  console.log("Плотность: " + Number(Massa) / Number(Obiom));
}

// Задача 18
function task18() {
  console.log("Задача 18");
  let population = prompt("кол-во жителей:");
  let area = prompt("площадь территории:");
  console.log("Плотность населения: " + Number(population) / Number(area));
}

// Задача 19
function task19() {
  console.log("Задача 19");
  let a = prompt("длину 1-го катета:");
  let b = prompt("длину 2-го катета:");
  console.log("Длина гипотенузы: " + Number(Math.sqrt(Math.pow(a,2)) + Number(Math.pow(b,2))));
}

// Задача 20
function task20() {
  console.log("Задача 20");
  let V1 = prompt("Внешний радиус:");
  let V2 = prompt("Внутренний радиус:");
  console.log("Площадь кольца: " + Number(Math.PI * (Math.pow(V1,2) - Math.pow(V2,2))));
}

// Задача 21
function task21() {
  console.log("Задача 21");
  let a = prompt("первый катет:");
  let b = prompt("второй катет:");
  let hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  console.log("Периметр треугольника: " + Number(a) + Number(b) + Number(hypotenuse));
}

// Задача 22
function task22() {
  console.log("Задача 22");
  let a = prompt("Длину 1-го основания:");
  let b = prompt("Длину 2-го основания:");
  let h = prompt("Высота:");
  let side = Math.sqrt(Math.pow(((a - b) / 2),2)+ Math.pow(h,2));
  console.log("Периметр: " + Number(a) + Number(b) + 2 * Number(side));
}