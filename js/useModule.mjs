//node --experimental-modules
import {myModule} from "./module";

class MyClazz extends myModule {
    
    constructor(name, detail){
        super(name);
        this._detail = detail;
    }
}
console.log(new MyClazz("hello", "world"));
