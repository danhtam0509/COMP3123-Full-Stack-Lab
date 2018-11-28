import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {

  }

  onBack(): void {
    this.router.navigateByUrl('/students');
  }

}
