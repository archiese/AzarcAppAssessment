import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './_models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees: Employee[] = [];
  response: any;
  username: any;
  useremail: any;
  userpicture: any;
  term = '';
  title = 'azarcApp';
  p: number = 1;
  resAdd = '';
  offLoc = '';

  constructor(private readonly appService: AppService, private api: AppService) {  }

  ngOnInit(): void{
    this.getEmployees();
  }

  submit() {
    var resAdd = (document.getElementById("resAdd") as  HTMLTextAreaElement).value;
    var offLoc = (document.getElementById("offLoc") as  HTMLTextAreaElement).value;
    console.log(resAdd + " " + offLoc);
    const x: HTMLElement | null  = document.getElementById("formDiv");
    const y: HTMLElement | null  = document.getElementById("ProfileDiv");
    if(x != null && y != null){
  if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      } else if(x.style.display === ""){
        x.style.display  = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
      }
    }

    localStorage.setItem('resAdd', resAdd);
    localStorage.setItem('offLoc', offLoc);
    this.resAdd = (localStorage.getItem('resAdd')|| '');
    this.offLoc = (localStorage.getItem('offLoc')|| '');
  }

  profile(){
    this.useremail = localStorage.getItem('useremail');
    this.username = localStorage.getItem('username');
    this.userpicture = localStorage.getItem('userpicture');
    
    const x: HTMLElement | null  = document.getElementById("ProfileDiv");
    const y: HTMLElement | null  = document.getElementById("formDiv");
    if(x != null && y != null){
  if (x.style.display === "none") {
        x.style.display  = "block";
        y.style.display = "none";
      } else if(x.style.display === ""){
        x.style.display  = "block";
        y.style.display = "none";
      }else {
        x.style.display = "none";
        y.style.display = "block";
      }
    }
  }

  isLoggedIn(): boolean {
    return this.appService.isLoggedIn()
  }

  logout() {
    this.appService.signOut();
    localStorage.clear();
  }

  getEmployees() {
    this.employees = [{"id":1,"employee_name":"Tiger Nixon","employee_salary":320800,"employee_age":61},{"id":2,"employee_name":"Garrett Winters","employee_salary":170750,"employee_age":63},{"id":3,"employee_name":"Ashton Cox","employee_salary":86000,"employee_age":66},{"id":4,"employee_name":"Cedric Kelly","employee_salary":433060,"employee_age":22},{"id":5,"employee_name":"Airi Satou","employee_salary":162700,"employee_age":33},{"id":6,"employee_name":"Brielle Williamson","employee_salary":372000,"employee_age":61},{"id":7,"employee_name":"Herrod Chandler","employee_salary":137500,"employee_age":59},{"id":8,"employee_name":"Rhona Davidson","employee_salary":327900,"employee_age":55},{"id":9,"employee_name":"Colleen Hurst","employee_salary":205500,"employee_age":39},{"id":10,"employee_name":"Sonya Frost","employee_salary":103600,"employee_age":23},{"id":11,"employee_name":"Jena Gaines","employee_salary":90560,"employee_age":30},{"id":12,"employee_name":"Quinn Flynn","employee_salary":342000,"employee_age":22},{"id":13,"employee_name":"Charde Marshall","employee_salary":470600,"employee_age":36},{"id":14,"employee_name":"Haley Kennedy","employee_salary":313500,"employee_age":43},{"id":15,"employee_name":"Tatyana Fitzpatrick","employee_salary":385750,"employee_age":19},{"id":16,"employee_name":"Michael Silva","employee_salary":198500,"employee_age":66},{"id":17,"employee_name":"Paul Byrd","employee_salary":725000,"employee_age":64},{"id":18,"employee_name":"Gloria Little","employee_salary":237500,"employee_age":59},{"id":19,"employee_name":"Bradley Greer","employee_salary":132000,"employee_age":41},{"id":20,"employee_name":"Dai Rios","employee_salary":217500,"employee_age":35},{"id":21,"employee_name":"Jenette Caldwell","employee_salary":345000,"employee_age":30},{"id":22,"employee_name":"Yuri Berry","employee_salary":675000,"employee_age":40},{"id":23,"employee_name":"Caesar Vance","employee_salary":106450,"employee_age":21},{"id":24,"employee_name":"Doris Wilder","employee_salary":85600,"employee_age":23}]
  }
}
