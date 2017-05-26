import {User} from './User.model';
export class YearModel {
  public year: number;
  public users: User[];

  constructor(year: number, users: User[]) {
    this.year = year;
    this.users = users;
  }
}
