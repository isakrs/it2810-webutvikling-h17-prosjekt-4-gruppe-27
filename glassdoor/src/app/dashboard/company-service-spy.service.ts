import { Company } from '../companies/shared/company.model';
import { CompanyService } from '../companies/shared/company.service';




export class CompanyServiceSpy {
  testCompany = new Company(42, 'Test Company');

  getCompanies = jasmine.createSpy('getCompanies').and.callFake(
    () => Promise
      .resolve(true)
      .then(() => Object.assign({}, this.testCompany))
      .catch((err) => console.log("MAJOR ERROR: ", err))
  );

  getCompany = jasmine.createSpy('getCompany').and.callFake(
    (id: number) => Promise
      .resolve(true)
      .then(() => this.testCompany)
  );



  // getCompany(id: number): Promise<Company> {
  //   const url = `${this.companiesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json() as Company)
  //     .catch(this.handleError);
  // }

  wasCalled = () => {
    console.log("_______IN HERE __________");
  }


}