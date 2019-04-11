import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pokemon', component: PokemonComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }