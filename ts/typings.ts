enum TYPEOFCONTRACT {
    CDD = "CDD",
    CDI = "CDI"
}

interface contract {
    name: string;
    type: TYPEOFCONTRACT;
    setName(name: string): void;
    setType(type: TYPEOFCONTRACT): void;
    buildContract(name: string, type: TYPEOFCONTRACT): string;
}


class proposal implements contract{
    name;
    type;

    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    setName(nname: string): void {
        this.name = nname;
    }

    setType(type: TYPEOFCONTRACT): void{
        this.type = type;
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
