export class CustomerDetails{


    _id: string;
    full_name: string;
    conatct:string;
   // last_name: string,
    email: string;
    address:string;
    password: string;
    user_type: string;
    date:  Date;


  

    constructor( full_name: string,conatct:string, email: string,address:string,password: string,user_type: string,
        date: Date){

            this.full_name=full_name;
            this.conatct =conatct;
            this.email =email;
            this.address = address;
            this.password= password;
            this.user_type =user_type;
            this.date = date;
        
    }
}