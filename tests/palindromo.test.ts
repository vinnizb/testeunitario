import { ehPalindromo } from "../src/palindromo";

describe("ehPalindromo", () => {
  test("verifica se 'arara' é um palíndromo", () => {
    expect(ehPalindromo("arara")).toBe(true);
  });

  test("verifica se 'banana' não é um palíndromo", () => {
    expect(ehPalindromo("banana")).toBe(false);
  });

  test("verifica se string vazia retorna falso", () => {
    expect(ehPalindromo("")).toBe(false);
  });

  test("verifica se 'A man a plan a canal Panama' é um palíndromo", () => {
    expect(ehPalindromo("A man a plan a canal Panama")).toBe(true);
  });
});
