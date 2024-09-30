import { Calculadora } from "../src/calculadora";

describe("Calculadora", () => {
  test("soma de 2 + 3 deve ser 5", () => {
    expect(Calculadora.soma(2, 3)).toBe(5);
  });

  test("subtração de 5 - 3 deve ser 2", () => {
    expect(Calculadora.subtracao(5, 3)).toBe(2);
  });

  test("multiplicação de 4 * 5 deve ser 20", () => {
    expect(Calculadora.multiplicacao(4, 5)).toBe(20);
  });

  test("divisão de 10 / 2 deve ser 5", () => {
    expect(Calculadora.divisao(10, 2)).toBe(5);
  });

  test("divisão por zero deve lançar erro", () => {
    expect(() => Calculadora.divisao(10, 0)).toThrow("Divisão por zero não é permitida");
  });
});
