function range(start, end, step=1)
{
    let result = [];

    if (step >= 1)
    {
        for (let i = start; i <= end; i += step)
        {
            result.push(i);
        }
    }
    else if (step <= -1)
    {
        for (let i = end; i >= start; i -= (step * -1))
        {
            result.push(i);
        }
    }
    else
    {
        throw new Error("Step must be a non-zero value.");
    }

    return result;
}

function sum(arr)
{
    let sum = 0;
    for (let num of arr)
        sum += num;
    return sum;
}

console.log(range(1,10,-2));
console.log(sum(range(1,10)));