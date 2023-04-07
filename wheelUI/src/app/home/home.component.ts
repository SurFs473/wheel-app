import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public names!: string[]

  ngOnInit(): void {
      this.getAllUsers()
  }

  private getAllUsers(): void {
    this.names = [
      'Panchi', 
      'Pepco',
      'Pain killer',
      'asdasdasd',
      'asdasdasddasdas',
      'asdasd',
      'asda'
    ];

  }

}
