import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';

const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'books', component: BooksComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{ }