{ }// this braces is called as a scope

{
    let a = 13;
    const b = 14;
    var c = 38;
}

console.log(a);// If we use let, the variable works only inside the block and can’t be used or printed outside that block.
console.log(b);// If we use const, the variable works only inside the block and can’t be used or printed outside that block.
console.log(c);// Variable declared with var works everywhere in the function or globally if outside a function. It can be used or printed inside or outside blocks


