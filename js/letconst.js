function  f() {
    let x;
    const y = "init";
    {
        // block scoped name
        const x = "loco";
        console.log(x);
        console.log(y);
        // error, const
        //y = x;
    }
    x = "damn";
    console.log(x);
    // error, already declared in block
    //let x = "toto";
};
f();

