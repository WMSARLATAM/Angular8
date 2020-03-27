import { TemplateformsComponent } from './templateForms/templateforms/templateforms.component';
import { Routes, RouterModule } from '@angular/router';
import { Personas } from './component1/com1.component';
import { Comp2 } from './component2/com2.component';
import { ReactiveformsComponent } from './reactiveForms/reactiveforms/reactiveforms.component';


const APP_ROUTES:  Routes = [
    {path: '', component: Personas},
    {path: 'comp2', component: Comp2},
    {path: 'template', component: TemplateformsComponent},
    {path: 'reactive', component: ReactiveformsComponent},
    {path: '**', redirectTo: ''}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)