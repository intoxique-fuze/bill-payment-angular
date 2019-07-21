import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { PaymentService } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BillPaymentsService {
    public paymentServices: PaymentService[] = [];
    constructor(private http: HttpClient) { 
        this.initPaymentServices();
    }
    initPaymentServices()
    {
        this.paymentServices.push({id : 1, name : 'Mobile Prepaid', providerName: 'Airtel' });
        this.paymentServices.push({id : 2, name : 'Mobile Postpaid', providerName: 'Airtel' });
        this.paymentServices.push({id : 3, name : 'Electricity', providerName: 'BESCOM' });
        this.paymentServices.push({id : 4, name : 'DTH', providerName: 'Tata Sky' });
        this.paymentServices.push({id : 5, name : 'Datacard', providerName: 'Jio' });
        this.paymentServices.push({id : 6, name : 'Landline', providerName: 'BSNL' });
        this.paymentServices.push({id : 7, name : 'Broadband', providerName: 'ACT' });
        this.paymentServices.push({id : 8, name : 'Water', providerName: 'BWS' });
        this.paymentServices.push({id : 9, name : 'Cylinder', providerName: 'Indane' });
        this.paymentServices.push({id : 10, name : 'Apartment', providerName: 'Maintenance' });
    }
    getAll(){
        return this.paymentServices;//To be replaced by Api URL 
    }

    getById(id: number) {
        return this.paymentServices.filter(x=> x.id == id)[0];//To be replaced by Api URL 
    }
}