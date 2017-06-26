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

  gotoCompanyDetail(company: any) {
    console.log('gotocmompany');
    this.navCtrl.push('CompanyDetailPage',{company:company});
  }

  deleteCompany(company:any){
    console.log(this.companies.indexOf(company));
    this.companies.splice(this.companies.indexOf(company),1);
  }
}
