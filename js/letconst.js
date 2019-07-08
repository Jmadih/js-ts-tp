function  f() {
    let x;
    {
        // block scoped name
        const x = "loco";
        // error, const
        //y = x;
    }
    // error, already declared in block
    //let x = "toto";
};
f();

