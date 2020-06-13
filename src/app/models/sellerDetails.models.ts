export class SellerDetails{
    _id : string;
    businessModel:string;
    name:string;
    shopName: string;
    businessID:string;
    address:string;
    personalPhone:string;
    officePhone:string;
    email:string;
    password:string;
    repassword:string;

    constructor(_id:string, businessModel:string, name:string, 
        shopName:string, businessID:string, addres:string, 
        personalPhone:string,officePhone:string, email:string, 
        password:string, repassword:string ){

            this._id=_id;
            this.businessModel =businessModel;
            this.name =name;
            this.shopName = shopName;
            this.businessID= businessID;
            this.address =addres;
            this.personalPhone =personalPhone;
            this.officePhone = officePhone;
            this.email = email;
            this.password = password;
            this.repassword = repassword;
        
    }
}