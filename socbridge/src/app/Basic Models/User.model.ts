export class User {
  public firstName: string;
  public lastName: string;
  public imagePath: string;
  public faculty: string;
  public yearOfStudy: number;
  public courses: string[];

  constructor(firstName: string, lastName: string, imagePath: string, faculty: string, yearOfStudy: number, courses: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.imagePath = imagePath;
    this.faculty = faculty;
    this.yearOfStudy = yearOfStudy;
    this.courses = courses;
  }

}
