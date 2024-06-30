// class User {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const user = new User("shashi94goswami@gmail.com", "Shashi");

// console.log(user);

// readonly city: string;
// ======================================= inheritance ================================================
class User {
  protected _courseCount = 1
  readonly city: string = "Delhi";
  constructor(public email: string, public name: string) {

  }

  private deleteToken(){
    console.log("Token deleted")
  }
  
  get getAppleEmail(): string{
    return `apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount
  }

  set courseCount(courseNum){
    if(courseNum<=1){
      throw new Error("Course count should be more then 1")
    }
    this._courseCount = courseNum
  }
}

class SubUser extends User {
  isFamily : boolean = true
  changeCourseCount (){
    this._courseCount = 4
  }
}


const shashikant = new User("shashikant@gmail.com","shashikant")

// shashikant.