export function ehPalindromo(texto: string): boolean {
    if (texto.length === 0) {
      return false;
    }
  
    const textoNormalizado = texto.replace(/[\W_]/g, "").toLowerCase();
    return textoNormalizado === textoNormalizado.split("").reverse().join("");
  }
  