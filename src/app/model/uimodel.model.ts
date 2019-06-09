export namespace UIModel {
    export class ColInfo{
        field: string;
        header: string; 
        enableEditLink?: boolean;
        editRoute?: string; 
        editField?: string;
    }

    export class CustInfo{
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
    }

    export class VendorInfo{
        vendorId: number;
        name: string;
        address: string;
        city: string;
        referredBy?: string;
        mobile: string;
        alternateMobile?: string;
    }    

    export class StockinInfo{
        stockinId: number;
        vendor: string;
        simpleName: string;
        createdDate: string;
        totalCount: number
    }
 
   
    // mock data
    export const Customers: CustInfo[] = [
        {customerId: 101, fullName: 'Krishna', email:'Krishna@abc.com', mobileno:'9999999999', address:'Hyderabad', customerRefferedBy:'Referrer 2'},
        {customerId: 102, fullName: 'Rams', email:'Rams@abc.com', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 1'},
        {customerId: 103, fullName: 'Ajay', email:'Ajay@abc.com', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 3'},
        {customerId: 104, fullName: 'Vijay', email:'Vijay@abc.com', mobileno:'6666666666', address:'Hyderabad', customerRefferedBy:'Referrer 2'},
        {customerId: 105, fullName: 'Anil', email:'Anil@abc.com', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 1'},
        {customerId: 106, fullName: 'Sunil', email:'Sunil@abc.com', mobileno:'9999999999', address:'Hyderabad', customerRefferedBy:'Referrer 1'},
        {customerId: 107, fullName: 'Akil', email:'Akil@abc.com', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 2'},
        {customerId: 108, fullName: 'Nikil', email:'Nikil@abc.com', mobileno:'7777777777', address:'Hyderabad', customerRefferedBy:'Referrer 1'},
        {customerId: 109, fullName: 'Aakas', email:'Aakas@abc.com', mobileno:'6666666666', address:'Hyderabad', customerRefferedBy:'Referrer 5'},
        {customerId: 110, fullName: 'Vikas', email:'Vikas@abc.com', mobileno:'8888888888', address:'Hyderabad', customerRefferedBy:'Referrer 4'},
    ];
          
    export const Vendors: VendorInfo[] = [
        {vendorId: 1, name: 'Arjun', address: 'Arjun address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'8123456789', alternateMobile: '8234567890'},
        {vendorId: 2, name: 'Rizwan', address: 'Rizwan address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 3, name: 'Vendor3', address: 'Vendor3 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 4, name: 'Vendor4', address: 'Vendor4 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 5, name: 'Vendor5', address: 'Vendor5 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 6, name: 'Vendor6', address: 'Vendor6 address', city: 'Hyderabad', referredBy: 'referrer 3', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 7, name: 'Vendor7', address: 'Vendor7 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 8, name: 'Vendor8', address: 'Vendor8 address', city: 'Hyderabad', referredBy: 'referrer 5', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 9, name: 'Vendor9', address: 'Vendor9 address', city: 'Hyderabad', referredBy: 'referrer 2', mobile:'7123456789', alternateMobile: '7234567890'},
        {vendorId: 10, name: 'Vendor10', address: 'Vendor10 address', city: 'Hyderabad', referredBy: 'referrer 1', mobile:'7123456789', alternateMobile: '7234567890'},
    ];

    export const Stockins: StockinInfo[] = [
        {stockinId: 11, vendor: 'Vendor2', simpleName:'stockin 1', createdDate:'01/01/2019', totalCount:100},
        {stockinId: 12, vendor: 'Vendor1', simpleName:'stockin 2', createdDate:'15/01/2019', totalCount:210},
        {stockinId: 13, vendor: 'Vendor3', simpleName:'stockin 3', createdDate:'01/02/2019', totalCount:115},
        {stockinId: 14, vendor: 'Vendor1', simpleName:'stockin 4', createdDate:'15/02/2019', totalCount:120},
        {stockinId: 15, vendor: 'Vendor2', simpleName:'stockin 5', createdDate:'01/03/2019', totalCount:111},
        {stockinId: 16, vendor: 'Vendor2', simpleName:'stockin 6', createdDate:'15/04/2019', totalCount:200},
        {stockinId: 17, vendor: 'Vendor3', simpleName:'stockin 7', createdDate:'01/05/2019', totalCount:180},
        {stockinId: 18, vendor: 'Vendor1', simpleName:'stockin 8', createdDate:'01/06/2019', totalCount:300},
    ];    
  
}