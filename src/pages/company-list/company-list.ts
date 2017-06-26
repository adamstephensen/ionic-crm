import { Company } from './../../app/models/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  companies: Company[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyListPage');
    this.getCompanies();
  }
  getCompanies() {
    this.companies = [
      { name: 'Microsoft', email: 'bill@microsoft.com', phone: 1234556 },
      { name: 'SSW', email: 'adam@ssw.com.au', phone: 1114234 }
    ];
  }

}
