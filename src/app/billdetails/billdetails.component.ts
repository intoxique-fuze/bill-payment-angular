import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import { User, BillDetail, PaymentService } from '@app/_models';
import { UserService,BillPaymentsService, AuthenticationService } from '@app/_services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'billdetails.component.html' })
export class BillDetailsComponent implements OnInit,OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    billDetails: BillDetail;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private billPaymentsService: BillPaymentsService,
        private route :ActivatedRoute,
        private router: Router
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.getBillDetails(params['id']);
            }
        )
    }


    getBillDetails(id: number) {
        var billingService :PaymentService  = this.billPaymentsService.getById(id);
        this.billDetails = {
            id : billingService.id,
             provider: billingService.providerName ,
              servicename:billingService.name,
               amount:999 ,
                state:'Karnataka',
                uniqueid : 23050439820,
                duedate : '24/07/2019',
                billnumber : 'BLR8123424578930',
                customername: this.currentUser.firstName + this.currentUser.lastName
             };
    }

    proceedWithPayment(id: number)
    {
        this.router.navigate(['/paymentmodes/'+id]);
    }
}