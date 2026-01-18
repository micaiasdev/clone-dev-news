const calculadora = require("../../models/calculadora.js");

test("Somar 2 + 2 deve ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Somar 100 + 5 deve ser 105", () => {
  const resultado = calculadora.somar(100, 5);
  expect(resultado).toBe(105);
});

test("Somar 100 + banana deve retornar ERRO", () => {
  const resultado = calculadora.somar(100, "banana");
  expect(resultado).toBe("ERRO");
});

test("Somar 100 + NaN deve retornar ERRO", () => {
  const resultado = calculadora.somar(100, NaN);
  expect(resultado).toBe("ERRO");
});

test("Somar 100 + Null deve retornar ERRO", () => {
  const resultado = calculadora.somar(100, null);
  expect(resultado).toBe("ERRO");
});
