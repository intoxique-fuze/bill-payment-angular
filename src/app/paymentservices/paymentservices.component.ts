import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, PaymentService } from '@app/_models';
import { UserService,BillPaymentsService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'paymentservices.component.html' })
export class PaymentServicesComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    paymentServices: PaymentService[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private billPaymentsService: BillPaymentsService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.loadAllPaymentServices();
    }

    viewBillDetails(id: number) {
        //var check = this.billPaymentsService.getById(id);
        this.router.navigate(['/billdetails/'+id]);
    }

    private loadAllPaymentServices() {
        this.paymentServices = this.billPaymentsService.getAll();
    }
}