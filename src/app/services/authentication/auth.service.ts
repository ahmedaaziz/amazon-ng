import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  constructor(private firebaseAuth: AngularFireAuth,
              private ngZone: NgZone,
              private router:Router) {
                this.firebaseAuth.authState.subscribe(user=>{
                  if(user){
                    this.userData = user;

                    console.log('this is a user',user);
                    localStorage.setItem('user',this.userData.email)
                  }else {

                  }
                })
              }


              signIn(email:any,password:any) {
                return this.firebaseAuth.signInWithEmailAndPassword(email,password)
                .then((result)=>{
                  window.alert('Login is done successfully!')
                  this.router.navigate(['/']);
                }).catch((error)=>{
                  window.alert(error.message)
                })
              }

              signUp(email:any,password:any){
                return this.firebaseAuth.createUserWithEmailAndPassword(email,password)
                .then((result)=>{
                  window.alert('New User Has been Registered !')
                  this.router.navigate(['/']);

                }).catch((error)=>{
                  window.alert(error.message)
                })
              }


              logOut(){
                return this.firebaseAuth.signOut()
                .then((result)=>{
                  localStorage.removeItem('user')
                  this.router.navigate(['login'])
                }).catch((error)=>{
                  window.alert(error.message)
                })
              }

              isLoggedIn(){
                const user = localStorage.getItem('user');
                return user? true:false;

              }


              getUser(){
                const user = localStorage.getItem('user');
                return user? user:null;
              }


}
