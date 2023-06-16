class myObject {
    constructor(obj)
    {
        this.obj = obj;
    }

    grabKeys()
    {
        let result = [];
        for (let key in this.obj)
        {
            result.push(key);
        }
        return result;
    }

    grabValues()
    {
        let result = [];
        for (let key in this.obj)
        {
            result.push(this.obj[key]);
        }
        return result;
    }
}

myobj = new myObject({ 
    a: 1,
    b: 2,
    c: 3
});

console.log(myobj.grabKeys());
console.log(myobj.grabValues());
