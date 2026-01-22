import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddtaskComponent } from './addtask/addtask.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'list', component: ListComponent},
    { path: 'addtask', component: AddtaskComponent }
];
