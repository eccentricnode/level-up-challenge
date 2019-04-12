import { NgModule } from "@angular/core";
import { RouterModule, Route} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StarshipComponent } from './starship/starship.component';

const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'starship', component: StarshipComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [RouterModule]
})
export class AppRoutingModule { }