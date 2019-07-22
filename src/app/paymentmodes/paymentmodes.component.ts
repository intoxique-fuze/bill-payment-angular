import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PaymentMode } from '@app/_models';
import { BillPaymentsService } from '@app/_services';
import {ActivatedRoute} from '@angular/router';

@Component({ templateUrl: 'paymentmodes.component.html' })
export class PaymentModesComponent implements OnInit {
    paymentModes : PaymentMode[] = [];
    constructor(
        private route :ActivatedRoute,
        private billPaymentsService: BillPaymentsService,
    ) {
    }

    ngOnInit() {
        // this.route.params.subscribe(
        //     params => {
        //         this.getPaymentDetails(params['id']);
        //     }
        // )
        this.getPaymentModes();
    }
    private getPaymentModes()
    {
        this.paymentModes = this.billPaymentsService.getAllPaymentModes();
    }
    initiatePaymentGateway()
    {
        
    }
}