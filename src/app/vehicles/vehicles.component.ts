/*
 * File: vehicles.component.ts
 * Authors: Hegedus Gyorgy
 * Copyright: 2022, Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/Gyuri21
 * Licenc: GNU GPL
*/
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApivehicleService } from './../shared/apivehicle.service';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  registerForm !: FormGroup;
  vehicle !: any;

  constructor(
    private auth: AuthService,
    private apivehicles: ApivehicleService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getVehicles();
    this.registerForm = this.formBuilder.group({
      plate:[''],
      brand: [''],
      year:[''],
      price:[''],
      sold:['']
    });
  }
  addNewCar() {
    let palte = this.registerForm.value.plate;
    let brand = this.registerForm.value.brand;
    let year = this.registerForm.value.year;
    let price = this.registerForm.value.price;
    let sold = this.registerForm.value.sold;
    this.apivehicles.addNewCar(palte, brand, year, price,sold).subscribe((res) => {
      console.log(res);
    });
  }

  logout(){
    this.auth.logout();
  }
  getVehicles(){
    this.apivehicles.getVehicles()
    .subscribe(res => {
    console.log(res);
    this.vehicle = res;
    })
  }

}