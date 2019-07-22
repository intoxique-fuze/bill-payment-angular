import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PaymentServicesComponent } from './paymentservices';
import { BillDetailsComponent } from './billdetails';
import { PaymentModesComponent } from './paymentmodes';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'paymentservices', component: PaymentServicesComponent },
    { path: 'billdetails/:id', component: BillDetailsComponent },
    { path: 'paymentmodes/:id', component: PaymentModesComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);