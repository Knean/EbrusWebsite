(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _foodlist_foodlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodlist/foodlist.component */ "./src/app/foodlist/foodlist.component.ts");
/* harmony import */ var _clothinglist_clothinglist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clothinglist/clothinglist.component */ "./src/app/clothinglist/clothinglist.component.ts");
/* harmony import */ var _specialorder_specialorder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialorder/specialorder.component */ "./src/app/specialorder/specialorder.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _billing_form_billing_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./billing-form/billing-form.component */ "./src/app/billing-form/billing-form.component.ts");
/* harmony import */ var _payment_parent_payment_parent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment-parent/payment-parent.component */ "./src/app/payment-parent/payment-parent.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] },
    { path: 'foodlist', component: _foodlist_foodlist_component__WEBPACK_IMPORTED_MODULE_5__["FoodlistComponent"] },
    { path: 'clothinglist', component: _clothinglist_clothinglist_component__WEBPACK_IMPORTED_MODULE_6__["ClothinglistComponent"] },
    { path: 'specialorders', component: _specialorder_specialorder_component__WEBPACK_IMPORTED_MODULE_7__["SpecialorderComponent"] },
    { path: 'detail/:pk', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"] },
    { path: 'donate', component: _billing_billing_component__WEBPACK_IMPORTED_MODULE_9__["BillingComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"] },
    { path: 'address', component: _billing_form_billing_form_component__WEBPACK_IMPORTED_MODULE_13__["BillingFormComponent"] },
    { path: 'billing', component: _payment_parent_payment_parent_component__WEBPACK_IMPORTED_MODULE_14__["PaymentParentComponent"] },
    { path: 'order', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailComponent"] },
    { path: "**", redirectTo: "home" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _get_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-images.service */ "./src/app/get-images.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(http, getimages, auth) {
        this.http = http;
        this.getimages = getimages;
        this.auth = auth;
        this.images = [];
        this.title = 'ebrusite';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getimages.getImages()
            .subscribe(function (data) { console.log("original data ", data), _this.images = data, console.log(_this.images); });
        this.auth.refreshCart();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_get_images_service__WEBPACK_IMPORTED_MODULE_3__["GetImagesService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _get_images_service__WEBPACK_IMPORTED_MODULE_3__["GetImagesService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/carousel/carousel.component */ "./src/app/home/carousel/carousel.component.ts");
/* harmony import */ var _home_image_links_image_links_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/image-links/image-links.component */ "./src/app/home/image-links/image-links.component.ts");
/* harmony import */ var _home_link_cards_link_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/link-cards/link-cards.component */ "./src/app/home/link-cards/link-cards.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/dropdown.directive.ts");
/* harmony import */ var _clothinglist_clothinglist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clothinglist/clothinglist.component */ "./src/app/clothinglist/clothinglist.component.ts");
/* harmony import */ var _foodlist_foodlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./foodlist/foodlist.component */ "./src/app/foodlist/foodlist.component.ts");
/* harmony import */ var _specialorder_specialorder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./specialorder/specialorder.component */ "./src/app/specialorder/specialorder.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _billing_billing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./billing/billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _billing_form_billing_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./billing-form/billing-form.component */ "./src/app/billing-form/billing-form.component.ts");
/* harmony import */ var _payment_parent_payment_parent_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./payment-parent/payment-parent.component */ "./src/app/payment-parent/payment-parent.component.ts");
/* harmony import */ var _thankyoupage_thankyoupage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./thankyoupage/thankyoupage.component */ "./src/app/thankyoupage/thankyoupage.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                _home_image_links_image_links_component__WEBPACK_IMPORTED_MODULE_9__["ImageLinksComponent"],
                _home_link_cards_link_cards_component__WEBPACK_IMPORTED_MODULE_10__["LinkCardsComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"],
                _dropdown_directive__WEBPACK_IMPORTED_MODULE_12__["DropdownDirective"],
                _clothinglist_clothinglist_component__WEBPACK_IMPORTED_MODULE_13__["ClothinglistComponent"],
                _foodlist_foodlist_component__WEBPACK_IMPORTED_MODULE_14__["FoodlistComponent"],
                _specialorder_specialorder_component__WEBPACK_IMPORTED_MODULE_15__["SpecialorderComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailComponent"],
                _billing_billing_component__WEBPACK_IMPORTED_MODULE_18__["BillingComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__["CheckoutComponent"],
                _billing_form_billing_form_component__WEBPACK_IMPORTED_MODULE_23__["BillingFormComponent"],
                _payment_parent_payment_parent_component__WEBPACK_IMPORTED_MODULE_24__["PaymentParentComponent"],
                _thankyoupage_thankyoupage_component__WEBPACK_IMPORTED_MODULE_25__["ThankyoupageComponent"],
                _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_26__["OrderDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _get_cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-cookies.service */ "./src/app/get-cookies.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthenticationService = /** @class */ (function () {
    //public user = {name: 'mariouser',age:'29'}
    function AuthenticationService(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.tempcart = {
            "id": 26,
            "total": "5.55",
            "products": [
                {
                    "product_id": 1,
                    "price": 0.0,
                    "name": "also a good name"
                },
                {
                    "product_id": 2,
                    "price": 99.59,
                    "name": "some other name"
                },
                {
                    "product_id": 3,
                    "price": 0.0,
                    "name": "somename"
                }
            ]
        };
        this.user_object_noaddress = { username: 'pleasework', age: '28', address: null };
        this.user_object = { username: 'pleasework', age: '28', address: { address_line_1: 'lskdjfsldkjf' } };
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.user_object_noaddress);
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.tempcart);
    }
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        this.http.post("https://evening-taiga-61292.herokuapp.com/api/register", { "username": username, "password": password })
            .subscribe(function () {
            _this.login(username, password);
            _this.get_user();
        });
    };
    AuthenticationService.prototype.get_user = function () {
        var _this = this;
        this.http.get("https://evening-taiga-61292.herokuapp.com/api/get_user").subscribe(function (data) {
            if (data.username) {
                _this.user.next(data);
            }
            else {
                _this.user.next(null);
            }
        });
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var csrf = this.cookie.getCookie('csrftoken');
        var csrfheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-CSRFToken': csrf });
        this.http.post("https://evening-taiga-61292.herokuapp.com/api/login", { "username": username, "password": password }, { headers: csrfheader }).
            subscribe(function () { return _this.get_user(); });
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        this.http.get("https://evening-taiga-61292.herokuapp.com/api/logout")
            .subscribe(function () { _this.get_user(); _this.refreshCart(); });
    };
    //add product to the cart in session
    AuthenticationService.prototype.updateCart = function (productid) {
        var _this = this;
        var formdata = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('product_id', productid);
        this.http.post("https://evening-taiga-61292.herokuapp.com/cart/", formdata)
            .subscribe(function (data) {
            console.log(data);
            _this.refreshCart();
        });
    };
    // get or create a shopping cart
    AuthenticationService.prototype.refreshCart = function () {
        var _this = this;
        this.http.get("https://evening-taiga-61292.herokuapp.com/getCart/")
            .subscribe(function (data) { return _this.cart.next(data); });
    };
    AuthenticationService.prototype.createAddress = function (address_line_1, address_line_2) {
        var csrf = this.cookie.getCookie('csrftoken');
        var csrfheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-CSRFToken': csrf });
        var formdata = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('address_line_1', address_line_1).set('address_line_2', address_line_2);
        return this.http.post("https://evening-taiga-61292.herokuapp.com/createAddress/", formdata, { headers: csrfheader });
    };
    AuthenticationService.prototype.getAddress = function () {
        return this.http.get("https://evening-taiga-61292.herokuapp.com/getAddress/");
    };
    AuthenticationService.prototype.createOrder = function (token, address, cart) {
        var csrf = this.cookie.getCookie('csrftoken');
        var csrfheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-CSRFToken': csrf });
        var user;
        var userSubscription = this.user.subscribe(function (userdata) { return user = userdata; });
        var formdata = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        cart.products.forEach(function (value) {
            var product_id = value.product_id.toString();
            formdata = formdata.append('products', product_id);
        });
        formdata = formdata.set('address', address.id.toString());
        formdata = formdata.set('total', cart.total.toString());
        formdata = formdata.set('stripe_token', token);
        /*     .append('products', '1').append('products', '2')
            .set('user', '1')
            .set('address', '21')
            .set('total', '9.99')
            .set('stripe_token', token) */
        userSubscription.unsubscribe();
        return this.http.post("https://evening-taiga-61292.herokuapp.com/create_order", formdata, { headers: csrfheader });
    };
    AuthenticationService.prototype.clearCart = function () {
        var _this = this;
        return this.http.get("https://evening-taiga-61292.herokuapp.com/clear_cart").subscribe(function () { return _this.refreshCart(); });
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _get_cookies_service__WEBPACK_IMPORTED_MODULE_3__["GetCookiesService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/billing-form/billing-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/billing-form/billing-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nLWZvcm0vYmlsbGluZy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/billing-form/billing-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/billing-form/billing-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>We don't have your address</p>\n<form class = \"form-group\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"addressForm\">\n  <label>\n    address_line_1:\n    <input type=\"text\" class=\"form-control\" formControlName=\"address_line_1\">\n  </label>\n  <label>\n    address_line_2:\n      <input type=\"password\" class=\"form-control\" formControlName=\"address_line_2\">\n    </label>    \n    <!-- <button class = \"btn btn-primary\" type=\"submit\"> proceed </button> -->\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/billing-form/billing-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/billing-form/billing-form.component.ts ***!
  \********************************************************/
/*! exports provided: BillingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingFormComponent", function() { return BillingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var BillingFormComponent = /** @class */ (function () {
    function BillingFormComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.addressEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address_line_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            address_line_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    BillingFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var address_line_1 = this.addressForm.controls.address_line_1.value;
        var address_line_2 = this.addressForm.controls.address_line_2.value;
        this.auth.createAddress(address_line_1, address_line_2).subscribe(function (data) {
            _this.addressEmitter.emit(data);
            //this.router.navigate(['billing'])
        });
    };
    BillingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) { return _this.user = data; });
        console.log(this.user);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BillingFormComponent.prototype, "addressEmitter", void 0);
    BillingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing-form',
            template: __webpack_require__(/*! ./billing-form.component.html */ "./src/app/billing-form/billing-form.component.html"),
            styles: [__webpack_require__(/*! ./billing-form.component.css */ "./src/app/billing-form/billing-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BillingFormComponent);
    return BillingFormComponent;
}());



/***/ }),

/***/ "./src/app/billing/billing.component.css":
/*!***********************************************!*\
  !*** ./src/app/billing/billing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWxsaW5nL2JpbGxpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/billing/billing.component.html":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"form-group\">\n\n  <label for = \"card-element\"> credit or debit card</label>\n  <div id = \"card-element\" class = \"form-control\"></div>\n  <div id=\"card-errors\" role=\"alert\"></div>\n  <button>Submit Payment</button>\n</div> -->\n\n<!-- <div class=\"container-fluid\"  >\n  <div class=\"row\">\n    <div class=\"col\">\n      <p> Buy Ebru a new frying pan and a better developer</p>\n    </div>\n\n\n  </div>\n  <div class=\"row\">\n    <div class=\"col\"> -->\n      <div class = \"form-group\"(submit)=\"handleForm($event)\"id=\"stripeForm\">\n\n        <label for=\"card-element\"> credit or debit card</label>\n        <div id=\"card-element\"class = \"form-control\"></div>\n        <div id=\"card-errors\" role=\"alert\"></div>\n        <button (click)=\"handleForm($event)\" class = \"btn btn-primary\">Pay {{amount/100 | number: '0.2'}} EUR</button>\n      </div>\n<!-- \n    </div>\n\n\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/billing/billing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-images.service */ "./src/app/get-images.service.ts");



var BillingComponent = /** @class */ (function () {
    function BillingComponent(httpclient) {
        this.httpclient = httpclient;
        this.stripeToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.donated = false;
        this.style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.title = 'AngStripe';
    }
    BillingComponent.prototype.handleForm = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mario;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mario = this;
                        return [4 /*yield*/, this.stripe.createToken(this.card).then(function (result) {
                                if (result.error) {
                                    console.log('we got an error');
                                    // Inform the customer that there was an error.
                                    var errorElement = document.getElementById('card-errors');
                                    errorElement.textContent = result.error.message;
                                }
                                else {
                                    mario.stripeToken.emit(result.token);
                                    /*
                                    console.log('no errors')
                                    mario.httpclient.sendToken(result.token).subscribe((data: any) => {
                                      console.log(data);
                                      if (data.success) { console.log(data) }
                                    })
                            
                                    
                                    console.log(result.token, 'result!') */
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BillingComponent.prototype.submitWithoutClicking = function () {
        this.handleForm(document.getElementById("stripeForm"));
        //(<any>document.getElementById("stripeForm")).submit();
        //(<any>document.getElementsByClassName("ElementsApp")[0]).submit()
    };
    BillingComponent.prototype.ngOnInit = function () {
        this.stripe = Stripe('pk_test_yKgVirGOUgNa70uP1uYj45pU');
        var elements = this.stripe.elements();
        this.card = elements.create('card', { style: this.style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BillingComponent.prototype, "amount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BillingComponent.prototype, "stripeToken", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('card-element'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BillingComponent.prototype, "cardelement", void 0);
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/billing/billing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Product</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Availability</th>\n      </tr>\n    </thead>\n    <tbody>\n\n        <tr *ngFor=\" let product of cart.products; let i = index;\">        \n            <th scope=\"row\">{{i}}</th>\n            <td>{{product.name}} </td>\n            <td>{{product.price}}</td>\n            <td>infinite</td>\n          </tr>\n    </tbody>\n    <p style=\"margin: 10px; font-weight: 900; display: inline\">Total: </p>\n    <p style = \"display: inline\"> {{cart.total}}</p>\n  </table>\n\n  <button class = \"btn btn-primary\"(click)=\"proceed()\">proceed to payment</button>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CheckoutComponent.prototype.proceed = function () {
        /*     if (! this.user.address){
              this.router.navigate(['address'])
            }
            else{
              this.router.navigate(['billing'])
            } */
        this.router.navigate(['billing']);
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.cart.subscribe(function (data) { return _this.cart = data; });
        this.auth.user.subscribe(function (data) { return _this.user = data; });
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/clothinglist/clothinglist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clothinglist/clothinglist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG90aGluZ2xpc3QvY2xvdGhpbmdsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/clothinglist/clothinglist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clothinglist/clothinglist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clothinglist works!\n</p>\n"

/***/ }),

/***/ "./src/app/clothinglist/clothinglist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clothinglist/clothinglist.component.ts ***!
  \********************************************************/
/*! exports provided: ClothinglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothinglistComponent", function() { return ClothinglistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClothinglistComponent = /** @class */ (function () {
    function ClothinglistComponent() {
    }
    ClothinglistComponent.prototype.ngOnInit = function () {
    };
    ClothinglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clothinglist',
            template: __webpack_require__(/*! ./clothinglist.component.html */ "./src/app/clothinglist/clothinglist.component.html"),
            styles: [__webpack_require__(/*! ./clothinglist.component.css */ "./src/app/clothinglist/clothinglist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClothinglistComponent);
    return ClothinglistComponent;
}());



/***/ }),

/***/ "./src/app/dropdown.directive.ts":
/*!***************************************!*\
  !*** ./src/app/dropdown.directive.ts ***!
  \***************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.dropped = false;
    }
    //dropped = false
    DropdownDirective.prototype.dropToggle = function () {
        this.dropped = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.show'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropdownDirective.prototype, "dropToggle", null);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/foodlist/foodlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/foodlist/foodlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb29kbGlzdC9mb29kbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/foodlist/foodlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/foodlist/foodlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  foodlist works!\n</p>\n"

/***/ }),

/***/ "./src/app/foodlist/foodlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/foodlist/foodlist.component.ts ***!
  \************************************************/
/*! exports provided: FoodlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodlistComponent", function() { return FoodlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoodlistComponent = /** @class */ (function () {
    function FoodlistComponent() {
    }
    FoodlistComponent.prototype.ngOnInit = function () {
    };
    FoodlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foodlist',
            template: __webpack_require__(/*! ./foodlist.component.html */ "./src/app/foodlist/foodlist.component.html"),
            styles: [__webpack_require__(/*! ./foodlist.component.css */ "./src/app/foodlist/foodlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoodlistComponent);
    return FoodlistComponent;
}());



/***/ }),

/***/ "./src/app/get-cookies.service.ts":
/*!****************************************!*\
  !*** ./src/app/get-cookies.service.ts ***!
  \****************************************/
/*! exports provided: GetCookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCookiesService", function() { return GetCookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetCookiesService = /** @class */ (function () {
    function GetCookiesService() {
    }
    GetCookiesService.prototype.getCookie = function (name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };
    GetCookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetCookiesService);
    return GetCookiesService;
}());



/***/ }),

/***/ "./src/app/get-images.service.ts":
/*!***************************************!*\
  !*** ./src/app/get-images.service.ts ***!
  \***************************************/
/*! exports provided: GetImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImagesService", function() { return GetImagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var GetImagesService = /** @class */ (function () {
    function GetImagesService(http) {
        this.http = http;
    }
    //public baseURL = document.URL.split('/').splice(0,3).join('/') + '/' 
    GetImagesService.prototype.getImages = function () {
        return this.http.get("https://firestore.googleapis.com/v1/projects/ebrusproducts/databases/(default)/documents/images").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            var fixedobject = [];
            for (var i = 0; i < value.documents.length; ++i) {
                fixedobject.push({
                    url: value.documents[i].fields.url.stringValue,
                    name: value.documents[i].fields.name.stringValue
                });
            }
            return fixedobject;
        }));
    };
    GetImagesService.prototype.searchProducts = function (query) {
        return this.http.get("https://evening-taiga-61292.herokuapp.com/api/search/" + query);
    };
    GetImagesService.prototype.getProducts = function () {
        return this.http.get("https://evening-taiga-61292.herokuapp.com/api/products");
    };
    GetImagesService.prototype.getProductDetail = function (pk) {
        return this.http.get("https://evening-taiga-61292.herokuapp.com/api/products/" + pk);
    };
    GetImagesService.prototype.sendToken = function (token) {
        return this.http.post("https://evening-taiga-61292.herokuapp.com/api/charge", { "token": token.id });
    };
    GetImagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetImagesService);
    return GetImagesService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\" style=\"font-weight: 700\">Home</a>\n  \n  \n        \n    \n  <button class=\"navbar-toggler \" (click)=displayNav() type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse \"[class.show]= \"navShow\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n       <li class=\"nav-item\">\n        \n        <a class=\"nav-link\" routerLink=\"/products\" routerLinkActive=\"active\">products</a>\n      </li>\n      <li class=\"nav-item dropdown \">\n        <a (click)=\"dropdown()\" class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n          Product categories\n        </a>\n        <div  [class.show]=\"show\" class=\"dropdown-menu\"  aria-labelledby=\"navbarDropdown\" >\n          <a (click)=\"dropdown()\" class=\"dropdown-item\" routerLink=\"/foodlist\">Food</a>\n          <a (click)=\"dropdown()\" class=\"dropdown-item\" routerLink=\"/clothinglist\">Clothing</a>\n          <div class=\"dropdown-divider\"></div>\n          <a (click)=\"dropdown()\" class=\"dropdown-item\" routerLink=\"/specialorders\">Special orders</a>\n        </div>\n      </li>\n      <li  class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\"></a>\n      </li>\n      <li class=\"nav-item\">\n        \n          <a style = \"color: green\" class=\"nav-link\" routerLink=\"/donate\" routerLinkActive=\"active\">Donate</a>\n        </li>\n        \n        <li class=\"nav-item\" *ngIf = \"!user; else elseBlock\">\n        \n            <a  class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </li>\n        <li class=\"nav-item\">\n        \n          <a style = \"color: green\" class=\"nav-link\" routerLink=\"/checkout\" routerLinkActive=\"active\"><i class=\"fas fa-shopping-cart\"></i>{{cart.products.length}}</a>\n        </li>\n        <ng-template #elseBlock>\n            <li class=\"nav-item dropdown \">\n                <a (click)=\"profileClick()\" class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" >\n                  {{user.username}}\n                </a>\n                <div  [class.show]=\"profileShow\" class=\"dropdown-menu\"  aria-labelledby=\"navbarDropdown\" >\n                  <a  class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>                  \n                  <div class=\"dropdown-divider\"></div>\n                  <a  class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n                </div>\n              </li>\n        </ng-template>\n        \n    </ul>\n   \n    <form [formGroup] = \"searchForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inline my-2 my-lg-0\">\n      <input formControlName = \"query\" class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n \n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(activatedroute, router, auth) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.auth = auth;
        this.show = false;
        this.navShow = false;
        this.profileShow = false;
    }
    HeaderComponent.prototype.dropdown = function () {
        this.show = !this.show;
    };
    HeaderComponent.prototype.displayNav = function () {
        this.navShow = !this.navShow;
    };
    HeaderComponent.prototype.profileClick = function () {
        this.profileShow = !this.profileShow;
    };
    HeaderComponent.prototype.logout = function () {
        //this.auth.user.next('') 
        this.auth.logout();
    };
    HeaderComponent.prototype.onSubmit = function () {
        /* console.log(this.searchForm.get('query').value) */
        this.router.navigate(['products'], { queryParams: { 'search': this.searchForm.get('query').value } });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.cart.subscribe(function (data) { return _this.cart = data; });
        this.activatedroute.url.subscribe(function (data) { return console.log(data, 'subscribed to route'); });
        this.auth.get_user();
        this.auth.user.subscribe(function (data) { return _this.user = data; });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ 'query': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required) });
        /* this.auth.login('mario', 'majestic12').subscribe() */
        //this.auth.get_user().subscribe((data: any) => {data.user? this.user = data.user: this.user = ''})    
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/carousel/carousel.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\"  >\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img [src]=\"selected_image\" class=\"img-fluid\" style =\"width: 100%; height: 20vw; object-fit: cover\"  alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"\" class=\"d-block w-100\" alt=\"...\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\"  role=\"button\" data-slide=\"prev\"(click)=\"previousImage($event)\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\"  role=\"button\" data-slide=\"next\"(click)=\"nextImage($event)\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/home/carousel/carousel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/carousel/carousel.component.ts ***!
  \*****************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/get-images.service */ "./src/app/get-images.service.ts");



var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(getimages) {
        this.getimages = getimages;
        this.carousel_index = 0;
        this.images = [];
    }
    CarouselComponent.prototype.carouselPlusOne = function () {
        this.carousel_index = (this.carousel_index + 1) % (this.images.length);
    };
    CarouselComponent.prototype.nextImage = function (event) {
        this.carouselPlusOne();
        while (this.images[this.carousel_index].url == false) {
            this.carouselPlusOne();
        }
        this.selected_image = this.images[this.carousel_index].url;
    };
    CarouselComponent.prototype.carouselMinusOne = function () {
        if (this.carousel_index > 0) {
            this.carousel_index = (this.carousel_index - 1);
        }
        else {
            this.carousel_index = this.images.length - 1;
        }
    };
    CarouselComponent.prototype.previousImage = function (event) {
        this.carouselMinusOne();
        while (this.images[this.carousel_index].url == false) {
            this.carouselMinusOne();
        }
        this.selected_image = this.images[this.carousel_index].url;
    };
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getimages.getImages()
            .subscribe(function (data) {
            _this.images = data;
            _this.selected_image = _this.images[_this.carousel_index].url;
        });
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/home/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/home/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor= \"let value of images\"><p>{{value.name}}</p><img src=\"{{value.url}}\"></li>\n</ul> -->\n<app-carousel></app-carousel>\n<button class=\"btn btn-primary\">dont click</button>\n\n<div class=\"container-fluid\">\n\n  <div class=\"row justify-content-center\">\n    <app-image-links></app-image-links>\n  </div>\n  <div class=\"row justify-content-center\">\n    <app-link-cards></app-link-cards>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <h1> PAY US A VISIT</h1>\n  </div>\n  <div class=\"row justify-content-center\">\n  <p>\n    Stop by our shop at some address\n  </p>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/image-links/image-links.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/image-links/image-links.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2ltYWdlLWxpbmtzL2ltYWdlLWxpbmtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home/image-links/image-links.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/image-links/image-links.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-8 \" style=\"border: solid green;\">\n        <a  href=\"/products/products\"><img [src]=images[0].url class=\"img-fluid\"></a>\n        <!-- <p style=\"background: gray; border:solid; border-color:rgb(77, 72, 72); position: absolute;font-family:Impact, Charcoal, sans-serif; top:90%; left: 80%\">books</p>\n      --> \n      </div>\n      \n    </div>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-8 \" style=\"border: solid green;\">\n            <a  href=\"/products/products\"><img [src]=images[1].url class=\"img-fluid\"></a>\n        </div>\n        \n      </div>\n      <div class=\"row justify-content-center\">\n          <div class=\"col-8 \" style=\"border: solid green;\">\n              <a  href=\"/products/products\"><img [src]=images[3].url class=\"img-fluid\"></a>\n          </div>\n          \n        </div>\n   \n  </div>"

/***/ }),

/***/ "./src/app/home/image-links/image-links.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/image-links/image-links.component.ts ***!
  \***********************************************************/
/*! exports provided: ImageLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLinksComponent", function() { return ImageLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/get-images.service */ "./src/app/get-images.service.ts");



var ImageLinksComponent = /** @class */ (function () {
    function ImageLinksComponent(getimages) {
        this.getimages = getimages;
    }
    ImageLinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getimages.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    ImageLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-links',
            template: __webpack_require__(/*! ./image-links.component.html */ "./src/app/home/image-links/image-links.component.html"),
            styles: [__webpack_require__(/*! ./image-links.component.css */ "./src/app/home/image-links/image-links.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"]])
    ], ImageLinksComponent);
    return ImageLinksComponent;
}());



/***/ }),

/***/ "./src/app/home/link-cards/link-cards.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/link-cards/link-cards.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2xpbmstY2FyZHMvbGluay1jYXJkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/link-cards/link-cards.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/link-cards/link-cards.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n      <div class=\"card\" style=\"width: 18rem;\">\n\n        <a href=\"/products/products\"><img [src]=images[0].url class=\"card-img-top\"></a>\n        <div class=\"card-body\">\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm\">\n      <div class=\"card\" style=\"width: 18rem;\">\n\n        <a href=\"/products/products\"><img [src]=images[1].url class=\"card-img-top\"></a>\n        <div class=\"card-body\">\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm\">\n      <div class=\"card\" style=\"width: 18rem;\">\n\n        <a href=\"/products/products\"><img [src]=images[3].url class=\"card-img-top\"></a>\n        <div class=\"card-body\">\n          <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n            content.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/link-cards/link-cards.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/link-cards/link-cards.component.ts ***!
  \*********************************************************/
/*! exports provided: LinkCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkCardsComponent", function() { return LinkCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/get-images.service */ "./src/app/get-images.service.ts");



var LinkCardsComponent = /** @class */ (function () {
    function LinkCardsComponent(getimages) {
        this.getimages = getimages;
    }
    LinkCardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getimages.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    LinkCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-cards',
            template: __webpack_require__(/*! ./link-cards.component.html */ "./src/app/home/link-cards/link-cards.component.html"),
            styles: [__webpack_require__(/*! ./link-cards.component.css */ "./src/app/home/link-cards/link-cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"]])
    ], LinkCardsComponent);
    return LinkCardsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n    <label>\n      Username:\n      <input type=\"text\" formControlName=\"userName\">\n    </label>\n    <label>\n        Password:\n        <input type=\"password\" formControlName=\"password\">\n      </label>    \n    <button type=\"submit\"> Login </button>\n  </form>\n\n  <form (ngSubmit)=\"submitCart()\" [formGroup]=\"cartForm\">\n    <label>\n      product id:\n      <input type=\"text\" formControlName=\"product_id\">\n    </label>    \n    <button type=\"submit\"> Login </button>\n  </form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.cartForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var password = this.loginForm.controls.password.value;
        var username = this.loginForm.controls.userName.value;
        console.log(username, password);
        this.auth.login(username, password);
        this.router.navigate(['home']);
    };
    LoginComponent.prototype.submitCart = function () {
        var product_id = this.cartForm.controls.product_id.value;
        console.log(product_id, ' this is id from the form');
        console.log(this.cartForm.value, 'whole form');
        this.auth.updateCart(product_id);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  your order id: some number <br>\n  <p>you ordered these products:</p> <p *ngFor = \"let product of orderObject.products\">{{product.name}}</p><br>\n  price paid: {{orderObject.total}}<br>\n  address: {{orderObject.address[0].address_line_1}}\n</div>\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.ts ***!
  \********************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(auth) {
        this.auth = auth;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        /*   this.auth.createOrder().subscribe((data:Order)=> {
            this.orderObject = data;
            console.log(data)}) */
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderDetailComponent.prototype, "orderObject", void 0);
    OrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/order-detail/order-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/payment-parent/payment-parent.component.css":
/*!*************************************************************!*\
  !*** ./src/app/payment-parent/payment-parent.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXBhcmVudC9wYXltZW50LXBhcmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment-parent/payment-parent.component.html":
/*!**************************************************************!*\
  !*** ./src/app/payment-parent/payment-parent.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container  *ngIf = \"!this.address\">\n<app-billing-form #addressForm (addressEmitter)= \"getAddress($event)\"></app-billing-form>\n<button class = \"btn btn-primary\"(click)=\"addressForm.onSubmit()\"> Send address</button>\n </ng-container>\n\n <ng-container  *ngIf = \"this.address && !this.order\">\n    <app-billing [amount]='400' #stripe (stripeToken)=\"postToken($event)\">\n    </app-billing>\n    <button class=\"btn btn-primary\" (click)=\"stripe.submitWithoutClicking()\">\n        outside button\n    </button>\n </ng-container>\n <ng-container *ngIf = \"this.order\">\n     <app-order-detail [orderObject]=\"order\"></app-order-detail>\n </ng-container>\n\n"

/***/ }),

/***/ "./src/app/payment-parent/payment-parent.component.ts":
/*!************************************************************!*\
  !*** ./src/app/payment-parent/payment-parent.component.ts ***!
  \************************************************************/
/*! exports provided: PaymentParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentParentComponent", function() { return PaymentParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-images.service */ "./src/app/get-images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");





var PaymentParentComponent = /** @class */ (function () {
    function PaymentParentComponent(httpClient, router, auth) {
        this.httpClient = httpClient;
        this.router = router;
        this.auth = auth;
    }
    PaymentParentComponent.prototype.getAddress = function (address) { this.address = address; };
    PaymentParentComponent.prototype.postToken = function (token) {
        var _this = this;
        this.auth.createOrder(token, this.address, this.cart)
            .subscribe(function (data) {
            console.log(data, 'order created ^^');
            if (!data.errors) {
                _this.order = data;
                _this.auth.clearCart();
                //reset cart
                //this.auth.cart.next()
            }
        });
        /*     console.log('no errors')
            this.httpClient.sendToken(token).subscribe((data: any) => {
              console.log(data);
              if (data.success) {
                console.log(data)
                this.router.navigate(['order'])
              }
            })
        
        
            console.log(token, 'result!')
        
           */ 
    };
    PaymentParentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.auth.createOrder("lsdjldsjf",this.address,this.cart).subscribe(data=>console.log(data, 'order created'))
        this.cartSubscription = this.auth.cart.subscribe(function (data) { return _this.cart = data; });
        this.cartSubscription.unsubscribe();
        this.userSubscription = this.auth.user.subscribe(function (data) {
            _this.user = data;
        });
        this.auth.getAddress().subscribe(function (data) { return _this.address = data; });
        //se
    };
    PaymentParentComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    PaymentParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-parent',
            template: __webpack_require__(/*! ./payment-parent.component.html */ "./src/app/payment-parent/payment-parent.component.html"),
            styles: [__webpack_require__(/*! ./payment-parent.component.css */ "./src/app/payment-parent/payment-parent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], PaymentParentComponent);
    return PaymentParentComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div *ngIf=\"displayedImage\" class=\"row justify-content-center\">\n    <div class=\"col-sm-6 py-3\">\n      <img [src]=\"displayedImage\" style=\"height: 60vh\" class=\"img-fluid\" (click)=\"imgClick($event)\">\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div *ngFor=\"let item of product.image_set; index as i\" class=\"col-sm-3\">\n      <img [src]=\"product.image_set[i].url\" style=\"height: 12em\" [attr.data-index]=\"i\" (click)=\"imgClick($event)\">\n    </div>\n\n\n  </div>\n  <div class=\"row\">\n    <p>\n      {{product.productName}}<br>{{product.description}}\n    </p>\n    <div *ngIf=\"productInCart(); else elseBlock\">\n\n      <p>in cart\n        <button (click)=\"updateCart()\" class=\"btn btn-danger\">\n          remove from Cart\n        </button>\n      </p>\n    </div>\n\n    <ng-template #elseBlock>\n      <button (click)=\"updateCart()\" class=\"btn btn-primary\">Add to Cart</button>\n    </ng-template>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _get_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-images.service */ "./src/app/get-images.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, service, auth) {
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.pk = this.route.snapshot.paramMap.get('pk');
    }
    ProductDetailComponent.prototype.imgClick = function (event) {
        var index = event.target.dataset.index;
        this.displayedImage = this.product.image_set[index].url;
    };
    ProductDetailComponent.prototype.updateCart = function () {
        this.auth.updateCart(this.pk);
    };
    ProductDetailComponent.prototype.productInCart = function () {
        var products = this.cart.products.map(function (value) { return value.product_id; });
        var productkey = this.pk;
        return products.indexOf(+productkey) > -1 ? true : false;
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.cart.subscribe(function (data) { return _this.cart = data; });
        this.service.getProductDetail(this.pk).subscribe(function (data) { return _this.product = data; });
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _get_images_service__WEBPACK_IMPORTED_MODULE_3__["GetImagesService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 1000px) {\r\n    #separator {\r\n     \r\n      height: 60%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOztNQUVFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InByb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAjc2VwYXJhdG9yIHtcclxuICAgICBcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\" *ngFor=\"let value of products; index as i\" style=\" border-bottom: double; padding-top:2%\">\n\n    <div class=\"col-sm-4\">\n      <img [src]=\"value.image_set[0]? value.image_set[0]['url']: ''\" style=\"width:100%;margin-bottom:1em;\"\n        [attr.data-index]=\"value.id\" (click)=\"navigate($event)\">\n      <div style=\"height: 100%\"></div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"row-items-start \">\n        <p> {{value.productName}}</p>\n      </div>\n      \n      <div *ngIf = \"value.image_set[0]\" id = \"separator\" ></div>\n      <div class=\"row align-items-end\" >\n        <div *ngIf=\"productInCart(value.id); else elseBlock\">\n\n          <p style=\"font-weight: 600; margin-left:10px\">In cart\n            <button (click)=\"updateCart(value.id)\" class=\"btn btn-danger\">\n              remove from Cart\n            </button>\n          </p>\n        </div>\n\n        <ng-template #elseBlock>\n          <button (click)=\"updateCart(value.id)\" class=\"btn btn-primary\">Add to Cart</button>\n        </ng-template>\n      </div>\n\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-images.service */ "./src/app/get-images.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");





var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(getimages, activeroute, router, auth) {
        this.getimages = getimages;
        this.activeroute = activeroute;
        this.router = router;
        this.auth = auth;
    }
    ProductListComponent.prototype.productInCart = function (id) {
        var products = this.cart.products.map(function (value) { return value.product_id; });
        return products.indexOf(id) > -1 ? true : false;
    };
    ProductListComponent.prototype.updateCart = function (id) {
        this.auth.updateCart(id);
    };
    ProductListComponent.prototype.loadresults = function (query) {
        var _this = this;
        this.getimages.searchProducts(this.activeroute.snapshot.queryParams.search).subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent.prototype.loadallresults = function () {
        var _this = this;
        this.getimages.getProducts()
            .subscribe(function (data) {
            _this.products = data;
        });
    };
    ProductListComponent.prototype.navigate = function (event) {
        /* console.log(event.target.dataset) */
        this.router.navigate(["detail/" + event.target.dataset.index]);
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.cart.subscribe(function (data) { return _this.cart = data; });
        this.activeroute.queryParams.subscribe(function (queryParams) {
            if (queryParams.search) {
                _this.loadresults(queryParams.search);
                console.log('loading search results');
            }
            else {
                _this.loadallresults();
                console.log('loading all results');
            }
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_get_images_service__WEBPACK_IMPORTED_MODULE_2__["GetImagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\nHello {{user.username}}\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) { return _this.user = data; });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#passwords.ng-invalid{border: solid red}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLGlCQUFpQiIsImZpbGUiOiJyZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bhc3N3b3Jkcy5uZy1pbnZhbGlke2JvcmRlcjogc29saWQgcmVkfSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\n  <label>\n    Username:\n    <input type=\"text\" formControlName=\"userName\">\n  </label>\n  <div formGroupName=\"passwords\" id = \"passwords\">\n    <label>\n      Password:\n      <input type=\"password\" formControlName=\"password\">\n    </label>\n    <label>\n      Repeat Password:\n      <input type=\"password\" formControlName=\"repeatPassword\">\n    </label>\n  </div>\n  <button type=\"submit\"> Register </button>\n</form>\n\n<app-login></app-login>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _get_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-cookies.service */ "./src/app/get-cookies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, cookie, router) {
        this.auth = auth;
        this.cookie = cookie;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            }, { validators: this.passwordsMatch })
        });
    }
    RegisterComponent.prototype.passwordsMatch = function (group) {
        var pass1 = group.get('password');
        var pass2 = group.get('repeatPassword');
        if (pass1.value !== pass2.value && pass1.dirty && pass2.dirty) {
            return { 'passwordsDontMatch': true };
        }
        return null;
    };
    RegisterComponent.prototype.onSubmit = function () {
        var password = this.registerForm.controls.passwords.get("password").value;
        var username = this.registerForm.controls.userName.value;
        this.auth.register(username, password);
        this.router.navigate(['home']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _get_cookies_service__WEBPACK_IMPORTED_MODULE_4__["GetCookiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/specialorder/specialorder.component.css":
/*!*********************************************************!*\
  !*** ./src/app/specialorder/specialorder.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjaWFsb3JkZXIvc3BlY2lhbG9yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/specialorder/specialorder.component.html":
/*!**********************************************************!*\
  !*** ./src/app/specialorder/specialorder.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  specialorder works!\n</p>\n"

/***/ }),

/***/ "./src/app/specialorder/specialorder.component.ts":
/*!********************************************************!*\
  !*** ./src/app/specialorder/specialorder.component.ts ***!
  \********************************************************/
/*! exports provided: SpecialorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialorderComponent", function() { return SpecialorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpecialorderComponent = /** @class */ (function () {
    function SpecialorderComponent() {
    }
    SpecialorderComponent.prototype.ngOnInit = function () {
    };
    SpecialorderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialorder',
            template: __webpack_require__(/*! ./specialorder.component.html */ "./src/app/specialorder/specialorder.component.html"),
            styles: [__webpack_require__(/*! ./specialorder.component.css */ "./src/app/specialorder/specialorder.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpecialorderComponent);
    return SpecialorderComponent;
}());



/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.css":
/*!*********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aGFua3lvdXBhZ2UvdGhhbmt5b3VwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thankyoupage/thankyoupage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/thankyoupage/thankyoupage.component.ts ***!
  \********************************************************/
/*! exports provided: ThankyoupageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyoupageComponent", function() { return ThankyoupageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThankyoupageComponent = /** @class */ (function () {
    function ThankyoupageComponent() {
    }
    ThankyoupageComponent.prototype.ngOnInit = function () {
    };
    ThankyoupageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thankyoupage',
            template: __webpack_require__(/*! ./thankyoupage.component.html */ "./src/app/thankyoupage/thankyoupage.component.html"),
            styles: [__webpack_require__(/*! ./thankyoupage.component.css */ "./src/app/thankyoupage/thankyoupage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThankyoupageComponent);
    return ThankyoupageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\GitHub\ebrusite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map