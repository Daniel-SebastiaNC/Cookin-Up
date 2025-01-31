export function comparacaoLista(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((item) => lista2.includes(item));
}