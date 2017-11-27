import { NgModule } from '@angular/core';

import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { SharedModule } from 'app/shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { RecipeService } from 'app/recipes/recipe.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterCeptor } from 'app/shared/auth.interceptor';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        AuthService,
        AuthGuardService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true}
      ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ]
})
export class CoreModule{

}