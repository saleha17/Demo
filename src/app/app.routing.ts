import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = 
[    
   { path: '', component: LoginComponent  },
   { path: 'login', component: LoginComponent  } ,
   { path: 'changepass', component: LoginComponent  }  
  
];

export const route = RouterModule.forRoot(appRoutes);
