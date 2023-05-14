import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

 ngOnInit() {
  this.getContacts();
  }

  async getContacts () {

    try {
      const permission = await Contacts.requestPermissions();
      console.log('permission: ', permission.contacts)

    } catch(e) {
      console.log(e);
    }


  }
}
