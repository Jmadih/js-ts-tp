enum TYPEOFCONTRACT {
    CDD = "CDD",
    CDI = "CDI"
}

interface contract {
    name: string;
    type: TYPEOFCONTRACT;
    buildContract(name: string, type: TYPEOFCONTRACT): string;
}


class proposal implements contract{
   private _name;
   private _type;

    constructor(name, type){
        this._name = name;
        this._type = type;
    }

    set name(nname: string) {
        this.name = nname;
    }

    set type (type: TYPEOFCONTRACT){
        this._type = type;
    }

    buildContract(name: string, type?: TYPEOFCONTRACT) : string{
        if(type){
            return 'Contract ' + type + ' of ' + name;
        }
        return  name + ' with no type defined';
    }
}

const newproposal : proposal = new proposal("DEV", TYPEOFCONTRACT.CDD);

console.log(newproposal);

const contract1 = newproposal.buildContract('NG', TYPEOFCONTRACT.CDI);

console.log(contract1);

const contract2 = newproposal.buildContract('PHP');

console.log(contract2);
