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

//Type Assertion

let exampleAny: any = 1
// let typeAssertionExample = <number>exampleAny
//or
let typeAssertionExample = exampleAny as number


//Functions
function addNumber(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

//Interfaces
interface ExampleInterface {
    readonly id: number, //readonly
    name: string,
    age?: number //FOr optional
}

const user1: ExampleInterface = {
    id: 1,
    name: 'hhhh'
}

interface MathFunction {
    (x: number, y: number): number
}

const add: MathFunction = (x: number, y: number = 0): number => {
    return x + y
}

//Classes
class Person {
    user: string
    private id: number
    protected name: string
    public age?: number

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.user = 'hello'
    }

}

interface Person2ClassInterface {
    id: number,
    name: string,
    registerUser(): string
}

class Person2 implements Person2ClassInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    registerUser() {
        return `${this.name} is welcomed`
    }


}

const personClass = new Person(1, 'Hello')

const person2Class = new Person2(2, 'Hello')