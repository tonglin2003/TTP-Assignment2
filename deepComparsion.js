function deepEqual(item1, item2)
{
    if (typeof(item1) === typeof(item2))
    {
        if (typeof(item1) === "object" && item1 !== null && items2 !== null)
        {
            return Object.keys(item1).toString() === Object.keys(item2).toString() 
            && Object.values(item1).toString() === Object.values(item2).toString();
        }
        else
        {
            return item1 === item2;
        }
    }
    else
    {
        return false
    }
        
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(deepEqual(null, {}));