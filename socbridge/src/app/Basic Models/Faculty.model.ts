import {User} from './User.model';
import {YearModel} from './Year.model';
export class FacultyModel {
  public faculty: string;
  public users: User[];
  public byYear: YearModel[];

  constructor(name: string, users: User[]) {
    this.faculty = name;
    this.users = users;
    this.byYear = [];
  }
}
