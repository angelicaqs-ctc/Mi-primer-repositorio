//operadores matematicos
var a = 20;
var b = 5.5;
var c = 10;

"a + b = " + (a + b);
"a - c = " + (a - c);
"b * c = " + (b * c);
"a / b = " + (a / b);
"a % c = " + (a % c);
"a**5 = " + (a**5);

// No confundir las siguientes operaciones
"a + b * c = " + (a + b *c);
"(a + b)*c = " + (a + b)*c;

//operadores de Comparación
8 == "8"; //para js no hay diferencia entre un string con valor 8 y el numero 8
8 === "8"; //para validar que no solo tiene el mismo valor sino tambien el tipo, se utiliza ===
8 !="8"; //es tambien reconocido como un distinto simple
8 !== "8"; //un operador distinto doble

//operador logico
"true && true = " + (true && true);
"true && false = " + (true && false);
"true && true && false = " + (true && true && false);
"false && false = " + (false && false);

"true || true = " + (true || true);
"true || false = " + (true || false);
"true || true || false = " + (true || true || false);
"false || false = " + (false || false);

//combinaciones 
"true && true || false = " + (true && true || false);
"true || (true && false) = " + true || (true && false);