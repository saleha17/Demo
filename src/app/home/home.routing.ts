import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { GeneralComponent } from './mdi/general/general.component';
import { PredictComponent } from './mdi/predict/predict.component';
import { StoreComponent } from './mdi/store/store.component';

export const childRoutes: Routes = 
[    
    {
        path: 'home',
        component: HomeComponent,        
        children: 
          [
            

            //General Menus Redirections
            { path: 'mdi/general', component: GeneralComponent },
             
            
            
            //Store Menus Redirections
            { path: 'mdi/store', component: StoreComponent },
             
            //Prediction Menus Redirections
            { path: 'mdi/predict', component: PredictComponent },
            { path: 'mdi/changepass', component: PredictComponent },
            
        ]
    }
    
];

export const routing = RouterModule.forChild(childRoutes);
