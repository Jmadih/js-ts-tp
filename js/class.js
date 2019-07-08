//ES6 classes are a simple sugar over the prototype-based OO pattern.

class Identity{
    constructor(id){
        this._id = id;
    }
    
    get id(){
        return this._id;
    }
    
    set id(id){
        this._id = id;
    }
}

class Skill extends Identity{

    constructor(id, label, level){
        super(id);
        this._label = label;
        this._level = level;
    }
    
    // Transparent getters and setters
    
    get label(){
        return this._label;
    }

    set label(label){
        this._label = label;
    }

    get level(){
        return this._level;
    }

    set level(level){
        this._level = level;
    }
}

let mySkill = new Skill(1, "JAVA", 10);

console.log("{"+mySkill.id+"} "+"My " + mySkill.label + " level is " + mySkill.level);

mySkill.label = "NG";

console.log("{"+mySkill.id+"} "+"My " + mySkill.label + " level is " + mySkill.level);
