import { expect, describe, test } from 'vitest'
import funcs from "./funcs.js";

describe('basic tests', () => {
    test('should calculate average age from provided data', () => {
        // arrange
        const data = funcs.task1Data

        // act
        const got = funcs.calculateAverageAge(data)

        // assert
        expect(got).toBe(30)
    });

    test('should group by city from provided data', () => {
        // arrange
        const data = funcs.task2Data

        // act
        const got = funcs.groupPeopleByCity(data)

        // assert
        expect(got).toStrictEqual({
                'New York': [
                    {name: 'Alice', age: 30, city: 'New York'},
                    {name: 'Charlie', age: 35, city: 'New York'}
                ],
                'Los Angeles': [
                    {name: 'Bob', age: 25, city: 'Los Angeles'},
                    {name: 'David', age: 40, city: 'Los Angeles'}
                ]
            }
        )
    });
});