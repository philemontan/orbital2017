import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../Users/users.service';
import {CourseModel} from '../Basic Models/Course.model';
import {User} from '../Basic Models/User.model';
import {ActivatedRoute} from '@angular/router'  ;
import {FacultyModel} from '../Basic Models/Faculty.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @Input() user: User;
  @Input() courses: CourseModel[];
  @Input() faculty: FacultyModel;
  @Input() totalFacultyMembers: User[] = [];
  @Input() sameYearMembers: User[] = [];
  constructor(private userService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
