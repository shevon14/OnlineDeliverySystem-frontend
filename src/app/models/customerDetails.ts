export class CustomerDetails{

    first_name: String;
        
    last_name:String;
        
    address: String;
        
    // personalPhone: {
    //     type: String,
    //     maxlength: [10, 'Phone number can not be longer than 20 characters']
    // },
    // officePhone: {
    //     type: String,
    //     maxlength: [10, 'Phone number can not be longer than 20 characters']
    // },
    email: String;
    password: String;
    user_type: String;
    date:  Date;
  

    constructor( first_name: String,last_name:String,address: String,email: String,
        password: String,user_type: String,date:  Date){

            this.first_name=first_name;
            this.last_name =last_name;
            this.address =address;
            this.email = email;
            this.password= password;
            this.address =address;
            this.user_type =user_type;
            this.date = date;
        
    }
}