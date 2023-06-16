class MyArray {
    constructor(arr)
    {
        this.arr = arr
        this.length = 0
        for (let num of arr) { this.length++ }
    }

    // myPush(newNum) pushes newNum into the class atrribute "arr"
    myPush(newNum)
    {
        this.arr[this.length] = newNum;
        this.length++
    }

    // myEach, copy of forEach(), loops through all the element in the this.arr
    // takes in a lambdaFunction from the user
    myEach(lambdaFunction){
        for (let i = 0; i < this.length; i++)
        {
            lambdaFunction(this.arr[i]);
        }
    }

    // myMap, copy of map(), loops through all element in this.arr
    // returns an array and the element of array depends on the lambdaFunction given
    myMap(lambdaFunction)
    {
        let returnArr = new MyArray([]);
        for (let i = 0; i < this.length; i++)
        {
            let num = lambdaFunction(this.arr[i]);
            returnArr.myPush(num);
        }
        return returnArr.arr;
    }

    // myMap, copy of map(), loops through all element in this.arr
    // returns an array and the element of array depends on the lambdaFunction given
    // the return size of array might not be the same size as this.arr.length
    myFilter(lambdaFunction)
    {
        let returnArr = new MyArray([]);
        for (let i = 0; i < this.length; i++)
        {
            if (lambdaFunction(this.arr[i]))
                returnArr.myPush(this.arr[i]);
        }
        return returnArr.arr;
    }

    // mySome, copy of some(), loops through element in this.arr
    // return true if encounter one element fulfills the lambdafunction's condition
    // else return false if didn't encounter any
    mySome(lambdaFunction)
    {
        for (let i = 0; i < this.length; i++)
        {
            if (lambdaFunction(this.arr[i]))
                return true;
        }
        return false;
    }

    // myEvery(), copy of some(), loops through all elements in this.arr
    // return true if all elements fulfill the lambdafunction's condition
    // else return false 
    myEvery(lambdaFunction)
    {
        for (let i = 0; i < this.length; i++)
        {
            if (!lambdaFunction(this.arr[i]))
                return false;
        }
        return true;
    }

    myReduce(lambdaFunction, initialValue)
    {
        let accumulator = 0;
        for (let i = 0; i < this.length; i++)
        {
            accumulator = lambdaFunction(accumulator, this.arr[i]);
        }

        return accumulator + initialValue;
    }

    myIncludes(target)
    {
        for (let i = 0; i < this.length; i++)
        {
            if (this.arr[i] === target) return true;
        }
        return false;
    }


}

myArr = new MyArray([1,2,3,4,5]);

// Testing for length attribute
console.log("----- Testing for length attribute --------");
console.log(myArr.length);
console.log("The original list is like: ")
myArr.myEach(element => {
    console.log(element);
});

// Testing for myPush function
myArr.myPush(6);
myArr.myPush(7);


// Testing for myEach()
console.log("----- After pushing the two numbers: --------");
myArr.myEach(element => {
    console.log(element);
});


// Testing for myMap()
console.log("----- Testing for myMap() --------");
const mapTestingArr = myArr.myMap(element => {
    return element * 2;
});
console.log(mapTestingArr);


// Testing for myFilter()
console.log("----- Testing for myFilter() --------");
const filterTestingArr = myArr.myFilter(element => {
    return element > 2;
});
console.log(filterTestingArr);

// Testing for mySome()
console.log("----- Testing for mySome() --------");
console.log(myArr.mySome(element => {
    return element % 10 === 0;
}));

// Testing for myEvery()
console.log("----- Testing for myEvery() --------");
console.log(myArr.myEvery(element => {
    return element < 10;
}));

// Testing for myReduce()
console.log("----- Testing for myReduce() --------");
myArr.myPush(8);
myArr.myPush(9);
console.log(
    myArr.myReduce( (accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 10)
)

console.log("----- Testing for myIncludes() --------");
console.log(
    myArr.myIncludes(10)
);

