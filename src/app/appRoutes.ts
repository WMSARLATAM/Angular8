import { Routes, RouterModule } from '@angular/router';
import { Personas } from './component1/com1.component';
import { Comp2 } from './component2/com2.component';

const APP_ROUTES:  Routes = [
    {path: '', component: Personas},
    {path: 'comp2', component: Comp2},
    {path: '**', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)