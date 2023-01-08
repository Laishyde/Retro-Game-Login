import { Ng2StateDeclaration } from "@uirouter/angular";
import { HomeComponent } from "./views/home.component";

export const HomeState: Ng2StateDeclaration = {
    name: 'home',
    url: '/home',
    component: HomeComponent
};

export const STATES = [HomeState]