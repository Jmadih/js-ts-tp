var TYPEOFCONTRACT;
(function (TYPEOFCONTRACT) {
    TYPEOFCONTRACT["CDD"] = "CDD";
    TYPEOFCONTRACT["CDI"] = "CDI";
})(TYPEOFCONTRACT || (TYPEOFCONTRACT = {}));
var proposal = /** @class */ (function () {
    function proposal(name, type) {
        this.name = name;
        this.type = type;
    }
    proposal.prototype.setName = function (nname) {
        this.name = nname;
    };
    proposal.prototype.setType = function (type) {
        this.type = type;
    };
    proposal.prototype.buildContract = function (name, type) {
        if (type) {
            return 'Contract ' + type + ' of ' + name;
        }
        return name + ' with no type defined';
    };
    return proposal;
}());
var newproposal = new proposal("DEV", TYPEOFCONTRACT.CDD);
console.log(newproposal);
var contract1 = newproposal.buildContract('NG', TYPEOFCONTRACT.CDI);
console.log(contract1);
var contract2 = newproposal.buildContract('PHP');
console.log(contract2);
