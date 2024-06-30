const score: Array<number> = []
const names: Array<string> = []

function Identity<T>(arg: T): T {
    return arg
}

// if we want to pass the type of the argument then we can do like this
Identity<number>(1) // if we Number then we can return the number type
Identity<string>("1") // if we pass string then we can return the string type only
// another way to right Identity function
function IdentityFive<type>(arg: type): type {
    return arg
}

function identityOne(val: number | boolean): number | boolean {
    return val
}


function identityTwo(val:any):any{
    return val
}

interface LengthWise {
    length: number,
    width: number
}
// way to pass the type of the argument in the function 
IdentityFive<LengthWise>({length: 1, width: 2})