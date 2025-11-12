import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  firstName = new FormControl();
  secondName = new FormControl();
  dateOfBirth = new FormControl();
  favoritesRanking = new FormControl();


  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return
  }

  saveContact() {
    console.log('Contact saved');
    console.log('First Name:', this.firstName.value);
    console.log('Last Name:', this.secondName.value);
    console.log('Date of Birth:', this.dateOfBirth.value);
    console.log('Favorites Ranking:', this.favoritesRanking.value);
  }
}
