import { Subject } from "rxjs/Subject";

export class UserService {
  
  userActived  = new Subject();
  constructor() { }
}