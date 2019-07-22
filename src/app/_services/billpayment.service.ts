import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { PaymentService, PaymentMode } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BillPaymentsService {
    public paymentServices: PaymentService[] = [];
    public paymentModes : PaymentMode[] = [];

    constructor(private http: HttpClient) { 
        this.initPaymentServices();
        this.initPaymentModes();
    }
    initPaymentServices()
    {
        this.paymentServices.push({id : 1, name : 'Recharge', providerName: 'Airtel', logopath:'../../assets/images/recharge-icon.png' });
        this.paymentServices.push({id : 2, name : 'DTH', providerName: 'Tata Sky', logopath:'../../assets/images/dth-icon.png' });
        this.paymentServices.push({id : 3, name : 'Electricity', providerName: 'BESCOM', logopath:'../../assets/images/electricity-icon.png'  });
        this.paymentServices.push({id : 4, name : 'Credit Card', providerName: 'HDFC Bank', logopath:'../../assets/images/credit-card-icon.png'  });
        this.paymentServices.push({id : 5, name : 'Postpaid', providerName: 'Vodafone', logopath:'../../assets/images/postpaid-icon.png'  });
        this.paymentServices.push({id : 6, name : 'Landline', providerName: 'BSNL', logopath:'../../assets/images/landline-icon.png'  });
        this.paymentServices.push({id : 7, name : 'Broadband', providerName: 'ACT', logopath:'../../assets/images/broadband-icon.png'  });
        this.paymentServices.push({id : 8, name : 'Gas', providerName: 'Indane', logopath:'../../assets/images/gas-icon.png'  });
        this.paymentServices.push({id : 9, name : 'Water', providerName: 'BWS', logopath:'../../assets/images/water-icon.png'  });
        this.paymentServices.push({id : 10, name : 'Datacard', providerName: 'Jio', logopath:'../../assets/images/datacard-icon.png'  });
        this.paymentServices.push({id : 11, name : 'Insurance', providerName: 'Reliance', logopath:'../../assets/images/insurance-icon.png'  });
        this.paymentServices.push({id : 12, name : 'Minicipal Tax', providerName: 'BLR', logopath:'../../assets/images/municipal-tax-icon.png'  });

    }
    initPaymentModes()
    {
        this.paymentModes.push({id : 1, title : 'Quick Pay'});
        this.paymentModes.push({id : 2, title : 'Credit Card' });
        this.paymentModes.push({id : 3, title : 'Debit Card' });
        this.paymentModes.push({id : 4, title : 'Debit Card + ATM PIN'});
        this.paymentModes.push({id : 5, title : 'Internet Banking' });
        this.paymentModes.push({id : 6, title : 'VISA Checkout' });

    }
    getAll(){
        return this.paymentServices;//To be replaced by Api URL 
    }

    getById(id: number) {
        return this.paymentServices.filter(x=> x.id == id)[0];//To be replaced by Api URL 
    }

    getAllPaymentModes(){
        return this.paymentModes;//To be replaced by Api URL 
    }

}