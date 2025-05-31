import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainComponent } from './pages/main/main.component';
import { DatabaseTestComponent } from './pages/database-test/database-test.component';

export const routes: Routes = [

    {
        path:"",
        component: HomeComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"signup",
        component: SignupComponent
    },
    {
        path:"main",
        component: MainComponent
    },
    {
        path:"db-test",
        component: DatabaseTestComponent 
    }

];
