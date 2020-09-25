var TYPEOFCONTRACT;
(function (TYPEOFCONTRACT) {
    TYPEOFCONTRACT["CDD"] = "CDD";
    TYPEOFCONTRACT["CDI"] = "CDI";
})(TYPEOFCONTRACT || (TYPEOFCONTRACT = {}));
class proposal {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    set name(nname) {
        this.name = nname;
    }
    set type(type) {
        this._type = type;
    }
    buildContract(name, type) {
        if (type) {
            return 'Contract ' + type + ' of ' + name;
        }
        return name + ' with no type defined';
    }
}
const newproposal = new proposal("DEV", TYPEOFCONTRACT.CDD);
console.log(newproposal);
const contract1 = newproposal.buildContract('NG', TYPEOFCONTRACT.CDI);
console.log(contract1);
const contract2 = newproposal.buildContract('PHP');
console.log(contract2);
