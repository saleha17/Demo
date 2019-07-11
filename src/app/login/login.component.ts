import { Component, Input,OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router,ActivatedRoute  } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';
import { LoaderState } from '../services/loader/loader';


import { loginService } from  '../services/login.services';
//import { Login } from '../services/services.model';
import * as SESSION from '../services/sessions';

@Component
({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit , OnDestroy 
{
 public parameterName:any;
 public strAvatarImgSrc: string = window.localStorage.getItem('strUserImg');
 public imageSrc: any = null;
  show = false;
  displayError : string = "";
  private loader: Subscription;
  private userDetails  = [];
  public userCredentials;
  constructor
  ( 
    private loaderService: LoaderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: loginService,
    private route: ActivatedRoute,     
    private DomSanitizer : DomSanitizer
        
  ) 
  { }  
  
  loginForm: FormGroup;
  forgotPwdFrm:FormGroup;
  
  ngOnInit() 
  { 
    // console.log("parameter",this.parameterName);
   this.route.params.subscribe(params=>{
    this.parameterName=params.parameter;
    console.log("params",params);
    });
    if(!this.parameterName || this.parameterName==''){
      this.parameterName='login';
    }
    this.loader = this.loaderService.loaderState.subscribe((state: LoaderState) => 
    {
      this.show = state.show;
    });    
    this.loginForm = this.formBuilder.group
    ({
      UserName : new FormControl(''), 
      Password: new FormControl('')
    });
    this.forgotPwdFrm=new FormGroup({
      'newPassword':new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(13),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      'confirmPassword':new FormControl('',Validators.required),
      'oldPassword':new FormControl('',Validators.required)
    })
    this.strAvatarImgSrc = window.localStorage.getItem('strUserImg');
    this.imageSrc = this.DomSanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.strAvatarImgSrc);
    console.log("imgSrc",this.imageSrc);
  }

  onSubmit()
  {     
    var frmValues = this.loginForm.value; 
    console.log("frmValues",frmValues); 
    try
    {    
      if(frmValues.UserName.trim() === "")
      {
        this.displayError = "Please Enter Username.!.!.!"; 
        return;
      }
      if(frmValues.Password.trim() === "")
      {
        this.displayError = "Please Enter Password.!.!.!"; 
        return;
      }
      this.LoginService.authantication(frmValues).subscribe(data =>
       
      {        
        if (data['p_flg'] === 'W')
        {
          this.displayError = "Unauthorised Access, Contact Administrator.!.!.!"; 
        }
        else if(data['p_flg'] === 'Y')
        { 
          this.userDetails['strBranchName'] = data['p_br_name'];
          this.userDetails['strSessionId'] = data['p_emp_id'];
          this.userDetails['strUserId'] = frmValues.UserName;
          this.userDetails['strUserName'] = data['p_user_name']; //frmValues.UserName;          
          this.userDetails['strEmpName'] = data['p_emp_name'];
          this.userDetails['strCoid'] = data['p_coid'];
          this.userDetails['strBrid'] = data['p_brid'];//Added on 25/02/2019 11:26 Am by Nilesh R Baraiya
          this.userDetails['strEntity_ID'] = data['p_entity_id'];
          this.userDetails['strUserImg'] = data['p_img'];
          this.userDetails['intSessionLevel'] = 0;
          SESSION.Sessions.SetValues(this.userDetails);         
          this.router.navigate(['home']);
        }
        else if(data['message'] === "Unexpected end of input")
        {
          this.displayError = "Connection is not Established, Please Try Latter."; 
        }
        else
        {
          this.displayError = "Please Enter Correct User Criteria";        
        }      
      });        
    }catch{ this.displayError = "Connection is not Established, Please Try Latter."; }
  }
 
  ngOnDestroy() 
  {
    this.loader.unsubscribe();
  }

  
  forgotPwdValidation(){
  console.log(this.forgotPwdFrm.touched);
  if(!this.forgotPwdFrm.get('confirmPassword').value && this.forgotPwdFrm.get('confirmPassword').value=='' &&!this.forgotPwdFrm.get('newPassword').value && this.forgotPwdFrm.get('newPassword').value=='' && !this.forgotPwdFrm.get('oldPassword').value && this.forgotPwdFrm.get('oldPassword').value==''){
    this.displayError="Value can not be blank."
  }
   else if(this.forgotPwdFrm.invalid){
      this.displayError="Password must contain letter,special character,capital letter and minimum 8 characters long."
    }
    else if( this.forgotPwdFrm.get('newPassword').value !=this.forgotPwdFrm.get('confirmPassword').value){
      this.displayError="Password Did Not Match"
    }
    else{
      this.displayError=""
      console.log("No errors");
      this.parameterName='login';
      this.router.navigate(["/"]);
      this.forgotPwdFrm.reset();
      this.loginForm.reset();
    }
  }
}
