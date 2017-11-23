webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__companies_companies_component__ = __webpack_require__("../../../../../src/app/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_company_detail_company_detail_component__ = __webpack_require__("../../../../../src/app/companies/company-detail/company-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:_id', component: __WEBPACK_IMPORTED_MODULE_4__companies_company_detail_company_detail_component__["a" /* CompanyDetailComponent */] },
    { path: 'companies', component: __WEBPACK_IMPORTED_MODULE_3__companies_companies_component__["a" /* CompaniesComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav button {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav button:visited, a:link {\n  color: #607D8B;\n}\nnav button:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav button.active {\n  color: #039be5;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <button mat-raised-button routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</button>\n  <button mat-raised-button routerLink=\"/companies\" routerLinkActive=\"active\">Companies</button>\n  <button mat-raised-button routerLink=\"/profile\" routerLinkActive=\"active\">Profile</button>\n  <app-logout></app-logout>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to our Company Insider';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_in_memory_data_service__ = __webpack_require__("../../../../../src/app/shared/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companies_companies_component__ = __webpack_require__("../../../../../src/app/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__companies_company_detail_company_detail_component__ = __webpack_require__("../../../../../src/app/companies/company-detail/company-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__companies_company_search_company_search_component__ = __webpack_require__("../../../../../src/app/companies/company-search/company-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__companies_shared_company_service__ = __webpack_require__("../../../../../src/app/companies/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__companies_reviews_review_detail_review_detail_component__ = __webpack_require__("../../../../../src/app/companies/reviews/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__companies_reviews_reviews_component__ = __webpack_require__("../../../../../src/app/companies/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__companies_shared_sort_companies_pipe__ = __webpack_require__("../../../../../src/app/companies/shared/sort-companies.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__companies_company_filter_company_filter_component__ = __webpack_require__("../../../../../src/app/companies/company-filter/company-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_login_login_component__ = __webpack_require__("../../../../../src/app/profile/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_my_page_my_page_component__ = __webpack_require__("../../../../../src/app/profile/my-page/my-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__profile_shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_logout_logout_component__ = __webpack_require__("../../../../../src/app/profile/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__companies_companies_component__["a" /* CompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__companies_company_detail_company_detail_component__["a" /* CompanyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__companies_company_search_company_search_component__["a" /* CompanySearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__companies_reviews_review_detail_review_detail_component__["a" /* ReviewDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__companies_reviews_reviews_component__["a" /* ReviewsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__companies_shared_sort_companies_pipe__["a" /* SortCompaniesPipe */],
                __WEBPACK_IMPORTED_MODULE_16__companies_company_filter_company_filter_component__["a" /* CompanyFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__profile_my_page_my_page_component__["a" /* MyPageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_logout_logout_component__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__shared_in_memory_data_service__["a" /* InMemoryDataService */], {
                    passThruUnknownUrl: true
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["h" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["i" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material__["d" /* MatGridListModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__companies_shared_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_20__profile_shared_profile_service__["a" /* ProfileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/companies/companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.companies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.companies mat-list-item {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.companies mat-list-item:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.companies mat-list-item.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.companies .text {\n  position: relative;\n  top: -3px;\n}\n.companies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nmat-raised-button {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nmat-raised-button:hover {\n  background-color: #cfd8dc;\n}\nmat-raised-button.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/companies.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Companies</h2>\n\n<mat-card *ngIf=\"isLoggedIn; else login\">\n  <form>\n    <mat-form-field>\n      <input matInput placeholder=\"Company name\" id=\"company-input\" #companyName/>\n    </mat-form-field>\n    <button mat-raised-button class=\"add-company\" (click)=\"add(companyName.value); companyName.value=''\">\n    Add\n  </button>\n  </form>\n\n  \n</mat-card>\n\n<ng-template #login >\n  <div>\n    <label>Log in to add companies</label>\n  </div>\n</ng-template>\n\n<app-company-filter (changeFilterClicked)=\"getCompanies($event)\"></app-company-filter>\n\n<label>Sort by:</label>\n<mat-form-field>\n  <mat-select [(ngModel)]=\"sortValue\">\n    <mat-option value=\"name\">Name</mat-option>\n    <mat-option value=\"averageRating\">Rating</mat-option>\n    <mat-option value=\"nComments\">Comments</mat-option>\n  </mat-select>\n</mat-form-field>\n\n\n\n<mat-list class=\"companies\">\n  <mat-list-item *ngFor=\"let company of companies | sortNames:sortValue\" (click)=\"onSelect(company)\"\n      [class.selected]=\"company === selectedCompany\">\n    <mat-icon matListIcon>\n      <mat-card *ngIf=\"company.averageRating\" class=\"badge\">{{company.averageRating.toFixed(1)}}</mat-card>\n    </mat-icon>\n    <h3 matLine>{{company.name}}</h3>\n  </mat-list-item>\n</mat-list>\n<button mat-raised-button (click)=\"getCompanies()\">Previous page</button>\n<button mat-raised-button (click)=\"getNextPageCompanies()\">Next page</button>\n"

/***/ }),

/***/ "../../../../../src/app/companies/companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_company_service__ = __webpack_require__("../../../../../src/app/companies/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompaniesComponent = (function () {
    function CompaniesComponent(companyService, router, profileService) {
        this.companyService = companyService;
        this.router = router;
        this.profileService = profileService;
    }
    CompaniesComponent.prototype.getCompanies = function (filter) {
        var _this = this;
        var minRating;
        var minComments;
        if (filter) {
            minRating = filter.minRating;
            minComments = filter.minComments;
        }
        this.companyService
            .getCompanies(minRating, minComments)
            .then(function (companies) { return _this.companies = companies; });
    };
    CompaniesComponent.prototype.getNextPageCompanies = function () {
        var _this = this;
        this.companyService
            .getCompanies(undefined, undefined, true)
            .then(function (companies) { return _this.companies = companies; });
    };
    CompaniesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.companyService.create(name)
            .then(function (company) {
            _this.companies.push(company);
            _this.selectedCompany = null;
            _this.getCompanies();
        });
    };
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
        this.sortValue = "name";
        var session = JSON.parse(localStorage.getItem('session'));
        this.checkSession(session);
    };
    CompaniesComponent.prototype.onSelect = function (company) {
        this.selectedCompany = company;
        this.router.navigate(['/detail', this.selectedCompany._id]);
    };
    CompaniesComponent.prototype.checkSession = function (session) {
        var _this = this;
        if (session === null) {
            this.isLoggedIn = false;
        }
        else {
            this.profileService.isTokenValid(session.token)
                .then(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
        }
    };
    CompaniesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-companies',
            template: __webpack_require__("../../../../../src/app/companies/companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__profile_shared_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__profile_shared_profile_service__["a" /* ProfileService */]) === "function" && _c || Object])
    ], CompaniesComponent);
    return CompaniesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=companies.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/company-detail/company-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".detail-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10%;\n}\n\n@media (min-width: 700px){\n  .detail-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\nlabel {\n  display: inline-block;\n  width: 6em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nmat-raised-button {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nmat-raised-button:hover {\n  background-color: #cfd8dc;\n}\nmat-raised-button:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-detail/company-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-content\" >\n  <mat-card *ngIf=\"company\">\n    <mat-card-title id=\"detail-title\" >{{company.name}}</mat-card-title>\n    <mat-card-content>\n    <div *ngIf=\"company.averageRating\">\n      <label>Average rating: </label>{{company.averageRating.toFixed(1)}}\n    </div>\n    <div *ngIf=\"company.nComments\">\n      <label>Reviews:</label>\n        {{company.nComments}}\n    </div>\n    </mat-card-content>\n  </mat-card>\n  <reviews (reviewsChanged)=\"getCompany()\" [company]=\"company\" ></reviews>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/companies/company-detail/company-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_company_service__ = __webpack_require__("../../../../../src/app/companies/shared/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reviews_shared_review_service__ = __webpack_require__("../../../../../src/app/companies/reviews/shared/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyDetailComponent = (function () {
    function CompanyDetailComponent(companyService, route, location) {
        this.companyService = companyService;
        this.route = route;
        this.location = location;
    }
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.getCompany();
    };
    CompanyDetailComponent.prototype.getCompany = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.companyService.getCompany(params.get('_id')); })
            .subscribe(function (company) { return _this.company = company; });
    };
    CompanyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CompanyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'company-detail',
            template: __webpack_require__("../../../../../src/app/companies/company-detail/company-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-detail/company-detail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__reviews_shared_review_service__["a" /* ReviewService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_company_service__["a" /* CompanyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=company-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/company-filter/company-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-filter/company-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field>\n    <mat-select placeholder=\"Min rating\" (change)=\"changeFilter(minRating.value, minComments.value)\" #minRating>\n      <mat-option value=\"1\">1</mat-option>\n      <mat-option value=\"2\">2</mat-option>\n      <mat-option value=\"3\">3</mat-option>\n      <mat-option value=\"4\">4</mat-option>\n      <mat-option value=\"5\">5</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<div>\n  <mat-form-field>\n    <mat-select placeholder=\"Min comments\" (change)=\"changeFilter(minRating.value, minComments.value)\" #minComments>\n      <mat-option value=\"0\">0</mat-option>\n      <mat-option value=\"5\">5</mat-option>\n      <mat-option value=\"10\">10</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/companies/company-filter/company-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyFilterComponent = (function () {
    function CompanyFilterComponent() {
        this.changeFilterClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CompanyFilterComponent.prototype.ngOnInit = function () {
    };
    CompanyFilterComponent.prototype.changeFilter = function (minRating, minComments) {
        this.changeFilterClicked.emit({
            minRating: minRating, minComments: minComments
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CompanyFilterComponent.prototype, "changeFilterClicked", void 0);
    CompanyFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company-filter',
            template: __webpack_require__("../../../../../src/app/companies/company-filter/company-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-filter/company-filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyFilterComponent);
    return CompanyFilterComponent;
}());

//# sourceMappingURL=company-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/company-search/company-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n\n.search-result:hover {\n  color: #eee;\n  background-color: #607D8B;\n}\n\n#search-box{\n  width: 200px;\n  height: 20px;\n}\n\n.search-form {\n  margin-top: 60px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.search-full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/company-search/company-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <form class=\"search-form\" >\n  \t<mat-form-field class=\"search-full-width\" >\n  \t\t<input matInput #searchBox placeholder=\"Search\" id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  \t</mat-form-field>\n\t</form>\n  <div>\n    <div *ngFor=\"let company of companies | async\"\n         (click)=\"gotoDetail(company)\" class=\"search-result\" >\n      {{company.name}}\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/companies/company-search/company-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_company_search_service__ = __webpack_require__("../../../../../src/app/companies/shared/company-search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable class extensions

// Observable operators




var CompanySearchComponent = (function () {
    function CompanySearchComponent(companySearchService, router) {
        this.companySearchService = companySearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    CompanySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CompanySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companies = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.companySearchService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
        });
    };
    CompanySearchComponent.prototype.gotoDetail = function (company) {
        var link = ['/detail', company._id];
        this.router.navigate(link);
    };
    CompanySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company-search',
            template: __webpack_require__("../../../../../src/app/companies/company-search/company-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/company-search/company-search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_company_search_service__["a" /* CompanySearchService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__shared_company_search_service__["a" /* CompanySearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_company_search_service__["a" /* CompanySearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], CompanySearchComponent);
    return CompanySearchComponent;
    var _a, _b;
}());

//# sourceMappingURL=company-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/reviews/review-detail/review-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/reviews/review-detail/review-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"review\">\n  This review is written by user: {{review.user.username}}\n</h2>\n"

/***/ }),

/***/ "../../../../../src/app/companies/reviews/review-detail/review-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_review_model__ = __webpack_require__("../../../../../src/app/companies/reviews/shared/review.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_review_service__ = __webpack_require__("../../../../../src/app/companies/reviews/shared/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewDetailComponent = (function () {
    function ReviewDetailComponent(reviewService) {
        this.reviewService = reviewService;
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_review_model__["a" /* Review */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_review_model__["a" /* Review */]) === "function" && _a || Object)
    ], ReviewDetailComponent.prototype, "review", void 0);
    ReviewDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-review-detail',
            template: __webpack_require__("../../../../../src/app/companies/reviews/review-detail/review-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/reviews/review-detail/review-detail.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_review_service__["a" /* ReviewService */]) === "function" && _b || Object])
    ], ReviewDetailComponent);
    return ReviewDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=review-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#review-input-comment {\n  width: 50%;\n}\n\n.add-review {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n@media (min-width: 700px){\n  .add-review {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\nmat-slider {\n  margin: auto;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.reviews {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.reviews mat-list-item {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.reviews mat-list-item:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.reviews mat-list-item.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.reviews .text {\n  position: relative;\n  top: -3px;\n}\n.reviews .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nmat-raised-button {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nmat-raised-button:hover {\n  background-color: #cfd8dc;\n}\nbmat-raised-button.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/companies/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"isLoggedIn; else login\" id=\"add-review-card\" >\n  <mat-card-title>Add review</mat-card-title>\n  <mat-card-content>\n    <form class=\"add-review\">\n        <mat-slider\n          [max]=\"5\"\n          [min]=\"1\"\n          [step]=\"1\"\n          [thumbLabel]=\"true\"\n          #reviewRating\n          id=\"review-input-rating\"\n        ></mat-slider>\n      <mat-form-field>\n        <textarea \n          matInput\n          placeholder=\"Comment\"\n          #reviewComment\n        ></textarea>\n      </mat-form-field>\n      <button mat-raised-button\n        class=\"add-review delete\"\n        (click)=\"\n          add(reviewRating.value, reviewComment.value);\n          reviewRating.value='';\n          reviewComment.value=''\n        \"\n        >\n        Add\n      </button>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n<ng-template #login >\n  <div>\n    <label>Log in to add reviews</label>\n  </div>\n</ng-template>\n\n\n<mat-list class=\"reviews\">\n  <mat-list-item *ngFor=\"let review of reviews\" (click)=\"onSelect(review)\"\n      [class.selected]=\"review === selectedReview\">\n    <mat-icon matListIcon>\n      <mat-card class=\"badge\">{{review.rating}}</mat-card>\n    </mat-icon> \n    <h3 matLine>{{review.comment}}</h3>\n    <button  mat-raised-button *ngIf=\"username===review.user.username\" class=\"delete\"\n      (click)=\"delete(review); $event.stopPropagation()\">x</button>\n  </mat-list-item>\n</mat-list>\n<div *ngIf=\"selectedReview\">\n  <app-review-detail [review]=\"selectedReview\" ></app-review-detail>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/companies/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_review_service__ = __webpack_require__("../../../../../src/app/companies/reviews/shared/review.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_company_model__ = __webpack_require__("../../../../../src/app/companies/shared/company.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewsComponent = (function () {
    function ReviewsComponent(reviewService, profileService, route, router) {
        this.reviewService = reviewService;
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.reviewsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ReviewsComponent.prototype.add = function (rating, comment) {
        var _this = this;
        comment = comment.trim();
        if (!(rating >= 1.0 && rating <= 5.0 && comment)) {
            return;
        }
        this.reviewService.create(rating, comment, this.company._id)
            .then(function (review) {
            _this.reviews.push(review);
            _this.selectedReview = null;
            _this.reviewsChanged.emit();
        });
    };
    ReviewsComponent.prototype.delete = function (review) {
        var _this = this;
        this.reviewService
            .delete(review._id)
            .then(function () {
            _this.reviews = _this.reviews.filter(function (r) { return r !== review; });
            if (_this.selectedReview === review) {
                _this.selectedReview = null;
            }
            _this.reviewsChanged.emit();
        });
    };
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.reviewService.getReviews(params.get('_id')); })
            .subscribe(function (reviews) { return _this.reviews = reviews; });
        this.getUsername();
        var session = JSON.parse(localStorage.getItem('session'));
    };
    ReviewsComponent.prototype.onSelect = function (review) {
        this.selectedReview = review;
    };
    ReviewsComponent.prototype.getUsername = function () {
        this.username = '';
        var session = JSON.parse(localStorage.getItem('session'));
        if (session !== null) {
            this.username = session.username;
        }
        this.checkSession(session);
    };
    ReviewsComponent.prototype.checkSession = function (session) {
        var _this = this;
        if (session === null) {
            this.isLoggedIn = false;
        }
        else {
            this.profileService.isTokenValid(session.token)
                .then(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_company_model__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_company_model__["a" /* Company */]) === "function" && _a || Object)
    ], ReviewsComponent.prototype, "company", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ReviewsComponent.prototype, "reviewsChanged", void 0);
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reviews',
            template: __webpack_require__("../../../../../src/app/companies/reviews/reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/companies/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_review_service__["a" /* ReviewService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__profile_shared_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__profile_shared_profile_service__["a" /* ProfileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
    ], ReviewsComponent);
    return ReviewsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/companies/reviews/shared/review.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
var Review = (function () {
    function Review() {
    }
    return Review;
}());

//# sourceMappingURL=review.model.js.map

/***/ }),

/***/ "../../../../../src/app/companies/reviews/shared/review.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.reviewsUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/api/review";
        var session = JSON.parse(localStorage.getItem('session'));
        if (session !== null) {
            this.token = session.token;
        }
        // Initialize headers. Token will be undefined if user is not logged in
        // This is handled by the API
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Bearer " + this.token
        });
    }
    ReviewService.prototype.getReviews = function (idCompany) {
        var url = this.reviewsUrl + "/company/" + idCompany;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReviewService.prototype.getReviewsOfUser = function () {
        var url = this.reviewsUrl + "/user";
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReviewService.prototype.delete = function (id) {
        var url = this.reviewsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ReviewService.prototype.create = function (rating, comment, idCompany) {
        return this.http
            .post(this.reviewsUrl, JSON.stringify({ rating: rating, comment: comment, idCompany: idCompany }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReviewService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], ReviewService);
    return ReviewService;
    var _a;
}());

//# sourceMappingURL=review.service.js.map

/***/ }),

/***/ "../../../../../src/app/companies/shared/company-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanySearchService = (function () {
    function CompanySearchService(http) {
        this.http = http;
    }
    CompanySearchService.prototype.search = function (term) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/api/company/?name=" + term)
            .map(function (response) { return response.json(); });
    };
    CompanySearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], CompanySearchService);
    return CompanySearchService;
    var _a;
}());

//# sourceMappingURL=company-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/companies/shared/company.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.model.js.map

/***/ }),

/***/ "../../../../../src/app/companies/shared/company.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyService = (function () {
    function CompanyService(http) {
        this.http = http;
        this.companiesUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + "/api/company"; // URL to web api
        var session = JSON.parse(localStorage.getItem('session'));
        if (session !== null) {
            this.token = session.token;
        }
        // Initialize headers. Token will be undefined if user is not logged in, but that's fine
        // for some requests
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': "Bearer " + this.token });
    }
    CompanyService.prototype.getCompanies = function (minRating, minComments, next) {
        var skip = 0;
        var url = this.companiesUrl;
        if (next)
            skip = 5;
        url += "/?skip=" + skip + "&size=5";
        if (minRating && !minComments)
            url += "&minRating=" + minRating;
        else if (!minRating && minComments)
            url += "&minComments=" + minComments;
        else if (minRating && minComments)
            url += "&minRating=" + minRating + "&minComments=" + minComments;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getCompany = function (id) {
        var url = this.companiesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.getTopCompanies = function () {
        var url = this.companiesUrl + "/?top=4";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.create = function (name) {
        return this.http
            .post(this.companiesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CompanyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], CompanyService);
    return CompanyService;
    var _a;
}());

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ "../../../../../src/app/companies/shared/sort-companies.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortCompaniesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortCompaniesPipe = (function () {
    function SortCompaniesPipe() {
    }
    SortCompaniesPipe.prototype.transform = function (companies, sortValue) {
        if (!companies || companies === undefined || companies.length === 0)
            return null;
        companies.sort(function (a, b) {
            if (a[sortValue] < b[sortValue]) {
                return -1;
            }
            else if (a[sortValue] > b[sortValue]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        // companies are sorted ascendingly (A-Z), (0-inf)
        if (sortValue === 'averageRating' || sortValue === 'nComments') {
            return companies.reverse();
        }
        else {
            return companies;
        }
    };
    SortCompaniesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'sortNames'
        })
    ], SortCompaniesPipe);
    return SortCompaniesPipe;
}());

//# sourceMappingURL=sort-companies.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\nmat-card {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh2 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\nmat-card {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n\nmat-card:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Top 4 Companies</h2>\n<div class=\"grid grid-pad\">\n  <mat-card *ngFor=\"let company of companies\"  [routerLink]=\"['/detail', company._id]\"  class=\"col-1-4\">\n    <mat-card-content class=\"module company\">\n      <h4>{{company.name}}</h4>\n    </mat-card-content>\n  </mat-card>\n</div>\n<company-search></company-search>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__companies_shared_company_service__ = __webpack_require__("../../../../../src/app/companies/shared/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(companyService) {
        this.companyService = companyService;
        this.companies = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getTopCompanies()
            .then(function (companies) { return _this.companies = companies; });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__companies_shared_company_service__["a" /* CompanyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__companies_shared_company_service__["a" /* CompanyService */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-direction: column;\n\t        flex-direction: column;\n  margin-top: 10%;\n}\n\nlabel {\n  display: inline-block;\n  width: 6em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n  margin: auto;\n}\nbutton {\n  margin-top: 20px;\n  margin-bottom: 30px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNativeValidate class=\"login\" >\n\t<mat-form-field>\n\t\t<input matInput id=\"username\" type=\"text\" placeholder=\"username\" required #username >\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput id=\"password\" type=\"password\" placeholder=\"password\" required #password >\n\t</mat-form-field>\n\t\t<button mat-raised-button id=\"login\" type=\"submit\" (click)=\"onLogin(username.value, password.value)\">\n\t\t\tLog in\n\t\t</button>\n\t\t<button mat-raised-button id=\"register\" type=\"submit\" (click)=\"onRegister(username.value, password.value)\">\n\t\t\tRegister\n\t\t</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/profile/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(profileService) {
        this.profileService = profileService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (username, password) {
        var _this = this;
        if (username.length > 0 && password.length > 0) {
            this.profileService.onLogin(username, password)
                .then(function (res) {
                localStorage.setItem('session', JSON.stringify(res.json()));
            }, function (err) {
                _this.onLoginError(err);
            });
        }
    };
    LoginComponent.prototype.onRegister = function (username, password) {
        var _this = this;
        if (username.length > 0 && password.length > 0) {
            this.profileService.onRegister(username, password)
                .then(function (res) {
                _this.onLogin(username, password);
            }, function (err) {
                _this.onRegisterError(err);
            });
        }
    };
    // Todo: add better messages than alerts
    LoginComponent.prototype.onRegisterError = function (err) {
        alert(err.json());
    };
    LoginComponent.prototype.onLoginError = function (err) {
        alert('Wrong username/password');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/profile/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nbutton:visited, a:link {\n  color: #607D8B;\n}\nbutton:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nbutton.active {\n  color: #039be5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button id=\"logout\" *ngIf=\"isLoggedIn\" (click)=\"clicked()\">Log out</button>\n"

/***/ }),

/***/ "../../../../../src/app/profile/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(profileService) {
        this.profileService = profileService;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var session = JSON.parse(localStorage.getItem('session'));
        this.checkSession(session);
    };
    LogoutComponent.prototype.checkSession = function (session) {
        var _this = this;
        if (session === null) {
            this.isLoggedIn = false;
        }
        else {
            this.profileService.isTokenValid(session.token)
                .then(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
        }
    };
    LogoutComponent.prototype.clicked = function () {
        this.profileService.onLogOut();
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/profile/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a;
}());

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/my-page/my-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.reviews {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n}\n.reviews mat-list-item {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.reviews mat-list-item:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.reviews mat-list-item.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.reviews .text {\n  position: relative;\n  top: -3px;\n}\n.reviews .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nmat-raised-button {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nmat-raised-button:hover {\n  background-color: #cfd8dc;\n}\nmat-raised-button.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/my-page/my-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"welcome-user\">\n  Welcome {{username}}\n</h1>\n\n<div *ngIf=\"reviews\">\n  <p>Your reviews:</p>\n  <mat-list class=\"reviews\">\n    <mat-list-item *ngFor=\"let review of reviews\" (click)=\"onSelect(review)\"\n        [class.selected]=\"review === selectedReview\">\n      <mat-icon matListIcon>\n        <mat-card class=\"badge\">{{review.rating}}</mat-card>\n      </mat-icon> \n      <h3 matLine>{{review.comment}}</h3>\n      <button mat-raised-button class=\"delete\"\n        (click)=\"delete(review); $event.stopPropagation()\">x</button>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/my-page/my-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__companies_reviews_shared_review_service__ = __webpack_require__("../../../../../src/app/companies/reviews/shared/review.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyPageComponent = (function () {
    function MyPageComponent(reviewService) {
        this.reviewService = reviewService;
    }
    MyPageComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    MyPageComponent.prototype.getReviews = function () {
        var _this = this;
        this.reviewService
            .getReviewsOfUser()
            .then(function (reviews) { return _this.reviews = reviews; });
    };
    MyPageComponent.prototype.delete = function (review) {
        var _this = this;
        this.reviewService
            .delete(review._id)
            .then(function () {
            _this.reviews = _this.reviews.filter(function (r) { return r !== review; });
            if (_this.selectedReview === review) {
                _this.selectedReview = null;
            }
        });
    };
    MyPageComponent.prototype.onSelect = function (review) {
        this.selectedReview = review;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MyPageComponent.prototype, "username", void 0);
    MyPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-page',
            template: __webpack_require__("../../../../../src/app/profile/my-page/my-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/my-page/my-page.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__companies_reviews_shared_review_service__["a" /* ReviewService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__companies_reviews_shared_review_service__["a" /* ReviewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__companies_reviews_shared_review_service__["a" /* ReviewService */]) === "function" && _a || Object])
    ], MyPageComponent);
    return MyPageComponent;
    var _a;
}());

//# sourceMappingURL=my-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else login\" >\n\t<app-my-page [username]=\"username\" ></app-my-page>\n  \n</div>\n\n<ng-template #login >\n\t<app-login></app-login>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var session = JSON.parse(localStorage.getItem('session'));
        this.checkSession(session);
    };
    ProfileComponent.prototype.checkSession = function (session) {
        var _this = this;
        if (session === null) {
            this.isLoggedIn = false;
        }
        else {
            this.profileService.isTokenValid(session.token)
                .then(function (isLoggedIn) { return _this.isLoggedIn = isLoggedIn; });
            this.username = session.username;
            this.token = session.token;
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/shared/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = (function () {
    function ProfileService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.profileURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl + "/auth";
    }
    ProfileService.prototype.onLogin = function (username, password) {
        var _this = this;
        var params = JSON.stringify({ username: username, password: password });
        var url = this.profileURL + "/login";
        return this.http
            .post(url, params, { headers: this.headers })
            .toPromise()
            .then(function (data) {
            _this.navigateTo('profile');
            return data;
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.onRegister = function (username, password) {
        var params = JSON.stringify({ username: username, password: password });
        var url = this.profileURL + "/signup";
        return this.http
            .post(url, params, { headers: this.headers })
            .toPromise()
            .then(function (data) {
            return data;
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.isTokenValid = function (token) {
        var _this = this;
        var url = this.profileURL + "/verify";
        return this.http
            .post(url, JSON.stringify({ token: token }), { headers: this.headers })
            .toPromise()
            .then(function (data) {
            return true;
        }, function (err) {
            _this.onLogOut();
            return false;
        })
            .catch(this.handleError);
    };
    ProfileService.prototype.onLogOut = function () {
        localStorage.removeItem('session');
        this.navigateTo('');
    };
    ProfileService.prototype.navigateTo = function (path) {
        this.router.navigate(["/" + path]);
        location.reload();
    };
    ProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ProfileService);
    return ProfileService;
    var _a, _b;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var companies = [
            { _id: '1', name: 'DNB', averageRating: 3.4, nComments: 12 },
            { _id: '2', name: 'Bekk', averageRating: null, nComments: null },
            { _id: '3', name: 'Kolonial.no', averageRating: 4.1, nComments: 12 },
            { _id: '4', name: 'Blank', averageRating: 5, nComments: 2 },
            { _id: '5', name: 'Accenture', averageRating: null, nComments: null },
            { _id: '6', name: 'Mnemonic', averageRating: null, nComments: null },
            { _id: '7', name: 'Statoil', averageRating: 4.5, nComments: 8 },
            { _id: '8', name: 'Microsoft', averageRating: 4.7, nComments: 10 },
            { _id: '9', name: 'Palantir', averageRating: null, nComments: null }
        ];
        var reviews = [
            { _id: '0', rating: 5, comment: 'Loved working here.', idCompany: '3' },
            { _id: '1', rating: 3, comment: 'Loved working here.', idCompany: '4' },
            { _id: '2', rating: 4, comment: 'Loved working here.', idCompany: '2' },
            { _id: '3', rating: 5, comment: 'Loved working here.', idCompany: '3' },
            { _id: '4', rating: 2, comment: 'Loved working here.', idCompany: '4' },
            { _id: '5', rating: 1, comment: 'Loved working here.', idCompany: '3' },
            { _id: '6', rating: 3, comment: 'Loved working here.', idCompany: '4' },
            { _id: '7', rating: 3, comment: 'Loved working here.', idCompany: '8' }
        ];
        var users = [
            {
                _id: '0', id: 0, username: 'marius', password: 'password123', reviews: [
                    { _id: '0', rating: 5, comment: 'Loved working here.', idCompany: '3' },
                    { _id: '1', rating: 3, comment: 'Kinda liked working here', idCompany: '4' },
                ]
            },
            {
                _id: '1', id: 1, username: 'isak', password: '12345', reviews: [
                    { _id: '2', rating: 1, comment: 'Hated working here', idCompany: '1' },
                    { _id: '3', rating: 1, comment: 'Also hated working here', idCompany: '1' },
                ]
            },
        ];
        return { companies: companies, reviews: reviews, users: users };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://it2810-27.idi.ntnu.no:8074'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map