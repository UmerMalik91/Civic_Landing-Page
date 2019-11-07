import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '', component: LoginComponent, children: [
                    {
                        path: '', component: HomeComponent
                    }
                ]
            }
        ])
    ],
    providers: [],
    bootstrap: [LoginComponent]
})

export class LoginModule {

}