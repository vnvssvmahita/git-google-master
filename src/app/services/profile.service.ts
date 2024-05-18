import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = 'Ov23li82ulZStOv0blaQ';
  private clientsecret = '8e146816f1af0400776d29167020f520eca4ac1d';

  constructor(private http:Http) { 
  	console.log("service is now ready!");
  	this.username = 'vnvssvmahita';
  }

  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
