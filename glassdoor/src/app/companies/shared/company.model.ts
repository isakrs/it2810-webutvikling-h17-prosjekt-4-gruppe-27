export class Company {
  constructor(public id = 0, public name = '') { }
  clone() { return new Company(this.id, this.name); }
}
