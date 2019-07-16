
// Arrows are a function shorthand using the => syntax
var nums = [1, 2, 3, 4];
nums.forEach(n => {
   console.log(n); 
});
console.log("=================== MAP *2============ ");
nums = nums.map(n => n *2);
nums.forEach(n => {
    console.log(n);
});
console.log("=================== MAP /2 & +2 ============ ");
nums = nums.map(n => { n = n / 2; n = n + 2; return n;});
nums.forEach(n => {
    console.log(n);
});


// Unlike functions, arrows share the same lexical this as their surrounding code.
console.log("=================== Skill ============ ");
var skill = {
    _name: "Java",
    versions: [6, 7, 8],
    getVersions(){
        console.log(this._name + " versions: ");
        this.versions.forEach(v => {
             console.log(v);
        })
    }
}
skill.getVersions();
console.log(skill.versions);