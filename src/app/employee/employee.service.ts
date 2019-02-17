import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
 

@Injectable({
  providedIn: 'root'
})


export class EmployeeService {
	formData: Employee;

  constructor(private firestore: AngularFirestore) { }


  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
  
}
