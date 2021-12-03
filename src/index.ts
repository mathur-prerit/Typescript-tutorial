// Primitove data type
const user: string = 'Prerit'
const age: number = 24
const isEngineer: boolean = true
const x: any = 'string'

//Complex value
const arrayOfNumber: number[] = [1, 2, 3]
const arrayOfAny: any[] = [1, true, 'hello']

//Tuple
const tupleExample: [number, string] = [1, 'world']

//Nested Tuple 
const nestedTupleArray: [number, boolean][] = [
    [1, true],
    [2, false]
]

//Union type
const unionType: string | number = 5

//Enums
enum directionsEnums {
    Up = 1,
    Down = 'downnnnn',
}

//Objects
type ExampleObject = {
    name: string, age: number
}

const exampleObject: ExampleObject = {
    name: 'Prerit',
    age: 24
}

    
