export namespace UIModel {
    export class ColInfo{
        field: string;
        header: string; 
        enableEditLink?: boolean = false;
        //editRoute?: string; 
        //editField?: string;
    }

    export class CustomerInfo{
        customerId:number;
        firstName?:string;
        middleName?:string;
        lastName?:string;
        fullName: string;
        email:string;
        mobileno:string;
        homeTelephoneNo?:string;
        address:string;
        customerRefferedBy:string;
        Url?: string;
    }

    export class VendorInfo{
        vendorId: number;
        name: string;
        address: string;
        city: string;
        referredBy?: string;
        mobile: string;
        alternateMobile?: string;
        Url?: string;
    }    

    export class StockinInfo{
        stockinId: number;
        vendorId?: number = 0;
        vendor: string;
        simpleName: string;
        createdDate: Date;
        formattedCreatedDate?: string;
        totalCount: number;
        Url?: string;
    }
 
   
    // mock data
    export const Customers: CustomerInfo[] = [
        {customerId: 101, fullName: 'Krishna', email:'Krishna@abc.com', firstName:'Krishna', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'9999999999', address:'Hyderabad', customerRefferedBy:'Referrer 2', Url:"/customerinfo/101"},
        {customerId: 102, fullName: 'Rams', email:'Rams@abc.com',firstName:'Rams', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 1', Url:"/customerinfo/102"},
        {customerId: 103, fullName: 'Ajay', email:'Ajay@abc.com', firstName:'Ajay', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 3', Url:"/customerinfo/103"},
        {customerId: 104, fullName: 'Vijay', email:'Vijay@abc.com', firstName:'Vijay', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'6666666666', address:'Hyderabad', customerRefferedBy:'Referrer 2', Url:"/customerinfo/104"},
        {customerId: 105, fullName: 'Anil', email:'Anil@abc.com', firstName:'Anil', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 1', Url:"/customerinfo/105"},
        {customerId: 106, fullName: 'Sunil', email:'Sunil@abc.com', firstName:'Sunil', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'9999999999', address:'Hyderabad', customerRefferedBy:'Referrer 1', Url:"/customerinfo/106"},
        {customerId: 107, fullName: 'Akil', email:'Akil@abc.com', firstName:'Akil', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 2', Url:"/customerinfo/107"},
        {customerId: 108, fullName: 'Nikil', email:'Nikil@abc.com', firstName:'Nikil', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 1', Url:"/customerinfo/108"},
        {customerId: 109, fullName: 'Aakas', email:'Aakas@abc.com', firstName:'Aakas', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'6666666666', address:'Hyderabad', customerRefferedBy:'Referrer 5', Url:"/customerinfo/109"},
        {customerId: 110, fullName: 'Vikas', email:'Vikas@abc.com', firstName:'Vikas', lastName:'LN', middleName:'MN', homeTelephoneNo:'123456789', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 4', Url:"/customerinfo/110"},
    ];
          
    export const Vendors: VendorInfo[] = [
        {vendorId: 1, name: 'Arjun', address: 'Arjun address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'8123456789', alternateMobile: '8234567890', Url:"/vendor/1"},
        {vendorId: 2, name: 'Rizwan', address: 'Rizwan address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/2"},
        {vendorId: 3, name: 'Vendor3', address: 'Vendor3 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/3"},
        {vendorId: 4, name: 'Vendor4', address: 'Vendor4 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/4"},
        {vendorId: 5, name: 'Vendor5', address: 'Vendor5 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/5"},
        {vendorId: 6, name: 'Vendor6', address: 'Vendor6 address', city: 'Hyderabad', referredBy: 'referrer 3', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/6"},
        {vendorId: 7, name: 'Vendor7', address: 'Vendor7 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/7"},
        {vendorId: 8, name: 'Vendor8', address: 'Vendor8 address', city: 'Hyderabad', referredBy: 'referrer 5', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/8"},
        {vendorId: 9, name: 'Vendor9', address: 'Vendor9 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/9"},
        {vendorId: 10, name: 'Vendor10', address: 'Vendor10 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890', Url:"/vendor/10"},
    ];

    export const Stockins: StockinInfo[] = [
        {stockinId: 11, vendorId:2, vendor: 'Rizwan', simpleName:'stockin 1',  createdDate:new Date('01/01/2019'), formattedCreatedDate:'01-01-2019', totalCount:100, Url:"/stockin/11"},
        {stockinId: 12, vendorId:1, vendor: 'Arjun', simpleName:'stockin 2',   createdDate:new Date('01/15/2019'), formattedCreatedDate:'15-01-2019', totalCount:210, Url:"/stockin/12"},
        {stockinId: 13, vendorId:3, vendor: 'Vendor3', simpleName:'stockin 3', createdDate:new Date('02/01/2019'), formattedCreatedDate:'01-02-2019', totalCount:115, Url:"/stockin/13"},
        {stockinId: 14, vendorId:1, vendor: 'Arjun', simpleName:'stockin 4',   createdDate:new Date('02/15/2019'), formattedCreatedDate:'15-02-2019', totalCount:120, Url:"/stockin/14"},
        {stockinId: 15, vendorId:2, vendor: 'Rizwan', simpleName:'stockin 5',  createdDate:new Date('03/01/2019'), formattedCreatedDate:'01-03-2019', totalCount:111, Url:"/stockin/15"},
        {stockinId: 16, vendorId:2, vendor: 'Rizwan', simpleName:'stockin 6',  createdDate:new Date('04/15/2019'), formattedCreatedDate:'15-04-2019', totalCount:200, Url:"/stockin/16"},
        {stockinId: 17, vendorId:3, vendor: 'Vendor3', simpleName:'stockin 7', createdDate:new Date('05/01/2019'), formattedCreatedDate:'01-05-2019', totalCount:180, Url:"/stockin/17"},
        {stockinId: 18, vendorId:1, vendor: 'Arjun', simpleName:'stockin 8',   createdDate:new Date('06/01/2019'), formattedCreatedDate:'01-06-2019', totalCount:300, Url:"/stockin/18"},
    ];    
  
}