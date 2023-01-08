import { NgModule } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular'
import { environment } from 'src/environments/environment';


@NgModule({
    imports: [UIRouterModule.forRoot()],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: environment.locationStrategy,
        }
    ],
    exports: [UIRouterModule]
})
export class AppRoutingModule { }
