/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test('true', function () {
    var resultado = validarCPF('18');
    expect(resultado).toBe(true);
})
test('false', function () {
    var resultado = validarCPF(17);
    expect(resultado).toBe(false);
})
