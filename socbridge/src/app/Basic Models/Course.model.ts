import {User} from './User.model';

export class CourseModel {
  public courseName: string;
  public users: User[];

  constructor(name: string, users: User[])
  {
    this.courseName = name;
    this.users = users;
  }

}
