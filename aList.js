function arrayToList(arr)
{
    let headObj = {value: arr[0],
        rest: null
    };

    let currentObj = headObj;
    
    for (let i = 1; i < arr.length; i++)
    {
        currentObj.rest = {
            value: arr[i],
            rest: null
        };
        currentObj = currentObj.rest;
    }    
    return headObj;
}

function listToArray(obj)
{
    let result = [];
    let currentObj = obj;

    while(currentObj !== null)
    {
        result.push(currentObj['value']);
        currentObj = currentObj['rest'];
    }

    return result;
}

let l = arrayToList([10, 12, 14]);
console.log(l);
let arr = listToArray(l);
console.log(arr);
