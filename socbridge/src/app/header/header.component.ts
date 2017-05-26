import { Component, OnInit } from '@angular/core';
import {UsersService} from '../Users/users.service';
import {CourseModel} from '../Basic Models/Course.model';
import {User} from '../Basic Models/User.model';
import {ActivatedRoute} from '@angular/router'  ;
import {FacultyModel} from '../Basic Models/Faculty.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  courses: CourseModel[];
  faculty: FacultyModel;
  totalFacultyMembers: User[] = [];
  sameYearMembers: User[] = [];
  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.user = userService.getUserByName(route.snapshot.params['firstName'], route.snapshot.params['lastName']);
    this.courses = userService.getUserCourses(this.user);
    this.faculty = userService.getFaculty(this.user);
    this.totalFacultyMembers.push(...this.faculty.users);
    for (const yr of this.faculty.byYear) {
      if (this.user.yearOfStudy === yr.year) {
        this.sameYearMembers.push(...yr.users);
      }
    }
  }

  ngOnInit() {
  }

}
