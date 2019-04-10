import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'SampleAngularApp';
  names: string[] = ["Water_Ice_cream", "Settings_Comics", "Crab_Floppy_Disk", "Hnads_Dislike", "Soap_Websites", "Soda_Soda", "Settings_Ice_cream_cone", "Flowers_Ring", "Kitty_Urine", "Settings_Boat", "Prints_Puppy", "Ice_cream_Whale", "Male_Android", "Soda_Urine", "Monster_Trees", "Rollers_Comics", "Plus_Shelf", "Shoe_Whale", "Towel_Ice_cream", "Puppy_Fence", "System_Poop", "Solar_Dislike", "Post_office_Trees", "Book_Shower", "Toolbox_Robot", "Monster_System", "Website_Mail", "Post_office_Whale", "Prints_Cat", "Leash_Kitty", "Urine_Video_games", "Shoes_Towel", "Flowers_Floppy_Disk", "System_Soda", "Comics_Crab", "Toolbox_Ring", "Website_Cat", "Toolbox_Mail", "Ice_cream_Rollers", "Urine_Book", "Plants_Male", "Bird_Plants", "Body_Comics", "Video_games_Bird", "Shelf_Monster", "Nuclear_Mail", "Trees_YouTube", "Fusion_Shoe", "Solar_Laptop", "Hnads_Body"];
  summaryRowConfig: string[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 30; i++) {
      this.summaryRowConfig.push(`Summary-Col-${i}`);
    }
  }

  onScroll(e) {
    let elem = document.getElementById('structure_header');
    elem.scrollTop = document.getElementById('structure_body').scrollTop;
  }
}