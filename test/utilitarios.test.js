const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
  let util;

  beforeAll(() => {
    util = new Utilitarios(); 
  });

  test("Inverter strings", () => {
    expect(util.inverterString("trapezio")).toBe("oizepart");
  });

  test("Contar caracteres", () => {
    expect(util.contarCaracteres("quadrado")).toBe(8);
  });

  test("Passar caracteres para maiúsculo", () => {
    expect(util.paraMaiusculas("triangulo")).toBe("TRIANGULO");
  });

  test("Passar caracteres para minúsculo", () => {
    expect(util.paraMinusculas("RETANGULO")).toBe("retangulo");
  });

  test("Passar primeiro caracter para maiúsculo", () => {
    expect(util.primeiraLetraMaiuscula("circulo")).toBe("Circulo");
  });

  test("Passar primeiro caracter para maiúsculo", () => {
    expect(util.primeiraLetraMaiuscula("circulo")).toBe("Circulo");
  });

  test("Somar dois valores inteiros", () => {
    expect(util.somar(1,1)).toBe(2);
  });

  test("Subtrair dois valores inteiros", () => {
    expect(util.subtrair(5,1)).toBe(4);
  });

  test("Multiplicar dois valores inteiros", () => {
    expect(util.multiplicar(3,2)).toBe(6);
  });

  test("Dividir dois valores inteiros", () => {
    expect(util.dividir(10,2)).toBe(5);
  });

  test("Dividir por zero deve lançar erro", () => {
    expect(() => { util.dividir(10, 0) }).toThrow("Divisão por zero")
 });

 test('Retornar verdadeiro para número par', () => {
    expect(util.ehPar(4)).toBe(true);
  });

  test('Retornar false para número par', () => {
    expect(util.ehPar(5)).toBe(false);
  });
  
  test('Retornar o primeiro elemento do array', () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('Retornar o último elemento do array', () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('Retornar o tamanho do array', () => {
    expect(util.tamanhoArray([1, 2, 3, 4])).toBe(4);
  });

  test('Ordenar o array', () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('Inverter o array', () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('Gerar número entre 0 e max', () => {
    const num = util.gerarNumeroAleatorio();
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(100);
  })

  test('Identificar números corretamente', () => {
    expect(util.ehNumero(5)).toBe(true);
    expect(util.ehNumero('5')).toBe(false);
    expect(util.ehNumero(NaN)).toBe(false);
  });

  test('Remover espaços no início e no fim', () => {
    expect(util.removerEspacos('  pentagono  ')).toBe('pentagono');
  });

  test('Repetir o texto N vezes', () => {
    expect(util.repetirTexto('abc', 5)).toBe('abcabcabcabcabc');
  });

  test('Juntar array com separador padrão e customizado', () => {
    expect(util.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  test('Contar corretamente as palavras', () => {
    expect(util.contarPalavras('um hexagono')).toBe(2);
    expect(util.contarPalavras('  um hexagono tem seis lados ')).toBe(5);
  });

  test('Calcular média dos números no array', () => {
    expect(util.mediaArray([1, 2, 3, 4])).toBe(2.5);
  });

  test('Remover elementos duplicados', () => {
    expect(util.removerDuplicados([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test('Identificar palíndromos', () => {
    expect(util.ehPalindromo('arara')).toBe(true);
    expect(util.ehPalindromo('Ana')).toBe(true); 
    expect(util.ehPalindromo('heptagono')).toBe(false);
  });

  test('Mesclar propriedades dos objetos', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(util.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

});
