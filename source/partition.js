'use strict';

/**
 * Разбивает массив на два подмассива по предикату
 * @param {Array} arr Массив элементов для разделения
 * @param {function(Number): boolean} predicate
 *        Функция-предикат, принимающая элемент массива и
 *        возвращающая логическое значение (`true`/`false`)
 *
 * @example
 * // Разделить числа на чётные и нечётные
 * const [evens, odds] = partition([1,2,3,4], n => n % 2 === 0);
 * // evens => [2,4], odds => [1,3]
 * 
 * @returns Двумерный массив из подходящих и не подходящих значений.
 */
const partition = (arr, predicate) => {
    if (!Array.isArray(arr)) throw new TypeError('Expected first argument to be an Array');
    if (typeof predicate !== 'function') throw new TypeError('Expected second argument to be a Function');
    return arr.reduce(
        (acc, item) => {
            if (typeof item !== 'number' || Number.isNaN(item)) throw new TypeError('Unexpected element type');
            (predicate(item) ? acc[0] : acc[1]).push(item);
            return acc;
        },
        [[], []]
    );
}