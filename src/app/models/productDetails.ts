export class ProductDetails{
    _id:String;
    productName : string;
    category:string;
    uniPrice:string;
    availableQuantity:string;
    // shopename:String;
    
    constructor(_id:String,productName:string, category:string, uniPrice:string, 
        availableQuantity:string ){

            this._id=_id;
            this.productName=productName;
            this.category =category;
            this.uniPrice =uniPrice;
            this.availableQuantity = availableQuantity;
        
    }

}