import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}