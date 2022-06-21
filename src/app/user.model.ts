export class User{
    

    id:any;
    name: string;
    description:string;
    image:string;
    
    updated_at?: Date;

    constructor(_idc:any, nombrec:string, descriptionc:string, imagec:string, updated_atc: Date, ){

        this.id=_idc;
        this.name=nombrec;
        this.description=descriptionc;
        this.image=imagec;
        
        this.updated_at=updated_atc;

    }
}