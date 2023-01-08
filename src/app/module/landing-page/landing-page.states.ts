import { Ng2StateDeclaration } from "@uirouter/angular";
import { LandingPageComponent } from "./views/landing-page.component";

export const LandingPageState: Ng2StateDeclaration = {
    name: 'landing-page',
    url: '/index',
    component: LandingPageComponent
};

export const STATES = [LandingPageState]