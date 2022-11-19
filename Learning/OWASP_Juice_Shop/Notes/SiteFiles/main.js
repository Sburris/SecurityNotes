(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        0: function (t, e, i) {
            t.exports = i("zUnb")
        },
        zUnb: function (t, e, i) {
            "use strict";
            i.r(e);
            var a = i("cUpR"),
                n = i("8Y7J"),
                o = i("HaE+"),
                r = i("IheW"),
                c = i("QFOu"),
                s = i("s7LF"),
                l = i("lJxs"),
                b = i("JIr8");
            let d = (() => {
                class t {
                    constructor(t) {
                        this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/admin"
                    }
                    getApplicationConfiguration() {
                        return this.configObservable || (this.configObservable = this.http.get(this.host + "/application-configuration").pipe(Object(l.a)(t => t.config, Object(b.a)(t => {
                            throw t
                        })))), this.configObservable
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(r.b))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var u = i("7O5W"),
                h = i("8tEE"),
                m = i("wHSu"),
                p = i("twK/"),
                g = i("PDjf"),
                f = i("VDRc"),
                v = i("TSSN"),
                I = i("Dxy4");
            const C = function (t) {
                return {
                    juicycoin: t
                }
            };
            u.b.add(h.a, m.Z, m.p, m.i, m.j, p.a, p.b), u.a.watch();
            let w = (() => {
                class t {
                    constructor(t) {
                        this.configurationService = t, this.altcoinName = "Juicycoin"
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.altcoinName) && (this.altcoinName = t.application.altcoinName)
                        }, t => console.log(t))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(d))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-token-sale"]
                    ],
                    decls: 117,
                    vars: 26,
                    consts: [
                        ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"],
                        ["fxFlexAlign", "center", 1, "whitepaper-container", "offer-container"],
                        [3, "innerHtml"],
                        [1, "divider"],
                        [1, "mat-elevation-z6"],
                        [2, "margin-left", "10px"],
                        ["translate", ""],
                        ["href", "https://ponzico.win/ponzico.pdf", "target", "_blank", "rel", "noopener noreferrer"],
                        ["mat-raised-button", "", "color", "accent"],
                        [1, "fas", "fa-university", "fa-lg"],
                        ["href", "https://www.sec.gov/investor/alerts/ia_virtualcurrencies.pdf", "target", "_blank", "rel", "noopener noreferrer"],
                        [1, "fas", "fa-graduation-cap", "fa-lg"],
                        [1, "offer-box"],
                        [1, "text-justify"],
                        [1, "fab", "fa-bitcoin"],
                        [1, "badge"],
                        ["fxFlexAlign.lt-md", "center", 1, "faq-container"],
                        ["translate", "", 1, "title"],
                        [1, "fas", "fa-comments", "fa-2x"],
                        [1, "far", "fa-comment-alt", "fa-2x"],
                        [1, "far", "fa-comments", "fa-2x"],
                        [1, "fas", "fa-comment-alt", "fa-2x"],
                        [2, "margin-left", "10px", 3, "innerHtml"],
                        ["translate", "", 1, "text-justify"],
                        ["src", "assets/public/images/padding/56px.png"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card"), n.Vb(1, "div", 0), n.Vb(2, "div", 1), n.Vb(3, "mat-card-header"), n.Vb(4, "mat-card-title"), n.Ic(5), n.ic(6, "translate"), n.Ub(), n.Qb(7, "mat-card-subtitle", 2), n.ic(8, "translate"), n.Ub(), n.Qb(9, "div", 3), n.Vb(10, "mat-card", 4), n.Vb(11, "h4"), n.Ic(12), n.ic(13, "translate"), n.Vb(14, "small", 5), n.Ic(15, "("), n.Vb(16, "span", 6), n.Ic(17, "WHITEPAPER_REFERENCES"), n.Ub(), n.Ic(18, ")"), n.Ub(), n.Ub(), n.Vb(19, "div"), n.Vb(20, "a", 7), n.Vb(21, "button", 8), n.Qb(22, "i", 9), n.Ic(23, " PonzICO Whitepaper"), n.Ub(), n.Ub(), n.Vb(24, "a", 10), n.Vb(25, "button", 8), n.Qb(26, "i", 11), n.Ic(27, " PonziCoin Whitepaper"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Vb(28, "div", 12), n.Vb(29, "h3", 6), n.Ic(30, "SECTION_SALES_PITCH"), n.Ub(), n.Vb(31, "p", 13), n.Ic(32, " Lorem ipsum dolor sit amet "), n.Vb(33, "strong"), n.Qb(34, "i", 14), n.Ic(35), n.Ub(), n.Ic(36, ", consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "), n.Vb(37, "span", 6), n.Ic(38, "GIVE_US_ALL_YOUR_MONEY"), n.Ub(), n.Ic(39, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "), n.Vb(40, "span", 6), n.Ic(41, "GIVE_US_ALL_YOUR_MONEY"), n.Ub(), n.Ic(42, " Ut wisi enim ad minim veniam, quis "), n.Vb(43, "strong"), n.Qb(44, "i", 14), n.Ic(45), n.Ub(), n.Ic(46, " nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "), n.Vb(47, "span", 6), n.Ic(48, "GIVE_US_ALL_YOUR_MONEY"), n.Ub(), n.Ic(49, " Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "), n.Vb(50, "span", 6), n.Ic(51, "GIVE_US_ALL_YOUR_MONEY"), n.Ub(), n.Ic(52, " Duis autem vel eum "), n.Vb(53, "strong"), n.Qb(54, "i", 14), n.Ic(55), n.Ub(), n.Ic(56, " iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "), n.Vb(57, "span", 6), n.Ic(58, "GIVE_US_ALL_YOUR_MONEY"), n.Ub(), n.Ic(59, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. "), n.Vb(60, "span", 15), n.Qb(61, "i", 14), n.Ic(62), n.Ub(), n.Ic(63, " est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. "), n.Ub(), n.Ub(), n.Ub(), n.Vb(64, "div", 16), n.Vb(65, "mat-card-header"), n.Vb(66, "mat-card-title", 17), n.Ic(67, "ICO_FAQ"), n.Ub(), n.Ub(), n.Qb(68, "div", 3), n.Vb(69, "mat-card", 4), n.Vb(70, "h5"), n.Qb(71, "i", 18), n.Ic(72, " Stet "), n.Vb(73, "strong"), n.Qb(74, "i", 14), n.Ic(75), n.Ub(), n.Ic(76, " clita kasd gubergren?"), n.Ub(), n.Vb(77, "small", 13), n.Ic(78, " Stet clita kasd gubergren, no "), n.Vb(79, "strong"), n.Qb(80, "i", 14), n.Ic(81), n.Ub(), n.Ic(82, " sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "), n.Ub(), n.Ub(), n.Vb(83, "mat-card", 4), n.Vb(84, "h5"), n.Qb(85, "i", 19), n.Ic(86, " Consetetur sadipscing elitr?"), n.Ub(), n.Vb(87, "small", 13), n.Ic(88, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "), n.Vb(89, "strong"), n.Qb(90, "i", 14), n.Ic(91), n.Ub(), n.Ic(92, " diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "), n.Ub(), n.Ub(), n.Vb(93, "mat-card", 4), n.Vb(94, "h5"), n.Qb(95, "i", 20), n.Ic(96, " Hendrerit "), n.Vb(97, "strong"), n.Qb(98, "i", 14), n.Ic(99), n.Ub(), n.Ic(100, " in vulputate velit?"), n.Ub(), n.Vb(101, "small", 13), n.Ic(102, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "), n.Ub(), n.Ub(), n.Vb(103, "mat-card", 4), n.Vb(104, "h5"), n.Qb(105, "i", 21), n.Ic(106, " Justo duo dolores et ea rebum?"), n.Ub(), n.Vb(107, "small", 13), n.Ic(108, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "), n.Ub(), n.Ub(), n.Vb(109, "mat-card", 4), n.Vb(110, "h5"), n.Qb(111, "i", 18), n.Qb(112, "span", 22), n.ic(113, "translate"), n.Ub(), n.Vb(114, "small", 23), n.Ic(115, "ICO_FAQ_ANSWER"), n.Ub(), n.Ub(), n.Ub(), n.Qb(116, "img", 24), n.Ub(), n.Ub()), 2 & t && (n.Db(5), n.Kc(" ", n.jc(6, 12, "TITLE_TOKENSALE"), " "), n.Db(2), n.nc("innerHtml", n.kc(8, 14, "SECTION_ICO", n.sc(22, C, e.altcoinName)), n.zc), n.Db(5), n.Kc("", n.jc(13, 17, "SECTION_WHITEPAPER"), " "), n.Db(23), n.Kc(" ", e.altcoinName, ""), n.Db(10), n.Kc(" ", e.altcoinName, ""), n.Db(10), n.Kc(" ", e.altcoinName, ""), n.Db(7), n.Kc(" ", e.altcoinName, ""), n.Db(13), n.Kc(" ", e.altcoinName, ""), n.Db(6), n.Kc(" ", e.altcoinName, ""), n.Db(10), n.Kc(" ", e.altcoinName, ""), n.Db(8), n.Kc(" ", e.altcoinName, ""), n.Db(13), n.nc("innerHtml", n.kc(113, 19, "ICO_FAQ_QUESTION", n.sc(24, C, e.altcoinName)), n.zc))
                    },
                    directives: [g.a, f.d, f.e, f.a, g.c, g.g, g.f, v.a, I.a],
                    pipes: [v.d],
                    styles: [".container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);margin-bottom:10px;padding:12px 20px}.whitepaper-container.offer-container[_ngcontent-%COMP%]{max-width:700px;min-width:400px;width:70%}.faq-container[_ngcontent-%COMP%]{max-width:500px;min-width:200px;width:70%}a[_ngcontent-%COMP%]:first-child{padding-right:10px}.title[_ngcontent-%COMP%]{padding-bottom:27px}.divider[_ngcontent-%COMP%]{border:.5px solid #f2f2f2;margin-bottom:10px}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}mat-card[_ngcontent-%COMP%]:first-child{border-radius:5px;margin:0 auto;width:80%}"]
                }), t
            })();
            var U = i("XNiG");
            let y = (() => {
                class t {
                    constructor(t) {
                        this.http = t, this.isLoggedIn = new U.a, this.hostServer = ".", this.host = this.hostServer + "/api/Users"
                    }
                    find(t) {
                        return this.http.get(this.hostServer + "/rest/user/authentication-details/", {
                            params: t
                        }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    get(t) {
                        return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    login(t) {
                        return this.isLoggedIn.next(!0), this.http.post(this.hostServer + "/rest/user/login", t).pipe(Object(l.a)(t => t.authentication), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    getLoggedInState() {
                        return this.isLoggedIn.asObservable()
                    }
                    changePassword(t) {
                        return this.http.get(this.hostServer + "/rest/user/change-password?current=" + t.current + "&new=" + t.new + "&repeat=" + t.repeat).pipe(Object(l.a)(t => t.user), Object(b.a)(t => {
                            throw t.error
                        }))
                    }
                    resetPassword(t) {
                        return this.http.post(this.hostServer + "/rest/user/reset-password", t).pipe(Object(l.a)(t => t.user), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    whoAmI() {
                        return this.http.get(this.hostServer + "/rest/user/whoami").pipe(Object(l.a)(t => t.user), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    oauthLogin(t) {
                        return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + t)
                    }
                    saveLastLoginIp() {
                        return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe(Object(l.a)(t => t), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    deluxeStatus() {
                        return this.http.get(this.hostServer + "/rest/deluxe-membership").pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    upgradeToDeluxe(t, e) {
                        return this.http.post(this.hostServer + "/rest/deluxe-membership", {
                            paymentMode: t,
                            paymentId: e
                        }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(r.b))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var S = i("iInd");
            let D = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.cookieService = t, this.userService = e, this.router = i, this.route = a, this.ngZone = n
                    }
                    ngOnInit() {
                        var t = this;
                        this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe(t => {
                            const e = btoa(t.email.split("").reverse().join(""));
                            this.userService.save({
                                email: t.email,
                                password: e,
                                passwordRepeat: e
                            }).subscribe(() => {
                                this.login(t)
                            }, () => this.login(t))
                        }, e => {
                            this.invalidateSession(e), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/login"])
                            }))
                        })
                    }
                    login(t) {
                        var e = this;
                        this.userService.login({
                            email: t.email,
                            password: btoa(t.email.split("").reverse().join("")),
                            oauth: !0
                        }).subscribe(t => {
                            const i = new Date;
                            i.setHours(i.getHours() + 8), this.cookieService.put("token", t.token, {
                                expires: i
                            }), localStorage.setItem("token", t.token), sessionStorage.setItem("bid", t.bid), this.userService.isLoggedIn.next(!0), this.ngZone.run(Object(o.a)(function* () {
                                return yield e.router.navigate(["/"])
                            }))
                        }, t => {
                            this.invalidateSession(t), this.ngZone.run(Object(o.a)(function* () {
                                return yield e.router.navigate(["/login"])
                            }))
                        })
                    }
                    invalidateSession(t) {
                        console.log(t), this.cookieService.remove("token"), localStorage.removeItem("token"), sessionStorage.removeItem("bid")
                    }
                    parseRedirectUrlParams() {
                        const t = this.route.snapshot.data.params.substr(1).split("&"),
                            e = {};
                        for (let i = 0; i < t.length; i++) {
                            const a = t[i].split("=");
                            e[a[0]] = a[1]
                        }
                        return e
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(c.b), n.Pb(y), n.Pb(S.b), n.Pb(S.a), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-oauth"]
                    ],
                    decls: 9,
                    vars: 6,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "primary-notification"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "div"), n.Vb(3, "h3"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Vb(6, "div"), n.Ic(7), n.ic(8, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Jc(n.jc(5, 2, "TITLE_LOGIN")), n.Db(3), n.Jc(n.jc(8, 4, "CONFIRM_LOGGED_IN_VIA_OAUTH2")))
                    },
                    directives: [f.c, g.a],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:300px;width:35%}"]
                }), t
            })(),
                V = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.itemTotal = new U.a, this.host = this.hostServer + "/api/BasketItems"
                        }
                        find(t) {
                            return this.http.get(`${this.hostServer}/rest/basket/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        get(t) {
                            return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        put(t, e) {
                            return this.http.put(`${this.host}/${t}`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        del(t) {
                            return this.http.delete(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        checkout(t, e, i) {
                            return this.http.post(`${this.hostServer}/rest/basket/${t}/checkout`, {
                                couponData: e,
                                orderDetails: i
                            }).pipe(Object(l.a)(t => t.orderConfirmation), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        applyCoupon(t, e) {
                            return this.http.put(`${this.hostServer}/rest/basket/${t}/coupon/${e}`, {}).pipe(Object(l.a)(t => t.discount), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        updateNumberOfCartItems() {
                            this.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t => {
                                this.itemTotal.next(t.Products.reduce((t, e) => t + e.BasketItem.quantity, 0))
                            }, t => console.log(t))
                        }
                        getItemTotal() {
                            return this.itemTotal.asObservable()
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var O = i("BOF4");
            let _ = (() => {
                class t {
                    constructor(t, e) {
                        this.router = t, this.ngZone = e
                    }
                    canActivate() {
                        return !!localStorage.getItem("token") || (this.forbidRoute("UNAUTHORIZED_ACCESS_ERROR"), !1)
                    }
                    forbidRoute(t = "UNAUTHORIZED_PAGE_ACCESS_ERROR") {
                        var e = this;
                        this.ngZone.run(Object(o.a)(function* () {
                            return yield e.router.navigate(["403"], {
                                skipLocationChange: !0,
                                queryParams: {
                                    error: t
                                }
                            })
                        }))
                    }
                    tokenDecode() {
                        let t = null;
                        const e = localStorage.getItem("token");
                        if (e) try {
                            t = O(e)
                        } catch (i) {
                            console.log(i)
                        }
                        return t
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(S.b), n.Zb(n.B))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac
                }), t
            })(),
                P = (() => {
                    class t {
                        constructor(t) {
                            this.loginGuard = t
                        }
                        canActivate() {
                            const t = this.loginGuard.tokenDecode();
                            return !(!(null == t ? void 0 : t.data) || "admin" !== t.data.role) || (this.loginGuard.forbidRoute(), !1)
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(_))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                x = (() => {
                    class t {
                        constructor(t) {
                            this.loginGuard = t
                        }
                        canActivate() {
                            const t = this.loginGuard.tokenDecode();
                            return !(!(null == t ? void 0 : t.data) || "accounting" !== t.data.role) || (this.loginGuard.forbidRoute(), !1)
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(_))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })(),
                k = (() => {
                    class t {
                        constructor(t) {
                            this.loginGuard = t
                        }
                        isDeluxe() {
                            const t = this.loginGuard.tokenDecode();
                            return (null == t ? void 0 : t.data) && "deluxe" === t.data.role
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(_))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
            var T = i("zHaW");
            let A = (() => {
                class t {
                    constructor(t, e) {
                        this.translateService = t, this.snackBar = e
                    }
                    open(t, e) {
                        this.translateService.get(t).subscribe(t => {
                            this.snackBar.open(t, "X", {
                                duration: 5e3,
                                panelClass: e
                            })
                        }, () => {
                            this.snackBar.open(t, "X", {
                                duration: 5e3,
                                panelClass: e
                            })
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(v.e), n.Zb(T.a))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var L = i("OaSA"),
                E = i("SVse"),
                M = i("ura0");

            function R(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 19)
            }

            function N(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 20), n.Qb(1, "img", 21), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.oc("alt", t.name), n.nc("src", "assets/public/images/products/" + t.image, n.Bc)
                }
            }

            function B(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell", 20)
            }

            function G(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 19)
            }

            function F(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 22), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.name, " ")
                }
            }

            function j(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell", 23)
            }

            function H(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 19)
            }

            function Q(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 27), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc().dec(e.BasketItem.id)
                    }), n.Qb(1, "i", 28), n.Ub()
                }
            }

            function z(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 27), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc().inc(e.BasketItem.id)
                    }), n.Qb(1, "i", 29), n.Ub()
                }
            }

            function W(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 24), n.Gc(1, Q, 2, 0, "button", 25), n.Vb(2, "span", 26), n.Ic(3), n.Ub(), n.Gc(4, z, 2, 0, "button", 25), n.Ub()), 2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.Db(1), n.nc("ngIf", i.allowEdit), n.Db(2), n.Kc(" ", t.BasketItem.quantity, ""), n.Db(1), n.nc("ngIf", i.allowEdit)
                }
            }

            function K(t, e) {
                1 & t && (n.Vb(0, "mat-footer-cell", 30), n.Ic(1, "TOTAL"), n.Ub())
            }

            function q(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 19)
            }

            function $(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 31), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.price, "\xa4")
                }
            }

            function Y(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell", 32)
            }

            function J(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 19)
            }

            function Z(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 36), n.Vb(1, "button", 27), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).delete(i.BasketItem.id)
                    }), n.Qb(2, "i", 37), n.Ub(), n.Ub()
                }
            }

            function X(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell", 36)
            }

            function tt(t, e) {
                1 & t && (n.Tb(0, 33), n.Gc(1, J, 1, 0, "mat-header-cell", 2), n.Gc(2, Z, 3, 0, "mat-cell", 34), n.Gc(3, X, 1, 0, "mat-footer-cell", 35), n.Sb())
            }

            function et(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function it(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function at(t, e) {
                1 & t && n.Qb(0, "mat-footer-row", 39)
            }

            function nt(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Gc(1, at, 1, 0, "mat-footer-row", 38), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("matFooterRowDef", t.tableColumns)
                }
            }

            function ot(t, e) {
                if (1 & t && (n.Vb(0, "div", 40), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.Lc("", n.jc(2, 2, "LABEL_TOTAL_PRICE"), ": ", t.itemTotal, "\xa4")
                }
            }
            u.b.add(p.g, m.y, m.A), u.a.watch();
            let rt = (() => {
                class t {
                    constructor(t, e, i, a) {
                        this.deluxeGuard = t, this.basketService = e, this.userService = i, this.snackBarHelperService = a, this.allowEdit = !1, this.displayTotal = !1, this.totalPrice = !0, this.emitTotal = new n.o, this.emitProductCount = new n.o, this.tableColumns = ["image", "product", "quantity", "price"], this.dataSource = [], this.bonus = 0, this.itemTotal = 0
                    }
                    ngOnInit() {
                        this.allowEdit && !this.tableColumns.includes("remove") && this.tableColumns.push("remove"), this.load(), this.userService.whoAmI().subscribe(t => {
                            this.userEmail = t.email || "anonymous", this.userEmail = "(" + this.userEmail + ")"
                        }, t => console.log(t))
                    }
                    load() {
                        this.basketService.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t => {
                            this.isDeluxe() && t.Products.map(t => {
                                t.price = t.deluxePrice
                            }), this.dataSource = t.Products, this.itemTotal = t.Products.reduce((t, e) => t + e.price * e.BasketItem.quantity, 0), this.bonus = t.Products.reduce((t, e) => t + Math.round(e.price / 10) * e.BasketItem.quantity, 0), this.sendToParent(this.dataSource.length)
                        }, t => console.log(t))
                    }
                    delete(t) {
                        this.basketService.del(t).subscribe(() => {
                            this.load(), this.basketService.updateNumberOfCartItems()
                        }, t => console.log(t))
                    }
                    inc(t) {
                        this.addToQuantity(t, 1)
                    }
                    dec(t) {
                        this.addToQuantity(t, -1)
                    }
                    addToQuantity(t, e) {
                        this.basketService.get(t).subscribe(i => {
                            const a = i.quantity + e;
                            this.basketService.put(t, {
                                quantity: a < 1 ? 1 : a
                            }).subscribe(() => {
                                this.load(), this.basketService.updateNumberOfCartItems()
                            }, t => {
                                var e;
                                this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                            })
                        }, t => console.log(t))
                    }
                    sendToParent(t) {
                        this.emitTotal.emit([this.itemTotal, this.bonus]), this.emitProductCount.emit(t)
                    }
                    isDeluxe() {
                        return this.deluxeGuard.isDeluxe()
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(k), n.Pb(V), n.Pb(y), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-purchase-basket"]
                    ],
                    inputs: {
                        allowEdit: "allowEdit",
                        displayTotal: "displayTotal",
                        totalPrice: "totalPrice"
                    },
                    outputs: {
                        emitTotal: "emitTotal",
                        emitProductCount: "emitProductCount"
                    },
                    decls: 27,
                    vars: 10,
                    consts: [
                        [3, "dataSource"],
                        ["matColumnDef", "image"],
                        ["style", "display: none;", 4, "matHeaderCellDef"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matCellDef"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matFooterCellDef"],
                        ["matColumnDef", "product"],
                        ["fxFlex", "35%", "fxFlex.lt-md", "30%", "style", "font-size: initial;", 4, "matCellDef"],
                        ["fxFlex", "35%", "fxFlex.lt-md", "30%", 4, "matFooterCellDef"],
                        ["matColumnDef", "quantity"],
                        ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "content-align", 4, "matCellDef"],
                        ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "header-align", 4, "matFooterCellDef"],
                        ["matColumnDef", "price"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", "style", "font-size: initial;", 4, "matCellDef"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 4, "matFooterCellDef"],
                        ["matColumnDef", "remove", 4, "ngIf"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        [4, "ngIf"],
                        ["id", "price", 4, "ngIf"],
                        [2, "display", "none"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", 1, "content-align"],
                        [1, "img-responsive", "img-thumbnail", 3, "src", "alt"],
                        ["fxFlex", "35%", "fxFlex.lt-md", "30%", 2, "font-size", "initial"],
                        ["fxFlex", "35%", "fxFlex.lt-md", "30%"],
                        ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "content-align"],
                        ["mat-icon-button", "", 3, "click", 4, "ngIf"],
                        [2, "font-size", "initial"],
                        ["mat-icon-button", "", 3, "click"],
                        [1, "fas", "fa-minus-square"],
                        [1, "fas", "fa-plus-square"],
                        ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "header-align"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 2, "font-size", "initial"],
                        ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%"],
                        ["matColumnDef", "remove"],
                        ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matCellDef"],
                        ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matFooterCellDef"],
                        ["fxFlex", "10%", "fxFlex.lt-md", "15%"],
                        [1, "far", "fa-trash-alt"],
                        ["mat-footer-row", "", 4, "matFooterRowDef"],
                        ["mat-footer-row", ""],
                        ["id", "price"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "h1"), n.Ic(1), n.ic(2, "translate"), n.Vb(3, "small"), n.Ic(4), n.Ub(), n.Ub(), n.Vb(5, "mat-table", 0), n.Tb(6, 1), n.Gc(7, R, 1, 0, "mat-header-cell", 2), n.Gc(8, N, 2, 2, "mat-cell", 3), n.Gc(9, B, 1, 0, "mat-footer-cell", 4), n.Sb(), n.Tb(10, 5), n.Gc(11, G, 1, 0, "mat-header-cell", 2), n.Gc(12, F, 2, 1, "mat-cell", 6), n.Gc(13, j, 1, 0, "mat-footer-cell", 7), n.Sb(), n.Tb(14, 8), n.Gc(15, H, 1, 0, "mat-header-cell", 2), n.Gc(16, W, 5, 3, "mat-cell", 9), n.Gc(17, K, 2, 0, "mat-footer-cell", 10), n.Sb(), n.Tb(18, 11), n.Gc(19, q, 1, 0, "mat-header-cell", 2), n.Gc(20, $, 2, 1, "mat-cell", 12), n.Gc(21, Y, 1, 0, "mat-footer-cell", 13), n.Sb(), n.Gc(22, tt, 4, 0, "ng-container", 14), n.Gc(23, et, 1, 0, "mat-header-row", 15), n.Gc(24, it, 1, 0, "mat-row", 16), n.Gc(25, nt, 2, 1, "span", 17), n.Ub(), n.Gc(26, ot, 3, 4, "div", 18)), 2 & t && (n.Db(1), n.Kc(" ", n.jc(2, 8, "TITLE_BASKET"), " "), n.Db(3), n.Jc(e.userEmail), n.Db(1), n.nc("dataSource", e.dataSource), n.Db(17), n.nc("ngIf", e.allowEdit), n.Db(1), n.nc("matHeaderRowDef", e.tableColumns), n.Db(1), n.nc("matRowDefColumns", e.tableColumns), n.Db(1), n.nc("ngIf", e.displayTotal), n.Db(1), n.nc("ngIf", e.totalPrice))
                    },
                    directives: [L.n, L.c, L.i, L.b, L.e, E.l, L.k, L.m, L.h, L.a, M.b, f.b, L.d, I.a, L.j, L.l, L.g, L.f],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{height:auto;width:90px}mat-cell[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px;padding-left:10px;padding-right:10px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.content-align[_ngcontent-%COMP%]{display:flex;justify-content:center}#price[_ngcontent-%COMP%]{font-size:large;margin-top:30px;text-align:right;width:100%}"]
                }), t
            })();
            const ct = function (t) {
                return {
                    bonus: t
                }
            };
            u.b.add(m.d), u.a.watch();
            let st = (() => {
                class t {
                    constructor(t, e) {
                        this.router = t, this.ngZone = e, this.productCount = 0, this.bonus = 0
                    }
                    checkout() {
                        var t = this;
                        this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/address/select"])
                        }))
                    }
                    getProductCount(t) {
                        this.productCount = t
                    }
                    getBonusPoints(t) {
                        sessionStorage.setItem("itemTotal", t[0]), this.bonus = t[1]
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.b), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-basket"]
                    ],
                    decls: 8,
                    vars: 8,
                    consts: [
                        [1, "mat-elevation-z6"],
                        [3, "allowEdit", "emitTotal", "emitProductCount"],
                        ["id", "checkoutButton", "color", "primary", "mat-raised-button", "", 1, "checkout-button", 3, "disabled", "click"],
                        [1, "fas", "fa-cart-arrow-down"],
                        ["translate", "", 1, "hint", 3, "translateParams"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "app-purchase-basket", 1), n.dc("emitTotal", function (t) {
                            return e.getBonusPoints(t)
                        })("emitProductCount", function (t) {
                            return e.getProductCount(t)
                        }), n.Ub(), n.Vb(2, "button", 2), n.dc("click", function () {
                            return e.checkout()
                        }), n.Qb(3, "i", 3), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Vb(6, "div", 4), n.Ic(7, "CHECKOUT_FOR_BONUS_POINTS"), n.Ub(), n.Ub()), 2 & t && (n.Db(1), n.nc("allowEdit", !0), n.Db(1), n.nc("disabled", e.productCount < 1), n.Db(2), n.Kc(" ", n.jc(5, 4, "BTN_CHECKOUT"), " "), n.Db(2), n.nc("translateParams", n.sc(6, ct, e.bonus)))
                    },
                    directives: [g.a, rt, I.a, v.a],
                    pipes: [v.d],
                    styles: [".container[_ngcontent-%COMP%]{min-width:420px;width:40%}mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;padding:12px 20px}.mat-row[_ngcontent-%COMP%]{padding-bottom:10px}.mat-column-bonus[_ngcontent-%COMP%], .mat-column-description[_ngcontent-%COMP%], .mat-column-price[_ngcontent-%COMP%]{margin-left:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:22px}mat-form-field[_ngcontent-%COMP%]{margin-top:15px;width:100%}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:20px}#checkoutButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:center;margin-top:5px}.payment-label[_ngcontent-%COMP%]{padding-top:10px}"]
                }), t
            })(),
                lt = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/track-order"
                        }
                        find(t) {
                            return t = encodeURIComponent(t), this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function bt(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 27), n.Ub())
            }

            function dt(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 28), n.Ub())
            }

            function ut(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 29), n.Ub())
            }

            function ht(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 30), n.Ub())
            }

            function mt(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 31), n.Ub())
            }

            function pt(t, e) {
                1 & t && (n.Vb(0, "span"), n.Qb(1, "i", 32), n.Ub())
            }

            function gt(t, e) {
                if (1 & t && (n.Vb(0, "span", 33), n.Vb(1, "span"), n.Qb(2, "i", 34), n.Ub(), n.Vb(3, "span", 35), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Lc("", t.results.eta, " ", n.jc(5, 2, "LABEL_DAYS"), "")
                }
            }

            function ft(t, e) {
                if (1 & t && (n.Vb(0, "span", 33), n.Vb(1, "span"), n.Qb(2, "i", 36), n.Ub(), n.Vb(3, "span", 35), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Lc("", t.results.eta, " ", n.jc(5, 2, "LABEL_DAYS"), "")
                }
            }

            function vt(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 1), n.Ic(1, "LABEL_PRODUCT"), n.Ub())
            }

            function It(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 37), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.name, "")
                }
            }

            function Ct(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 38), n.Ic(1, "LABEL_PRICE"), n.Ub())
            }

            function wt(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 39), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.price, "\xa4")
                }
            }

            function Ut(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 1), n.Ic(1, "LABEL_QUANTITY"), n.Ub())
            }

            function yt(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 40), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.quantity, "")
                }
            }

            function St(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 1), n.Ic(1, "LABEL_TOTAL_PRICE"), n.Ub())
            }

            function Dt(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 41), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.total, "\xa4")
                }
            }

            function Vt(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Ot(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }
            const _t = function (t) {
                return {
                    bonus: t
                }
            };
            u.b.add(m.hb, m.M, m.X, m.W, m.t), u.a.watch();
            var Pt = function (t) {
                return t[t.New = 0] = "New", t[t.Packing = 1] = "Packing", t[t.Transit = 2] = "Transit", t[t.Delivered = 3] = "Delivered", t
            }({});
            let xt = (() => {
                class t {
                    constructor(t, e, i) {
                        this.route = t, this.trackOrderService = e, this.sanitizer = i, this.displayedColumns = ["product", "price", "quantity", "total price"], this.dataSource = new L.o, this.results = {}, this.status = Pt.New, this.Status = Pt
                    }
                    ngOnInit() {
                        this.orderId = this.route.snapshot.queryParams.id, this.trackOrderService.find(this.orderId).subscribe(t => {
                            this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${t.data[0].orderId}</code>`), this.results.email = t.data[0].email, this.results.totalPrice = t.data[0].totalPrice, this.results.products = t.data[0].products, this.results.eta = void 0 !== t.data[0].eta ? t.data[0].eta : "?", this.results.bonus = t.data[0].bonus, this.dataSource.data = this.results.products, this.status = t.data[0].delivered ? Pt.Delivered : this.route.snapshot.data.type ? Pt.New : this.results.eta > 2 ? Pt.Packing : Pt.Transit
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.a), n.Pb(lt), n.Pb(a.c))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-track-result"]
                    ],
                    decls: 48,
                    vars: 18,
                    consts: [
                        [1, "mat-elevation-z6", "mat-own-card"],
                        ["translate", ""],
                        [3, "innerHtml"],
                        [2, "text-align", "center"],
                        [1, "container-fluid", "well"],
                        [1, "row", "fa-4x"],
                        [4, "ngIf"],
                        ["class", "fa-layers fa-fw", 4, "ngIf"],
                        ["fxLayoutAlign", "center", 1, "table-wrapper"],
                        [1, "table-heading", "heading"],
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z0", 3, "dataSource"],
                        ["table", ""],
                        ["matColumnDef", "product"],
                        ["translate", "", 4, "matHeaderCellDef"],
                        ["class", "product-name", 4, "matCellDef"],
                        ["matColumnDef", "price"],
                        ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"],
                        ["class", "product-price", "fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"],
                        ["matColumnDef", "quantity"],
                        ["class", "product-quantity", 4, "matCellDef"],
                        ["matColumnDef", "total price"],
                        ["class", "product-total", 4, "matCellDef"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        [1, "bonus-container"],
                        ["translate", "", 3, "translateParams"],
                        [1, "fas", "fa-warehouse", "confirmation"],
                        [1, "fas", "fa-warehouse"],
                        [1, "fas", "fa-truck-loading", "confirmation"],
                        [1, "fas", "fa-truck-loading"],
                        [1, "fas", "fa-truck", "confirmation"],
                        [1, "fas", "fa-truck"],
                        [1, "fa-layers", "fa-fw"],
                        [1, "fas", "fa-home", "confirmation"],
                        [1, "fa-layers-counter", "accent-notification", 2, "width", "max-content"],
                        [1, "fas", "fa-home"],
                        [1, "product-name"],
                        ["fxShow", "", "fxHide.lt-md", "", "translate", ""],
                        ["fxShow", "", "fxHide.lt-md", "", 1, "product-price"],
                        [1, "product-quantity"],
                        [1, "product-total"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1"), n.Vb(2, "span", 1), n.Ic(3, "TITLE_SEARCH_RESULTS"), n.Ub(), n.Ic(4, " - "), n.Qb(5, "span", 2), n.Ub(), n.Vb(6, "div", 3), n.Vb(7, "h3", 1), n.Ic(8, "LABEL_EXPECTED_DELIVERY"), n.Ub(), n.Vb(9, "div", 4), n.Vb(10, "div", 5), n.Gc(11, bt, 2, 0, "span", 6), n.Gc(12, dt, 2, 0, "span", 6), n.Gc(13, ut, 2, 0, "span", 6), n.Gc(14, ht, 2, 0, "span", 6), n.Gc(15, mt, 2, 0, "span", 6), n.Gc(16, pt, 2, 0, "span", 6), n.Gc(17, gt, 6, 4, "span", 7), n.Gc(18, ft, 6, 4, "span", 7), n.Ub(), n.Ub(), n.Ub(), n.Vb(19, "div", 8), n.Vb(20, "div", 9), n.Vb(21, "h2", 1), n.Ic(22, "LABEL_PRODUCT_ORDERED"), n.Ub(), n.Ub(), n.Ub(), n.Vb(23, "div", 10), n.Vb(24, "mat-table", 11, 12), n.Tb(26, 13), n.Gc(27, vt, 2, 0, "mat-header-cell", 14), n.Gc(28, It, 2, 1, "mat-cell", 15), n.Sb(), n.Tb(29, 16), n.Gc(30, Ct, 2, 0, "mat-header-cell", 17), n.Gc(31, wt, 2, 1, "mat-cell", 18), n.Sb(), n.Tb(32, 19), n.Gc(33, Ut, 2, 0, "mat-header-cell", 14), n.Gc(34, yt, 2, 1, "mat-cell", 20), n.Sb(), n.Tb(35, 21), n.Gc(36, St, 2, 0, "mat-header-cell", 14), n.Gc(37, Dt, 2, 1, "mat-cell", 22), n.Sb(), n.Gc(38, Vt, 1, 0, "mat-header-row", 23), n.Gc(39, Ot, 1, 0, "mat-row", 24), n.Ub(), n.Ub(), n.Vb(40, "div", 25), n.Vb(41, "h2", 26), n.Ic(42, "BONUS_POINTS_EARNED"), n.Ub(), n.Vb(43, "p"), n.Ic(44, "("), n.Qb(45, "span", 2), n.ic(46, "translate"), n.Ic(47, ")"), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(5), n.nc("innerHtml", e.results.orderNo, n.zc), n.Db(6), n.nc("ngIf", e.status === e.Status.New), n.Db(1), n.nc("ngIf", e.status !== e.Status.New), n.Db(1), n.nc("ngIf", e.status === e.Status.Packing), n.Db(1), n.nc("ngIf", e.status !== e.Status.Packing), n.Db(1), n.nc("ngIf", e.status === e.Status.Transit), n.Db(1), n.nc("ngIf", e.status !== e.Status.Transit), n.Db(1), n.nc("ngIf", e.status === e.Status.Delivered), n.Db(1), n.nc("ngIf", e.status !== e.Status.Delivered), n.Db(6), n.nc("dataSource", e.dataSource), n.Db(14), n.nc("matHeaderRowDef", e.displayedColumns), n.Db(1), n.nc("matRowDefColumns", e.displayedColumns), n.Db(2), n.nc("translateParams", n.sc(16, _t, e.results.bonus)), n.Db(4), n.nc("innerHtml", n.jc(46, 14, "BONUS_FOR_FUTURE_PURCHASES"), n.zc))
                    },
                    directives: [g.a, v.a, E.l, f.c, L.n, L.c, L.i, L.b, L.k, L.m, L.h, L.a, M.b, L.j, L.l],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%], .table-heading[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{width:90%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);height:35px;justify-content:center;padding:0 20px}.product-name[_ngcontent-%COMP%]{margin-right:25px}.table-wrapper[_ngcontent-%COMP%]{margin-top:30px}.table-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.row.fa-4x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.bonus-container[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;margin-top:10px;place-content:stretch center}.bonus-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0}"]
                }), t
            })(),
                kt = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Feedbacks"
                        }
                        find(t) {
                            return this.http.get(this.host + "/", {
                                params: t
                            }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        del(t) {
                            return this.http.delete(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Tt = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/captcha"
                        }
                        getCaptcha() {
                            return this.http.get(this.host + "/").pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                At = (() => {
                    class t {
                        constructor(t) {
                            this._document = t
                        }
                        attachEnterKeyHandler(t, e, i) {
                            const a = this._document.getElementById(t),
                                n = this._document.getElementById(e);
                            a.addEventListener("keyup", function (t) {
                                t.preventDefault(), 13 !== t.keyCode || n.disabled || i()
                            })
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(E.d))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var Lt = i("Q2Ze"),
                Et = i("e6WT"),
                Mt = i("mPVK");

            function Rt(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_COMMENT "), n.Ub())
            }

            function Nt(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_CAPTCHA "), n.Ub())
            }

            function Bt(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "INVALID_CAPTCHA "), n.Ub())
            }
            const Gt = function () {
                return {
                    length: "160"
                }
            };
            u.b.add(m.K, m.z), u.a.watch();
            let Ft = (() => {
                class t {
                    constructor(t, e, i, a, n, o) {
                        this.userService = t, this.captchaService = e, this.feedbackService = i, this.formSubmitService = a, this.translate = n, this.snackBarHelperService = o, this.authorControl = new s.e({
                            value: "",
                            disabled: !0
                        }, []), this.feedbackControl = new s.e("", [s.z.required, s.z.maxLength(160)]), this.captchaControl = new s.e("", [s.z.required, s.z.pattern("-?[\\d]*")]), this.userIdControl = new s.e("", []), this.rating = 0, this.feedback = void 0
                    }
                    ngOnInit() {
                        this.userService.whoAmI().subscribe(t => {
                            this.feedback = {}, this.userIdControl.setValue(t.id), this.feedback.UserId = t.id, this.authorControl.setValue(t.email ? `***${t.email.slice(3)}` : "anonymous")
                        }, t => {
                            this.feedback = void 0, console.log(t)
                        }), this.getNewCaptcha(), this.formSubmitService.attachEnterKeyHandler("feedback-form", "submitButton", () => this.save())
                    }
                    getNewCaptcha() {
                        this.captchaService.getCaptcha().subscribe(t => {
                            this.captcha = t.captcha, this.captchaId = t.captchaId
                        }, t => t)
                    }
                    save() {
                        this.feedback.captchaId = this.captchaId, this.feedback.captcha = this.captchaControl.value, this.feedback.comment = `${this.feedbackControl.value} (${this.authorControl.value})`, this.feedback.rating = this.rating, this.feedback.UserId = this.userIdControl.value, this.feedbackService.save(this.feedback).subscribe(t => {
                            5 === t.rating ? this.translate.get("FEEDBACK_FIVE_STAR_THANK_YOU").subscribe(t => {
                                this.snackBarHelperService.open(t)
                            }, t => {
                                this.snackBarHelperService.open(t)
                            }) : this.translate.get("FEEDBACK_THANK_YOU").subscribe(t => {
                                this.snackBarHelperService.open(t)
                            }, t => {
                                this.snackBarHelperService.open(t)
                            }), this.feedback = {}, this.ngOnInit(), this.resetForm()
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.feedback = {}, this.resetCaptcha()
                        })
                    }
                    resetForm() {
                        this.authorControl.markAsUntouched(), this.authorControl.markAsPristine(), this.authorControl.setValue(""), this.feedbackControl.markAsUntouched(), this.feedbackControl.markAsPristine(), this.feedbackControl.setValue(""), this.rating = 0, this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                    }
                    resetCaptcha() {
                        this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                    }
                    formatRating(t) {
                        return `${t}\u2605`
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(y), n.Pb(Tt), n.Pb(kt), n.Pb(At), n.Pb(v.e), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-contact"]
                    ],
                    decls: 52,
                    vars: 26,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        ["id", "feedback-form", 1, "form-container"],
                        ["hidden", "", "type", "text", "id", "userId", 3, "formControl"],
                        ["appearance", "outline", "color", "accent"],
                        ["matInput", "", "type", "text", "aria-label", "Field with the name of the author", 3, "formControl"],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["id", "comment", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "aria-label", "Field for entering the comment or the feedback", 3, "formControl", "placeholder"],
                        ["comment", ""],
                        ["align", "end"],
                        ["translate", "", 4, "ngIf"],
                        [1, "rating-container"],
                        ["translate", "", 2, "font-weight", "500", "margin-right", "8px", "float", "left"],
                        ["id", "rating", "min", "1", "max", "5", "thumbLabel", "", "tickInterval", "1", "aria-label", "Slider for selecting the star rating", 3, "value", "displayWith", "valueChange"],
                        [2, "margin-bottom", "10px", "margin-top", "10px"],
                        [2, "font-weight", "500"],
                        ["translate", "", 2, "font-size", "small"],
                        ["id", "captcha", "aria-label", "CAPTCHA code which must be solved"],
                        [2, "font-size", "small"],
                        ["id", "captchaControl", "matInput", "", "type", "text", "aria-label", "Field for the result of the CAPTCHA code", "pattern", "-?[\\d]*", 3, "formControl", "placeholder"],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the review", 3, "disabled", "click"],
                        [1, "material-icons"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "SECTION_CUSTOMER_FEEDBACK"), n.Ub(), n.Vb(4, "div", 3), n.Qb(5, "input", 4), n.Vb(6, "mat-form-field", 5), n.Vb(7, "mat-label", 2), n.Ic(8, "LABEL_AUTHOR"), n.Ub(), n.Qb(9, "input", 6), n.Ub(), n.Vb(10, "mat-form-field", 5), n.Vb(11, "mat-label", 2), n.Ic(12, "LABEL_COMMENT"), n.Ub(), n.Vb(13, "mat-hint", 2), n.Qb(14, "i", 7), n.Vb(15, "em", 8), n.Ic(16), n.ic(17, "translate"), n.Ub(), n.Ub(), n.Qb(18, "textarea", 9, 10), n.ic(20, "translate"), n.Vb(21, "mat-hint", 11), n.Ic(22), n.Ub(), n.Gc(23, Rt, 2, 0, "mat-error", 12), n.Ub(), n.Vb(24, "div", 13), n.Vb(25, "label", 14), n.Ic(26, "LABEL_RATING"), n.Ub(), n.Vb(27, "mat-slider", 15), n.dc("valueChange", function (t) {
                            return e.rating = t
                        }), n.Ub(), n.Ub(), n.Vb(28, "div", 16), n.Vb(29, "label", 17), n.Ic(30, "CAPTCHA:"), n.Ub(), n.Ic(31, "\xa0\xa0"), n.Vb(32, "span", 18), n.Ic(33, "LABEL_WHAT_IS"), n.Ub(), n.Ic(34, "\xa0 "), n.Vb(35, "code", 19), n.Ic(36), n.Ub(), n.Ic(37, "\xa0"), n.Vb(38, "label", 20), n.Ic(39, "?"), n.Ub(), n.Ub(), n.Vb(40, "mat-form-field", 5), n.Vb(41, "mat-label", 2), n.Ic(42, "LABEL_RESULT"), n.Ub(), n.Qb(43, "input", 21), n.ic(44, "translate"), n.Gc(45, Nt, 2, 0, "mat-error", 12), n.Gc(46, Bt, 2, 0, "mat-error", 12), n.Ub(), n.Ub(), n.Vb(47, "button", 22), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(48, "i", 23), n.Ic(49, " send "), n.Ub(), n.Ic(50), n.ic(51, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(19);
                            n.Db(5), n.nc("formControl", e.userIdControl), n.Db(4), n.nc("formControl", e.authorControl), n.Db(7), n.Jc(n.kc(17, 16, "MAX_TEXTAREA_LENGTH", n.rc(25, Gt))), n.Db(2), n.oc("placeholder", n.jc(20, 19, "WRITE_REVIEW_PLACEHOLDER")), n.nc("formControl", e.feedbackControl), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/160"), n.Db(1), n.nc("ngIf", e.feedbackControl.invalid && e.feedbackControl.errors.required), n.Db(4), n.nc("value", e.rating)("displayWith", e.formatRating), n.Db(9), n.Jc(e.captcha), n.Db(7), n.oc("placeholder", n.jc(44, 21, "MANDATORY_CAPTCHA")), n.nc("formControl", e.captchaControl), n.Db(2), n.nc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required), n.Db(1), n.nc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.pattern), n.Db(1), n.nc("disabled", e.authorControl.invalid || e.feedbackControl.invalid || e.captchaControl.invalid || !e.rating), n.Db(3), n.Kc(" ", n.jc(51, 23, "BTN_SUBMIT"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, s.d, s.p, s.f, Lt.c, Lt.g, Et.b, Lt.f, Et.d, s.k, E.l, Mt.a, s.v, I.a, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.rating-container[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px}.star[_ngcontent-%COMP%]{color:#c8c8c8}.active[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{color:gold}[_nghost-%COMP%]     .br{margin:0!important}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                }), t
            })();
            var jt = i("5VOe");

            function Ht(t, e) {
                if (1 & t && (n.Vb(0, "a", 14), n.Vb(1, "button", 15), n.Qb(2, "i", 16), n.Ic(3, " Twitter"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("href", t.twitterUrl, n.Bc)
                }
            }

            function Qt(t, e) {
                if (1 & t && (n.Vb(0, "a", 17), n.Vb(1, "button", 15), n.Qb(2, "i", 18), n.Ic(3, " Facebook"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("href", t.facebookUrl, n.Bc)
                }
            }

            function zt(t, e) {
                if (1 & t && (n.Vb(0, "a", 19), n.Vb(1, "button", 15), n.Qb(2, "i", 20), n.Ic(3, " Slack"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("href", t.slackUrl, n.Bc)
                }
            }

            function Wt(t, e) {
                if (1 & t && (n.Vb(0, "a", 21), n.Vb(1, "button", 15), n.Qb(2, "i", 22), n.Ic(3, " Reddit"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("href", t.redditUrl, n.Bc)
                }
            }

            function Kt(t, e) {
                if (1 & t && (n.Vb(0, "a", 23), n.Vb(1, "button", 15), n.Qb(2, "i", 24), n.Ic(3, " Press Kit"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("href", t.pressKitUrl, n.Bc)
                }
            }

            function qt(t, e) {
                if (1 & t && (n.Vb(0, "div", 8), n.Vb(1, "h3"), n.Vb(2, "span", 3), n.Ic(3, "SECTION_SOCIAL_MEDIA"), n.Ub(), n.Ub(), n.Gc(4, Ht, 4, 1, "a", 9), n.Gc(5, Qt, 4, 1, "a", 10), n.Gc(6, zt, 4, 1, "a", 11), n.Gc(7, Wt, 4, 1, "a", 12), n.Gc(8, Kt, 4, 1, "a", 13), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.nc("ngIf", t.twitterUrl), n.Db(1), n.nc("ngIf", t.facebookUrl), n.Db(1), n.nc("ngIf", t.slackUrl), n.Db(1), n.nc("ngIf", t.redditUrl), n.Db(1), n.nc("ngIf", t.pressKitUrl)
                }
            }
            u.b.add(h.c, h.k, h.i, h.h, p.e, p.f, m.K), u.a.watch();
            let $t = (() => {
                class t {
                    constructor(t, e, i) {
                        this.configurationService = t, this.feedbackService = e, this.sanitizer = i, this.slideshowDataSource = [], this.images = ["assets/public/images/carousel/1.jpg", "assets/public/images/carousel/2.jpg", "assets/public/images/carousel/3.jpg", "assets/public/images/carousel/4.jpg", "assets/public/images/carousel/5.png", "assets/public/images/carousel/6.jpg", "assets/public/images/carousel/7.jpg"], this.stars = [null, '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>']
                    }
                    ngOnInit() {
                        this.populateSlideshowFromFeedbacks(), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.social) && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl), t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl), t.application.social.slackUrl && (this.slackUrl = t.application.social.slackUrl), t.application.social.redditUrl && (this.redditUrl = t.application.social.redditUrl), t.application.social.pressKitUrl && (this.pressKitUrl = t.application.social.pressKitUrl))
                        }, t => console.log(t))
                    }
                    populateSlideshowFromFeedbacks() {
                        this.feedbackService.find().subscribe(t => {
                            for (let e = 0; e < t.length; e++) t[e].comment = `<span style="width: 90%; display:block;">${t[e].comment}<br/> (${this.stars[t[e].rating]})</span>`, t[e].comment = this.sanitizer.bypassSecurityTrustHtml(t[e].comment), this.slideshowDataSource.push({
                                url: this.images[e % this.images.length],
                                caption: t[e].comment
                            })
                        }, t => {
                            console.log(t)
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(d), n.Pb(kt), n.Pb(a.c))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-about"]
                    ],
                    decls: 17,
                    vars: 7,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        [1, "about-us"],
                        ["translate", ""],
                        [1, "text-justify"],
                        ["href", "ftp/legal.md", "aria-label", "Link to the Terms of Use", "translate", ""],
                        [3, "height", "autoPlay", "arrowSize", "showArrows", "showDots", "imageUrls"],
                        ["class", "social", 4, "ngIf"],
                        [1, "social"],
                        ["target", "_blank", "rel", "noopener noreferrer", "style", "margin-left: 0px;", "aria-label", "Button for the Twitter page of the shop", 3, "href", 4, "ngIf"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href", 4, "ngIf"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href", 4, "ngIf"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href", 4, "ngIf"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href", 4, "ngIf"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Twitter page of the shop", 2, "margin-left", "0px", 3, "href"],
                        ["mat-raised-button", "", "color", "accent"],
                        [1, "fab", "fa-twitter", "fa-lg"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href"],
                        [1, "fab", "fa-facebook", "fa-lg"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href"],
                        [1, "fab", "fa-slack", "fa-lg"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href"],
                        [1, "fab", "fa-reddit", "fa-lg"],
                        ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href"],
                        [1, "far", "fa-newspaper", "fa-lg"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "section", 2), n.Vb(3, "h1", 3), n.Ic(4, "TITLE_ABOUT"), n.Ub(), n.Vb(5, "h3", 3), n.Ic(6, "SECTION_CORPORATE_HISTORY"), n.Ub(), n.Vb(7, "p", 4), n.Ic(8, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "), n.Vb(9, "a", 5), n.Ic(10, "LINK_TERMS_OF_USE"), n.Ub(), n.Ic(11, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. "), n.Ub(), n.Vb(12, "h3"), n.Vb(13, "span", 3), n.Ic(14, "SECTION_CUSTOMER_FEEDBACK"), n.Ub(), n.Ub(), n.Qb(15, "slideshow", 6), n.Gc(16, qt, 9, 5, "div", 7), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(15), n.nc("height", "300px")("autoPlay", !0)("arrowSize", "10px")("showArrows", !0)("showDots", !1)("imageUrls", e.slideshowDataSource), n.Db(1), n.nc("ngIf", e.twitterUrl || e.facebookUrl))
                    },
                    directives: [f.c, g.a, v.a, jt.b, E.l, I.a],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:30px;margin-left:auto;margin-right:auto;width:80%}.about-us[_ngcontent-%COMP%]{margin-left:8.33333%;margin-right:8.33333%;width:83.3333%}.social[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:5px}.text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}"]
                }), t
            })(),
                Yt = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/SecurityAnswers"
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Jt = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/SecurityQuestions"
                        }
                        find(t) {
                            return this.http.get(this.host + "/", {
                                params: t
                            }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        findBy(t) {
                            return this.http.get(this.hostServer + "/rest/user/security-question?email=" + t).pipe(Object(l.a)(t => t.question), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var Zt = i("jMqV"),
                Xt = i("sOue"),
                te = i("ZTz/"),
                ee = i("UhP/");

            function ie(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_EMAIL"), n.Ub())
            }

            function ae(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "INVALID_EMAIL"), n.Ub())
            }

            function ne(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_PASSWORD "), n.Ub())
            }
            const oe = function () {
                return {
                    length: "5-40"
                }
            };

            function re(t, e) {
                1 & t && (n.Vb(0, "mat-error", 30), n.Ic(1, "INVALID_PASSWORD_LENGTH "), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, oe))
            }

            function ce(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_PASSWORD_REPEAT "), n.Ub())
            }

            function se(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " PASSWORDS_NOT_MATCHING "), n.Ub())
            }
            const le = function () {
                return {
                    value: 8
                }
            };

            function be(t, e) {
                if (1 & t && (n.Qb(0, "mat-password-strength-info", 31), n.ic(1, "translate"), n.ic(2, "translate"), n.ic(3, "translate"), n.ic(4, "translate"), n.ic(5, "translate")), 2 & t) {
                    n.hc();
                    const t = n.vc(41);
                    n.nc("passwordComponent", t)("lowerCaseCriteriaMsg", n.jc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", n.jc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", n.jc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", n.jc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", n.kc(5, 14, "MIN_CHARS_CRITERIA_MSG", n.rc(17, le)))
                }
            }

            function de(t, e) {
                if (1 & t && (n.Vb(0, "mat-option", 32), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.nc("value", t.id), n.Db(1), n.Kc(" ", t.question, " ")
                }
            }

            function ue(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_SECURITY_QUESTION "), n.Ub())
            }

            function he(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_SECURITY_ANSWER "), n.Ub())
            }
            u.b.add(m.eb, m.l), u.a.watch();
            let me = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c, l) {
                        var b;
                        this.securityQuestionService = t, this.userService = e, this.securityAnswerService = i, this.router = a, this.formSubmitService = n, this.translateService = o, this.snackBar = r, this.snackBarHelperService = c, this.ngZone = l, this.emailControl = new s.e("", [s.z.required, s.z.email]), this.passwordControl = new s.e("", [s.z.required, s.z.minLength(5), s.z.maxLength(40)]), this.repeatPasswordControl = new s.e("", [s.z.required, (b = this.passwordControl, function (t) {
                            return b.value !== t.value ? {
                                notSame: !0
                            } : null
                        })]), this.securityQuestionControl = new s.e("", [s.z.required]), this.securityAnswerControl = new s.e("", [s.z.required]), this.error = null
                    }
                    ngOnInit() {
                        this.securityQuestionService.find(null).subscribe(t => {
                            this.securityQuestions = t
                        }, t => console.log(t)), this.formSubmitService.attachEnterKeyHandler("registration-form", "registerButton", () => this.save())
                    }
                    save() {
                        var t = this;
                        const e = {
                            email: this.emailControl.value,
                            password: this.passwordControl.value,
                            passwordRepeat: this.repeatPasswordControl.value,
                            securityQuestion: this.securityQuestions.find(t => t.id === this.securityQuestionControl.value),
                            securityAnswer: this.securityAnswerControl.value
                        };
                        this.userService.save(e).subscribe(e => {
                            this.securityAnswerService.save({
                                UserId: e.id,
                                answer: this.securityAnswerControl.value,
                                SecurityQuestionId: this.securityQuestionControl.value
                            }).subscribe(() => {
                                this.ngZone.run(Object(o.a)(function* () {
                                    return yield t.router.navigate(["/login"])
                                })), this.snackBarHelperService.open("CONFIRM_REGISTER")
                            })
                        }, t => {
                            var e;
                            if (console.log(t), null === (e = t.error) || void 0 === e ? void 0 : e.errors) {
                                const e = t.error.errors[0];
                                this.error = e.message ? e.message[0].toUpperCase() + e.message.slice(1) : e
                            }
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Jt), n.Pb(y), n.Pb(Yt), n.Pb(S.b), n.Pb(At), n.Pb(v.e), n.Pb(T.a), n.Pb(A), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-register"]
                    ],
                    decls: 69,
                    vars: 39,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        ["ng-if", "error", 1, "error"],
                        ["id", "registration-form", 1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["id", "emailControl", "type", "text", "matInput", "", "aria-label", "Email address field", 3, "formControl", "focus"],
                        ["translate", "", 4, "ngIf"],
                        ["id", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field for the password", 3, "formControl", "focus"],
                        ["password", ""],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["align", "end"],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        ["id", "repeatPasswordControl", "type", "password", "matInput", "", "aria-label", "Field to confirm the password", 3, "formControl", "focus"],
                        ["repeatPassword", ""],
                        [3, "color"],
                        ["passwordInfoToggle", ""],
                        [3, "password"],
                        ["passwordStrength", ""],
                        [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"],
                        [1, "security-container"],
                        ["color", "accent", "appearance", "outline"],
                        ["placeholder", "", "name", "securityQuestion", "aria-label", "Selection list for the security question", 3, "formControl", "value", "valueChange", "focus"],
                        [3, "value", 4, "ngFor", "ngForOf"],
                        ["id", "securityAnswerControl", "type", "text", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder", "focus"],
                        ["type", "submit", "id", "registerButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the registration", 3, "disabled", "click"],
                        [1, "material-icons"],
                        ["id", "alreadyACustomerLink"],
                        ["routerLink", "/login", "translate", "", 1, "primary-link"],
                        ["translate", "", 3, "translateParams"],
                        [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"],
                        [3, "value"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_REGISTRATION"), n.Ub(), n.Vb(4, "div", 3), n.Ic(5), n.Ub(), n.Vb(6, "div", 4), n.Vb(7, "mat-form-field", 5), n.Vb(8, "mat-label", 2), n.Ic(9, "LABEL_EMAIL"), n.Ub(), n.Vb(10, "input", 6), n.dc("focus", function () {
                            return e.error = null
                        }), n.Ub(), n.Gc(11, ie, 2, 0, "mat-error", 7), n.Gc(12, ae, 2, 0, "mat-error", 7), n.Ub(), n.Vb(13, "mat-form-field", 5), n.Vb(14, "mat-label", 2), n.Ic(15, "LABEL_PASSWORD"), n.Ub(), n.Vb(16, "input", 8, 9), n.dc("focus", function () {
                            return e.error = null
                        }), n.Ub(), n.Vb(18, "mat-hint", 2), n.Qb(19, "i", 10), n.Vb(20, "em", 11), n.Ic(21), n.ic(22, "translate"), n.Ub(), n.Ub(), n.Vb(23, "mat-hint", 12), n.Ic(24), n.Ub(), n.Gc(25, ne, 2, 0, "mat-error", 7), n.Gc(26, re, 2, 2, "mat-error", 13), n.Ub(), n.Vb(27, "mat-form-field", 5), n.Vb(28, "mat-label", 2), n.Ic(29, "LABEL_PASSWORD_REPEAT"), n.Ub(), n.Vb(30, "input", 14, 15), n.dc("focus", function () {
                            return e.error = null
                        }), n.Ub(), n.Vb(32, "mat-hint", 12), n.Ic(33), n.Ub(), n.Gc(34, ce, 2, 0, "mat-error", 7), n.Gc(35, se, 2, 0, "mat-error", 7), n.Ub(), n.Vb(36, "mat-slide-toggle", 16, 17), n.Ic(38), n.ic(39, "translate"), n.Ub(), n.Qb(40, "mat-password-strength", 18, 19), n.Gc(42, be, 6, 18, "mat-password-strength-info", 20), n.Vb(43, "div", 21), n.Vb(44, "mat-form-field", 22), n.Vb(45, "mat-label"), n.Ic(46), n.ic(47, "translate"), n.Ub(), n.Vb(48, "mat-select", 23), n.dc("valueChange", function (t) {
                            return e.selected = t
                        })("focus", function () {
                            return e.error = null
                        }), n.Gc(49, de, 2, 2, "mat-option", 24), n.Ub(), n.Vb(50, "mat-hint", 2), n.Qb(51, "i", 10), n.Vb(52, "em", 11), n.Ic(53, "CANNOT_BE_CHANGED_LATER"), n.Ub(), n.Ub(), n.Gc(54, ue, 2, 0, "mat-error", 7), n.Ub(), n.Vb(55, "mat-form-field", 5), n.Vb(56, "mat-label", 2), n.Ic(57, "SECURITY_ANSWER"), n.Ub(), n.Vb(58, "input", 25), n.dc("focus", function () {
                            return e.error = null
                        }), n.ic(59, "translate"), n.Ub(), n.Gc(60, he, 2, 0, "mat-error", 7), n.Ub(), n.Ub(), n.Vb(61, "button", 26), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(62, "i", 27), n.Ic(63, " person_add "), n.Ub(), n.Ic(64), n.ic(65, "translate"), n.Ub(), n.Vb(66, "div", 28), n.Vb(67, "a", 29), n.Ic(68, "ALREADY_A_CUSTOMER"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(17),
                                i = n.vc(31),
                                a = n.vc(37),
                                o = n.vc(41);
                            n.Db(5), n.Jc(e.error), n.Db(5), n.nc("formControl", e.emailControl), n.Db(1), n.nc("ngIf", e.emailControl.invalid && e.emailControl.errors.required), n.Db(1), n.nc("ngIf", e.emailControl.invalid && e.emailControl.errors.email), n.Db(4), n.nc("formControl", e.passwordControl), n.Db(5), n.Jc(n.kc(22, 27, "INVALID_PASSWORD_LENGTH", n.rc(38, oe))), n.Db(3), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/20"), n.Db(1), n.nc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required), n.Db(1), n.nc("ngIf", e.passwordControl.invalid && (e.passwordControl.errors.minlength || e.passwordControl.errors.maxlength)), n.Db(4), n.nc("formControl", e.repeatPasswordControl), n.Db(3), n.Kc("", (null == i.value ? null : i.value.length) || 0, "/40"), n.Db(1), n.nc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required), n.Db(1), n.nc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame), n.Db(1), n.nc("color", o.color), n.Db(2), n.Jc(n.jc(39, 30, "SHOW_PASSWORD_ADVICE")), n.Db(2), n.nc("password", t.value), n.Db(2), n.nc("ngIf", a.checked), n.Db(4), n.Kc(" ", n.jc(47, 32, "LABEL_SECURITY_QUESTION"), " "), n.Db(2), n.nc("formControl", e.securityQuestionControl)("value", e.selected), n.Db(1), n.nc("ngForOf", e.securityQuestions), n.Db(5), n.nc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required), n.Db(4), n.nc("formControl", e.securityAnswerControl)("placeholder", n.jc(59, 34, "SECURITY_ANSWER_PLACEHOLDER")), n.Db(2), n.nc("ngIf", e.securityAnswerControl.invalid && e.securityAnswerControl.errors.required), n.Db(1), n.nc("disabled", e.emailControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.securityQuestionControl.invalid || e.securityAnswerControl.invalid), n.Db(3), n.Kc(" ", n.jc(65, 36, "BTN_REGISTER"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, E.l, Lt.f, Zt.a, Xt.a, te.a, E.k, I.a, S.d, Lt.b, Xt.b, ee.k],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#registerButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#alreadyACustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}.security-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}  mat-option .mat-option-text{font-size:14px}"]
                }), t
            })();
            var pe = i("Tj54"),
                ge = i("ZFy/");

            function fe(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_EMAIL"), n.Ub())
            }

            function ve(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "INVALID_EMAIL"), n.Ub())
            }

            function Ie(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_SECURITY_ANSWER "), n.Ub())
            }

            function Ce(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_NEW_PASSWORD "), n.Ub())
            }

            function we(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_PASSWORD_REPEAT "), n.Ub())
            }

            function Ue(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " PASSWORDS_NOT_MATCHING "), n.Ub())
            }
            const ye = function () {
                return {
                    length: "5-40"
                }
            };

            function Se(t, e) {
                1 & t && (n.Vb(0, "mat-error", 28), n.Ic(1, "INVALID_PASSWORD_LENGTH "), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, ye))
            }
            const De = function () {
                return {
                    value: 8
                }
            };

            function Ve(t, e) {
                if (1 & t && (n.Qb(0, "mat-password-strength-info", 29), n.ic(1, "translate"), n.ic(2, "translate"), n.ic(3, "translate"), n.ic(4, "translate"), n.ic(5, "translate")), 2 & t) {
                    n.hc();
                    const t = n.vc(55);
                    n.nc("passwordComponent", t)("lowerCaseCriteriaMsg", n.jc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", n.jc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", n.jc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", n.jc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", n.kc(5, 14, "MIN_CHARS_CRITERIA_MSG", n.rc(17, De)))
                }
            }
            u.b.add(m.E, p.c), u.a.watch();
            let Oe = (() => {
                class t {
                    constructor(t, e, i) {
                        var a;
                        this.securityQuestionService = t, this.userService = e, this.translate = i, this.emailControl = new s.e("", [s.z.required, s.z.email]), this.securityQuestionControl = new s.e({
                            disabled: !0,
                            value: ""
                        }, [s.z.required]), this.passwordControl = new s.e({
                            disabled: !0,
                            value: ""
                        }, [s.z.required, s.z.minLength(5)]), this.repeatPasswordControl = new s.e({
                            disabled: !0,
                            value: ""
                        }, [s.z.required, (a = this.passwordControl, function (t) {
                            return a.value !== t.value ? {
                                notSame: !0
                            } : null
                        })]), this.timeoutDuration = 1e3
                    }
                    findSecurityQuestion() {
                        clearTimeout(this.timeout), this.timeout = setTimeout(() => {
                            this.securityQuestion = void 0, this.emailControl.value ? this.securityQuestionService.findBy(this.emailControl.value).subscribe(t => {
                                t ? (this.securityQuestion = t.question, this.securityQuestionControl.enable(), this.passwordControl.enable(), this.repeatPasswordControl.enable()) : (this.securityQuestionControl.disable(), this.passwordControl.disable(), this.repeatPasswordControl.disable())
                            }, t => t) : (this.securityQuestionControl.disable(), this.passwordControl.disable(), this.repeatPasswordControl.disable())
                        }, this.timeoutDuration)
                    }
                    resetPassword() {
                        this.userService.resetPassword({
                            email: this.emailControl.value,
                            answer: this.securityQuestionControl.value,
                            new: this.passwordControl.value,
                            repeat: this.repeatPasswordControl.value
                        }).subscribe(() => {
                            this.error = void 0, this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t => {
                                this.confirmation = t
                            }, t => {
                                this.confirmation = t
                            }), this.resetForm()
                        }, t => {
                            this.error = t.error, this.confirmation = void 0, this.resetErrorForm()
                        })
                    }
                    resetForm() {
                        this.emailControl.setValue(""), this.emailControl.markAsPristine(), this.emailControl.markAsUntouched(), this.securityQuestionControl.setValue(""), this.securityQuestionControl.markAsPristine(), this.securityQuestionControl.markAsUntouched(), this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.repeatPasswordControl.setValue(""), this.repeatPasswordControl.markAsPristine(), this.repeatPasswordControl.markAsUntouched()
                    }
                    resetErrorForm() {
                        this.emailControl.markAsPristine(), this.emailControl.markAsUntouched(), this.securityQuestionControl.setValue(""), this.securityQuestionControl.markAsPristine(), this.securityQuestionControl.markAsUntouched(), this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.repeatPasswordControl.setValue(""), this.repeatPasswordControl.markAsPristine(), this.repeatPasswordControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Jt), n.Pb(y), n.Pb(v.e))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-forgot-password"]
                    ],
                    decls: 61,
                    vars: 39,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        [1, "confirmation", 3, "hidden"],
                        [1, "error", 3, "hidden"],
                        [1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["id", "email", "type", "email", "matInput", "", "placeholder", "Enter your email", "aria-label", "Email address field", 3, "formControl", "ngModelChange"],
                        ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please enter your email address to proceed", 3, "matTooltip"],
                        ["translate", "", 4, "ngIf"],
                        ["id", "forgot-form", 1, "form-container"],
                        ["id", "securityAnswer", "type", "password", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder"],
                        ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please answer your selected security question", 3, "matTooltip"],
                        ["id", "newPassword", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field for New Password", 3, "formControl"],
                        ["password", ""],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["align", "end"],
                        ["id", "newPasswordRepeat", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field to confirm the new password", 3, "formControl"],
                        ["repeatPassword", ""],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        [3, "color"],
                        ["passwordInfoToggle", ""],
                        [3, "password"],
                        ["passwordStrength", ""],
                        [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"],
                        ["type", "submit", "id", "resetButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the changes", 3, "disabled", "click"],
                        ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"],
                        ["translate", "", 3, "translateParams"],
                        [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_FORGOT_PASSWORD"), n.Ub(), n.Vb(4, "div", 3), n.Ic(5), n.Ub(), n.Vb(6, "div", 4), n.Ic(7), n.Ub(), n.Vb(8, "div", 5), n.Vb(9, "mat-form-field", 6), n.Vb(10, "mat-label", 2), n.Ic(11, "LABEL_EMAIL"), n.Ub(), n.Vb(12, "input", 7), n.dc("ngModelChange", function () {
                            return e.findSecurityQuestion()
                        }), n.Ub(), n.Vb(13, "mat-icon", 8), n.ic(14, "translate"), n.Ic(15, "help_outline "), n.Ub(), n.Gc(16, fe, 2, 0, "mat-error", 9), n.Gc(17, ve, 2, 0, "mat-error", 9), n.Ub(), n.Ub(), n.Vb(18, "div", 10), n.Vb(19, "mat-form-field", 6), n.Vb(20, "mat-label", 2), n.Ic(21, "LABEL_SECURITY_QUESTION"), n.Ub(), n.Qb(22, "input", 11), n.Vb(23, "mat-icon", 12), n.ic(24, "translate"), n.Ic(25, "help_outline "), n.Ub(), n.Gc(26, Ie, 2, 0, "mat-error", 9), n.Ub(), n.Vb(27, "mat-form-field", 6), n.Vb(28, "mat-label", 2), n.Ic(29, "LABEL_NEW_PASSWORD"), n.Ub(), n.Qb(30, "input", 13, 14), n.Vb(32, "mat-hint", 2), n.Qb(33, "i", 15), n.Vb(34, "em", 16), n.Ic(35), n.ic(36, "translate"), n.Ub(), n.Ub(), n.Vb(37, "mat-hint", 17), n.Ic(38), n.Ub(), n.Gc(39, Ce, 2, 0, "mat-error", 9), n.Ub(), n.Vb(40, "mat-form-field", 6), n.Vb(41, "mat-label", 2), n.Ic(42, "LABEL_REPEAT_NEW_PASSWORD"), n.Ub(), n.Qb(43, "input", 18, 19), n.Vb(45, "mat-hint", 17), n.Ic(46), n.Ub(), n.Gc(47, we, 2, 0, "mat-error", 9), n.Gc(48, Ue, 2, 0, "mat-error", 9), n.Gc(49, Se, 2, 2, "mat-error", 20), n.Ub(), n.Vb(50, "mat-slide-toggle", 21, 22), n.Ic(52), n.ic(53, "translate"), n.Ub(), n.Qb(54, "mat-password-strength", 23, 24), n.Gc(56, Ve, 6, 18, "mat-password-strength-info", 25), n.Ub(), n.Vb(57, "button", 26), n.dc("click", function () {
                            return e.resetPassword()
                        }), n.Qb(58, "i", 27), n.Ic(59), n.ic(60, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(31),
                                i = n.vc(44),
                                a = n.vc(51),
                                o = n.vc(55);
                            n.Db(4), n.nc("hidden", !(e.confirmation && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)), n.Db(1), n.Kc(" ", e.confirmation, " "), n.Db(1), n.nc("hidden", !(e.error && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)), n.Db(1), n.Kc(" ", e.error, " "), n.Db(5), n.nc("formControl", e.emailControl), n.Db(1), n.oc("matTooltip", n.jc(14, 27, "MANDATORY_EMAIL")), n.Db(3), n.nc("ngIf", e.emailControl.invalid && e.emailControl.errors.required), n.Db(1), n.nc("ngIf", e.emailControl.invalid && e.emailControl.errors.email), n.Db(5), n.oc("placeholder", e.securityQuestion), n.nc("formControl", e.securityQuestionControl), n.Db(1), n.oc("matTooltip", n.jc(24, 29, "MANDATORY_SECURITY_ANSWER")), n.Db(3), n.nc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required), n.Db(4), n.nc("formControl", e.passwordControl), n.Db(5), n.Jc(n.kc(36, 31, "INVALID_PASSWORD_LENGTH", n.rc(38, ye))), n.Db(3), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/20"), n.Db(1), n.nc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required), n.Db(4), n.nc("formControl", e.repeatPasswordControl), n.Db(3), n.Kc("", (null == i.value ? null : i.value.length) || 0, "/20"), n.Db(1), n.nc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required), n.Db(1), n.nc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame), n.Db(1), n.nc("ngIf", e.repeatPasswordControl.invalid && ((null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.minlength) || (null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.maxlength))), n.Db(1), n.nc("color", o.color), n.Db(2), n.Jc(n.jc(53, 34, "SHOW_PASSWORD_ADVICE")), n.Db(2), n.nc("password", t.value), n.Db(2), n.nc("ngIf", a.checked), n.Db(1), n.nc("disabled", e.emailControl.invalid || e.securityQuestionControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.repeatPasswordControl.disabled), n.Db(2), n.Kc(" ", n.jc(60, 36, "BTN_CHANGE"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, pe.a, Lt.h, ge.a, E.l, Lt.f, Zt.a, Xt.a, I.a, Lt.b, Xt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:30px;width:60%}"]
                }), t
            })();
            var _e = i("iELJ");
            let Pe = (() => {
                class t {
                    constructor(t) {
                        this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/products"
                    }
                    get(t) {
                        return this.http.get(`${this.host}/${t}/reviews`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    create(t, e) {
                        return this.http.put(`${this.host}/${t}/reviews`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    patch(t) {
                        return this.http.patch(this.host + "/reviews", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    like(t) {
                        return this.http.post(this.host + "/reviews", {
                            id: t
                        }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(r.b))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();

            function xe(t, e) {
                1 & t && (n.Vb(0, "mat-error", 1), n.Ic(1, "MANDATORY_REVIEW"), n.Ub())
            }
            u.b.add(m.z, m.b), u.a.watch();
            let ke = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.data = t, this.productReviewService = e, this.dialogRef = i, this.snackBar = a, this.snackBarHelperService = n, this.editReviewControl = new s.e("", [s.z.required, s.z.minLength(1), s.z.maxLength(160)]), this.error = null
                    }
                    ngOnInit() {
                        this.editReviewControl.setValue(this.data.reviewData.message)
                    }
                    editReview() {
                        this.productReviewService.patch({
                            id: this.data.reviewData._id,
                            message: this.editReviewControl.value
                        }).subscribe(() => {
                            this.dialogRef.close()
                        }, t => {
                            console.log(t), this.error = t
                        }), this.snackBarHelperService.open("CONFIRM_CHANGES_SAVED")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.a), n.Pb(Pe), n.Pb(_e.g), n.Pb(T.a), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-product-review-edit"]
                    ],
                    decls: 27,
                    vars: 13,
                    consts: [
                        ["fxLayout", "column", 1, "container", "mat-typography"],
                        ["translate", ""],
                        ["appearance", "outline", "color", "accent", "hintLabel", "Max 160 characters", "floatLabel", "always"],
                        ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to edit a product review", 3, "formControl", "placeholder", "focus"],
                        ["textPut", ""],
                        ["align", "end"],
                        ["translate", "", 4, "ngIf"],
                        ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog"],
                        [1, "material-icons"],
                        ["type", "submit", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 2, "margin-left", "5px", 3, "disabled", "click"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "mat-dialog-content"), n.Vb(1, "div", 0), n.Vb(2, "h1", 1), n.Ic(3, "LABEL_EDIT_REVIEW"), n.Ub(), n.Vb(4, "div"), n.Vb(5, "mat-form-field", 2), n.Vb(6, "mat-label", 1), n.Ic(7, "LABEL_REVIEW"), n.Ub(), n.Vb(8, "textarea", 3, 4), n.dc("focus", function () {
                            return e.error = null
                        }), n.ic(10, "translate"), n.Ub(), n.Vb(11, "mat-hint", 5), n.Ic(12), n.Ub(), n.Gc(13, xe, 2, 0, "mat-error", 6), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Vb(14, "mat-dialog-actions", 5), n.Vb(15, "button", 7), n.Vb(16, "i", 8), n.Ic(17, " close "), n.Ub(), n.Vb(18, "span"), n.Ic(19), n.ic(20, "translate"), n.Ub(), n.Ub(), n.Vb(21, "button", 9), n.dc("click", function () {
                            return e.editReview()
                        }), n.Vb(22, "i", 8), n.Ic(23, " send "), n.Ub(), n.Vb(24, "span"), n.Ic(25), n.ic(26, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(9);
                            n.Db(8), n.oc("placeholder", n.jc(10, 7, "WRITE_REVIEW_PLACEHOLDER")), n.nc("formControl", e.editReviewControl), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/160"), n.Db(1), n.nc("ngIf", e.editReviewControl.invalid), n.Db(6), n.Kc(" ", n.jc(20, 9, "BTN_CLOSE"), ""), n.Db(2), n.nc("disabled", e.editReviewControl.invalid), n.Db(4), n.Kc(" ", n.jc(26, 11, "BTN_SUBMIT"), "")
                        }
                    },
                    directives: [_e.e, f.d, v.a, Lt.c, Lt.g, Et.b, Et.d, s.d, s.k, s.p, s.f, Lt.f, E.l, _e.c, I.a, _e.d, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"]
                }), t
            })();
            var Te = i("BSbQ"),
                Ae = i("o4Yh");

            function Le(t, e) {
                if (1 & t && (n.Vb(0, "div", 24), n.ic(1, "translate"), n.Vb(2, "span", 25), n.Qb(3, "i", 26), n.Vb(4, "span", 27), n.Ic(5), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.oc("matTooltip", n.jc(1, 2, "LABEL_BONUS")), n.Db(5), n.Jc(t.data.productData.points)
                }
            }

            function Ee(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div", 29), n.Vb(1, "div", 30), n.Vb(2, "div", 31), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit,
                            a = n.hc(2);
                        return "Anonymous" !== i.author && i.author === a.author && a.editReview(i)
                    }), n.ic(3, "translate"), n.Vb(4, "cite"), n.Ic(5), n.Ub(), n.Vb(6, "p"), n.Ic(7), n.Ub(), n.Ub(), n.Vb(8, "div"), n.Vb(9, "button", 32), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).likeReview(i)
                    }), n.Vb(10, "span", 25), n.Vb(11, "mat-icon"), n.Ic(12, "thumb_up"), n.Ub(), n.Vb(13, "span", 33), n.Ic(14), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(2), n.oc("matTooltipDisabled", t.author !== i.author), n.oc("matTooltip", n.jc(3, 6, "LABEL_EDIT_REVIEW")), n.Db(3), n.Jc(t.author), n.Db(2), n.Jc(t.message), n.Db(2), n.nc("disabled", t.liked || !i.isLoggedIn()), n.Db(5), n.Jc(t.likesCount)
                }
            }

            function Me(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Gc(1, Ee, 15, 8, "div", 28), n.ic(2, "async"), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("ngForOf", n.jc(2, 1, t.reviews$))
                }
            }

            function Re(t, e) {
                1 & t && (n.Vb(0, "div"), n.Vb(1, "span", 34), n.Ic(2, " EMPTY_REVIEW_LIST "), n.Ub(), n.Ub())
            }
            const Ne = function () {
                return {
                    length: "160"
                }
            };
            u.b.add(m.z, m.b, m.db, m.S, m.k), u.a.watch();
            let Be = (() => {
                class t {
                    constructor(t, e, i, a, n, o) {
                        this.dialog = t, this.data = e, this.productReviewService = i, this.userService = a, this.snackBar = n, this.snackBarHelperService = o, this.author = "Anonymous", this.reviewControl = new s.e("", [s.z.maxLength(160)])
                    }
                    ngOnInit() {
                        this.data.productData.points = Math.round(this.data.productData.price / 10), this.reviews$ = this.productReviewService.get(this.data.productData.id), this.userSubscription = this.userService.whoAmI().subscribe(t => {
                            this.author = (null == t ? void 0 : t.email) ? t.email : "Anonymous"
                        }, t => console.log(t))
                    }
                    ngOnDestroy() {
                        this.userSubscription && this.userSubscription.unsubscribe()
                    }
                    addReview(t) {
                        const e = {
                            message: t.value,
                            author: this.author
                        };
                        t.value = "", this.productReviewService.create(this.data.productData.id, e).subscribe(() => {
                            this.reviews$ = this.productReviewService.get(this.data.productData.id)
                        }, t => console.log(t)), this.snackBarHelperService.open("CONFIRM_REVIEW_SAVED")
                    }
                    editReview(t) {
                        this.dialog.open(ke, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                reviewData: t
                            }
                        }).afterClosed().subscribe(() => this.reviews$ = this.productReviewService.get(this.data.productData.id))
                    }
                    likeReview(t) {
                        this.productReviewService.like(t._id).subscribe(() => {
                            console.log("Liked " + t._id)
                        }), setTimeout(() => this.reviews$ = this.productReviewService.get(this.data.productData.id), 200)
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.b), n.Pb(_e.a), n.Pb(Pe), n.Pb(y), n.Pb(T.a), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-product-details"]
                    ],
                    decls: 59,
                    vars: 36,
                    consts: [
                        ["fxLayout", "column", 1, "container", "mat-typography"],
                        ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px"],
                        ["fxFlex", "noshrink"],
                        [1, "img-thumbnail", 3, "src", "alt"],
                        [3, "innerHTML"],
                        [1, "item-price"],
                        ["aria-label", "Bonus points when buying the product", 3, "matTooltip", 4, "ngIf"],
                        [1, "detail-divider"],
                        ["mat-button", "", 2, "height", "0", "position", "absolute"],
                        ["aria-label", "Expand for Reviews", 1, "mat-elevation-z0"],
                        ["translate", "", 2, "margin-right", "5px"],
                        [4, "ngIf", "ngIfElse"],
                        ["emptyResult", ""],
                        ["translate", ""],
                        ["appearance", "outline", "color", "accent", "floatLabel", "always"],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["cols", "50", "matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to review a product", 3, "formControl", "placeholder"],
                        ["textPut", ""],
                        ["align", "end"],
                        ["align", "end", 1, "dialogAction"],
                        ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"],
                        [1, "material-icons"],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 1, "buttons", 2, "margin-bottom", "5px", "margin-top", "5px", "margin-left", "5px", 3, "disabled", "click"],
                        ["aria-label", "Bonus points when buying the product", 3, "matTooltip"],
                        [1, "fa-2x", "fa-layers", "fa-fw"],
                        [1, "fas", "fa-crown"],
                        [1, "fa-layers-counter", "fa-layers-bottom-left", "fa-2x", "warn-notification", 2, "font-size", "47px"],
                        ["class", "comment", 4, "ngFor", "ngForOf"],
                        [1, "comment"],
                        ["fxLayout", "row"],
                        ["matTooltipPosition", "right", 1, "review-text", 3, "matTooltipDisabled", "matTooltip", "click"],
                        ["mat-icon-button", "", "aria-label", "Rate a helpful review", 1, "rw-button", 3, "disabled", "click"],
                        [1, "fa-layers-counter", "fa-layers-bottom-right", "accent-notification", 2, "font-size", "32px"],
                        ["translate", "", 1, "noResultText"]
                    ],
                    template: function (t, e) {
                        if (1 & t) {
                            const t = n.Wb();
                            n.Vb(0, "mat-dialog-content"), n.Vb(1, "div", 0), n.Vb(2, "div", 1), n.Vb(3, "div", 2), n.Qb(4, "img", 3), n.Ub(), n.Vb(5, "div"), n.Vb(6, "h1"), n.Ic(7), n.Ub(), n.Qb(8, "div", 4), n.Qb(9, "br"), n.Vb(10, "div"), n.Vb(11, "p", 5), n.Ic(12), n.Ub(), n.Gc(13, Le, 6, 4, "div", 6), n.Ub(), n.Ub(), n.Ub(), n.Qb(14, "mat-divider", 7), n.Qb(15, "button", 8), n.Vb(16, "mat-expansion-panel", 9), n.Vb(17, "mat-expansion-panel-header"), n.Vb(18, "mat-panel-title"), n.Vb(19, "span", 10), n.Ic(20, "LABEL_REVIEWS"), n.Ub(), n.Vb(21, "span"), n.Ic(22), n.ic(23, "async"), n.Ub(), n.Ub(), n.Ub(), n.Qb(24, "button", 8), n.Gc(25, Me, 3, 3, "div", 11), n.ic(26, "async"), n.Gc(27, Re, 3, 0, "ng-template", null, 12, n.Hc), n.Ub(), n.Vb(29, "div"), n.Qb(30, "mat-divider", 7), n.Vb(31, "h4", 13), n.Ic(32, "WRITE_REVIEW"), n.Ub(), n.Vb(33, "mat-form-field", 14), n.Vb(34, "mat-label", 13), n.Ic(35, "LABEL_REVIEW"), n.Ub(), n.Vb(36, "mat-hint", 13), n.Qb(37, "i", 15), n.Vb(38, "em", 16), n.Ic(39), n.ic(40, "translate"), n.Ub(), n.Ub(), n.Qb(41, "textarea", 17, 18), n.ic(43, "translate"), n.Vb(44, "mat-hint", 19), n.Ic(45), n.Ub(), n.Ub(), n.Vb(46, "mat-dialog-actions", 20), n.Vb(47, "button", 21), n.Vb(48, "i", 22), n.Ic(49, " close "), n.Ub(), n.Vb(50, "span"), n.Ic(51), n.ic(52, "translate"), n.Ub(), n.Ub(), n.Vb(53, "button", 23), n.dc("click", function () {
                                n.yc(t);
                                const i = n.vc(42);
                                return e.addReview(i)
                            }), n.Vb(54, "i", 22), n.Ic(55, " send "), n.Ub(), n.Vb(56, "span"), n.Ic(57), n.ic(58, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                        }
                        if (2 & t) {
                            const t = n.vc(28),
                                i = n.vc(42);
                            let a = null,
                                o = null;
                            n.Db(4), n.oc("alt", e.data.productData.name), n.nc("src", "assets/public/images/products/" + e.data.productData.image, n.Bc), n.Db(3), n.Jc(e.data.productData.name), n.Db(1), n.nc("innerHTML", e.data.productData.description, n.zc), n.Db(4), n.Kc("", e.data.productData.price, "\xa4"), n.Db(1), n.nc("ngIf", e.data.productData.points > 0), n.Db(9), n.Kc("(", null == (a = n.jc(23, 22, e.reviews$)) ? null : a.length, ")"), n.Db(3), n.nc("ngIf", (null == (o = n.jc(26, 24, e.reviews$)) ? null : o.length) >= 1)("ngIfElse", t), n.Db(6), n.Dc("display", e.isLoggedIn() ? "block" : "none"), n.Db(2), n.Dc("display", e.isLoggedIn() ? "block" : "none"), n.Db(6), n.Jc(n.kc(40, 26, "MAX_TEXTAREA_LENGTH", n.rc(35, Ne))), n.Db(2), n.oc("placeholder", n.jc(43, 29, "WRITE_REVIEW_PLACEHOLDER")), n.nc("formControl", e.reviewControl), n.Db(4), n.Kc("", (null == i.value ? null : i.value.length) || 0, "/160"), n.Db(6), n.Kc(" ", n.jc(52, 31, "BTN_CLOSE"), ""), n.Db(2), n.Dc("display", e.isLoggedIn() ? "block" : "none"), n.nc("disabled", !i.value.trim()), n.Db(4), n.Kc(" ", n.jc(58, 33, "BTN_SUBMIT"), " ")
                        }
                    },
                    directives: [_e.e, f.d, f.e, f.b, E.l, Te.a, I.a, Ae.b, Ae.d, Ae.e, v.a, Lt.c, Lt.g, Lt.f, Et.b, Et.d, s.d, s.k, s.p, s.f, _e.c, _e.d, ge.a, E.k, pe.a],
                    pipes: [E.b, v.d],
                    styles: [".img-thumbnail[_ngcontent-%COMP%]{height:auto;max-width:100%;padding:0;width:200px}mat-form-field[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{word-break:break-all}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){left:530px;width:50px}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.rw-button[_ngcontent-%COMP%]{margin-left:8px}.comment[_ngcontent-%COMP%]{margin-bottom:8px}.review-link[_ngcontent-%COMP%]{font-size:11px;margin-top:-10px;text-decoration:none}#submitButton[_ngcontent-%COMP%]{float:right}.item-price[_ngcontent-%COMP%]{float:left;margin-right:40px;margin-top:8px}.noResultText[_ngcontent-%COMP%]{display:block;font-size:small;margin-left:auto;margin-right:auto;text-align:center}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}.buttons[_ngcontent-%COMP%]{padding-left:13px;padding-right:13px}"]
                }), t
            })(),
                Ge = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Products"
                        }
                        search(t) {
                            return this.http.get(`${this.hostServer}/rest/products/search?q=${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        find(t) {
                            return this.http.get(this.host + "/", {
                                params: t
                            }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        get(t) {
                            return this.http.get(`${this.host}/${t}?d=${encodeURIComponent((new Date).toDateString())}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        put(t, e) {
                            return this.http.put(`${this.host}/${t}`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var Fe = i("5QHs"),
                je = i("cp0P"),
                He = i("jifJ");
            let Qe = (() => {
                class t {
                    constructor(t) {
                        this.ngZone = t, this.ngZone.runOutsideAngular(() => {
                            this._socket = Object(He.io)(window.location.origin, {
                                path: (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname + "/") + "socket.io"
                            })
                        })
                    }
                    socket() {
                        return this._socket
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(n.B))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })(),
                ze = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Quantitys"
                        }
                        getAll() {
                            return this.http.get(this.host + "/").pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        put(t, e) {
                            return this.http.put(`${this.host}/${t}`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var We = i("40+f");

            function Ke(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Vb(1, "span"), n.Ic(2), n.ic(3, "translate"), n.Ub(), n.Qb(4, "span", 9), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(2), n.Kc("", n.jc(3, 2, "TITLE_SEARCH_RESULTS"), " - "), n.Db(2), n.nc("innerHTML", t.searchValue, n.zc)
                }
            }

            function qe(t, e) {
                1 & t && (n.Vb(0, "div"), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Jc(n.jc(2, 1, "TITLE_ALL_PRODUCTS")))
            }
            const $e = function (t) {
                return {
                    quantity: t
                }
            };

            function Ye(t, e) {
                if (1 & t && (n.Vb(0, "div", 24), n.Vb(1, "span", 25), n.Ic(2, "LABEL_ONLY_QUANTITY_LEFT"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit;
                    n.Db(1), n.nc("translateParams", n.sc(1, $e, t.quantity))
                }
            }

            function Je(t, e) {
                1 & t && (n.Vb(0, "div", 26), n.Vb(1, "span", 27), n.Ic(2, "LABEL_SOLD_OUT"), n.Ub(), n.Ub())
            }

            function Ze(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit;
                    n.Db(1), n.Kc("", t.price, "\xa4")
                }
            }

            function Xe(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Vb(1, "s"), n.Ic(2), n.Ub(), n.Ic(3), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit;
                    n.Db(2), n.Jc(t.price), n.Db(1), n.Kc(" ", t.deluxePrice, "\xa4")
                }
            }

            function ti(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 28), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc(2).addToBasket(e.id)
                    }), n.Vb(1, "span", 27), n.Ic(2, "ADD_BASKET"), n.Ub(), n.Ub()
                }
            }

            function ei(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-grid-tile"), n.Vb(1, "mat-card", 13), n.Gc(2, Ye, 3, 3, "div", 14), n.Gc(3, Je, 3, 0, "div", 15), n.Vb(4, "div", 16), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).showDetail(i)
                    }), n.Vb(5, "div", 17), n.Qb(6, "img", 18), n.Ub(), n.Vb(7, "div", 19), n.Vb(8, "div", 20), n.Ic(9), n.Ub(), n.Vb(10, "div", 21), n.Gc(11, Ze, 2, 1, "span", 3), n.Gc(12, Xe, 4, 2, "span", 3), n.Ub(), n.Ub(), n.Ub(), n.Vb(13, "div", 22), n.Gc(14, ti, 3, 0, "button", 23), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(1), n.Dc("width", "100%"), n.Db(1), n.nc("ngIf", t.quantity <= 5 && t.quantity > 0), n.Db(1), n.nc("ngIf", t.quantity <= 0), n.Db(3), n.oc("alt", t.name), n.nc("src", "assets/public/images/products/" + t.image, n.Bc), n.Db(3), n.Kc(" ", t.name, " "), n.Db(2), n.nc("ngIf", !i.isDeluxe() || t.price === t.deluxePrice), n.Db(1), n.nc("ngIf", i.isDeluxe() && t.price !== t.deluxePrice), n.Db(2), n.nc("ngIf", i.isLoggedIn())
                }
            }

            function ii(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div"), n.Vb(1, "mat-grid-list", 10, 11), n.dc("resize", function (e) {
                        return n.yc(t), n.hc().onResize(e)
                    }, !1, n.xc), n.Gc(3, ei, 15, 10, "mat-grid-tile", 12), n.ic(4, "async"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("cols", t.breakpoint), n.Db(2), n.nc("ngForOf", n.jc(4, 2, t.gridDataSource))
                }
            }

            function ai(t, e) {
                1 & t && (n.Vb(0, "mat-card", 29), n.Qb(1, "img", 30), n.Vb(2, "mat-card-title"), n.Vb(3, "span", 31), n.Ic(4, " NO_SEARCH_RESULT "), n.Ub(), n.Ub(), n.Vb(5, "mat-card-content"), n.Vb(6, "span", 31), n.Ic(7, " EMPTY_SEARCH_RESULT "), n.Ub(), n.Ub(), n.Ub())
            }
            u.b.add(m.m, m.e), u.a.watch();
            let ni = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c, s, l, b, d, u) {
                        this.deluxeGuard = t, this.dialog = e, this.productService = i, this.quantityService = a, this.basketService = n, this.translateService = o, this.router = r, this.route = c, this.sanitizer = s, this.ngZone = l, this.io = b, this.snackBarHelperService = d, this.cdRef = u, this.displayedColumns = ["Image", "Product", "Description", "Price", "Select"], this.pageSizeOptions = [], this.resultsLength = 0, this.paginator = null, this.breakpoint = 6, this.emptyState = !1
                    }
                    ngAfterViewInit() {
                        const t = this.productService.search(""),
                            e = this.quantityService.getAll();
                        Object(je.a)([e, t]).subscribe(([t, e]) => {
                            const i = [];
                            this.tableData = e, this.trustProductDescription(e);
                            for (const n of e) i.push({
                                name: n.name,
                                price: n.price,
                                deluxePrice: n.deluxePrice,
                                id: n.id,
                                image: n.image,
                                description: n.description
                            });
                            for (const n of t) {
                                const t = i.find(t => t.id === n.ProductId);
                                void 0 !== t && (t.quantity = n.quantity)
                            }
                            this.dataSource = new L.o(i);
                            for (let n = 1; n <= Math.ceil(this.dataSource.data.length / 12); n++) this.pageSizeOptions.push(12 * n);
                            this.paginator.pageSizeOptions = this.pageSizeOptions, this.dataSource.paginator = this.paginator, this.gridDataSource = this.dataSource.connect(), this.resultsLength = this.dataSource.data.length, this.filterTable(), this.routerSubscription = this.router.events.subscribe(() => {
                                this.filterTable()
                            });
                            const a = this.route.snapshot.queryParams.challenge;
                            a && this.route.snapshot.url.join("").match(/hacking-instructor/) && this.startHackingInstructor(decodeURIComponent(a)), window.innerWidth < 2600 ? (this.breakpoint = 4, window.innerWidth < 1740 && (this.breakpoint = 3, window.innerWidth < 1280 && (this.breakpoint = 2, window.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6, this.cdRef.detectChanges()
                        }, t => console.log(t))
                    }
                    trustProductDescription(t) {
                        for (let e = 0; e < t.length; e++) t[e].description = this.sanitizer.bypassSecurityTrustHtml(t[e].description)
                    }
                    ngOnDestroy() {
                        this.routerSubscription && this.routerSubscription.unsubscribe(), this.productSubscription && this.productSubscription.unsubscribe(), this.dataSource && this.dataSource.disconnect()
                    }
                    filterTable() {
                        let t = this.route.snapshot.queryParams.q;
                        t ? (t = t.trim(), this.ngZone.runOutsideAngular(() => {
                            this.io.socket().emit("verifyLocalXssChallenge", t)
                        }), this.dataSource.filter = t.toLowerCase(), this.searchValue = this.sanitizer.bypassSecurityTrustHtml(t), this.gridDataSource.subscribe(t => {
                            this.emptyState = 0 === t.length
                        })) : (this.dataSource.filter = "", this.searchValue = void 0, this.emptyState = !1)
                    }
                    startHackingInstructor(t) {
                        console.log(`Starting instructions for challenge "${t}"`), i.e(6).then(i.bind(null, "s2oO")).then(e => {
                            e.startHackingInstructorFor(t)
                        })
                    }
                    showDetail(t) {
                        this.dialog.open(Be, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                productData: t
                            }
                        })
                    }
                    addToBasket(t) {
                        this.basketService.find(Number(sessionStorage.getItem("bid"))).subscribe(e => {
                            const i = e.Products;
                            let a = !1;
                            for (let n = 0; n < i.length; n++)
                                if (i[n].id === t) {
                                    a = !0, this.basketService.get(i[n].BasketItem.id).subscribe(t => {
                                        this.basketService.put(t.id, {
                                            quantity: t.quantity + 1
                                        }).subscribe(t => {
                                            this.productService.get(t.ProductId).subscribe(t => {
                                                this.translateService.get("BASKET_ADD_SAME_PRODUCT", {
                                                    product: t.name
                                                }).subscribe(t => {
                                                    this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCartItems()
                                                }, t => {
                                                    this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCartItems()
                                                })
                                            }, t => console.log(t))
                                        }, t => {
                                            var e;
                                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                                        })
                                    }, t => console.log(t));
                                    break
                                } a || this.basketService.save({
                                    ProductId: t,
                                    BasketId: sessionStorage.getItem("bid"),
                                    quantity: 1
                                }).subscribe(t => {
                                    this.productService.get(t.ProductId).subscribe(t => {
                                        this.translateService.get("BASKET_ADD_PRODUCT", {
                                            product: t.name
                                        }).subscribe(t => {
                                            this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCartItems()
                                        }, t => {
                                            this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCartItems()
                                        })
                                    }, t => console.log(t))
                                }, t => {
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                                })
                        }, t => console.log(t))
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    onResize(t) {
                        t.target.innerWidth < 2600 ? (this.breakpoint = 4, t.target.innerWidth < 1740 && (this.breakpoint = 3, t.target.innerWidth < 1280 && (this.breakpoint = 2, t.target.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6
                    }
                    isDeluxe() {
                        return this.deluxeGuard.isDeluxe()
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(k), n.Pb(_e.b), n.Pb(Ge), n.Pb(ze), n.Pb(V), n.Pb(v.e), n.Pb(S.b), n.Pb(S.a), n.Pb(a.c), n.Pb(n.B), n.Pb(Qe), n.Pb(A), n.Pb(n.h))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-search-result"]
                    ],
                    viewQuery: function (t, e) {
                        if (1 & t && n.Nc(Fe.a, 3), 2 & t) {
                            let t;
                            n.uc(t = n.ec()) && (e.paginator = t.first)
                        }
                    },
                    decls: 12,
                    vars: 7,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "table-container", "custom-slate"],
                        [1, "heading", "mat-elevation-z6"],
                        [4, "ngIf"],
                        ["id", "search-result-heading"],
                        [4, "ngIf", "ngIfElse"],
                        ["emptyResult", ""],
                        ["color", "accent", 1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions", "length"],
                        ["paginator", ""],
                        ["id", "searchValue", 3, "innerHTML"],
                        ["gutterSize", "30px", 3, "cols", "resize"],
                        ["table", ""],
                        [4, "ngFor", "ngForOf"],
                        [1, "mat-elevation-z6", "ribbon-card"],
                        ["class", "ribbon ribbon-top-left", 4, "ngIf"],
                        ["class", "ribbon ribbon-top-left ribbon-sold", 4, "ngIf"],
                        ["aria-label", "Click for more information about the product", "matTooltip", "Click for more information", "matTooltipPosition", "above", 1, "product", 3, "click"],
                        ["fxFlexAlign", "center", "fxFlex", "60%", 1, "img-container"],
                        ["mat-card-image", "", "role", "button", 1, "img-responsive", "img-thumbnail", 3, "src", "alt"],
                        ["fxFlexAlign", "center", "fxFlex", "40%"],
                        [1, "item-name"],
                        [1, "item-price"],
                        [2, "display", "flex", "justify-content", "center"],
                        ["aria-label", "Add to Basket", "class", "btn-basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 3, "click", 4, "ngIf"],
                        [1, "ribbon", "ribbon-top-left"],
                        ["translate", "", 3, "translateParams"],
                        [1, "ribbon", "ribbon-top-left", "ribbon-sold"],
                        ["translate", ""],
                        ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-basket", 3, "click"],
                        [1, "mat-elevation-z6", "emptyState"],
                        ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"],
                        ["translate", "", 1, "noResultText"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "div", 1), n.Vb(2, "div", 2), n.Gc(3, Ke, 5, 4, "div", 3), n.Gc(4, qe, 3, 3, "div", 3), n.Qb(5, "div", 4), n.Ub(), n.Gc(6, ii, 5, 4, "div", 5), n.Gc(7, ai, 8, 0, "ng-template", null, 6, n.Hc), n.Qb(9, "mat-divider"), n.Qb(10, "mat-paginator", 7, 8), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(8);
                            n.Db(3), n.nc("ngIf", e.searchValue), n.Db(1), n.nc("ngIf", !e.searchValue), n.Db(2), n.nc("ngIf", !e.emptyState)("ngIfElse", t), n.Db(4), n.nc("pageSize", 12)("pageSizeOptions", e.pageSizeOptions)("length", e.resultsLength)
                        }
                    },
                    directives: [f.c, E.l, Te.a, Fe.a, We.a, E.k, We.c, g.a, ge.a, f.a, f.b, g.d, v.a, I.a, g.g, g.b],
                    pipes: [v.d, E.b],
                    styles: ['.table-container[_ngcontent-%COMP%]{min-width:350px;width:80%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{cursor:pointer}.btn-basket[_ngcontent-%COMP%]{bottom:10%}mat-card[_ngcontent-%COMP%]{height:calc(100% - 70px)}.item-price[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.ribbon-card[_ngcontent-%COMP%]{position:relative}.ribbon[_ngcontent-%COMP%]{height:150px;overflow:hidden;pointer-events:none;position:absolute;width:150px}.ribbon[_ngcontent-%COMP%]:before{content:"";z-index:-1}.ribbon[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:absolute}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 Lato,sans-serif;padding:15px 0;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.2);width:225px}.ribbon-top-left[_ngcontent-%COMP%]{left:-10px;top:-10px}.ribbon-top-left[_ngcontent-%COMP%]:before{border-left-color:transparent;border-top-color:transparent;right:0;top:0}.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{right:-25px;top:30px;transform:rotate(-45deg)}']
                }), t
            })(),
                oi = (() => {
                    class t {
                        get nativeWindow() {
                            return window
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var ri = i("pMoy");

            function ci(t, e) {
                if (1 & t && (n.Vb(0, "div", 20), n.Ic(1), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.Jc(t.error)
                }
            }

            function si(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, "MANDATORY_EMAIL"), n.Ub())
            }

            function li(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 21), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.hide = !e.hide
                    }), n.ic(1, "translate"), n.Qb(2, "i", 22), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "SHOW_PWD_TOOLTIP"))
            }

            function bi(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 23), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.hide = !e.hide
                    }), n.ic(1, "translate"), n.Qb(2, "i", 24), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "HIDE_PWD_TOOLTIP"))
            }

            function di(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, "MANDATORY_PASSWORD"), n.Ub())
            }

            function ui(t, e) {
                1 & t && (n.Vb(0, "div", 25), n.Vb(1, "div", 26), n.Qb(2, "div"), n.Ub(), n.Vb(3, "div", 27), n.Ic(4, "LABEL_OR"), n.Ub(), n.Vb(5, "div", 26), n.Qb(6, "div"), n.Ub(), n.Ub())
            }

            function hi(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 28), n.dc("click", function () {
                        return n.yc(t), n.hc().googleLogin()
                    }), n.Qb(1, "i", 29), n.Ic(2), n.ic(3, "translate"), n.Ub()
                }
                2 & t && (n.Db(2), n.Kc(" ", n.jc(3, 1, "BTN_GOOGLE_LOGIN"), " "))
            }
            u.b.add(m.v, m.m, m.n, h.f), u.a.watch();
            let mi = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c) {
                        this.configurationService = t, this.userService = e, this.windowRefService = i, this.cookieService = a, this.router = n, this.formSubmitService = o, this.basketService = r, this.ngZone = c, this.emailControl = new s.e("", [s.z.required]), this.passwordControl = new s.e("", [s.z.required]), this.hide = !0, this.rememberMe = new s.e(!1), this.clientId = "1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com", this.oauthUnavailable = !0, this.redirectUri = ""
                    }
                    ngOnInit() {
                        const t = localStorage.getItem("email");
                        t ? (this.user = {}, this.user.email = t, this.rememberMe.setValue(!0)) : this.rememberMe.setValue(!1), this.redirectUri = `${this.windowRefService.nativeWindow.location.protocol}//${this.windowRefService.nativeWindow.location.host}`, this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            if (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.googleOauth) {
                                this.clientId = t.application.googleOauth.clientId;
                                const e = t.application.googleOauth.authorizedRedirects.find(t => t.uri === this.redirectUri);
                                e ? (this.oauthUnavailable = !1, this.redirectUri = e.proxy ? e.proxy : e.uri) : (this.oauthUnavailable = !0, console.log(this.redirectUri + " is not an authorized redirect URI for this application."))
                            }
                        }, t => console.log(t)), this.formSubmitService.attachEnterKeyHandler("login-form", "loginButton", () => this.login())
                    }
                    login() {
                        var t = this;
                        this.user = {}, this.user.email = this.emailControl.value, this.user.password = this.passwordControl.value, this.userService.login(this.user).subscribe(e => {
                            localStorage.setItem("token", e.token);
                            const i = new Date;
                            i.setHours(i.getHours() + 8), this.cookieService.put("token", e.token, {
                                expires: i
                            }), sessionStorage.setItem("bid", e.bid), this.basketService.updateNumberOfCartItems(), this.userService.isLoggedIn.next(!0), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/search"])
                            }))
                        }, ({
                            error: e
                        }) => {
                            if (e.status && e.data && "totp_token_required" === e.status) return localStorage.setItem("totp_tmp_token", e.data.tmpToken), void this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/2fa/enter"])
                            }));
                            localStorage.removeItem("token"), this.cookieService.remove("token"), sessionStorage.removeItem("bid"), this.error = e, this.userService.isLoggedIn.next(!1), this.emailControl.markAsPristine(), this.passwordControl.markAsPristine()
                        }), this.rememberMe.value ? localStorage.setItem("email", this.user.email) : localStorage.removeItem("email"), this.error && this.user.email && this.user.email.match(/support@.*/) && console.log("@echipa de suport: Secretul nostru comun este \xeenc\u0103 Caoimhe cu parola de master gol!")
                    }
                    googleLogin() {
                        this.windowRefService.nativeWindow.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(d), n.Pb(y), n.Pb(oi), n.Pb(c.b), n.Pb(S.b), n.Pb(At), n.Pb(V), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-login"]
                    ],
                    decls: 35,
                    vars: 18,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["class", "error", 4, "ngIf"],
                        ["id", "login-form", 1, "form-container"],
                        ["color", "accent", "appearance", "outline"],
                        ["translate", ""],
                        ["id", "email", "name", "email", "matInput", "", "placeholder", "", "aria-label", "Text field for the login email", 3, "formControl", "focus"],
                        ["email", ""],
                        ["translate", "", 4, "ngIf"],
                        ["id", "password", "name", "password", "matInput", "", "placeholder", "", "aria-label", "Text field for the login password", 3, "formControl", "type", "focus"],
                        ["password", ""],
                        ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"],
                        ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"],
                        ["routerLink", "/forgot-password", "translate", "", 1, "primary-link", "forgot-pw"],
                        ["type", "submit", "id", "loginButton", "mat-raised-button", "", "color", "primary", "aria-label", "Login", 3, "disabled", "click"],
                        ["id", "rememberMe", "aria-label", "Checkbox to stay logged in or not logged in", 3, "formControl"],
                        ["class", "breakLine", 4, "ngIf"],
                        ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", "class", "google-button", 3, "click", 4, "ngIf"],
                        ["id", "newCustomerLink"],
                        ["routerLink", "/register", "translate", "", 1, "primary-link"],
                        [1, "error"],
                        ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click"],
                        ["aria-label", "Eye", 1, "fas", "fa-eye"],
                        ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click"],
                        ["aria-label", "Eye Slash", 1, "fas", "fa-eye-slash"],
                        [1, "breakLine"],
                        [1, "line"],
                        ["translate", "", 1, "textOnLine"],
                        ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", 1, "google-button", 3, "click"],
                        [1, "fab", "fa-google", "fa-lg"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1"), n.Ic(3, "Login"), n.Ub(), n.Gc(4, ci, 2, 1, "div", 2), n.Vb(5, "div", 3), n.Vb(6, "mat-form-field", 4), n.Vb(7, "mat-label", 5), n.Ic(8, "LABEL_EMAIL"), n.Ub(), n.Vb(9, "input", 6, 7), n.dc("focus", function () {
                            return e.error = null
                        }), n.Ub(), n.Gc(11, si, 2, 0, "mat-error", 8), n.Ub(), n.Vb(12, "mat-form-field", 4), n.Vb(13, "mat-label", 5), n.Ic(14, "LABEL_PASSWORD"), n.Ub(), n.Vb(15, "input", 9, 10), n.dc("focus", function () {
                            return e.error = null
                        }), n.Ub(), n.Gc(17, li, 3, 3, "button", 11), n.Gc(18, bi, 3, 3, "button", 12), n.Gc(19, di, 2, 0, "mat-error", 8), n.Ub(), n.Vb(20, "a", 13), n.Ic(21, "FORGOT_PASSWORD"), n.Ub(), n.Vb(22, "button", 14), n.dc("click", function () {
                            return e.login()
                        }), n.Vb(23, "mat-icon"), n.Ic(24, " exit_to_app "), n.Ub(), n.Ic(25), n.ic(26, "translate"), n.Ub(), n.Vb(27, "mat-checkbox", 15), n.Ic(28), n.ic(29, "translate"), n.Ub(), n.Gc(30, ui, 7, 0, "div", 16), n.Gc(31, hi, 4, 3, "button", 17), n.Vb(32, "div", 18), n.Vb(33, "a", 19), n.Ic(34, "NO_CUSTOMER"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.nc("ngIf", e.error), n.Db(5), n.nc("formControl", e.emailControl), n.Db(2), n.nc("ngIf", e.emailControl.invalid), n.Db(4), n.nc("formControl", e.passwordControl)("type", e.hide ? "password" : "text"), n.Db(2), n.nc("ngIf", e.hide), n.Db(1), n.nc("ngIf", !e.hide), n.Db(1), n.nc("ngIf", e.passwordControl.invalid), n.Db(3), n.nc("disabled", !e.emailControl.value || !e.passwordControl.value), n.Db(3), n.Kc(" ", n.jc(26, 14, "BTN_LOGIN"), " "), n.Db(2), n.nc("formControl", e.rememberMe), n.Db(1), n.Kc(" ", n.jc(29, 16, "REMEMBER_ME"), " "), n.Db(2), n.nc("ngIf", !e.oauthUnavailable), n.Db(1), n.nc("ngIf", !e.oauthUnavailable))
                    },
                    directives: [f.c, g.a, E.l, Lt.c, Lt.g, v.a, Et.b, s.d, s.p, s.f, S.d, I.a, pe.a, ri.a, Lt.b, Lt.h, ge.a],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.forgot-pw[_ngcontent-%COMP%]{font-size:11px;margin-top:-15px}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:20%;margin-top:5px}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}mat-form-field[_ngcontent-%COMP%]:nth-child(2){padding-bottom:20px}#loginButton[_ngcontent-%COMP%], #loginButtonGoogle[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.breakLine[_ngcontent-%COMP%]{display:table}.breakLine[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:table-cell;white-space:nowrap}.line[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-bottom:1px solid silver;height:1px}.textOnLine[_ngcontent-%COMP%]{padding:0 5px}.line[_ngcontent-%COMP%]{vertical-align:middle;width:50%}#newCustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}[_nghost-%COMP%]     .mat-form-field-suffix{margin-bottom:auto!important;margin-top:auto!important}[_nghost-%COMP%]     .mat-icon-button{height:40px!important;width:24px!important}"]
                }), t
            })();
            u.b.add(m.b), u.a.watch();
            let pi = (() => {
                class t {
                    constructor(t, e) {
                        this.dialogData = t, this.userService = e
                    }
                    ngOnInit() {
                        this.userService.get(this.dialogData.id).subscribe(t => {
                            this.user = t
                        }, t => console.log(t))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.a), n.Pb(y))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-user-details"]
                    ],
                    decls: 29,
                    vars: 10,
                    consts: [
                        [1, "mat-typography"],
                        ["fxLayout", "column", 1, "container"],
                        ["fxLayout", "row", "fxLayoutGap", "10px"],
                        ["translate", "LABEL_EMAIL"],
                        ["translate", "LABEL_CREATED_AT"],
                        ["translate", "LABEL_UPDATED_AT"],
                        ["align", "end", 1, "dialogAction"],
                        ["mat-button", "", 2, "height", "0", "position", "absolute"],
                        ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"],
                        [1, "material-icons"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-dialog-content", 0), n.Vb(1, "header"), n.Vb(2, "h1"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Qb(5, "mat-divider"), n.Vb(6, "div", 1), n.Vb(7, "div", 2), n.Vb(8, "div"), n.Qb(9, "strong", 3), n.Vb(10, "p"), n.Ic(11), n.Ub(), n.Ub(), n.Ub(), n.Vb(12, "div", 2), n.Vb(13, "div"), n.Qb(14, "strong", 4), n.Vb(15, "p"), n.Ic(16), n.Ub(), n.Ub(), n.Vb(17, "div"), n.Qb(18, "strong", 5), n.Vb(19, "p"), n.Ic(20), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Vb(21, "mat-dialog-actions", 6), n.Qb(22, "button", 7), n.Vb(23, "button", 8), n.Vb(24, "i", 9), n.Ic(25, " close "), n.Ub(), n.Vb(26, "span"), n.Ic(27), n.ic(28, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Lc("", n.jc(4, 6, "LABEL_USER"), " #", null == e.user ? null : e.user.id, ""), n.Db(8), n.Jc(null == e.user ? null : e.user.email), n.Db(5), n.Jc(null == e.user ? null : e.user.createdAt), n.Db(4), n.Jc(null == e.user ? null : e.user.updatedAt), n.Db(7), n.Kc(" ", n.jc(28, 8, "BTN_CLOSE"), ""))
                    },
                    directives: [_e.e, Te.a, f.d, f.e, v.a, _e.c, I.a, _e.d],
                    pipes: [v.d],
                    styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
                }), t
            })(),
                gi = (() => {
                    class t {
                        constructor(t) {
                            this.dialogData = t
                        }
                        ngOnInit() {
                            this.feedback = this.dialogData.feedback, this.id = this.dialogData.id
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(_e.a))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-feedback-details"]
                        ],
                        decls: 23,
                        vars: 11,
                        consts: [
                            [1, "mat-typography"],
                            ["fxLayout", "column", 1, "container"],
                            ["fxLayout", "row", "fxLayoutGap", "10px"],
                            [2, "margin-top", "10px !important"],
                            [3, "innerHTML"],
                            ["align", "end", 1, "dialogAction"],
                            ["mat-button", "", 2, "height", "0", "position", "absolute"],
                            ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"],
                            [1, "material-icons"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "mat-dialog-content", 0), n.Vb(1, "header"), n.Vb(2, "h1"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Qb(5, "mat-divider"), n.Vb(6, "div", 1), n.Vb(7, "div", 2), n.Vb(8, "span"), n.Ic(9), n.ic(10, "translate"), n.Ub(), n.Vb(11, "p"), n.Ic(12), n.Ub(), n.Ub(), n.Vb(13, "div", 3), n.Qb(14, "cite", 4), n.Ub(), n.Ub(), n.Vb(15, "mat-dialog-actions", 5), n.Qb(16, "button", 6), n.Vb(17, "button", 7), n.Vb(18, "i", 8), n.Ic(19, " close "), n.Ub(), n.Vb(20, "span"), n.Ic(21), n.ic(22, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Jc(n.jc(4, 5, "LABEL_COMMENT")), n.Db(6), n.Kc("", n.jc(10, 7, "LABEL_USER"), ":"), n.Db(3), n.Kc("#", e.id, ""), n.Db(2), n.nc("innerHTML", e.feedback, n.zc), n.Db(7), n.Kc(" ", n.jc(22, 9, "BTN_CLOSE"), ""))
                        },
                        directives: [_e.e, Te.a, f.d, f.e, _e.c, I.a, _e.d],
                        pipes: [v.d],
                        styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}mat-dialog-content[_ngcontent-%COMP%]{max-width:320px;min-width:280px}"]
                    }), t
                })();
            const fi = ["paginatorUsers"],
                vi = ["paginatorFeedb"];

            function Ii(t, e) {
                1 & t && n.Qb(0, "mat-header-cell")
            }

            function Ci(t, e) {
                1 & t && n.Qb(0, "i", 30)
            }

            function wi(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 28), n.Gc(1, Ci, 1, 0, "i", 29), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngIf", t.token)
                }
            }

            function Ui(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 1)
            }

            function yi(t, e) {
                1 & t && n.Qb(0, "mat-cell", 31), 2 & t && n.nc("innerHTML", e.$implicit.email, n.zc)
            }

            function Si(t, e) {
                1 & t && n.Qb(0, "mat-header-cell")
            }

            function Di(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell"), n.Vb(1, "button", 32), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().showUserDetail(i.id)
                    }), n.Qb(2, "i", 33), n.Ub(), n.Ub()
                }
            }

            function Vi(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Oi(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function _i(t, e) {
                1 & t && n.Qb(0, "mat-header-cell")
            }

            function Pi(t, e) {
                1 & t && n.Qb(0, "mat-cell", 28)
            }

            function xi(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 1)
            }

            function ki(t, e) {
                1 & t && n.Qb(0, "mat-cell", 31), 2 & t && n.nc("innerHTML", e.$implicit.email, n.zc)
            }

            function Ti(t, e) {
                1 & t && n.Qb(0, "mat-header-cell")
            }

            function Ai(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell"), n.Vb(1, "button", 32), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().showUserDetail(i.id)
                    }), n.Qb(2, "i", 33), n.Ub(), n.Ub()
                }
            }

            function Li(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Ei(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function Mi(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 1)
            }

            function Ri(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.UserId, "")
                }
            }

            function Ni(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 1)
            }

            function Bi(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 34), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().showFeedbackDetails(i.comment, i.UserId)
                    }), n.Qb(1, "p", 35), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("innerHTML", t.comment, n.zc)
                }
            }

            function Gi(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 1)
            }

            function Fi(t, e) {
                1 & t && (n.Vb(0, "mat-icon"), n.Ic(1, " star_rate "), n.Ub())
            }

            function ji(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Gc(1, Fi, 2, 0, "mat-icon", 36), n.Ub()), 2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.Db(1), n.nc("ngForOf", i.times(t.rating))
                }
            }

            function Hi(t, e) {
                1 & t && n.Qb(0, "mat-header-cell")
            }

            function Qi(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell"), n.Vb(1, "button", 32), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().deleteFeedback(i.id)
                    }), n.Qb(2, "i", 37), n.Ub(), n.Ub()
                }
            }

            function zi(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Wi(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }
            u.b.add(m.bb, m.m, m.t, m.a, m.U), u.a.watch();
            let Ki = (() => {
                class t {
                    constructor(t, e, i, a) {
                        this.dialog = t, this.userService = e, this.feedbackService = i, this.sanitizer = a, this.userColumns = ["user", "email", "user_detail"], this.feedbackColumns = ["user", "comment", "rating", "remove"], this.resultsLengthUser = 0, this.resultsLengthFeedback = 0
                    }
                    ngOnInit() {
                        this.findAllUsers(), this.findAllFeedbacks()
                    }
                    findAllUsers() {
                        this.userService.find().subscribe(t => {
                            this.userDataSource = t, this.userDataSourceHidden = t;
                            for (const e of this.userDataSource) e.email = this.sanitizer.bypassSecurityTrustHtml(`<span class="${e.token ? "confirmation" : "error"}">${e.email}</span>`);
                            this.userDataSource = new L.o(this.userDataSource), this.userDataSource.paginator = this.paginatorUsers, this.resultsLengthUser = t.length
                        }, t => {
                            this.error = t, console.log(this.error)
                        })
                    }
                    findAllFeedbacks() {
                        this.feedbackService.find().subscribe(t => {
                            this.feedbackDataSource = t;
                            for (const e of this.feedbackDataSource) e.comment = this.sanitizer.bypassSecurityTrustHtml(e.comment);
                            this.feedbackDataSource = new L.o(this.feedbackDataSource), this.feedbackDataSource.paginator = this.paginatorFeedb, this.resultsLengthFeedback = t.length
                        }, t => {
                            this.error = t, console.log(this.error)
                        })
                    }
                    deleteFeedback(t) {
                        this.feedbackService.del(t).subscribe(() => {
                            this.findAllFeedbacks()
                        }, t => {
                            this.error = t, console.log(this.error)
                        })
                    }
                    showUserDetail(t) {
                        this.dialog.open(pi, {
                            data: {
                                id: t
                            }
                        })
                    }
                    showFeedbackDetails(t, e) {
                        this.dialog.open(gi, {
                            data: {
                                feedback: t,
                                id: e
                            }
                        })
                    }
                    times(t) {
                        return Array(t).fill("\u2605")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.b), n.Pb(y), n.Pb(kt), n.Pb(a.c))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-administration"]
                    ],
                    viewQuery: function (t, e) {
                        if (1 & t && (n.Nc(fi, 1), n.Nc(vi, 1)), 2 & t) {
                            let t;
                            n.uc(t = n.ec()) && (e.paginatorUsers = t.first), n.uc(t = n.ec()) && (e.paginatorFeedb = t.first)
                        }
                    },
                    decls: 58,
                    vars: 13,
                    consts: [
                        [1, "mat-elevation-z6", "mat-own-card"],
                        ["translate", ""],
                        ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"],
                        ["fxFlexAlign", "center", 1, "user-container"],
                        [1, "user-table"],
                        [1, "heading"],
                        [2, "height", "700px", 3, "dataSource"],
                        ["matColumnDef", "user"],
                        [4, "matHeaderCellDef"],
                        ["style", "vertical-align: middle", 4, "matCellDef"],
                        ["matColumnDef", "email"],
                        ["translate", "", 4, "matHeaderCellDef"],
                        ["style", "vertical-align: middle", 3, "innerHTML", 4, "matCellDef"],
                        ["matColumnDef", "user_detail"],
                        [4, "matCellDef"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize", "length"],
                        ["paginatorUsers", ""],
                        [2, "visibility", "hidden", "height", "0px", 3, "dataSource"],
                        ["fxFlexAlign.lt-md", "center", 1, "customer-container"],
                        [1, "customer-table"],
                        ["matColumnDef", "comment"],
                        [3, "click", 4, "matCellDef"],
                        ["matColumnDef", "rating"],
                        ["matColumnDef", "remove"],
                        ["paginatorFeedb", ""],
                        ["src", "assets/public/images/padding/19px.png"],
                        [2, "vertical-align", "middle"],
                        ["class", "fas fa-user fa-lg confirmation", 4, "ngIf"],
                        [1, "fas", "fa-user", "fa-lg", "confirmation"],
                        [2, "vertical-align", "middle", 3, "innerHTML"],
                        ["mat-button", "", 3, "click"],
                        [1, "fas", "fa-eye"],
                        [3, "click"],
                        ["matTooltip", "Click for more information", "matTooltipPosition", "above", 3, "innerHTML"],
                        [4, "ngFor", "ngForOf"],
                        [1, "fas", "fa-trash-alt"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1", 1), n.Ic(2, "TITLE_ADMINISTRATION"), n.Ub(), n.Vb(3, "div", 2), n.Vb(4, "div", 3), n.Vb(5, "div", 4), n.Vb(6, "div", 5), n.Vb(7, "span", 1), n.Ic(8, "SECTION_USER"), n.Ub(), n.Ub(), n.Vb(9, "mat-table", 6), n.Tb(10, 7), n.Gc(11, Ii, 1, 0, "mat-header-cell", 8), n.Gc(12, wi, 2, 1, "mat-cell", 9), n.Sb(), n.Tb(13, 10), n.Gc(14, Ui, 1, 0, "mat-header-cell", 11), n.Gc(15, yi, 1, 1, "mat-cell", 12), n.Sb(), n.Tb(16, 13), n.Gc(17, Si, 1, 0, "mat-header-cell", 8), n.Gc(18, Di, 3, 0, "mat-cell", 14), n.Sb(), n.Gc(19, Vi, 1, 0, "mat-header-row", 15), n.Gc(20, Oi, 1, 0, "mat-row", 16), n.Ub(), n.Qb(21, "mat-paginator", 17, 18), n.Ub(), n.Vb(23, "mat-table", 19), n.Tb(24, 7), n.Gc(25, _i, 1, 0, "mat-header-cell", 8), n.Gc(26, Pi, 1, 0, "mat-cell", 9), n.Sb(), n.Tb(27, 10), n.Gc(28, xi, 1, 0, "mat-header-cell", 11), n.Gc(29, ki, 1, 1, "mat-cell", 12), n.Sb(), n.Tb(30, 13), n.Gc(31, Ti, 1, 0, "mat-header-cell", 8), n.Gc(32, Ai, 3, 0, "mat-cell", 14), n.Sb(), n.Gc(33, Li, 1, 0, "mat-header-row", 15), n.Gc(34, Ei, 1, 0, "mat-row", 16), n.Ub(), n.Ub(), n.Vb(35, "div", 20), n.Vb(36, "div", 21), n.Vb(37, "div", 5), n.Vb(38, "span", 1), n.Ic(39, "SECTION_CUSTOMER_FEEDBACK"), n.Ub(), n.Ub(), n.Vb(40, "mat-table", 6), n.Tb(41, 7), n.Gc(42, Mi, 1, 0, "mat-header-cell", 11), n.Gc(43, Ri, 2, 1, "mat-cell", 14), n.Sb(), n.Tb(44, 22), n.Gc(45, Ni, 1, 0, "mat-header-cell", 11), n.Gc(46, Bi, 2, 1, "mat-cell", 23), n.Sb(), n.Tb(47, 24), n.Gc(48, Gi, 1, 0, "mat-header-cell", 11), n.Gc(49, ji, 2, 1, "mat-cell", 14), n.Sb(), n.Tb(50, 25), n.Gc(51, Hi, 1, 0, "mat-header-cell", 8), n.Gc(52, Qi, 3, 0, "mat-cell", 14), n.Sb(), n.Gc(53, zi, 1, 0, "mat-header-row", 15), n.Gc(54, Wi, 1, 0, "mat-row", 16), n.Ub(), n.Qb(55, "mat-paginator", 17, 26), n.Ub(), n.Ub(), n.Qb(57, "img", 27), n.Ub(), n.Ub()), 2 & t && (n.Db(9), n.nc("dataSource", e.userDataSource), n.Db(10), n.nc("matHeaderRowDef", e.userColumns), n.Db(1), n.nc("matRowDefColumns", e.userColumns), n.Db(1), n.nc("pageSize", 10)("length", e.resultsLengthUser), n.Db(2), n.nc("dataSource", e.userDataSourceHidden), n.Db(10), n.nc("matHeaderRowDef", e.userColumns), n.Db(1), n.nc("matRowDefColumns", e.userColumns), n.Db(6), n.nc("dataSource", e.feedbackDataSource), n.Db(13), n.nc("matHeaderRowDef", e.feedbackColumns), n.Db(1), n.nc("matRowDefColumns", e.feedbackColumns), n.Db(1), n.nc("pageSize", 10)("length", e.resultsLengthFeedback))
                    },
                    directives: [g.a, v.a, f.d, f.e, f.a, L.n, L.c, L.i, L.b, L.k, L.m, Fe.a, L.h, L.a, E.l, I.a, L.j, L.l, ge.a, E.k, pe.a],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.customer-container[_ngcontent-%COMP%], .user-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.customer-table[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]{margin-bottom:25px}.mat-column-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .mat-column-user_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:38%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}.mat-column-comment[_ngcontent-%COMP%]{flex:0 0 55%!important;width:55%!important}.mat-column-comment[_ngcontent-%COMP%], .mat-column-user[_ngcontent-%COMP%]{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;padding:5px;white-space:unset!important;word-break:break-word;word-wrap:break-word!important}.mat-column-user[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important}.mat-column-rating[_ngcontent-%COMP%]{flex:0 0 20%!important;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;white-space:unset!important;width:20%!important;word-break:break-word;word-wrap:break-word!important}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}p[_ngcontent-%COMP%]{-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden}"]
                }), t
            })();

            function qi(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_CURRENT_PASSWORD"), n.Ub())
            }

            function $i(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_NEW_PASSWORD "), n.Ub())
            }
            const Yi = function () {
                return {
                    length: "5-40"
                }
            };

            function Ji(t, e) {
                1 & t && (n.Vb(0, "mat-error", 19), n.Ic(1, "INVALID_PASSWORD_LENGTH "), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, Yi))
            }

            function Zi(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_PASSWORD_REPEAT"), n.Ub())
            }

            function Xi(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " PASSWORDS_NOT_MATCHING "), n.Ub())
            }
            u.b.add(m.E, p.c), u.a.watch();
            let ta = (() => {
                class t {
                    constructor(t, e, i) {
                        var a;
                        this.userService = t, this.formSubmitService = e, this.translate = i, this.passwordControl = new s.e("", [s.z.required]), this.newPasswordControl = new s.e("", [s.z.required, s.z.minLength(5), s.z.maxLength(40)]), this.repeatNewPasswordControl = new s.e("", [s.z.required, s.z.minLength(5), s.z.maxLength(40), (a = this.newPasswordControl, function (t) {
                            return a.value !== t.value ? {
                                notSame: !0
                            } : null
                        })])
                    }
                    ngOnInit() {
                        this.formSubmitService.attachEnterKeyHandler("password-form", "changeButton", () => this.changePassword())
                    }
                    changePassword() {
                        this.userService.changePassword({
                            current: this.passwordControl.value,
                            new: this.newPasswordControl.value,
                            repeat: this.repeatNewPasswordControl.value
                        }).subscribe(t => {
                            this.error = void 0, this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t => {
                                this.confirmation = t
                            }, t => {
                                this.confirmation = {
                                    error: t
                                }
                            }), this.resetForm()
                        }, t => {
                            console.log(t), this.error = t, this.confirmation = void 0, this.resetPasswords()
                        })
                    }
                    resetForm() {
                        this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.newPasswordControl.setValue(""), this.newPasswordControl.markAsPristine(), this.newPasswordControl.markAsUntouched(), this.repeatNewPasswordControl.setValue(""), this.repeatNewPasswordControl.markAsPristine(), this.repeatNewPasswordControl.markAsUntouched()
                    }
                    resetPasswords() {
                        this.newPasswordControl.setValue(""), this.newPasswordControl.markAsPristine(), this.newPasswordControl.markAsUntouched(), this.repeatNewPasswordControl.setValue(""), this.repeatNewPasswordControl.markAsPristine(), this.repeatNewPasswordControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(y), n.Pb(At), n.Pb(v.e))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-change-password"]
                    ],
                    decls: 42,
                    vars: 26,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6", 2, "margin-bottom", "20px"],
                        ["translate", ""],
                        [1, "confirmation", 3, "hidden"],
                        [1, "error", 3, "hidden"],
                        ["id", "password-form", 1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["id", "currentPassword", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", 3, "formControl", "placeholder"],
                        ["translate", "", 4, "ngIf"],
                        ["id", "newPassword", "type", "password", "matInput", "", "aria-label", "Field for the new password", 3, "formControl"],
                        ["password", ""],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["align", "end"],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        ["id", "newPasswordRepeat", "type", "password", "matInput", "", "aria-label", "Field to repeat the new password", 3, "formControl"],
                        ["passwordRepeat", ""],
                        ["type", "submit", "id", "changeButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the change", 3, "disabled", "click"],
                        ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"],
                        ["translate", "", 3, "translateParams"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_CHANGE_PASSWORD"), n.Ub(), n.Vb(4, "div", 3), n.Ic(5), n.Ub(), n.Vb(6, "div", 4), n.Ic(7), n.Ub(), n.Vb(8, "div", 5), n.Vb(9, "mat-form-field", 6), n.Vb(10, "mat-label", 2), n.Ic(11, "LABEL_CURRENT_PASSWORD"), n.Ub(), n.Qb(12, "input", 7), n.ic(13, "translate"), n.Gc(14, qi, 2, 0, "mat-error", 8), n.Ub(), n.Vb(15, "mat-form-field", 6), n.Vb(16, "mat-label", 2), n.Ic(17, "LABEL_NEW_PASSWORD"), n.Ub(), n.Qb(18, "input", 9, 10), n.Vb(20, "mat-hint", 2), n.Qb(21, "i", 11), n.Vb(22, "em", 12), n.Ic(23), n.ic(24, "translate"), n.Ub(), n.Ub(), n.Vb(25, "mat-hint", 13), n.Ic(26), n.Ub(), n.Gc(27, $i, 2, 0, "mat-error", 8), n.Gc(28, Ji, 2, 2, "mat-error", 14), n.Ub(), n.Vb(29, "mat-form-field", 6), n.Vb(30, "mat-label", 2), n.Ic(31, "LABEL_REPEAT_NEW_PASSWORD"), n.Ub(), n.Qb(32, "input", 15, 16), n.Vb(34, "mat-hint", 13), n.Ic(35), n.Ub(), n.Gc(36, Zi, 2, 0, "mat-error", 8), n.Gc(37, Xi, 2, 0, "mat-error", 8), n.Ub(), n.Ub(), n.Vb(38, "button", 17), n.dc("click", function () {
                            return e.changePassword()
                        }), n.Qb(39, "i", 18), n.Ic(40), n.ic(41, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(19),
                                i = n.vc(33);
                            n.Db(4), n.nc("hidden", !(e.confirmation && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)), n.Db(1), n.Kc(" ", e.confirmation, " "), n.Db(1), n.nc("hidden", !(e.error && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)), n.Db(1), n.Kc(" ", e.error, " "), n.Db(5), n.oc("placeholder", n.jc(13, 18, "MANDATORY_CURRENT_PASSWORD")), n.nc("formControl", e.passwordControl), n.Db(2), n.nc("ngIf", e.passwordControl.invalid), n.Db(4), n.nc("formControl", e.newPasswordControl), n.Db(5), n.Jc(n.kc(24, 20, "INVALID_PASSWORD_LENGTH", n.rc(25, Yi))), n.Db(3), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/40"), n.Db(1), n.nc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && (null == e.newPasswordControl ? null : e.newPasswordControl.errors.required)), n.Db(1), n.nc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && ((null == e.newPasswordControl ? null : e.newPasswordControl.errors.minlength) || (null == e.newPasswordControl ? null : e.newPasswordControl.errors.maxlength))), n.Db(4), n.nc("formControl", e.repeatNewPasswordControl), n.Db(3), n.Kc("", (null == i.value ? null : i.value.length) || 0, "/20"), n.Db(1), n.nc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.required), n.Db(1), n.nc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.notSame), n.Db(1), n.nc("disabled", e.passwordControl.invalid || e.newPasswordControl.invalid || e.repeatNewPasswordControl.invalid), n.Db(2), n.Kc(" ", n.jc(41, 23, "BTN_CHANGE"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, E.l, Lt.f, I.a, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-top:5px}#changeButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                }), t
            })(),
                ea = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Complaints"
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var ia = i("pYyI");
            const aa = ["fileControl"],
                na = function () {
                    return {
                        type: "PDF, ZIP"
                    }
                };

            function oa(t, e) {
                1 & t && (n.Vb(0, "div", 20), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Kc("", n.kc(2, 1, "INVALID_FILE_TYPE", n.rc(4, na)), " "))
            }
            const ra = function () {
                return {
                    size: "100 KB"
                }
            };

            function ca(t, e) {
                1 & t && (n.Vb(0, "div", 20), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Kc("", n.kc(2, 1, "INVALID_FILE_SIZE", n.rc(4, ra)), " "))
            }

            function sa(t, e) {
                1 & t && (n.Vb(0, "mat-error"), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Kc("", n.jc(2, 1, "MANDATORY_MESSAGE"), " "))
            }
            const la = function () {
                return {
                    length: "160"
                }
            };
            u.b.add(m.c), u.a.watch();
            let ba = (() => {
                class t {
                    constructor(t, e, i, a) {
                        this.userService = t, this.complaintService = e, this.formSubmitService = i, this.translate = a, this.customerControl = new s.e({
                            value: "",
                            disabled: !0
                        }, []), this.messageControl = new s.e("", [s.z.required, s.z.maxLength(160)]), this.fileUploadError = void 0, this.uploader = new ia.c({
                            url: "./file-upload",
                            authToken: `Bearer ${localStorage.getItem("token")}`,
                            allowedMimeType: ["application/pdf", "application/xml", "text/xml", "application/zip", "application/x-zip-compressed", "multipart/x-zip"],
                            maxFileSize: 1e5
                        }), this.userEmail = void 0, this.complaint = void 0
                    }
                    ngOnInit() {
                        this.initComplaint(), this.uploader.onWhenAddingFileFailed = (t, e) => {
                            throw this.fileUploadError = e, new Error(`Error due to : ${e.name}`)
                        }, this.uploader.onAfterAddingFile = () => {
                            this.fileUploadError = void 0
                        }, this.uploader.onSuccessItem = () => {
                            this.saveComplaint(), this.uploader.clearQueue()
                        }, this.formSubmitService.attachEnterKeyHandler("complaint-form", "submitButton", () => this.save())
                    }
                    initComplaint() {
                        this.userService.whoAmI().subscribe(t => {
                            this.complaint = {}, this.complaint.UserId = t.id, this.userEmail = t.email, this.customerControl.setValue(this.userEmail)
                        }, t => {
                            this.complaint = void 0, console.log(t)
                        })
                    }
                    save() {
                        this.uploader.queue[0] ? (this.uploader.queue[0].upload(), this.fileControl.nativeElement.value = null) : this.saveComplaint()
                    }
                    saveComplaint() {
                        this.complaint.message = this.messageControl.value, this.complaintService.save(this.complaint).subscribe(t => {
                            this.translate.get("CUSTOMER_SUPPORT_COMPLAINT_REPLY", {
                                ref: t.id
                            }).subscribe(t => {
                                this.confirmation = t
                            }, t => {
                                this.confirmation = t
                            }), this.initComplaint(), this.resetForm(), this.fileUploadError = void 0
                        }, t => t)
                    }
                    resetForm() {
                        this.messageControl.setValue(""), this.messageControl.markAsUntouched(), this.messageControl.markAsPristine(), this.fileControl.nativeElement.value = null
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(y), n.Pb(ea), n.Pb(At), n.Pb(v.e))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-complaint"]
                    ],
                    viewQuery: function (t, e) {
                        if (1 & t && n.Nc(aa, 3), 2 & t) {
                            let t;
                            n.uc(t = n.ec()) && (e.fileControl = t.first)
                        }
                    },
                    decls: 39,
                    vars: 21,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        [1, "confirmation", 3, "hidden"],
                        ["class", "error fileUploadError", 4, "ngIf"],
                        ["id", "complaint-form", 1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["type", "text", "matInput", "", "aria-label", "Text field for the mail address of the user", 3, "formControl"],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["id", "complaintMessage", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "matInput", "", "aria-label", "Field for entering the complaint", 3, "formControl", "placeholder"],
                        ["complaintMessage", ""],
                        [4, "ngIf"],
                        ["align", "end"],
                        [2, "margin-top", "15px"],
                        ["for", "file", "translate", ""],
                        ["ng2FileSelect", "", "id", "file", "type", "file", "accept", ".pdf,.zip", "aria-label", "Input area for uploading a single invoice PDF or XML B2B order file or a ZIP archive containing multiple invoices or orders\x3c!----\x3e", 2, "margin-left", "10px", 3, "uploader"],
                        ["fileControl", ""],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the complaint", 3, "disabled", "click"],
                        [1, "material-icons"],
                        [1, "error", "fileUploadError"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "NAV_COMPLAIN"), n.Ub(), n.Vb(4, "div", 3), n.Ic(5), n.Ub(), n.Gc(6, oa, 3, 5, "div", 4), n.Gc(7, ca, 3, 5, "div", 4), n.Vb(8, "div", 5), n.Vb(9, "mat-form-field", 6), n.Vb(10, "mat-label", 2), n.Ic(11, "LABEL_CUSTOMER"), n.Ub(), n.Qb(12, "input", 7), n.Ub(), n.Vb(13, "mat-form-field", 6), n.Vb(14, "mat-label", 2), n.Ic(15, "LABEL_MESSAGE"), n.Ub(), n.Vb(16, "mat-hint", 2), n.Qb(17, "i", 8), n.Vb(18, "em", 9), n.Ic(19), n.ic(20, "translate"), n.Ub(), n.Ub(), n.Qb(21, "textarea", 10, 11), n.ic(23, "translate"), n.Gc(24, sa, 3, 3, "mat-error", 12), n.Vb(25, "mat-hint", 13), n.Ic(26), n.Ub(), n.Ub(), n.Vb(27, "div", 14), n.Vb(28, "label", 15), n.Ic(29, "LABEL_INVOICE"), n.Vb(30, "span"), n.Ic(31, ":"), n.Ub(), n.Ub(), n.Qb(32, "input", 16, 17), n.Ub(), n.Ub(), n.Vb(34, "button", 18), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(35, "i", 19), n.Ic(36, " send "), n.Ub(), n.Ic(37), n.ic(38, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(22);
                            n.Db(4), n.nc("hidden", !(e.confirmation && !e.messageControl.dirty)), n.Db(1), n.Jc(e.confirmation), n.Db(1), n.nc("ngIf", e.fileUploadError && "mimeType" == e.fileUploadError.name), n.Db(1), n.nc("ngIf", e.fileUploadError && "fileSize" == e.fileUploadError.name), n.Db(5), n.nc("formControl", e.customerControl), n.Db(7), n.Jc(n.kc(20, 13, "MAX_TEXTAREA_LENGTH", n.rc(20, la))), n.Db(2), n.oc("placeholder", n.jc(23, 16, "WRITE_MESSAGE_PLACEHOLDER")), n.nc("formControl", e.messageControl), n.Db(3), n.nc("ngIf", e.messageControl.invalid && (null == e.messageControl ? null : e.messageControl.errors.required)), n.Db(2), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/160"), n.Db(6), n.nc("uploader", e.uploader), n.Db(2), n.nc("disabled", e.messageControl.invalid || e.fileUploadError), n.Db(3), n.Kc(" ", n.jc(38, 18, "BTN_SUBMIT"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, E.l, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, Lt.f, Et.d, s.k, ia.a, I.a, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                }), t
            })(),
                da = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/chatbot"
                        }
                        getChatbotStatus() {
                            return this.http.get(this.host + "/status").pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        getResponse(t, e) {
                            return this.http.post(this.host + "/respond", {
                                action: t,
                                query: e
                            }).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function ua(t, e) {
                if (1 & t && n.Qb(0, "img", 16), 2 & t) {
                    const t = n.hc(2);
                    n.oc("src", t.juicyImageSrc, n.Bc)
                }
            }

            function ha(t, e) {
                if (1 & t && n.Qb(0, "img", 17), 2 & t) {
                    const t = n.hc(2);
                    n.oc("src", t.profileImageSrc, n.Bc)
                }
            }

            function ma(t, e) {
                if (1 & t && (n.Vb(0, "div", 13), n.Gc(1, ua, 1, 1, "img", 14), n.Gc(2, ha, 1, 1, "img", 15), n.Vb(3, "div"), n.Ic(4), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngIf", "bot" == t.author), n.Db(1), n.nc("ngIf", "user" == t.author), n.Db(1), n.Fb("user" == t.author ? "speech-bubble-right" : "speech-bubble-left"), n.Db(1), n.Kc(" ", t.body, " ")
                }
            }
            const pa = function () {
                return {
                    chatbot: "juicy-chat-bot"
                }
            };
            u.b.add(m.c), u.a.watch();
            var ga = function (t) {
                return t.user = "user", t.bot = "bot", t
            }({});
            let fa = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.userService = t, this.chatbotService = e, this.cookieService = i, this.formSubmitService = a, this.translate = n, this.messageControl = new s.e, this.messages = [], this.juicyImageSrc = "assets/public/images/ChatbotAvatar.png", this.profileImageSrc = "assets/public/images/uploads/default.svg", this.messageActions = {
                            response: "query",
                            namequery: "setname"
                        }, this.currentAction = this.messageActions.response
                    }
                    ngOnInit() {
                        this.chatbotService.getChatbotStatus().subscribe(t => {
                            this.messages.push({
                                author: ga.bot,
                                body: t.body
                            }), t.action && (this.currentAction = this.messageActions[t.action])
                        }), this.userService.whoAmI().subscribe(t => {
                            this.profileImageSrc = t.profileImage
                        }, t => {
                            console.log(t)
                        })
                    }
                    handleResponse(t) {
                        if (this.messages.push({
                            author: ga.bot,
                            body: t.body
                        }), this.currentAction = this.messageActions[t.action], t.token) {
                            localStorage.setItem("token", t.token);
                            const e = new Date;
                            e.setHours(e.getHours() + 8), this.cookieService.put("token", t.token, {
                                expires: e
                            })
                        }
                    }
                    sendMessage() {
                        const t = this.messageControl.value;
                        t && (this.messages.push({
                            author: ga.user,
                            body: t
                        }), this.messageControl.setValue(""), this.chatbotService.getChatbotStatus().subscribe(e => {
                            e.status || e.action ? this.chatbotService.getResponse(this.currentAction, t).subscribe(t => {
                                this.handleResponse(t)
                            }) : this.messages.push({
                                author: ga.bot,
                                body: e.body
                            });
                            const i = document.getElementById("chat-window");
                            i.scrollTop = i.scrollHeight
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(y), n.Pb(da), n.Pb(c.b), n.Pb(At), n.Pb(v.e))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-chatbot"]
                    ],
                    decls: 20,
                    vars: 13,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        [1, "powered-by"],
                        ["id", "chat-container"],
                        ["id", "chat-box"],
                        ["id", "chat-window"],
                        ["class", "message-container", 4, "ngFor", "ngForOf"],
                        [1, "message-box-container"],
                        [1, "form-wrapper"],
                        ["color", "accent", "appearance", "outline"],
                        ["translate", ""],
                        ["id", "message-input", "name", "message", "matInput", "", "aria-label", "Text field for a chat message", 3, "formControl", "placeholder", "keyup.enter"],
                        ["message", ""],
                        [1, "message-container"],
                        ["class", "juicy-chat-bot-image", 3, "src", 4, "ngIf"],
                        ["class", "profile-image", 3, "src", 4, "ngIf"],
                        [1, "juicy-chat-bot-image", 3, "src"],
                        [1, "profile-image", 3, "src"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1"), n.Ic(3), n.ic(4, "translate"), n.Vb(5, "span", 2), n.Ic(6), n.ic(7, "translate"), n.Ub(), n.Ub(), n.Vb(8, "mat-card", 3), n.Vb(9, "mat-card", 4), n.Vb(10, "div", 5), n.Gc(11, ma, 5, 6, "div", 6), n.Ub(), n.Vb(12, "div", 7), n.Vb(13, "div", 8), n.Vb(14, "mat-form-field", 9), n.Vb(15, "mat-label", 10), n.Ic(16, "LABEL_MESSAGE"), n.Ub(), n.Vb(17, "input", 11, 12), n.dc("keyup.enter", function () {
                            return e.sendMessage()
                        }), n.ic(19, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Kc("", n.jc(4, 5, "SECTION_SUPPORT_CHAT"), " "), n.Db(3), n.Kc("(", n.kc(7, 7, "LABEL_POWERED_BY_CHATBOT", n.rc(12, pa)), ")"), n.Db(5), n.nc("ngForOf", e.messages), n.Db(6), n.oc("placeholder", n.jc(19, 10, "ASK_ME_ANYTHING_PLACEHOLDER")), n.nc("formControl", e.messageControl))
                    },
                    directives: [f.c, g.a, E.k, Lt.c, Lt.g, v.a, Et.b, s.d, s.p, s.f, E.l],
                    pipes: [v.d],
                    styles: ['mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:60%}mat-form-field[_ngcontent-%COMP%]{display:block;height:0;margin:auto;width:70%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#chat-container[_ngcontent-%COMP%]{box-shadow:none;display:flex;position:relative;width:95%}#chat-box[_ngcontent-%COMP%]{align-content:space-between;background-color:rgba(0,0,0,.3);display:block;display:flex;flex-direction:column;height:650px;margin-left:auto;margin-right:auto;padding:0;width:80%}.form-wrapper[_ngcontent-%COMP%]{font-size:10px}#chat-window[_ngcontent-%COMP%]{height:90%;overflow-y:auto;padding:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{background:none;width:20px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:none}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:red;border-radius:10px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b30000}.message-box-container[_ngcontent-%COMP%]{border-top:1px solid #fff;height:10%;padding-top:15px;width:auto}.message-container[_ngcontent-%COMP%]{height:auto;margin-right:25px;overflow:hidden;width:auto}.speech-bubble-right[_ngcontent-%COMP%]{background:#546e7a;border-radius:4px;float:right;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-right[_ngcontent-%COMP%]:after{border-left:20px solid transparent;border-top:20px solid #546e7a;bottom:-20px;content:"";position:absolute;right:20px}.speech-bubble-left[_ngcontent-%COMP%]{background:#546e7a;border-radius:4px;float:left;font-size:15px;line-height:1.3;margin-bottom:25px;max-width:500px;padding:15px;position:relative}.speech-bubble-left[_ngcontent-%COMP%]:after{border-right:20px solid transparent;border-top:20px solid #546e7a;bottom:-20px;content:"";left:20px;position:absolute}.juicy-chat-bot-image[_ngcontent-%COMP%]{float:left;height:70px;margin-top:20px}.profile-image[_ngcontent-%COMP%]{border-radius:50%;float:right;height:40px;margin-left:10px;margin-top:20px}.powered-by[_ngcontent-%COMP%]{font-size:xx-small}']
                }), t
            })(),
                va = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Recycles"
                        }
                        find(t) {
                            return this.http.get(this.host + "/", {
                                params: t
                            }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Ia = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Addresss"
                        }
                        get() {
                            return this.http.get(this.host).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        getById(t) {
                            return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        put(t, e) {
                            return this.http.put(`${this.host}/${t}`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        del(t) {
                            return this.http.delete(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var Ca = i("CtHx"),
                wa = i("zQhy");

            function Ua(t, e) {
                1 & t && (n.Vb(0, "h1", 5), n.Ic(1, "TITLE_SELECT_ADDRESS"), n.Ub())
            }

            function ya(t, e) {
                1 & t && (n.Vb(0, "h1", 5), n.Ic(1, "MY_SAVED_ADRESSES"), n.Ub())
            }

            function Sa(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 20)
            }

            function Da(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 20), n.Vb(1, "mat-radio-button", 21), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).emitSelectionToParent(i.id)
                    })("change", function (i) {
                        n.yc(t);
                        const a = e.$implicit,
                            o = n.hc(2);
                        return i ? o.selection.toggle(a) : null
                    }), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(1), n.nc("checked", i.selection.isSelected(t))
                }
            }

            function Va(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 22)
            }

            function Oa(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 20), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", null == t ? null : t.fullName, " ")
                }
            }

            function _a(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 22)
            }

            function Pa(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 23), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Mc(" ", null == t ? null : t.streetAddress, ", ", null == t ? null : t.city, ", ", null == t ? null : t.state, ", ", null == t ? null : t.zipCode, " ")
                }
            }

            function xa(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 22)
            }

            function ka(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 20), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Jc(null == t ? null : t.country)
                }
            }

            function Ta(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 22)
            }

            function Aa(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 24), n.Vb(1, "button", 25), n.Qb(2, "i", 26), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.pc("routerLink", "/address/edit/", t.id, "")
                }
            }

            function La(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 22)
            }

            function Ea(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 24), n.Vb(1, "button", 27), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).deleteAddress(i.id)
                    }), n.Qb(2, "i", 28), n.Ub(), n.Ub()
                }
            }

            function Ma(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Ra(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-row", 29), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit,
                            a = e.$implicit,
                            o = n.hc(2);
                        return o.selection.toggle(i), o.emitSelectionToParent(a.id)
                    }), n.Ub()
                }
            }

            function Na(t, e) {
                if (1 & t && (n.Vb(0, "mat-table", 6), n.Tb(1, 7), n.Gc(2, Sa, 1, 0, "mat-header-cell", 8), n.Gc(3, Da, 2, 1, "mat-cell", 9), n.Sb(), n.Tb(4, 10), n.Gc(5, Va, 1, 0, "mat-header-cell", 11), n.Gc(6, Oa, 2, 1, "mat-cell", 9), n.Sb(), n.Tb(7, 12), n.Gc(8, _a, 1, 0, "mat-header-cell", 11), n.Gc(9, Pa, 2, 4, "mat-cell", 13), n.Sb(), n.Tb(10, 14), n.Gc(11, xa, 1, 0, "mat-header-cell", 11), n.Gc(12, ka, 2, 1, "mat-cell", 9), n.Sb(), n.Tb(13, 15), n.Gc(14, Ta, 1, 0, "mat-header-cell", 11), n.Gc(15, Aa, 3, 1, "mat-cell", 16), n.Sb(), n.Tb(16, 17), n.Gc(17, La, 1, 0, "mat-header-cell", 11), n.Gc(18, Ea, 3, 0, "mat-cell", 16), n.Sb(), n.Gc(19, Ma, 1, 0, "mat-header-row", 18), n.Gc(20, Ra, 1, 0, "mat-row", 19), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("dataSource", t.dataSource), n.Db(19), n.nc("matHeaderRowDef", t.displayedColumns), n.Db(1), n.nc("matRowDefColumns", t.displayedColumns)
                }
            }

            function Ba(t, e) {
                1 & t && (n.Vb(0, "div", 30), n.Vb(1, "button", 31), n.Vb(2, "mat-icon"), n.Ic(3, " add "), n.Ub(), n.Vb(4, "span", 5), n.Ic(5, "ADD_NEW_ADDRESS"), n.Ub(), n.Ub(), n.Ub())
            }

            function Ga(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 32), n.dc("click", function () {
                        return n.yc(t), n.hc().chooseAddress()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " navigate_next "), n.Ub(), n.Vb(3, "span", 5), n.Ic(4, "LABEL_CONTINUE"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("disabled", void 0 === t.addressId)
                }
            }
            u.b.add(p.c, p.g), u.a.watch();
            let Fa = (() => {
                class t {
                    constructor(t, e, i, a, o) {
                        this.addressService = t, this.translate = e, this.router = i, this.ngZone = a, this.snackBarHelperService = o, this.emitSelection = new n.o, this.allowEdit = !1, this.addNewAddressDiv = !0, this.showNextButton = !1, this.addressId = void 0, this.displayedColumns = ["Name", "Address", "Country"], this.selection = new Ca.c(!1, []), this.addressExist = !1
                    }
                    ngOnInit() {
                        this.allowEdit ? this.displayedColumns.push("Edit", "Remove") : this.displayedColumns.unshift("Selection"), this.load()
                    }
                    load() {
                        this.addressService.get().subscribe(t => {
                            this.addressExist = t.length, this.storedAddresses = t, this.dataSource = new L.o(this.storedAddresses)
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }
                    emitSelectionToParent(t) {
                        this.selection.hasValue() ? (this.emitSelection.emit(t), this.addressId = t) : (this.emitSelection.emit(void 0), this.addressId = void 0)
                    }
                    chooseAddress() {
                        var t = this;
                        sessionStorage.setItem("addressId", this.addressId), this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/delivery-method"])
                        }))
                    }
                    deleteAddress(t) {
                        this.addressService.del(t).subscribe(() => {
                            this.error = null, this.translate.get("ADDRESS_REMOVED").subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }), this.load()
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Ia), n.Pb(v.e), n.Pb(S.b), n.Pb(n.B), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-address"]
                    ],
                    inputs: {
                        allowEdit: "allowEdit",
                        addNewAddressDiv: "addNewAddressDiv",
                        showNextButton: "showNextButton"
                    },
                    outputs: {
                        emitSelection: "emitSelection"
                    },
                    decls: 6,
                    vars: 7,
                    consts: [
                        [1, "mat-elevation-z6"],
                        ["translate", "", 4, "ngIf"],
                        [3, "dataSource", 4, "ngIf"],
                        ["style", "margin-top: 20px;", 4, "ngIf"],
                        ["mat-raised-button", "", "mat-button", "", "class", "btn btn-next", "color", "primary", "aria-label", "Proceed to payment selection", 3, "disabled", "click", 4, "ngIf"],
                        ["translate", ""],
                        [3, "dataSource"],
                        ["matColumnDef", "Selection"],
                        ["fxFlex", "20%", 4, "matHeaderCellDef"],
                        ["fxFlex", "20%", 4, "matCellDef"],
                        ["matColumnDef", "Name"],
                        ["style", "display: none;", 4, "matHeaderCellDef"],
                        ["matColumnDef", "Address"],
                        ["fxFlex", "40%", 4, "matCellDef"],
                        ["matColumnDef", "Country"],
                        ["matColumnDef", "Edit"],
                        ["fxflex", "10%", 4, "matCellDef"],
                        ["matColumnDef", "Remove"],
                        [4, "matHeaderRowDef"],
                        [3, "click", 4, "matRowDef", "matRowDefColumns"],
                        ["fxFlex", "20%"],
                        [3, "checked", "click", "change"],
                        [2, "display", "none"],
                        ["fxFlex", "40%"],
                        ["fxflex", "10%"],
                        ["mat-icon-button", "", 3, "routerLink"],
                        [1, "far", "fa-edit"],
                        ["mat-icon-button", "", 3, "click"],
                        [1, "far", "fa-trash-alt"],
                        [3, "click"],
                        [2, "margin-top", "20px"],
                        ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Add a new address", "routerLink", "/address/create", 1, "btn", "btn-new-address"],
                        ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to payment selection", 1, "btn", "btn-next", 3, "disabled", "click"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Gc(1, Ua, 2, 0, "h1", 1), n.Gc(2, ya, 2, 0, "h1", 1), n.Gc(3, Na, 21, 3, "mat-table", 2), n.Gc(4, Ba, 6, 0, "div", 3), n.Gc(5, Ga, 5, 1, "button", 4), n.Ub()), 2 & t && (n.Hb("div-boundary", !e.addNewAddressDiv), n.Db(1), n.nc("ngIf", e.showNextButton), n.Db(1), n.nc("ngIf", !e.showNextButton), n.Db(1), n.nc("ngIf", e.addressExist), n.Db(1), n.nc("ngIf", e.addNewAddressDiv), n.Db(1), n.nc("ngIf", e.showNextButton))
                    },
                    directives: [g.a, E.l, v.a, L.n, L.c, L.i, L.b, L.k, L.m, L.h, f.b, L.a, wa.a, I.a, S.c, L.j, L.l, pe.a],
                    styles: [".btn-new-address[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.btn-next[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.div-boundary[_ngcontent-%COMP%]{border:1px solid hsla(0,0%,100%,.3);border-radius:5px;box-shadow:0 0 0!important}"]
                }), t
            })();
            var ja = i("TN/R");
            const Ha = ["addressComp"];

            function Qa(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_QUANTITY "), n.Ub())
            }
            const za = function () {
                return {
                    range: "10-1000"
                }
            };

            function Wa(t, e) {
                1 & t && (n.Vb(0, "mat-error", 21), n.Ic(1, "INVALID_QUANTITY "), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, za))
            }

            function Ka(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "INVALID_DATE"), n.Ub())
            }

            function qa(t, e) {
                if (1 & t && (n.Vb(0, "mat-form-field", 22), n.Vb(1, "mat-label", 2), n.Ic(2, "LABEL_PICKUP_DATE"), n.Ub(), n.Qb(3, "input", 23), n.Qb(4, "mat-datepicker-toggle", 24), n.Qb(5, "mat-datepicker", null, 25), n.Gc(7, Ka, 2, 0, "mat-error", 7), n.Ub()), 2 & t) {
                    const t = n.vc(6),
                        e = n.hc();
                    n.Db(3), n.nc("formControl", e.pickUpDateControl)("matDatepicker", t), n.Db(1), n.nc("for", t), n.Db(3), n.nc("ngIf", e.pickUpDateControl.invalid)
                }
            }

            function $a(t, e) {
                if (1 & t && (n.Vb(0, "mat-checkbox", 26), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("formControl", t.pickup), n.Db(1), n.Kc("", n.jc(2, 2, "REQUEST_PICKUP"), " ")
                }
            }
            u.b.add(m.z), u.a.watch();
            let Ya = (() => {
                class t {
                    constructor(t, e, i, a, n, o) {
                        this.recycleService = t, this.userService = e, this.configurationService = i, this.formSubmitService = a, this.translate = n, this.snackBarHelperService = o, this.requestorControl = new s.e({
                            value: "",
                            disabled: !0
                        }, []), this.recycleQuantityControl = new s.e("", [s.z.required, s.z.min(10), s.z.max(1e3)]), this.pickUpDateControl = new s.e, this.pickup = new s.e(!1), this.recycle = {}, this.addressId = void 0
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.recyclePage) && (this.topImage = `assets/public/images/products/${t.application.recyclePage.topProductImage}`, this.bottomImage = `assets/public/images/products/${t.application.recyclePage.bottomProductImage}`)
                        }, t => console.log(t)), this.initRecycle(), this.findAll(), this.formSubmitService.attachEnterKeyHandler("recycle-form", "recycleButton", () => this.save())
                    }
                    initRecycle() {
                        this.userService.whoAmI().subscribe(t => {
                            this.recycle = {}, this.recycle.UserId = t.id, this.userEmail = t.email, this.requestorControl.setValue(this.userEmail)
                        }, t => console.log(t))
                    }
                    save() {
                        this.recycle.AddressId = this.addressId, this.recycle.quantity = this.recycleQuantityControl.value, this.pickup.value && (this.recycle.isPickUp = this.pickup.value, this.recycle.date = this.pickUpDateControl.value), this.recycleService.save(this.recycle).subscribe(t => {
                            t.isPickup ? this.translate.get("CONFIRM_RECYCLING_PICKUP", {
                                pickupdate: t.pickupDate
                            }).subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }) : this.translate.get("CONFIRM_RECYCLING_BOX").subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }), this.addressComponent.load(), this.initRecycle(), this.resetForm()
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }
                    findAll() {
                        this.recycleService.find().subscribe(t => {
                            this.recycles = t
                        }, t => {
                            console.log(t)
                        })
                    }
                    resetForm() {
                        this.addressId = void 0, this.recycleQuantityControl.setValue(""), this.recycleQuantityControl.markAsPristine(), this.recycleQuantityControl.markAsUntouched(), this.pickUpDateControl.setValue(""), this.pickUpDateControl.markAsPristine(), this.pickUpDateControl.markAsUntouched(), this.pickup.setValue(!1)
                    }
                    getMessage(t) {
                        this.addressId = t
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(va), n.Pb(y), n.Pb(d), n.Pb(At), n.Pb(v.e), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-recycle"]
                    ],
                    viewQuery: function (t, e) {
                        if (1 & t && n.Nc(Ha, 3), 2 & t) {
                            let t;
                            n.uc(t = n.ec()) && (e.addressComponent = t.first)
                        }
                    },
                    decls: 41,
                    vars: 16,
                    consts: [
                        ["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "mat-elevation-z6", "mat-own-card"],
                        ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"],
                        ["translate", ""],
                        ["id", "recycle-form", 1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["type", "text", "matInput", "", 3, "formControl"],
                        ["type", "number", "matInput", "", 3, "formControl", "placeholder"],
                        ["translate", "", 4, "ngIf"],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        [1, "mat-elevation-z0", 3, "addNewAddressDiv", "emitSelection"],
                        ["addressComp", ""],
                        ["appearance", "outline", 4, "ngIf"],
                        [3, "formControl", 4, "ngIf"],
                        ["type", "submit", "id", "recycleButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"],
                        [1, "fas", "fa-paper-plane", "fa-lg"],
                        ["fxFlex", "50%"],
                        ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"],
                        ["translate", "", 1, "responsibility-header"],
                        ["fxLayout", "row", "fxLayoutGap", "20px", 1, "mat-elevation-z0"],
                        ["mat-card-image", "", 3, "src"],
                        [1, "fill-remaining-space"],
                        ["translate", "", 3, "translateParams"],
                        ["appearance", "outline"],
                        ["matInput", "", 3, "formControl", "matDatepicker"],
                        ["matSuffix", "", 3, "for"],
                        ["picker", ""],
                        [3, "formControl"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_RECYCLE"), n.Ub(), n.Vb(4, "div", 3), n.Vb(5, "mat-form-field", 4), n.Vb(6, "mat-label", 2), n.Ic(7, "LABEL_REQUESTOR"), n.Ub(), n.Qb(8, "input", 5), n.Ub(), n.Vb(9, "mat-form-field", 4), n.Vb(10, "mat-label", 2), n.Ic(11, "LABEL_QUANTITY"), n.Ub(), n.Qb(12, "input", 6), n.ic(13, "translate"), n.Gc(14, Qa, 2, 0, "mat-error", 7), n.Gc(15, Wa, 2, 2, "mat-error", 8), n.Ub(), n.Vb(16, "app-address", 9, 10), n.dc("emitSelection", function (t) {
                            return e.getMessage(t)
                        }), n.Ub(), n.Gc(18, qa, 8, 4, "mat-form-field", 11), n.Gc(19, $a, 3, 4, "mat-checkbox", 12), n.Ub(), n.Vb(20, "button", 13), n.dc("click", function () {
                            return e.save()
                        }), n.Qb(21, "i", 14), n.Ic(22), n.ic(23, "translate"), n.Ub(), n.Ub(), n.Vb(24, "div", 15), n.Vb(25, "div", 16), n.Vb(26, "h3", 17), n.Ic(27, "SECTION_PRESS_JUICE_RESPONSIBLY"), n.Ub(), n.Vb(28, "mat-card", 18), n.Qb(29, "img", 19), n.Vb(30, "mat-card-content"), n.Vb(31, "div"), n.Vb(32, "small"), n.Ic(33, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Vb(34, "mat-card", 18), n.Qb(35, "img", 19), n.Vb(36, "mat-card-content"), n.Vb(37, "div"), n.Vb(38, "small"), n.Ic(39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Qb(40, "span", 20), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(8), n.nc("formControl", e.requestorControl), n.Db(4), n.nc("formControl", e.recycleQuantityControl)("placeholder", n.jc(13, 12, "IN_LITERS_PLACEHOLDER")), n.Db(2), n.nc("ngIf", e.recycleQuantityControl.invalid && e.recycleQuantityControl.errors.required), n.Db(1), n.nc("ngIf", e.recycleQuantityControl.invalid && (e.recycleQuantityControl.errors.min || e.recycleQuantityControl.errors.max)), n.Db(1), n.nc("addNewAddressDiv", !1), n.Db(2), n.nc("ngIf", e.pickup.value && e.recycleQuantityControl.value > 100), n.Db(1), n.nc("ngIf", e.recycleQuantityControl.value > 100), n.Db(1), n.nc("disabled", void 0 === e.addressId || e.recycleQuantityControl.invalid || e.pickUpDateControl.invalid), n.Db(2), n.Kc(" ", n.jc(23, 14, "BTN_SUBMIT"), " "), n.Db(7), n.nc("src", e.topImage, n.Bc), n.Db(6), n.nc("src", e.bottomImage, n.Bc))
                    },
                    directives: [g.a, f.d, f.e, f.b, v.a, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, s.u, E.l, Fa, I.a, f.c, g.d, g.b, Lt.b, ja.b, ja.d, Lt.h, ja.a, ri.a],
                    pipes: [v.d],
                    styles: ["mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:5px;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]
                }), t
            })(),
                Ja = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Challenges"
                        }
                        find(t) {
                            return this.http.get(this.host + "/", {
                                params: t
                            }).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        repeatNotification(t) {
                            return this.http.get(this.hostServer + "/rest/repeat-notification", {
                                params: {
                                    challenge: t
                                }
                            }).pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                        continueCode() {
                            return this.http.get(this.hostServer + "/rest/continue-code").pipe(Object(l.a)(t => t.continueCode), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        continueCodeFindIt() {
                            return this.http.get(this.hostServer + "/rest/continue-code-findIt").pipe(Object(l.a)(t => t.continueCode), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        continueCodeFixIt() {
                            return this.http.get(this.hostServer + "/rest/continue-code-fixIt").pipe(Object(l.a)(t => t.continueCode), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        restoreProgress(t) {
                            return this.http.put(this.hostServer + "/rest/continue-code/apply/" + t, {}).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        restoreProgressFindIt(t) {
                            return this.http.put(this.hostServer + "/rest/continue-code-findIt/apply/" + t, {}).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        restoreProgressFixIt(t) {
                            return this.http.put(this.hostServer + "/rest/continue-code-fixIt/apply/" + t, {}).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var Za = i("Iab2"),
                Xa = i("Cfvw"),
                tn = i("LRne");
            let en = (() => {
                class t {
                    constructor(t, e, i, a) {
                        this.cookieService = t, this.challengeService = e, this.snackBarHelperService = i, this.snackBar = a, this.VERSION = 1
                    }
                    save(t = "owasp_juice_shop") {
                        const e = {
                            version: this.VERSION
                        };
                        e.scoreBoard = {
                            displayedDifficulties: localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : void 0,
                            showSolvedChallenges: localStorage.getItem("showSolvedChallenges") ? JSON.parse(String(localStorage.getItem("showSolvedChallenges"))) : void 0,
                            showDisabledChallenges: localStorage.getItem("showDisabledChallenges") ? JSON.parse(String(localStorage.getItem("showDisabledChallenges"))) : void 0,
                            showOnlyTutorialChallenges: localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : void 0,
                            displayedChallengeCategories: localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : void 0
                        }, e.banners = {
                            welcomeBannerStatus: this.cookieService.get("welcomebanner_status") ? this.cookieService.get("welcomebanner_status") : void 0,
                            cookieConsentStatus: this.cookieService.get("cookieconsent_status") ? this.cookieService.get("cookieconsent_status") : void 0
                        }, e.language = this.cookieService.get("language") ? this.cookieService.get("language") : void 0, e.continueCode = this.cookieService.get("continueCode") ? this.cookieService.get("continueCode") : void 0, e.continueCodeFindIt = this.cookieService.get("continueCodeFindIt") ? this.cookieService.get("continueCodeFindIt") : void 0, e.continueCodeFixIt = this.cookieService.get("continueCodeFixIt") ? this.cookieService.get("continueCodeFixIt") : void 0;
                        const i = new Blob([JSON.stringify(e)], {
                            type: "text/plain;charset=utf-8"
                        });
                        Object(Za.saveAs)(i, `${t}-${(new Date).toISOString().split("T")[0]}.json`)
                    }
                    restore(t) {
                        return Object(Xa.a)(t.text().then(e => {
                            var i, a, n, o, r, c, s;
                            const l = JSON.parse(e);
                            l.version === this.VERSION ? (this.restoreLocalStorage("displayedDifficulties", null === (i = l.scoreBoard) || void 0 === i ? void 0 : i.displayedDifficulties), this.restoreLocalStorage("showSolvedChallenges", null === (a = l.scoreBoard) || void 0 === a ? void 0 : a.showSolvedChallenges), this.restoreLocalStorage("showDisabledChallenges", null === (n = l.scoreBoard) || void 0 === n ? void 0 : n.showDisabledChallenges), this.restoreLocalStorage("showOnlyTutorialChallenges", null === (o = l.scoreBoard) || void 0 === o ? void 0 : o.showOnlyTutorialChallenges), this.restoreLocalStorage("displayedChallengeCategories", null === (r = l.scoreBoard) || void 0 === r ? void 0 : r.displayedChallengeCategories), this.restoreCookie("welcomebanner_status", null === (c = l.banners) || void 0 === c ? void 0 : c.welcomeBannerStatus), this.restoreCookie("cookieconsent_status", null === (s = l.banners) || void 0 === s ? void 0 : s.cookieConsentStatus), this.restoreCookie("language", l.language), this.restoreCookie("continueCodeFindIt", l.continueCodeFindIt), this.restoreCookie("continueCodeFixIt", l.continueCodeFixIt), this.restoreCookie("continueCode", l.continueCode), this.snackBar.open("Backup has been restored from " + t.name, "Apply changes now", {
                                duration: 1e4
                            }).onAction().subscribe(() => {
                                const t = l.continueCode ? this.challengeService.restoreProgress(encodeURIComponent(l.continueCode)) : Object(tn.a)(!0),
                                    e = l.continueCodeFindIt ? this.challengeService.restoreProgressFindIt(encodeURIComponent(l.continueCodeFindIt)) : Object(tn.a)(!0),
                                    i = l.continueCodeFixIt ? this.challengeService.restoreProgressFixIt(encodeURIComponent(l.continueCodeFixIt)) : Object(tn.a)(!0);
                                Object(je.a)([t, e, i]).subscribe(() => {
                                    location.reload()
                                }, t => console.log(t))
                            })) : this.snackBarHelperService.open(`Version ${l.version} is incompatible with expected version ${this.VERSION}`, "errorBar")
                        }).catch(t => {
                            this.snackBarHelperService.open(`Backup restore operation failed: ${t.message}`, "errorBar")
                        }))
                    }
                    restoreCookie(t, e) {
                        if (e) {
                            const i = new Date;
                            i.setFullYear(i.getFullYear() + 1), this.cookieService.put(t, e, {
                                expires: i
                            })
                        } else this.cookieService.remove(t)
                    }
                    restoreLocalStorage(t, e) {
                        e ? localStorage.setItem(t, JSON.stringify(e)) : localStorage.removeItem(t)
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(c.b), n.Zb(Ja), n.Zb(A), n.Zb(T.a))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })(),
                an = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/snippets"
                        }
                        get(t) {
                            return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        challenges() {
                            return this.http.get(`${this.host}`).pipe(Object(l.a)(t => t.challenges), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                nn = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/snippets/fixes"
                        }
                        get(t) {
                            return this.http.get(this.host + `/${t}`).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        check(t, e) {
                            return this.http.post(this.host, {
                                key: t,
                                selectedFix: e
                            }).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                on = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/snippets/verdict"
                        }
                        check(t, e) {
                            return this.http.post(this.host, {
                                key: t,
                                selectedLines: e
                            }).pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var rn = i("M9ds"),
                cn = i("dJsq");

            function sn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div", 5), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().selectLines(i.lineNumber)
                    }), n.Ic(1), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Jc(t.marked ? "\u2705" : "\ud83d\udd32")
                }
            }
            let ln = (() => {
                class t {
                    constructor() {
                        this.code = "", this.addLine = new n.o, this.langs = ["javascript", "typescript", "json", "yaml"]
                    }
                    ngOnInit() {
                        this.lineMarkers = this.code.split("\n").map((t, e) => ({
                            lineNumber: e + 1,
                            marked: !1
                        }))
                    }
                    selectLines(t) {
                        const e = this.lineMarkers[t - 1];
                        e.marked = !e.marked;
                        const i = [];
                        for (const {
                            marked: a,
                            lineNumber: n
                        } of this.lineMarkers) a && i.push(n);
                        this.addLine.emit(i)
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-code-area"]
                    ],
                    inputs: {
                        code: "code",
                        vulnLines: "vulnLines"
                    },
                    outputs: {
                        addLine: "addLine"
                    },
                    decls: 6,
                    vars: 4,
                    consts: [
                        ["id", "code-area"],
                        ["id", "code"],
                        ["id", "emphasize"],
                        ["class", "lineMarker", 3, "click", 4, "ngFor", "ngForOf"],
                        [3, "highlight", "lineNumbers", "languages"],
                        [1, "lineMarker", 3, "click"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "pre", 1), n.Vb(2, "div", 2), n.Gc(3, sn, 2, 1, "div", 3), n.Ic(4, "\n  "), n.Ub(), n.Qb(5, "code", 4), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.nc("ngForOf", e.lineMarkers), n.Db(2), n.nc("highlight", e.code)("lineNumbers", !0)("languages", e.langs))
                    },
                    directives: [E.k, cn.b],
                    styles: [".hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;background:#fff;color:#000}.hljs-comment[_ngcontent-%COMP%], .hljs-quote[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%]{color:green}.hljs-built_in[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-selector-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]{color:#00f}.hljs-addition[_ngcontent-%COMP%], .hljs-attribute[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-section[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-template-tag[_ngcontent-%COMP%], .hljs-template-variable[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%], .hljs-type[_ngcontent-%COMP%]{color:#a31515}.hljs-deletion[_ngcontent-%COMP%], .hljs-meta[_ngcontent-%COMP%], .hljs-selector-attr[_ngcontent-%COMP%], .hljs-selector-pseudo[_ngcontent-%COMP%]{color:#2b91af}.hljs-doctag[_ngcontent-%COMP%]{color:grey}.hljs-attr[_ngcontent-%COMP%]{color:red}.hljs-bullet[_ngcontent-%COMP%], .hljs-link[_ngcontent-%COMP%], .hljs-symbol[_ngcontent-%COMP%]{color:#00b0e8}.hljs-emphasis[_ngcontent-%COMP%]{font-style:italic}.hljs-strong[_ngcontent-%COMP%]{font-weight:700}#emphasize[_ngcontent-%COMP%]{float:left;padding:.5em}#code[_ngcontent-%COMP%]{width:60em}.lineMarker[_ngcontent-%COMP%]{cursor:pointer}"]
                }), t
            })();
            var bn = i("wSOg");

            function dn(t, e) {
                if (1 & t && (n.Vb(0, "option", 5), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.index,
                        i = n.hc();
                    n.nc("value", t)("selected", i.selectedFix === t), n.Db(1), n.Kc("Fix ", t + 1, "")
                }
            }

            function un(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Qb(1, "td-ngx-text-diff", 8), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit,
                        e = n.hc();
                    n.Db(1), n.nc("left", e.snippet)("right", null == t ? null : t.fix)
                }
            }

            function hn(t, e) {
                if (1 & t && (n.Vb(0, "div", 6), n.Gc(1, un, 2, 2, "div", 7), n.Ub()), 2 & t) {
                    const t = e.index,
                        i = n.hc();
                    n.Db(1), n.nc("ngIf", i.selectedFix === t)
                }
            }
            let mn = (() => {
                class t {
                    constructor() {
                        this.snippet = "", this.fixes = [], this.emitFix = new n.o, this.selectedFix = 0, this.randomFixes = []
                    }
                    shuffle() {
                        let t = 0;
                        for (const i of this.fixes) this.randomFixes.push({
                            fix: i,
                            index: t
                        }), t++;
                        let e = 100 * Math.random();
                        for (; e > 0;) {
                            const t = this.randomFixes[this.randomFixes.length - 1];
                            for (let e = this.randomFixes.length - 1; e > 0; e--) this.randomFixes[e] = this.randomFixes[e - 1];
                            this.randomFixes[0] = t, e--
                        }
                    }
                    ngOnInit() {
                        this.shuffle(), this.initialEmit()
                    }
                    initialEmit() {
                        void 0 !== this.randomFixes[0] && this.emitFix.emit(this.randomFixes[0].index)
                    }
                    changeFix(t) {
                        this.selectedFix = parseInt(t.target.value, 10), this.emitFix.emit(this.randomFixes[this.selectedFix].index)
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-code-fixes"]
                    ],
                    inputs: {
                        snippet: "snippet",
                        fixes: "fixes"
                    },
                    outputs: {
                        emitFix: "changeFix"
                    },
                    decls: 8,
                    vars: 2,
                    consts: [
                        ["appearance", "fill"],
                        ["translate", ""],
                        ["matNativeControl", "", 3, "change"],
                        [3, "value", "selected", 4, "ngFor", "ngForOf"],
                        ["id", "code", 4, "ngFor", "ngForOf"],
                        [3, "value", "selected"],
                        ["id", "code"],
                        [4, "ngIf"],
                        ["format", "LineByLine", 3, "left", "right"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div"), n.Qb(1, "br"), n.Vb(2, "mat-form-field", 0), n.Vb(3, "mat-label", 1), n.Ic(4, "LABEL_CORRECT_FIX"), n.Ub(), n.Vb(5, "select", 2), n.dc("change", function (t) {
                            return e.changeFix(t)
                        }), n.Gc(6, dn, 2, 3, "option", 3), n.Ub(), n.Ub(), n.Gc(7, hn, 2, 1, "div", 4), n.Ub()), 2 & t && (n.Db(6), n.nc("ngForOf", e.randomFixes), n.Db(1), n.nc("ngForOf", e.randomFixes))
                    },
                    directives: [Lt.c, Lt.g, v.a, Et.b, E.k, s.t, s.B, E.l, bn.a],
                    styles: ["#code[_ngcontent-%COMP%]{width:63em}"]
                }), t
            })();

            function pn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "app-code-area", 16), n.dc("addLine", function (e) {
                        return n.yc(t), n.hc().addLine(e)
                    }), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("code", null == t.snippet ? null : t.snippet.snippet)("vulnLines", null == t.snippet ? null : t.snippet.vulnLines)
                }
            }

            function gn(t, e) {
                1 & t && (n.Vb(0, "pre"), n.Ic(1, "            "), n.Vb(2, "code", 17), n.Ic(3, "LOADING_CODE_SNIPPET"), n.Ub(), n.Ic(4, "\n          "), n.Ub())
            }

            function fn(t, e) {
                if (1 & t && (n.Ic(0), n.ic(1, "translate"), n.Vb(2, "mat-icon", 18), n.Ic(3), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Kc(" ", n.jc(1, 3, "TAB_FIX_IT"), " "), n.Db(2), n.nc("color", t.lockColor()), n.Db(1), n.Jc(t.lockIcon())
                }
            }

            function vn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "app-code-fixes", 19), n.dc("changeFix", function (e) {
                        return n.yc(t), n.hc().setFix(e)
                    }), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("snippet", null == t.snippet ? null : t.snippet.snippet)("fixes", t.fixes)
                }
            }
            var In = function (t) {
                return t[t.Undecided = 0] = "Undecided", t[t.Right = 1] = "Right", t[t.Wrong = 2] = "Wrong", t
            }({});
            let Cn = (() => {
                class t {
                    constructor(t, e, a, n, o, r) {
                        this.dialogData = t, this.codeSnippetService = e, this.vulnLinesService = a, this.codeFixesService = n, this.challengeService = o, this.cookieService = r, this.snippet = null, this.fixes = null, this.tab = new s.e(0), this.lock = In.Undecided, this.result = In.Undecided, this.solved = {
                            findIt: !1,
                            fixIt: !1
                        }, this.addLine = t => {
                            this.selectedLines = t
                        }, this.setFix = t => {
                            this.selectedFix = t
                        }, this.toggleTab = t => {
                            this.tab.setValue(t), this.result = In.Undecided, 0 === t && this.solved.findIt && (this.result = In.Right), 1 === t && this.solved.fixIt && (this.result = In.Right)
                        }, this.checkFix = () => {
                            this.codeFixesService.check(this.dialogData.key, this.selectedFix).subscribe(t => {
                                this.setVerdict(t.verdict)
                            })
                        }, this.checkLines = () => {
                            this.vulnLinesService.check(this.dialogData.key, this.selectedLines).subscribe(t => {
                                this.setVerdict(t.verdict)
                            })
                        }, this.setVerdict = t => {
                            this.result !== In.Right && (t ? (0 === this.tab.value ? (this.solved.findIt = !0, this.challengeService.continueCodeFindIt().subscribe(t => {
                                if (!t) throw new Error("Received invalid continue code from the sever!");
                                const e = new Date;
                                e.setFullYear(e.getFullYear() + 1), console.log(t), this.cookieService.put("continueCodeFindIt", t, {
                                    expires: e
                                })
                            }, t => console.log(t))) : (this.solved.fixIt = !0, this.challengeService.continueCodeFixIt().subscribe(t => {
                                if (!t) throw new Error("Received invalid continue code from the sever!");
                                const e = new Date;
                                e.setFullYear(e.getFullYear() + 1), console.log(t), this.cookieService.put("continueCodeFixIt", t, {
                                    expires: e
                                })
                            }, t => console.log(t))), this.result = In.Right, this.lock = In.Right, i.e(1).then(i.bind(null, "5RHJ")).then(t => {
                                t.shootConfetti()
                            }).then(() => {
                                0 === this.tab.value && null !== this.fixes && this.toggleTab(1)
                            })) : this.result = In.Wrong)
                        }
                    }
                    ngOnInit() {
                        this.codeSnippetService.get(this.dialogData.key).subscribe(t => {
                            this.snippet = t, this.solved.findIt = !1, this.dialogData.codingChallengeStatus >= 1 && (this.result = In.Right, this.lock = In.Right, this.solved.findIt = !0)
                        }, t => {
                            var e;
                            this.snippet = {
                                snippet: JSON.stringify(null === (e = t.error) || void 0 === e ? void 0 : e.error)
                            }
                        }), this.codeFixesService.get(this.dialogData.key).subscribe(t => {
                            this.fixes = t.fixes, this.solved.fixIt = !1, this.dialogData.codingChallengeStatus >= 2 && (this.solved.fixIt = !0)
                        }, () => {
                            this.fixes = null
                        })
                    }
                    lockIcon() {
                        if (null === this.fixes) return "lock";
                        switch (this.lock) {
                            case In.Right:
                                return "lock_open";
                            case In.Wrong:
                            case In.Undecided:
                                return "lock"
                        }
                    }
                    lockColor() {
                        switch (this.lockIcon()) {
                            case "lock_open":
                                return "accent";
                            case "lock":
                                return "warn"
                        }
                    }
                    resultIcon() {
                        switch (this.result) {
                            case In.Right:
                                return "check";
                            case In.Wrong:
                                return "clear";
                            default:
                                return "send"
                        }
                    }
                    resultColor() {
                        switch (this.resultIcon()) {
                            case "check":
                                return "accent";
                            case "clear":
                                return "warn"
                        }
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.a), n.Pb(an), n.Pb(on), n.Pb(nn), n.Pb(Ja), n.Pb(c.b))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-user-details"]
                    ],
                    decls: 47,
                    vars: 32,
                    consts: [
                        ["id", "code-snippet", 1, "mat-typography"],
                        ["mat-stretch-tabs", "", 3, "selectedIndex", "selectedIndexChange"],
                        [3, "label"],
                        ["fxLayout", "column", 1, "container"],
                        ["fxLayout", "row", "fxLayoutGap", "10px"],
                        [3, "code", "vulnLines", "addLine", 4, "ngIf"],
                        [4, "ngIf"],
                        ["align", "end", 1, "dialogAction"],
                        ["mat-button", "", 2, "height", "0", "position", "absolute"],
                        ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons", 3, "mat-dialog-close"],
                        [1, "material-icons"],
                        ["mat-stroked-button", "", 3, "disabled", "click"],
                        [3, "color"],
                        [3, "disabled"],
                        ["mat-tab-label", ""],
                        [3, "snippet", "fixes", "changeFix", 4, "ngIf"],
                        [3, "code", "vulnLines", "addLine"],
                        ["translate", ""],
                        [1, "materaial-icons-outlined", 3, "color"],
                        [3, "snippet", "fixes", "changeFix"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-dialog-content", 0), n.Vb(1, "header"), n.Vb(2, "h1"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Vb(5, "mat-tab-group", 1), n.dc("selectedIndexChange", function (t) {
                            return e.toggleTab(t)
                        }), n.Vb(6, "mat-tab", 2), n.ic(7, "translate"), n.Vb(8, "div", 3), n.Vb(9, "div", 4), n.Gc(10, pn, 1, 2, "app-code-area", 5), n.Gc(11, gn, 5, 0, "pre", 6), n.Ub(), n.Ub(), n.Vb(12, "mat-dialog-actions", 7), n.Qb(13, "button", 8), n.Vb(14, "button", 9), n.Vb(15, "i", 10), n.Ic(16, " close "), n.Ub(), n.Vb(17, "span"), n.Ic(18), n.ic(19, "translate"), n.Ub(), n.Ub(), n.Vb(20, "button", 11), n.dc("click", function () {
                            return e.checkLines()
                        }), n.Vb(21, "span"), n.Ic(22), n.ic(23, "translate"), n.Ub(), n.Vb(24, "mat-icon", 12), n.Ic(25), n.Ub(), n.Ub(), n.Qb(26, "br"), n.Ub(), n.Ub(), n.Vb(27, "mat-tab", 13), n.Gc(28, fn, 4, 5, "ng-template", 14), n.Vb(29, "div", 3), n.Vb(30, "div", 4), n.Gc(31, vn, 1, 2, "app-code-fixes", 15), n.Ub(), n.Ub(), n.Vb(32, "mat-dialog-actions", 7), n.Qb(33, "button", 8), n.Vb(34, "button", 9), n.Vb(35, "i", 10), n.Ic(36, " close "), n.Ub(), n.Vb(37, "span"), n.Ic(38), n.ic(39, "translate"), n.Ub(), n.Ub(), n.Vb(40, "button", 11), n.dc("click", function () {
                            return e.checkFix()
                        }), n.Vb(41, "span"), n.Ic(42), n.ic(43, "translate"), n.Ub(), n.Vb(44, "mat-icon", 12), n.Ic(45), n.Ub(), n.Ub(), n.Qb(46, "br"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Lc("", n.jc(4, 20, "TITLE_CODING_CHALLENGE"), ": ", e.dialogData.name, ""), n.Db(2), n.nc("selectedIndex", e.tab.value), n.Db(1), n.nc("label", n.jc(7, 22, "TAB_FIND_IT")), n.Db(4), n.nc("ngIf", null !== e.snippet), n.Db(1), n.nc("ngIf", null === e.snippet), n.Db(3), n.nc("mat-dialog-close", e.solved), n.Db(4), n.Kc(" ", n.jc(19, 24, "BTN_CLOSE"), ""), n.Db(2), n.nc("disabled", e.solved.findIt), n.Db(2), n.Kc(" ", n.jc(23, 26, "BTN_SUBMIT"), ""), n.Db(2), n.nc("color", e.resultColor()), n.Db(1), n.Kc(" ", e.resultIcon(), " "), n.Db(2), n.nc("disabled", "lock" === e.lockIcon()), n.Db(4), n.nc("ngIf", null !== e.snippet && null !== e.fixes), n.Db(3), n.nc("mat-dialog-close", e.solved), n.Db(4), n.Kc(" ", n.jc(39, 28, "BTN_CLOSE"), ""), n.Db(2), n.nc("disabled", e.solved.fixIt), n.Db(2), n.Kc(" ", n.jc(43, 30, "BTN_SUBMIT"), ""), n.Db(2), n.nc("color", e.resultColor()), n.Db(1), n.Kc(" ", e.resultIcon(), " "))
                    },
                    directives: [_e.e, rn.b, rn.a, f.d, f.e, E.l, _e.c, I.a, _e.d, pe.a, rn.c, ln, v.a, mn],
                    pipes: [v.d],
                    styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.stretched-tabs[_ngcontent-%COMP%]{max-width:600px}#code-snippet[_ngcontent-%COMP%]{width:65em}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
                }), t
            })();
            var wn = i("7g+E"),
                Un = i("BTe0"),
                yn = i("Ynp+"),
                Sn = i("f44v");

            function Dn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 3), n.dc("click", function () {
                        return n.yc(t), n.hc().repeatNotification()
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon", 4), n.Ic(3, "flag"), n.Ub(), n.Vb(4, "mat-icon", 4), n.Ic(5, "check_box"), n.Ub(), n.Vb(6, "span", 5), n.Ic(7), n.ic(8, "translate"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("id", t.challenge.name + ".solved")("matTooltip", t.allowRepeatNotifications ? n.jc(1, 5, "NOTIFICATION_RESEND_INSTRUCTIONS") : null), n.Db(2), n.nc("hidden", !t.allowRepeatNotifications), n.Db(2), n.nc("hidden", t.allowRepeatNotifications), n.Db(3), n.Jc(n.jc(8, 7, "STATUS_SOLVED"))
                }
            }

            function Vn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 6), n.dc("click", function () {
                        return n.yc(t), n.hc().openHint()
                    }), n.Vb(1, "mat-icon", 4), n.Ic(2, "book"), n.Ub(), n.Vb(3, "mat-icon", 4), n.Ic(4, "check_box_outline_blank"), n.Ub(), n.Vb(5, "span", 5), n.Ic(6), n.ic(7, "translate"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("id", t.challenge.name + ".notSolved")("matTooltip", t.showChallengeHints ? t.challenge.hint : null), n.Db(1), n.nc("hidden", !t.showChallengeHints || !t.challenge.hintUrl), n.Db(2), n.nc("hidden", t.showChallengeHints && t.challenge.hintUrl), n.Db(3), n.Jc(n.jc(7, 5, "STATUS_UNSOLVED"))
                }
            }

            function On(t, e) {
                if (1 & t && n.Qb(0, "i"), 2 & t) {
                    const t = n.hc(2);
                    n.Fb("icon-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
                }
            }

            function _n(t, e) {
                if (1 & t && n.Qb(0, "i"), 2 & t) {
                    const t = n.hc(2);
                    n.Fb("fab fa-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
                }
            }

            function Pn(t, e) {
                if (1 & t && (n.Vb(0, "button", 7), n.Vb(1, "span"), n.Gc(2, On, 1, 3, "i", 8), n.Gc(3, _n, 1, 3, "i", 8), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("id", t.challenge.name + ".unavailable")("matTooltip", t.challenge.hint), n.Db(2), n.nc("ngIf", "Windows" !== t.challenge.disabledEnv), n.Db(1), n.nc("ngIf", "Windows" === t.challenge.disabledEnv), n.Db(1), n.Kc(" ", n.jc(5, 5, "STATUS_UNAVAILABLE"), " ")
                }
            }
            u.b.add(h.l), u.a.watch();
            let xn = (() => {
                class t {
                    constructor(t, e) {
                        this.challengeService = t, this.windowRefService = e, this.challenge = {}, this.allowRepeatNotifications = !1, this.showChallengeHints = !0
                    }
                    repeatNotification() {
                        this.allowRepeatNotifications && this.challengeService.repeatNotification(encodeURIComponent(this.challenge.name)).subscribe(() => {
                            this.windowRefService.nativeWindow.scrollTo(0, 0)
                        }, t => console.log(t))
                    }
                    openHint() {
                        this.showChallengeHints && this.challenge.hintUrl && this.windowRefService.nativeWindow.open(this.challenge.hintUrl, "_blank")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Ja), n.Pb(oi))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-challenge-status-badge"]
                    ],
                    inputs: {
                        challenge: "challenge",
                        allowRepeatNotifications: "allowRepeatNotifications",
                        showChallengeHints: "showChallengeHints"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"],
                        ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"],
                        ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip", 4, "ngIf"],
                        ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"],
                        [3, "hidden"],
                        ["fxShow", "", "fxHide.lt-lg", ""],
                        ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"],
                        ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip"],
                        [3, "class", 4, "ngIf"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Gc(0, Dn, 9, 9, "button", 0), n.Gc(1, Vn, 8, 7, "button", 1), n.Gc(2, Pn, 6, 7, "button", 2)), 2 & t && (n.nc("ngIf", !e.challenge.disabledEnv && e.challenge.solved), n.Db(1), n.nc("ngIf", !e.challenge.disabledEnv && !e.challenge.solved), n.Db(1), n.nc("ngIf", e.challenge.disabledEnv))
                    },
                    directives: [E.l, I.a, ge.a, pe.a, M.b],
                    pipes: [v.d],
                    styles: [""]
                }), t
            })();
            var kn = i("8Qe2");
            const Tn = function (t) {
                return {
                    num: t
                }
            },
                An = function (t) {
                    return {
                        tier: t
                    }
                };

            function Ln(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-button-toggle", 6), n.dc("change", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().toggleDifficulty(i)
                    }), n.ic(1, "translate"), n.ic(2, "translate"), n.Vb(3, "label"), n.Vb(4, "span", 23), n.gc(), n.Vb(5, "svg", 24), n.Vb(6, "linearGradient", 25), n.Qb(7, "stop", 26), n.Qb(8, "stop", 27), n.Ub(), n.Qb(9, "path", 28), n.Ub(), n.fc(), n.Vb(10, "span", 29), n.Ic(11), n.Ub(), n.Vb(12, "span"), n.Ic(13), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.nc("checked", i.displayedDifficulties.includes(t))("disabled", i.restrictToTutorialsFirst && t > i.tutorialsTier)("matTooltip", i.restrictToTutorialsFirst && !i.allTutorialsCompleted && t > i.tutorialsTier ? i.isLastTutorialsTier ? n.kc(1, 13, "INFO_FULL_CHALLENGE_MODE", n.sc(19, Tn, i.challenges.length)) : n.kc(2, 16, "INFO_NEXT_TUTORIAL_TIER", n.sc(21, An, "\u2605".repeat(i.tutorialsTier))) : ""), n.Db(5), n.Dc("fill", "url(#" + t + ")"), n.Db(1), n.nc("id", t), n.Db(1), n.Eb("offset", i.challenges ? i.offsetValue[t - 1] : "100%"), n.Db(1), n.Eb("offset", i.challenges ? i.offsetValue[t - 1] : "100%"), n.Db(1), n.Eb("fill", "inherit"), n.Db(2), n.Jc(t), n.Db(1), n.Fb("fa-layers-counter " + (i.solvedChallengesOfDifficulty[t - 1].length === i.totalChallengesOfDifficulty[t - 1].length ? "accent-notification" : 0 === i.solvedChallengesOfDifficulty[t - 1].length ? "warn-notification" : "primary-notification")), n.Db(1), n.Kc(" ", i.solvedChallengesOfDifficulty[t - 1].length + "/" + i.totalChallengesOfDifficulty[t - 1].length, " ")
                }
            }

            function En(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-button-toggle", 30), n.dc("change", function () {
                        return n.yc(t), n.hc().toggleShowOnlyTutorialChallenges()
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " school "), n.Ub(), n.Ic(4), n.ic(5, "translate"), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("checked", t.showOnlyTutorialChallenges)("disabled", t.restrictToTutorialsFirst && !t.allTutorialsCompleted)("matTooltip", t.restrictToTutorialsFirst && !t.allTutorialsCompleted ? n.kc(1, 4, "INFO_FULL_CHALLENGE_MODE", n.sc(9, Tn, t.challenges.length)) : ""), n.Db(4), n.Kc(" ", n.jc(5, 7, "BTN_SHOW_ONLY_TUTORIALS"), " ")
                }
            }

            function Mn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-button-toggle", 6), n.dc("change", function () {
                        return n.yc(t), n.hc().toggleShowDisabledChallenges()
                    }), n.ic(1, "translate"), n.Qb(2, "i", 31), n.Ic(3), n.ic(4, "translate"), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.nc("checked", t.showDisabledChallenges)("disabled", t.restrictToTutorialsFirst && !t.allTutorialsCompleted)("matTooltip", t.restrictToTutorialsFirst && !t.allTutorialsCompleted ? n.kc(1, 4, "INFO_FULL_CHALLENGE_MODE", n.sc(9, Tn, t.challenges.length)) : ""), n.Db(3), n.Kc(" ", n.jc(4, 7, "BTN_SHOW_UNAVAILABLE"), " ")
                }
            }

            function Rn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 32), n.dc("click", function () {
                        return n.yc(t), n.hc().saveBackup()
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " save_alt "), n.Ub(), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "SAVE_BACKUP_TOOLTIP"))
            }

            function Nn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 33), n.dc("click", function () {
                        return n.yc(t), n.hc(), n.vc(24).click()
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " settings_backup_restore "), n.Ub(), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "RESTORE_BACKUP_TOOLTIP"))
            }
            const Bn = function (t, e) {
                return {
                    num: t,
                    env: e
                }
            };

            function Gn(t, e) {
                if (1 & t && (n.Qb(0, "div", 34), n.ic(1, "translate")), 2 & t) {
                    const t = n.hc();
                    n.nc("innerHTML", n.kc(1, 1, "INFO_DISABLED_CHALLENGES", n.tc(4, Bn, t.numDisabledChallenges, t.disabledEnv)), n.zc)
                }
            }

            function Fn(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-button-toggle", 35), n.dc("change", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().toggleShowChallengeCategory(i)
                    }), n.ic(1, "translate"), n.ic(2, "translate"), n.Ic(3), n.ic(4, "translate"), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.nc("checked", i.displayedChallengeCategories.includes(t))("disabled", i.restrictToTutorialsFirst && !i.allTutorialsCompleted)("matTooltip", i.restrictToTutorialsFirst && !i.allTutorialsCompleted ? n.kc(1, 4, "INFO_FULL_CHALLENGE_MODE", n.sc(11, Tn, i.challenges.length)) : n.jc(2, 7, "CATEGORY_" + (null == t ? null : t.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")), n.Db(3), n.Kc(" ", n.jc(4, 9, "CATEGORY_" + (null == t ? null : t.toUpperCase().split(" ").join("_"))), " ")
                }
            }

            function jn(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 55), n.Ic(1, "LABEL_NAME"), n.Ub())
            }

            function Hn(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.name, " ")
                }
            }

            function Qn(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 56), n.Ic(1, "LABEL_DIFFICULTY"), n.Ub())
            }

            function zn(t, e) {
                1 & t && (n.Vb(0, "mat-icon"), n.Ic(1, " star_rate "), n.Ub())
            }

            function Wn(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 57), n.Gc(1, zn, 2, 0, "mat-icon", 58), n.Ub()), 2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(1), n.nc("ngForOf", i.times(t.difficulty))
                }
            }

            function Kn(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 59), n.Ic(1, "LABEL_DESCRIPTION "), n.Ub())
            }

            function qn(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 60), n.Qb(1, "div", 61), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("innerHTML", t.description, n.zc)
                }
            }

            function $n(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 62), n.Ic(1, "LABEL_CATEGORY"), n.Ub())
            }

            function Yn(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 63), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", n.jc(2, 1, "CATEGORY_" + (null == t.category ? null : t.category.toUpperCase().split(" ").join("_"))), " ")
                }
            }

            function Jn(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 64), n.Ic(1, "LABEL_TAGS"), n.Ub())
            }

            function Zn(t, e) {
                if (1 & t && (n.Vb(0, "mat-chip-list"), n.Vb(1, "mat-chip", 67), n.ic(2, "translate"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("matTooltip", n.jc(2, 2, "TAG_" + (null == t ? null : t.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")), n.Db(2), n.Kc(" ", n.jc(4, 4, "TAG_" + (null == t ? null : t.toUpperCase().split(" ").join("_"))), " ")
                }
            }

            function Xn(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Gc(1, Zn, 5, 6, "mat-chip-list", 58), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit;
                    n.Db(1), n.nc("ngForOf", t.tags.split(",").sort())
                }
            }

            function to(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 65), n.Gc(1, Xn, 2, 1, "span", 66), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngIf", t.tags)
                }
            }

            function eo(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 55), n.Ic(1, "LABEL_STATUS"), n.Ub())
            }

            function io(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 73), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc(2).startHackingInstructor(e.name)
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " school "), n.Ub(), n.Ub()
                }
                2 & t && n.nc("matTooltip", n.jc(1, 1, "INFO_HACKING_INSTRUCTOR"))
            }

            function ao(t, e) {
                if (1 & t && (n.Vb(0, "a", 74), n.Vb(1, "button", 75), n.ic(2, "translate"), n.Vb(3, "mat-icon"), n.Ic(4, " policy "), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit;
                    n.nc("href", t.mitigationUrl, n.Bc), n.Db(1), n.nc("matTooltip", n.jc(2, 2, "INFO_VULNERABILITY_MITIGATION_LINK"))
                }
            }

            function no(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 76), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc(2).showCodeSnippet(e.key, e.name, e.codingChallengeStatus)
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon", 77), n.Ic(3, " code "), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc().$implicit,
                        e = n.hc(2);
                    n.nc("disabled", "solved" === e.showCodeSnippets && !t.solved)("matTooltip", n.jc(1, 4, "LAUNCH_CODING_CHALLENGE"))("color", e.generateColor(t)), n.Db(2), n.nc("matBadge", e.generateBadge(t))
                }
            }

            function oo(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Qb(1, "app-challenge-status-badge", 68), n.Gc(2, io, 4, 3, "button", 69), n.Gc(3, ao, 5, 4, "a", 70), n.Vb(4, "div", 71), n.ic(5, "translate"), n.Gc(6, no, 4, 6, "button", 72), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(1), n.nc("challenge", t)("allowRepeatNotifications", i.allowRepeatNotifications)("showChallengeHints", i.showChallengeHints), n.Db(1), n.nc("ngIf", i.showHackingInstructor && !t.solved && !t.disabledEnv && t.hasTutorial), n.Db(1), n.nc("ngIf", i.showVulnerabilityMitigations && t.solved && t.mitigationUrl), n.Db(1), n.nc("matTooltip", n.jc(5, 8, "SOLVE_HACKING_CHALLENGE"))("matTooltipDisabled", !t.hasSnippet || "solved" === i.showCodeSnippets && t.solved || "always" === i.showCodeSnippets), n.Db(2), n.nc("ngIf", t.hasSnippet && "never" !== i.showCodeSnippets)
                }
            }

            function ro(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function co(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function so(t, e) {
                if (1 & t && (n.Vb(0, "mat-table", 36), n.Tb(1, 37), n.Gc(2, jn, 2, 0, "mat-header-cell", 38), n.Gc(3, Hn, 2, 1, "mat-cell", 39), n.Sb(), n.Tb(4, 40), n.Gc(5, Qn, 2, 0, "mat-header-cell", 41), n.Gc(6, Wn, 2, 1, "mat-cell", 42), n.Sb(), n.Tb(7, 43), n.Gc(8, Kn, 2, 0, "mat-header-cell", 44), n.Gc(9, qn, 2, 1, "mat-cell", 45), n.Sb(), n.Tb(10, 46), n.Gc(11, $n, 2, 0, "mat-header-cell", 47), n.Gc(12, Yn, 3, 3, "mat-cell", 48), n.Sb(), n.Tb(13, 49), n.Gc(14, Jn, 2, 0, "mat-header-cell", 50), n.Gc(15, to, 2, 1, "mat-cell", 51), n.Sb(), n.Tb(16, 52), n.Gc(17, eo, 2, 0, "mat-header-cell", 38), n.Gc(18, oo, 7, 10, "mat-cell", 39), n.Sb(), n.Gc(19, ro, 1, 0, "mat-header-row", 53), n.Gc(20, co, 1, 0, "mat-row", 54), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("dataSource", t.filterToDataSource(t.challenges))("trackBy", t.trackById), n.Db(19), n.nc("matHeaderRowDef", t.displayedColumns), n.Db(1), n.nc("matRowDefColumns", t.displayedColumns)
                }
            }

            function lo(t, e) {
                1 & t && (n.Qb(0, "mat-card", 82), n.ic(1, "translate")), 2 & t && n.nc("innerHTML", n.jc(1, 1, "CALL_FOR_CONTRIBUTIONS"), n.zc)
            }
            const bo = function (t, e) {
                return {
                    appname: t,
                    questionnaire: e
                }
            };

            function uo(t, e) {
                if (1 & t && (n.Qb(0, "mat-card", 83), n.ic(1, "translate")), 2 & t) {
                    const t = n.hc(2);
                    n.nc("innerHTML", n.kc(1, 1, "CALL_FOR_FEEDBACK", n.tc(4, bo, t.appName, t.questionnaireUrl)), n.zc)
                }
            }

            function ho(t, e) {
                if (1 & t && (n.Vb(0, "div", 78), n.Gc(1, lo, 2, 3, "mat-card", 79), n.Qb(2, "span", 80), n.Gc(3, uo, 2, 7, "mat-card", 81), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("ngIf", t.showContributionInfoBox), n.Db(2), n.nc("ngIf", t.questionnaireUrl)
                }
            }
            u.b.add(m.K, p.d, h.e, h.d, h.b, m.V, m.B), u.a.watch();
            let mo = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c, s, l) {
                        this.configurationService = t, this.challengeService = e, this.codeSnippetService = i, this.sanitizer = a, this.ngZone = n, this.io = o, this.spinner = r, this.translate = c, this.localBackupService = s, this.dialog = l, this.availableDifficulties = [1, 2, 3, 4, 5, 6], this.displayedDifficulties = [1], this.availableChallengeCategories = [], this.displayedChallengeCategories = [], this.toggledMajorityOfDifficulties = !1, this.toggledMajorityOfCategories = !0, this.showSolvedChallenges = !0, this.numDisabledChallenges = 0, this.showDisabledChallenges = !1, this.showOnlyTutorialChallenges = !1, this.restrictToTutorialsFirst = !1, this.allTutorialsCompleted = !1, this.isLastTutorialsTier = !1, this.tutorialsTier = 1, this.displayedColumns = ["name", "difficulty", "description", "category", "tags", "status"], this.offsetValue = ["100%", "100%", "100%", "100%", "100%", "100%"], this.allowRepeatNotifications = !1, this.showChallengeHints = !0, this.showVulnerabilityMitigations = !0, this.showCodeSnippets = "solved", this.showHackingInstructor = !0, this.challenges = [], this.percentChallengesSolved = "0", this.solvedChallengesOfDifficulty = [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ], this.totalChallengesOfDifficulty = [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ], this.showContributionInfoBox = !0, this.questionnaireUrl = "https://forms.gle/2Tr5m1pqnnesApxN8", this.appName = "OWASP Juice Shop", this.localBackupEnabled = !0
                    }
                    ngOnInit() {
                        this.spinner.show(), this.displayedDifficulties = localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : [1], this.showSolvedChallenges = !localStorage.getItem("showSolvedChallenges") || JSON.parse(String(localStorage.getItem("showSolvedChallenges"))), this.showDisabledChallenges = !!localStorage.getItem("showDisabledChallenges") && JSON.parse(String(localStorage.getItem("showDisabledChallenges"))), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e, a, n;
                            this.allowRepeatNotifications = t.challenges.showSolvedNotifications && (null === (e = t.ctf) || void 0 === e ? void 0 : e.showFlagsInNotifications), this.showChallengeHints = t.challenges.showHints, this.showVulnerabilityMitigations = t.challenges.showMitigations, this.showCodeSnippets = t.challenges.showCodeSnippets, this.showHackingInstructor = null === (a = t.hackingInstructor) || void 0 === a ? void 0 : a.isEnabled, this.showContributionInfoBox = t.application.showGitHubLinks, this.questionnaireUrl = null === (n = t.application.social) || void 0 === n ? void 0 : n.questionnaireUrl, this.appName = t.application.name, this.restrictToTutorialsFirst = t.challenges.restrictToTutorialsFirst, this.showOnlyTutorialChallenges = localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : this.restrictToTutorialsFirst, this.localBackupEnabled = t.application.localBackupEnabled, this.challengeService.find({
                                sort: "name"
                            }).subscribe(t => {
                                this.codeSnippetService.challenges().subscribe(e => {
                                    this.challenges = t;
                                    for (let a = 0; a < this.challenges.length; a++) this.augmentHintText(this.challenges[a]), this.trustDescriptionHtml(this.challenges[a]), "Score Board" === this.challenges[a].name && (this.challenges[a].solved = !0), this.availableChallengeCategories.includes(t[a].category) || this.availableChallengeCategories.push(t[a].category), this.showHackingInstructor && i.e(6).then(i.bind(null, "s2oO")).then(e => {
                                        t[a].hasTutorial = e.hasInstructions(t[a].name)
                                    }), t[a].hasSnippet = e.indexOf(t[a].key) > -1;
                                    this.availableChallengeCategories.sort((t, e) => t.localeCompare(e)), this.displayedChallengeCategories = localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : this.availableChallengeCategories, this.calculateProgressPercentage(), this.populateFilteredChallengeLists(), this.calculateGradientOffsets(t), this.calculateTutorialTier(t), this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties(), this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories(), this.showOnlyTutorialChallenges && this.challenges.sort((t, e) => t.tutorialOrder - e.tutorialOrder), this.spinner.hide()
                                })
                            }, t => {
                                this.challenges = [], console.log(t)
                            })
                        }, t => console.log(t)), this.ngZone.runOutsideAngular(() => {
                            this.io.socket().on("challenge solved", t => {
                                if (null == t ? void 0 : t.challenge) {
                                    for (let e = 0; e < this.challenges.length; e++)
                                        if (this.challenges[e].name === t.name) {
                                            this.challenges[e].solved = !0;
                                            break
                                        } this.calculateProgressPercentage(), this.populateFilteredChallengeLists(), this.calculateGradientOffsets(this.challenges), this.calculateTutorialTier(this.challenges)
                                }
                            })
                        })
                    }
                    augmentHintText(t) {
                        t.disabledEnv ? (this.numDisabledChallenges++, this.disabledEnv = t.disabledEnv, this.translate.get("CHALLENGE_UNAVAILABLE", {
                            env: t.disabledEnv
                        }).subscribe(e => {
                            t.hint = e
                        }, e => {
                            t.hint = e
                        })) : t.hintUrl && (t.hint ? this.translate.get("CLICK_FOR_MORE_HINTS").subscribe(e => {
                            t.hint += ` ${e}`
                        }, e => {
                            t.hint += ` ${e}`
                        }) : this.translate.get("CLICK_TO_OPEN_HINTS").subscribe(e => {
                            t.hint = e
                        }, e => {
                            t.hint = e
                        }))
                    }
                    trustDescriptionHtml(t) {
                        t.description = this.sanitizer.bypassSecurityTrustHtml(t.description)
                    }
                    calculateProgressPercentage() {
                        let t = 0;
                        for (let e = 0; e < this.challenges.length; e++) t += this.challenges[e].solved ? 1 : 0;
                        this.percentChallengesSolved = (100 * t / this.challenges.length).toFixed(0)
                    }
                    calculateTutorialTier(t) {
                        this.allTutorialsCompleted = !0, this.isLastTutorialsTier = !0, this.tutorialsTier = 1;
                        for (let e = 1; e <= 6; e++) {
                            const i = t.filter(t => t.tutorialOrder && t.difficulty === e).length,
                                a = t.filter(t => t.tutorialOrder && t.difficulty === e && t.solved).length;
                            this.allTutorialsCompleted = this.allTutorialsCompleted && i === a, this.tutorialsTier === e && i === a && this.tutorialsTier++
                        }
                        if (!this.allTutorialsCompleted) {
                            this.isLastTutorialsTier = 0 === t.filter(t => t.tutorialOrder && !t.solved && t.difficulty > this.tutorialsTier).length;
                            for (let t = 1; t <= this.tutorialsTier; t++) this.displayedDifficulties.includes(t) || this.toggleDifficulty(this.tutorialsTier)
                        }
                    }
                    calculateGradientOffsets(t) {
                        for (let e = 1; e <= 6; e++) this.offsetValue[e - 1] = this.calculateGradientOffset(t, e)
                    }
                    calculateGradientOffset(t, e) {
                        let i = 0,
                            a = 0;
                        for (let o = 0; o < t.length; o++) t[o].difficulty === e && (a++, t[o].solved && i++);
                        let n = Math.round(100 * i / a);
                        return n = 100 - n, +n + "%"
                    }
                    toggleDifficulty(t) {
                        this.displayedDifficulties.includes(t) ? this.displayedDifficulties = this.displayedDifficulties.filter(e => e !== t) : this.displayedDifficulties.push(t), localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties)), this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties()
                    }
                    toggleAllDifficulty() {
                        this.toggledMajorityOfDifficulties ? (this.displayedDifficulties = [], this.toggledMajorityOfDifficulties = !1) : (this.displayedDifficulties = this.availableDifficulties, this.toggledMajorityOfDifficulties = !0), localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties))
                    }
                    toggleShowSolvedChallenges() {
                        this.showSolvedChallenges = !this.showSolvedChallenges, localStorage.setItem("showSolvedChallenges", JSON.stringify(this.showSolvedChallenges))
                    }
                    toggleShowDisabledChallenges() {
                        this.showDisabledChallenges = !this.showDisabledChallenges, localStorage.setItem("showDisabledChallenges", JSON.stringify(this.showDisabledChallenges))
                    }
                    toggleShowOnlyTutorialChallenges() {
                        this.showOnlyTutorialChallenges = !this.showOnlyTutorialChallenges, localStorage.setItem("showOnlyTutorialChallenges", JSON.stringify(this.showOnlyTutorialChallenges)), this.challenges.sort(this.showOnlyTutorialChallenges ? (t, e) => t.tutorialOrder - e.tutorialOrder : (t, e) => t.name < e.name ? -1 : t.name > e.name ? 1 : 0)
                    }
                    toggleShowChallengeCategory(t) {
                        this.displayedChallengeCategories.includes(t) ? this.displayedChallengeCategories = this.displayedChallengeCategories.filter(e => e !== t) : this.displayedChallengeCategories.push(t), localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories)), this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories()
                    }
                    toggleAllChallengeCategory() {
                        this.toggledMajorityOfCategories ? (this.displayedChallengeCategories = [], this.toggledMajorityOfCategories = !1) : (this.displayedChallengeCategories = this.availableChallengeCategories, this.toggledMajorityOfCategories = !0), localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories))
                    }
                    determineToggledMajorityOfDifficulties() {
                        return this.displayedDifficulties.length > this.availableDifficulties.length / 2
                    }
                    determineToggledMajorityOfCategories() {
                        return this.displayedChallengeCategories.length > this.availableChallengeCategories.length / 2
                    }
                    filterToDataSource(t) {
                        t = t.filter(t => !(!this.displayedDifficulties.includes(t.difficulty) || !this.displayedChallengeCategories.includes(t.category) || !this.showSolvedChallenges && t.solved || !this.showDisabledChallenges && t.disabledEnv || this.showOnlyTutorialChallenges && !t.hasTutorial));
                        const e = new L.o;
                        return e.data = t, e
                    }
                    populateFilteredChallengeLists() {
                        for (const t of this.availableDifficulties) 0 === this.challenges.length ? (this.totalChallengesOfDifficulty[t - 1] = [], this.solvedChallengesOfDifficulty[t - 1] = []) : (this.totalChallengesOfDifficulty[t - 1] = this.challenges.filter(e => e.difficulty === t), this.solvedChallengesOfDifficulty[t - 1] = this.challenges.filter(e => e.difficulty === t && e.solved))
                    }
                    startHackingInstructor(t) {
                        console.log(`Starting instructions for challenge "${t}"`), i.e(6).then(i.bind(null, "s2oO")).then(e => {
                            e.startHackingInstructorFor(t)
                        })
                    }
                    trackById(t, e) {
                        return e.id
                    }
                    times(t) {
                        return Array(t).fill("\u2605")
                    }
                    saveBackup() {
                        this.localBackupService.save(this.appName.toLowerCase().replace(/ /, "_"))
                    }
                    restoreBackup(t) {
                        this.localBackupService.restore(t)
                    }
                    showCodeSnippet(t, e, i) {
                        this.dialog.open(Cn, {
                            disableClose: !0,
                            data: {
                                key: t,
                                name: e,
                                codingChallengeStatus: i
                            }
                        }).afterClosed().subscribe(t => {
                            for (const i of this.challenges) i.name === e && (i.codingChallengeStatus < 1 && (i.codingChallengeStatus = t.findIt ? 1 : i.codingChallengeStatus), i.codingChallengeStatus < 2 && (i.codingChallengeStatus = t.fixIt ? 2 : i.codingChallengeStatus))
                        })
                    }
                    generateColor(t) {
                        return 2 === t.codingChallengeStatus ? "accent" : "primary"
                    }
                    generateBadge(t) {
                        return 1 === t.codingChallengeStatus ? "1/2" : ""
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(d), n.Pb(Ja), n.Pb(an), n.Pb(a.c), n.Pb(n.B), n.Pb(Qe), n.Pb(wn.c), n.Pb(v.e), n.Pb(en), n.Pb(_e.b))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-score-board"]
                    ],
                    decls: 38,
                    vars: 34,
                    consts: [
                        ["fxLayout", "column"],
                        [1, "confirmation"],
                        ["mode", "determinate", 3, "color", "value"],
                        ["fxLayout", "row wrap", 1, "star-container"],
                        ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"],
                        ["id", "btnToggleAllDifficulties", 1, "mat-button", 3, "disabled", "click"],
                        ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"],
                        ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-trophy"],
                        ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"],
                        ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"],
                        ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"],
                        [1, "form-group"],
                        ["type", "file", 2, "display", "none", 3, "change"],
                        ["restoreBackupFile", ""],
                        ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"],
                        ["class", "disabled-challenges-infoBox mat-button", 3, "innerHTML", 4, "ngIf"],
                        ["fxLayout", "row wrap", 1, "category-container"],
                        ["class", "category-toggle", "appearance", "legacy", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"],
                        [1, "mat-button", 3, "disabled", "click"],
                        [3, "dataSource", "trackBy", 4, "ngIf"],
                        ["fxLayout", "row", "fxLayout.lt-lg", "column", 4, "ngIf"],
                        ["src", "assets/public/images/padding/1px.png"],
                        ["type", "timer", "size", "large", 1, "overlay-fullscreen"],
                        [1, "fa-4x", "fa-layers", "fa-fw", 2, "display", "block", "margin", "5px"],
                        ["aria-hidden", "true", "data-prefix", "fa", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "data-fa-i2svg", "", "stroke-width", "10", 1, "svg-inline--fa", "fa-star", "fa-w-18", "star-border"],
                        ["x1", "0", "x2", "0", "y1", "0", "y2", "100%", 3, "id"],
                        [1, "empty-star"],
                        [1, "filled-star"],
                        ["d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"],
                        ["data-fa-transform", "shrink-9", 1, "fa-layers-text", "fa-inverse", 2, "font-weight", "900"],
                        ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"],
                        ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-exclamation-circle"],
                        ["mat-fab", "", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"],
                        ["mat-fab", "", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"],
                        [1, "disabled-challenges-infoBox", "mat-button", 3, "innerHTML"],
                        ["appearance", "legacy", "matTooltipPosition", "above", 1, "category-toggle", 3, "checked", "disabled", "matTooltip", "change"],
                        [3, "dataSource", "trackBy"],
                        ["matColumnDef", "name"],
                        ["translate", "", 4, "matHeaderCellDef"],
                        [4, "matCellDef"],
                        ["matColumnDef", "difficulty"],
                        ["fxShow", "", "fxHide.lt-sm", "", "translate", "", 4, "matHeaderCellDef"],
                        ["fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"],
                        ["matColumnDef", "description"],
                        ["fxFlex", "1 1 31%", "translate", "", 4, "matHeaderCellDef"],
                        ["fxFlex", "1 1 31%", 4, "matCellDef"],
                        ["matColumnDef", "category"],
                        ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"],
                        ["fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"],
                        ["matColumnDef", "tags"],
                        ["fxShow", "", "fxHide.lt-lg", "", "translate", "", 4, "matHeaderCellDef"],
                        ["fxShow", "", "fxHide.lt-lg", "", 4, "matCellDef"],
                        ["matColumnDef", "status"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["translate", ""],
                        ["fxShow", "", "fxHide.lt-sm", "", "translate", ""],
                        ["fxShow", "", "fxHide.lt-sm", ""],
                        [4, "ngFor", "ngForOf"],
                        ["fxFlex", "1 1 31%", "translate", ""],
                        ["fxFlex", "1 1 31%"],
                        [3, "innerHTML"],
                        ["fxShow", "", "fxHide.lt-md", "", "translate", ""],
                        ["fxShow", "", "fxHide.lt-md", ""],
                        ["fxShow", "", "fxHide.lt-lg", "", "translate", ""],
                        ["fxShow", "", "fxHide.lt-lg", ""],
                        [4, "ngIf"],
                        [3, "matTooltip"],
                        [3, "challenge", "allowRepeatNotifications", "showChallengeHints"],
                        ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", "class", "hacking-instructor-button", 3, "matTooltip", "click", 4, "ngIf"],
                        ["target", "_blank", 3, "href", 4, "ngIf"],
                        ["matTooltipPosition", "above", 3, "matTooltip", "matTooltipDisabled"],
                        ["mat-mini-fab", "", "color", "primary", "matTooltipPosition", "above", "class", "code-snippet-button", 3, "disabled", "matTooltip", "color", "click", 4, "ngIf"],
                        ["mat-mini-fab", "", "color", "warn", "matTooltipPosition", "above", 1, "hacking-instructor-button", 3, "matTooltip", "click"],
                        ["target", "_blank", 3, "href"],
                        ["mat-mini-fab", "", "color", "accent", "matTooltipPosition", "above", 1, "vulnerability-mitigation-button", 3, "matTooltip"],
                        ["mat-mini-fab", "", "color", "primary", "matTooltipPosition", "above", 1, "code-snippet-button", 3, "disabled", "matTooltip", "color", "click"],
                        ["matBadgeSize", "medium", "matBadgePosition", "right", "matBadgeColor", "accent", 3, "matBadge"],
                        ["fxLayout", "row", "fxLayout.lt-lg", "column"],
                        ["fxFlex", "40%", "fxFlex.lt-lg", "100%", "class", "primary-notification", 3, "innerHTML", 4, "ngIf"],
                        [1, "fill-remaining-space"],
                        ["fxFlex", "20%", "fxFlex.lt-lg", "100%", "class", "warn-notification", 3, "innerHTML", 4, "ngIf"],
                        ["fxFlex", "40%", "fxFlex.lt-lg", "100%", 1, "primary-notification", 3, "innerHTML"],
                        ["fxFlex", "20%", "fxFlex.lt-lg", "100%", 1, "warn-notification", 3, "innerHTML"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card"), n.Vb(2, "mat-card-title"), n.Ic(3), n.ic(4, "translate"), n.Vb(5, "small", 1), n.Ic(6), n.Ub(), n.Ub(), n.Qb(7, "mat-progress-bar", 2), n.Ub(), n.Vb(8, "mat-card"), n.Vb(9, "div", 3), n.Gc(10, Ln, 14, 23, "mat-button-toggle", 4), n.Vb(11, "button", 5), n.dc("click", function () {
                            return e.toggleAllDifficulty()
                        }), n.Ic(12), n.ic(13, "translate"), n.Ub(), n.Vb(14, "mat-button-toggle", 6), n.dc("change", function () {
                            return e.toggleShowSolvedChallenges()
                        }), n.ic(15, "translate"), n.Qb(16, "i", 7), n.Ic(17), n.ic(18, "translate"), n.Ub(), n.Gc(19, En, 6, 11, "mat-button-toggle", 8), n.Gc(20, Mn, 5, 11, "mat-button-toggle", 9), n.Gc(21, Rn, 4, 3, "button", 10), n.Vb(22, "div", 11), n.Vb(23, "input", 12, 13), n.dc("change", function (t) {
                            return e.restoreBackup(t.target.files.item(0))
                        }), n.Ub(), n.Ub(), n.Gc(25, Nn, 4, 3, "button", 14), n.Gc(26, Gn, 2, 7, "div", 15), n.Ub(), n.Qb(27, "mat-divider"), n.Vb(28, "div", 16), n.Gc(29, Fn, 5, 13, "mat-button-toggle", 17), n.Vb(30, "button", 18), n.dc("click", function () {
                            return e.toggleAllChallengeCategory()
                        }), n.Ic(31), n.ic(32, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Vb(33, "mat-card"), n.Gc(34, so, 21, 4, "mat-table", 19), n.Ub(), n.Gc(35, ho, 4, 2, "div", 20), n.Ub(), n.Qb(36, "img", 21), n.Qb(37, "ngx-spinner", 22)), 2 & t && (n.Db(3), n.Kc("", n.jc(4, 21, "TITLE_SCORE_BOARD"), " "), n.Db(3), n.Kc("", e.percentChallengesSolved, "%"), n.Db(1), n.nc("color", "accent")("value", e.percentChallengesSolved), n.Db(3), n.nc("ngForOf", e.availableDifficulties), n.Db(1), n.nc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted), n.Db(1), n.Jc(n.jc(13, 23, e.toggledMajorityOfDifficulties ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")), n.Db(2), n.nc("checked", e.showSolvedChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? n.kc(15, 25, "INFO_FULL_CHALLENGE_MODE", n.sc(32, Tn, e.challenges.length)) : ""), n.Db(3), n.Kc(" ", n.jc(18, 28, "BTN_SHOW_SOLVED"), " "), n.Db(2), n.nc("ngIf", e.showHackingInstructor), n.Db(1), n.nc("ngIf", e.numDisabledChallenges > 0), n.Db(1), n.nc("ngIf", e.localBackupEnabled), n.Db(4), n.nc("ngIf", e.localBackupEnabled), n.Db(1), n.nc("ngIf", e.numDisabledChallenges > 0 && e.showDisabledChallenges), n.Db(3), n.nc("ngForOf", e.availableChallengeCategories), n.Db(1), n.nc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted), n.Db(1), n.Jc(n.jc(32, 30, e.toggledMajorityOfCategories ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")), n.Db(3), n.nc("ngIf", e.challenges), n.Db(1), n.nc("ngIf", e.showContributionInfoBox || e.questionnaireUrl))
                    },
                    directives: [f.d, g.a, g.g, Un.a, E.k, yn.a, ge.a, E.l, Te.a, wn.a, pe.a, I.a, L.n, L.c, L.i, L.b, L.k, L.m, L.h, v.a, L.a, M.b, f.b, Sn.b, Sn.a, xn, kn.a, L.j, L.l],
                    pipes: [v.d],
                    styles: ["footer[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:35px;margin-left:35px;margin-right:35px;min-width:300px}.category-container[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{margin-top:25px}.star-container[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:25px}.star-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:auto}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:pointer}.heading[_ngcontent-%COMP%]{padding-top:5px}.mat-raised-button[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.category-toggle[_ngcontent-%COMP%]{font-size:small}.overlay-fullscreen[_ngcontent-%COMP%]     .black-overlay{position:fixed}.code-snippet-button[_ngcontent-%COMP%], .hacking-instructor-button[_ngcontent-%COMP%], .vulnerability-mitigation-button[_ngcontent-%COMP%]{margin-left:8px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.disabled-challenges-infoBox[_ngcontent-%COMP%]{align-self:center;color:#e64a19;cursor:default;height:100%;margin:0}.disabled-challenges-infoBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#546e7a;font-style:normal}.backupButton[_ngcontent-%COMP%]{align-self:center;margin-left:15px}"]
                }), t
            })(),
                po = (() => {
                    class t {
                        constructor(t) {
                            this.http = t
                        }
                        verify(t) {
                            return this.http.post("./rest/2fa/verify", {
                                tmpToken: localStorage.getItem("totp_tmp_token"),
                                totpToken: t
                            }).pipe(Object(l.a)(t => t.authentication), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        status() {
                            return this.http.get("./rest/2fa/status").pipe(Object(l.a)(t => t), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        setup(t, e, i) {
                            return this.http.post("./rest/2fa/setup", {
                                password: t,
                                setupToken: i,
                                initialToken: e
                            }).pipe(Object(l.a)(() => { }), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        disable(t) {
                            return this.http.post("./rest/2fa/disable", {
                                password: t
                            }).pipe(Object(l.a)(() => { }), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function go(t, e) {
                1 & t && (n.Vb(0, "div", 13), n.Ic(1, "INVALID_TWO_FACTOR_AUTH_TOKEN"), n.Ub())
            }
            u.b.add(m.ab), u.a.watch();
            let fo = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.twoFactorAuthService = t, this.cookieService = e, this.userService = i, this.router = a, this.ngZone = n, this.twoFactorForm = new s.h({
                            token: new s.e("", [s.z.minLength(6), s.z.maxLength(6), s.z.required, s.z.pattern("^[\\d]{6}$")])
                        }), this.errored = !1
                    }
                    verify() {
                        var t = this;
                        this.twoFactorAuthService.verify(this.twoFactorForm.value.token).subscribe(e => {
                            var i;
                            localStorage.setItem("token", e.token);
                            const a = new Date;
                            a.setHours(a.getHours() + 8), this.cookieService.put("token", e.token, {
                                expires: a
                            }), sessionStorage.setItem("bid", null === (i = e.bid) || void 0 === i ? void 0 : i.toString()), this.userService.isLoggedIn.next(!0), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/search"])
                            }))
                        }, t => (this.errored = !0, setTimeout(() => {
                            this.errored = !1
                        }, 5e3), t))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(po), n.Pb(c.b), n.Pb(y), n.Pb(S.b), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-two-factor-auth-enter"]
                    ],
                    decls: 27,
                    vars: 13,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        ["class", "error", "style", "margin-bottom: 10px;", "translate", "", 4, "ngIf"],
                        [3, "formGroup", "ngSubmit"],
                        [1, "form-container"],
                        ["id", "inputToken", "appearance", "outline", "color", "accent"],
                        ["formControlName", "token", "type", "text", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", "matInput", "", "id", "totpToken", "aria-label", "Field for entering the Two Factor token", 3, "placeholder"],
                        ["tokenInput", ""],
                        ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The code to be entered from the authenticator must have 6 digits.", 3, "matTooltip"],
                        ["align", "end"],
                        ["type", "submit", "color", "primary", "mat-raised-button", "", "id", "totpSubmitButton", "aria-label", "Button to confirm the input", 3, "disabled"],
                        [1, "material-icons"],
                        ["translate", "", 1, "error", 2, "margin-bottom", "10px"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_TWO_FACTOR_AUTHENTICATION"), n.Ub(), n.Vb(4, "p", 2), n.Ic(5, "TITLE_TWO_FACTOR_AUTH_ENTER"), n.Ub(), n.Gc(6, go, 2, 0, "div", 3), n.Vb(7, "form", 4), n.dc("ngSubmit", function () {
                            return e.verify()
                        }), n.Vb(8, "div", 5), n.Vb(9, "mat-form-field", 6), n.Vb(10, "mat-label", 2), n.Ic(11, "LABEL_TWO_FACTOR_AUTH_TOKEN"), n.Ub(), n.Qb(12, "input", 7, 8), n.ic(14, "translate"), n.Vb(15, "mat-icon", 9), n.ic(16, "translate"), n.Ic(17, " help_outline "), n.Ub(), n.Vb(18, "mat-hint", 10), n.Ic(19), n.Ub(), n.Vb(20, "mat-error", 2), n.Ic(21, "INVALID_TWO_FACTOR_AUTH_TOKEN"), n.Ub(), n.Ub(), n.Ub(), n.Vb(22, "button", 11), n.Vb(23, "i", 12), n.Ic(24, " lock_open "), n.Ub(), n.Ic(25), n.ic(26, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(13);
                            n.Db(6), n.nc("ngIf", e.errored), n.Db(1), n.nc("formGroup", e.twoFactorForm), n.Db(5), n.oc("placeholder", n.jc(14, 7, "2FA_ENTER_CODE_PLACEHOLDER")), n.Db(3), n.oc("matTooltip", n.jc(16, 9, "INITIAL_TOKEN_TOOLTIP")), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/6"), n.Db(3), n.nc("disabled", e.twoFactorForm.invalid), n.Db(3), n.Kc(" ", n.jc(26, 11, "BTN_LOGIN"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, E.l, s.A, s.q, s.i, Lt.c, Lt.g, s.d, Et.b, s.p, s.g, s.l, s.k, s.v, pe.a, Lt.h, ge.a, Lt.f, Lt.b, I.a],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}#totpSubmitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#inputToken[_ngcontent-%COMP%]{width:100%}"]
                }), t
            })();
            u.b.add(m.gb, m.r), u.a.watch();
            let vo = (() => {
                class t {
                    constructor(t, e) {
                        this.route = t, this.translate = e, this.error = null
                    }
                    ngOnInit() {
                        const t = this.route.snapshot.queryParams.error;
                        t && this.translate.get(t).subscribe(t => {
                            this.error = t
                        }, t => {
                            this.error = t
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.a), n.Pb(v.e))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-error-page"]
                    ],
                    decls: 7,
                    vars: 1,
                    consts: [
                        [1, "warn-notification", "mat-elevation-z6"],
                        [1, "mat-display-3"],
                        [1, "fas", "fa-hand-paper"],
                        [1, "mat-subheading-2"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div"), n.Vb(2, "div", 1), n.Qb(3, "i", 2), n.Ic(4, " 403"), n.Ub(), n.Vb(5, "span", 3), n.Ic(6), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(6), n.Jc(e.error))
                    },
                    directives: [g.a],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                }), t
            })();
            var Io = i("HeVh"),
                Co = i("q7Ft");
            let wo = (() => {
                class t {
                    constructor(t) {
                        this.breakpointObserver = t, this.windowWidth = window.innerWidth, this.isHandset$ = this.breakpointObserver.observe(Io.b.Handset).pipe(Object(l.a)(t => t.matches))
                    }
                    ngAfterViewInit() {
                        this.windowWidth = window.innerWidth
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Io.a))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-privacy-security"]
                    ],
                    decls: 3,
                    vars: 0,
                    consts: [
                        [1, "sidenav-container"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-sidenav-container", 0), n.Vb(1, "mat-sidenav-content"), n.Qb(2, "router-outlet"), n.Ub(), n.Ub())
                    },
                    directives: [Co.b, Co.c, S.f],
                    styles: [""]
                }), t
            })();
            var Uo = i("WF00");

            function yo(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div", 5), n.Vb(1, "p", 6), n.Ic(2, "2FA_SUCCESSFUL_SETUP"), n.Ub(), n.Vb(3, "form", 7), n.dc("ngSubmit", function () {
                        return n.yc(t), n.hc().disable()
                    }), n.Vb(4, "h2", 8), n.Ic(5, "REMOVE_TWO_FACTOR_AUTH"), n.Ub(), n.Vb(6, "div", 9), n.Ic(7, "2FA_SETUP_ERROR"), n.Ub(), n.Vb(8, "mat-form-field", 10), n.Vb(9, "mat-label", 6), n.Ic(10, "LABEL_CURRENT_PASSWORD"), n.Ub(), n.Qb(11, "input", 11), n.ic(12, "translate"), n.Ub(), n.Vb(13, "button", 12), n.Vb(14, "i", 13), n.Ic(15, " remove_circle_outline "), n.Ub(), n.Ic(16), n.ic(17, "translate"), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(3), n.nc("formGroup", t.twoFactorDisableForm), n.Db(3), n.nc("hidden", !(t.errored && !t.twoFactorDisableForm.dirty)), n.Db(5), n.oc("placeholder", n.jc(12, 5, "MANDATORY_CURRENT_PASSWORD")), n.Db(2), n.nc("disabled", t.twoFactorDisableForm.invalid), n.Db(3), n.Kc(" ", n.jc(17, 7, "BTN_REMOVE"), " ")
                }
            }

            function So(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "form", 14), n.dc("ngSubmit", function () {
                        return n.yc(t), n.hc().setup()
                    }), n.Vb(1, "span", 15), n.Ic(2, "2FA_AUTH_SETUP_INSTRUCTIONS"), n.Ub(), n.Vb(3, "div", 16), n.Qb(4, "qr-code", 17), n.Ub(), n.Vb(5, "div", 9), n.Ic(6, "2FA_SETUP_ERROR"), n.Ub(), n.Vb(7, "mat-form-field", 10), n.Vb(8, "mat-label", 6), n.Ic(9, "LABEL_CURRENT_PASSWORD"), n.Ub(), n.Qb(10, "input", 18), n.ic(11, "translate"), n.Ub(), n.Vb(12, "mat-form-field", 10), n.Vb(13, "mat-label", 6), n.Ic(14, "INITIAL_CODE"), n.Ub(), n.Qb(15, "input", 19, 20), n.ic(17, "translate"), n.Vb(18, "mat-error", 6), n.Ic(19, "INVALID_TWO_FACTOR_AUTH_TOKEN"), n.Ub(), n.Vb(20, "mat-icon", 21), n.ic(21, "translate"), n.Ic(22, " help_outline "), n.Ub(), n.Vb(23, "mat-hint", 22), n.Ic(24), n.Ub(), n.Ub(), n.Vb(25, "button", 23), n.Vb(26, "i", 13), n.Ic(27, " save "), n.Ub(), n.Ic(28), n.ic(29, "translate"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.vc(16),
                        e = n.hc();
                    n.nc("formGroup", e.twoFactorSetupForm), n.Db(4), n.nc("value", e.totpUrl)("size", 300)("level", "L"), n.Db(1), n.nc("hidden", !(e.errored && !e.twoFactorSetupForm.dirty)), n.Db(5), n.oc("placeholder", n.jc(11, 12, "MANDATORY_CURRENT_PASSWORD")), n.Db(5), n.oc("placeholder", n.jc(17, 14, "INITIAL_CODE_PLACEHOLDER")), n.Eb("data-test-totp-secret", e.totpSecret), n.Db(5), n.oc("matTooltip", n.jc(21, 16, "INITIAL_TOKEN_TOOLTIP")), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/6"), n.Db(1), n.nc("disabled", e.twoFactorSetupForm.invalid), n.Db(3), n.Kc(" ", n.jc(29, 18, "BTN_SAVE"), " ")
                }
            }
            u.b.add(m.ab, m.E), u.a.watch();
            let Do = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.twoFactorAuthService = t, this.configurationService = e, this.snackBar = i, this.translateService = a, this.snackBarHelperService = n, this.twoFactorSetupForm = new s.h({
                            passwordControl: new s.e("", [s.z.required]),
                            initalTokenControl: new s.e("", [s.z.required, s.z.pattern("^[\\d]{6}$")])
                        }), this.twoFactorDisableForm = new s.h({
                            passwordControl: new s.e("", [s.z.required])
                        }), this.setupStatus = null, this.errored = null, this.appName = "OWASP Juice Shop"
                    }
                    ngOnInit() {
                        this.updateStatus()
                    }
                    updateStatus() {
                        const t = this.twoFactorAuthService.status(),
                            e = this.configurationService.getApplicationConfiguration();
                        return Object(je.a)([t, e]).subscribe(([{
                            setup: t,
                            email: e,
                            secret: i,
                            setupToken: a
                        }, n]) => {
                            if (this.setupStatus = t, this.appName = n.application.name, !t) {
                                const t = encodeURIComponent(this.appName);
                                this.totpUrl = `otpauth://totp/${t}:${e}?secret=${i}&issuer=${t}`, this.totpSecret = i, this.setupToken = a
                            }
                        }, () => {
                            console.log("Failed to fetch 2fa status")
                        }), t
                    }
                    setup() {
                        var t, e;
                        this.twoFactorAuthService.setup(null === (t = this.twoFactorSetupForm.get("passwordControl")) || void 0 === t ? void 0 : t.value, null === (e = this.twoFactorSetupForm.get("initalTokenControl")) || void 0 === e ? void 0 : e.value, this.setupToken).subscribe(() => {
                            this.setupStatus = !0, this.snackBarHelperService.open("CONFIRM_2FA_SETUP")
                        }, () => {
                            var t, e;
                            null === (t = this.twoFactorSetupForm.get("passwordControl")) || void 0 === t || t.markAsPristine(), null === (e = this.twoFactorSetupForm.get("initalTokenControl")) || void 0 === e || e.markAsPristine(), this.errored = !0
                        })
                    }
                    disable() {
                        var t;
                        this.twoFactorAuthService.disable(null === (t = this.twoFactorDisableForm.get("passwordControl")) || void 0 === t ? void 0 : t.value).subscribe(() => {
                            this.updateStatus().subscribe(() => {
                                this.setupStatus = !1
                            }), this.snackBarHelperService.open("CONFIRM_2FA_DISABLE")
                        }, () => {
                            var t;
                            null === (t = this.twoFactorDisableForm.get("passwordControl")) || void 0 === t || t.markAsPristine(), this.errored = !0
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(po), n.Pb(d), n.Pb(T.a), n.Pb(v.e), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-two-factor-auth"]
                    ],
                    decls: 6,
                    vars: 2,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["id", "2fa-setup-title", "translate", ""],
                        ["id", "2fa-setup-successfully", 4, "ngIf"],
                        ["class", "form-container", "id", "two-factor-auth-setup", 3, "formGroup", "ngSubmit", 4, "ngIf"],
                        ["id", "2fa-setup-successfully"],
                        ["translate", ""],
                        ["id", "two-factor-auth-disable", 1, "form-container", 3, "formGroup", "ngSubmit"],
                        ["id", "two-factor-auth-disable-title", "translate", ""],
                        ["translate", "", 1, "error", 3, "hidden"],
                        ["appearance", "outline", "color", "accent"],
                        ["id", "currentPasswordDisable", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"],
                        ["type", "submit", "id", "disableTwoFactorAuth", "mat-raised-button", "", "color", "warn", "aria-label", "Button to remove the two-factor authentication", 3, "disabled"],
                        [1, "material-icons"],
                        ["id", "two-factor-auth-setup", 1, "form-container", 3, "formGroup", "ngSubmit"],
                        ["id", "2fa-setup-instructions", "translate", ""],
                        ["fxLayoutAlign", "center", 1, "two-factor-qr-code"],
                        [3, "value", "size", "level"],
                        ["id", "currentPasswordSetup", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"],
                        ["id", "initalToken", "formControlName", "initalTokenControl", "type", "text", "matInput", "", "aria-label", "Field to enter the initial token. This must have 6 digits.", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", 3, "placeholder"],
                        ["initToken", ""],
                        ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The token to be entered from the authenticator must have 6 digits.", 3, "matTooltip"],
                        ["align", "end"],
                        ["type", "submit", "id", "setupTwoFactorAuth", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the two-factor configuration", 3, "disabled"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_TWO_FACTOR_AUTH_CONFIG"), n.Ub(), n.Gc(4, yo, 18, 9, "div", 3), n.Gc(5, So, 30, 20, "form", 4), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.nc("ngIf", !0 === e.setupStatus), n.Db(1), n.nc("ngIf", !1 === e.setupStatus))
                    },
                    directives: [f.c, g.a, v.a, E.l, s.A, s.q, s.i, Lt.c, Lt.g, s.d, Et.b, s.p, s.g, I.a, Uo.a, s.l, s.k, s.v, Lt.b, pe.a, Lt.h, ge.a, Lt.f],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#disableTwoFactorAuth[_ngcontent-%COMP%], #setupTwoFactorAuth[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.two-factor-qr-code[_ngcontent-%COMP%]{margin:16px 0}#two-factor-auth-disable[_ngcontent-%COMP%]{margin-top:32px}#two-factor-auth-disable-title[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{margin-top:5px}"]
                }), t
            })(),
                Vo = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = "."
                        }
                        getCaptcha() {
                            return this.http.get(this.hostServer + "/rest/image-captcha/").pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Oo = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/user"
                        }
                        erase(t) {
                            return this.http.post(this.host + "/erasure-request", t).pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                        dataExport(t) {
                            return this.http.post(this.host + "/data-export", t).pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function _o(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Vb(1, "p", 13), n.Ic(2), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(2), n.Jc(t.error)
                }
            }

            function Po(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_CAPTCHA "), n.Ub())
            }

            function xo(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_CAPTCHA "), n.Ub())
            }
            const ko = function () {
                return {
                    length: "5"
                }
            };

            function To(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Vb(1, "div"), n.Vb(2, "span", 14), n.Ic(3, "CAPTCHA "), n.Vb(4, "span"), n.Ic(5, ":"), n.Ub(), n.Ub(), n.Qb(6, "div", 15), n.Ub(), n.Vb(7, "mat-form-field", 16), n.Vb(8, "mat-label", 2), n.Ic(9, "ENTER_CAPTCHA"), n.Ub(), n.Qb(10, "input", 17, 18), n.ic(12, "translate"), n.Vb(13, "mat-hint", 19), n.Ic(14), n.Ub(), n.Gc(15, Po, 2, 0, "mat-error", 20), n.Gc(16, xo, 2, 0, "mat-error", 20), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.vc(11),
                        e = n.hc();
                    n.Db(6), n.nc("innerHTML", e.captcha, n.zc), n.Db(4), n.oc("placeholder", n.kc(12, 6, "TYPE_THESE_LETTERS", n.rc(9, ko))), n.nc("formControl", e.captchaControl), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/5"), n.Db(1), n.nc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required), n.Db(1), n.nc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.minlength)
                }
            }
            let Ao = (() => {
                class t {
                    constructor(t, e, i) {
                        this.sanitizer = t, this.imageCaptchaService = e, this.dataSubjectService = i, this.captchaControl = new s.e("", [s.z.required, s.z.minLength(5)]), this.formatControl = new s.e("", [s.z.required]), this.dataRequest = void 0, this.presenceOfCaptcha = !1
                    }
                    ngOnInit() {
                        this.needCaptcha(), this.dataRequest = {}
                    }
                    needCaptcha() {
                        const t = new Date,
                            e = localStorage.getItem("lstdtxprt") ? new Date(JSON.parse(String(localStorage.getItem("lstdtxprt")))) : new Date(0);
                        t.getTime() - e.getTime() < 3e5 && (this.getNewCaptcha(), this.presenceOfCaptcha = !0)
                    }
                    getNewCaptcha() {
                        this.imageCaptchaService.getCaptcha().subscribe(t => {
                            this.captcha = this.sanitizer.bypassSecurityTrustHtml(t.image)
                        })
                    }
                    save() {
                        this.presenceOfCaptcha && (this.dataRequest.answer = this.captchaControl.value), this.dataRequest.format = this.formatControl.value, this.dataSubjectService.dataExport(this.dataRequest).subscribe(t => {
                            var e;
                            this.error = null, this.confirmation = t.confirmation, this.userData = t.userData, null === (e = window.open("", "_blank", "width=500")) || void 0 === e || e.document.write(this.userData), this.lastSuccessfulTry = new Date, localStorage.setItem("lstdtxprt", JSON.stringify(this.lastSuccessfulTry)), this.ngOnInit(), this.resetForm()
                        }, t => {
                            this.error = t.error, this.confirmation = null, this.resetFormError()
                        })
                    }
                    resetForm() {
                        this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue(""), this.formatControl.markAsUntouched(), this.formatControl.markAsPristine(), this.formatControl.setValue("")
                    }
                    resetFormError() {
                        this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(a.c), n.Pb(Vo), n.Pb(Oo))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-data-export"]
                    ],
                    decls: 26,
                    vars: 7,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        [4, "ngIf"],
                        ["id", "data-export-form", 1, "form-container"],
                        ["id", "formatControl", "aria-label", "Select an option", 3, "formControl"],
                        ["translate", "", 1, "radio-label"],
                        ["value", "1", "aria-label", "Export Option JSON"],
                        ["value", "2", "aria-label", "Export Option PDF", "disabled", ""],
                        ["value", "3", "aria-label", "Export Option Excel", "disabled", ""],
                        ["type", "submit", "id", "submitButton", "color", "primary", "mat-raised-button", "", "aria-label", "Button to send the request", 2, "margin-top", "15px", 3, "disabled", "click"],
                        [1, "material-icons"],
                        [1, "hint"],
                        [1, "error"],
                        ["translate", "", 2, "float", "left", "margin-top", "40px", "font-weight", "500", "margin-bottom", "20px"],
                        [1, "captcha-image", 2, "margin-left", "10px", 3, "innerHTML"],
                        ["appearance", "outline", "color", "accent", 2, "margin-top", "10px", "width", "100%"],
                        ["type", "text", "matInput", "", "maxlength", "5", "aria-label", "Input for the CAPTCHA", 3, "formControl", "placeholder"],
                        ["captchaInput", ""],
                        ["align", "end"],
                        ["translate", "", 4, "ngIf"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_REQUEST_DATA_EXPORT"), n.Ub(), n.Gc(4, _o, 3, 1, "div", 3), n.Vb(5, "div", 4), n.Vb(6, "mat-radio-group", 5), n.Vb(7, "mat-label", 6), n.Ic(8, "EXPORT_LABEL "), n.Vb(9, "span"), n.Ic(10, ":"), n.Ub(), n.Ub(), n.Vb(11, "mat-radio-button", 7), n.Ic(12, "JSON"), n.Ub(), n.Vb(13, "mat-radio-button", 8), n.Ic(14, "PDF"), n.Ub(), n.Vb(15, "mat-radio-button", 9), n.Ic(16, "Excel"), n.Ub(), n.Ub(), n.Gc(17, To, 17, 10, "div", 3), n.Ub(), n.Vb(18, "button", 10), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(19, "i", 11), n.Ic(20, " save_alt "), n.Ub(), n.Ic(21), n.ic(22, "translate"), n.Ub(), n.Vb(23, "div", 12), n.Vb(24, "span", 2), n.Ic(25, "DATA_EXPORT_HINT"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.nc("ngIf", e.error), n.Db(2), n.nc("formControl", e.formatControl), n.Db(11), n.nc("ngIf", e.presenceOfCaptcha), n.Db(1), n.nc("disabled", e.formatControl.invalid || e.captchaControl.invalid && e.presenceOfCaptcha), n.Db(3), n.Kc(" ", n.jc(22, 5, "BTN_REQUEST"), " "))
                    },
                    directives: [f.c, g.a, v.a, E.l, wa.b, s.p, s.f, Lt.g, wa.a, I.a, Lt.c, Et.b, s.d, s.k, Lt.f, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;height:auto;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:25%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:10px;justify-content:center;margin-top:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:16px;margin-left:16px}.radio-label[_ngcontent-%COMP%]{font-weight:500;margin-right:8px}.captcha-image[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:20px}"]
                }), t
            })(),
                Lo = (() => {
                    class t {
                        constructor(t) {
                            this.sanitizer = t, this.lastLoginIp = "?"
                        }
                        ngOnInit() {
                            try {
                                this.parseAuthToken()
                            } catch (t) {
                                console.log(t)
                            }
                        }
                        parseAuthToken() {
                            let t = {};
                            const e = localStorage.getItem("token");
                            e && (t = O(e), t.data.lastLoginIp && (this.lastLoginIp = this.sanitizer.bypassSecurityTrustHtml(`<small>${t.data.lastLoginIp}</small>`)))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(a.c))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-last-login-ip"]
                        ],
                        decls: 8,
                        vars: 1,
                        consts: [
                            [1, "ipCard", "mat-elevation-z6"],
                            ["translate", ""],
                            [2, "margin-bottom", "15px"],
                            [3, "innerHTML"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1", 1), n.Ic(2, "LAST_LOGIN_IP"), n.Ub(), n.Vb(3, "p", 2), n.Vb(4, "span", 1), n.Ic(5, "IP_ADDRESS"), n.Ub(), n.Ic(6, "\xa0\xa0"), n.Qb(7, "span", 3), n.Ub(), n.Ub()), 2 & t && (n.Db(7), n.nc("innerHTML", e.lastLoginIp, n.zc))
                        },
                        directives: [g.a, v.a],
                        styles: [".ipCard[_ngcontent-%COMP%]{display:block;margin:0 auto 5%;min-width:320px;width:25%}"]
                    }), t
                })(),
                Eo = (() => {
                    class t {
                        constructor(t, e) {
                            this._document = t, this.configurationService = e, this.applicationName = "OWASP Juice Shop"
                        }
                        ngOnInit() {
                            this.applicationUrl = this._document.location.protocol + "//" + this._document.location.hostname, this.configurationService.getApplicationConfiguration().subscribe(t => {
                                var e, i;
                                (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.name) && (this.applicationName = t.application.name), this.privacyContactEmail = (null === (i = null == t ? void 0 : t.application) || void 0 === i ? void 0 : i.privacyContactEmail) ? t.application.privacyContactEmail : `donotreply@${this._document.location.hostname}`
                            }, t => console.log(t))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(E.d), n.Pb(d))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-privacy-policy"]
                        ],
                        decls: 169,
                        vars: 9,
                        consts: [
                            [1, "mat-elevation-z6"],
                            [1, "privacy-policy"],
                            ["translate", ""],
                            [1, "hot"],
                            ["href", "https://www.freeprivacypolicy.com/", "aria-label", "Link to the page where the privacy policy was created"],
                            [1, "divider"],
                            ["src", "assets/public/images/padding/81px.png"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "section", 1), n.Vb(2, "h1", 2), n.Ic(3, "TITLE_PRIVACY_POLICY"), n.Ub(), n.Vb(4, "p"), n.Ic(5, "Effective date: March 15, 2019"), n.Ub(), n.Vb(6, "p"), n.Ic(7), n.Vb(8, "span", 3), n.Ic(9), n.Ub(), n.Ic(10, ' website (the "Service").'), n.Ub(), n.Vb(11, "p"), n.Ic(12), n.Vb(13, "a", 4), n.Ic(14, "Free Privacy Policy website"), n.Ub(), n.Ic(15, "."), n.Ub(), n.Vb(16, "p"), n.Ic(17), n.Ub(), n.Qb(18, "mat-divider", 5), n.Vb(19, "h2"), n.Ic(20, "A. Information Collection And Use"), n.Ub(), n.Vb(21, "p"), n.Ic(22, "We collect several different types of information for various purposes to provide and improve our Service to you."), n.Ub(), n.Vb(23, "h3"), n.Ic(24, "A1. Types of Data Collected"), n.Ub(), n.Vb(25, "h4"), n.Ic(26, "A1.1 Personal Data"), n.Ub(), n.Vb(27, "p"), n.Ic(28, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'), n.Ub(), n.Vb(29, "ul"), n.Vb(30, "li"), n.Ic(31, "Email address"), n.Ub(), n.Vb(32, "li"), n.Ic(33, "Address, State, Province, ZIP/Postal code, City"), n.Ub(), n.Vb(34, "li"), n.Ic(35, "Cookies and Usage Data"), n.Ub(), n.Ub(), n.Vb(36, "h4"), n.Ic(37, "A1.2 Usage Data"), n.Ub(), n.Vb(38, "p"), n.Vb(39, "span", 3), n.Ic(40, "We may also"), n.Ub(), n.Ic(41, ' collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'), n.Ub(), n.Vb(42, "h4"), n.Ic(43, "A1.3 Tracking & Cookies Data"), n.Ub(), n.Vb(44, "p"), n.Ic(45, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."), n.Ub(), n.Vb(46, "p"), n.Ic(47, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."), n.Ub(), n.Vb(48, "p"), n.Ic(49, "You can "), n.Vb(50, "span", 3), n.Ic(51, "instruct you"), n.Ub(), n.Ic(52, "r browser "), n.Vb(53, "span", 3), n.Ic(54, "to refuse all"), n.Ub(), n.Ic(55, " cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), n.Ub(), n.Vb(56, "p"), n.Ic(57, "Examples of Cookies we use:"), n.Ub(), n.Vb(58, "ul"), n.Vb(59, "li"), n.Vb(60, "strong"), n.Ic(61, "Session Cookies:"), n.Ub(), n.Ic(62, " \xa0We use Session Cookies to operate our Service."), n.Ub(), n.Vb(63, "li"), n.Vb(64, "strong"), n.Ic(65, "Preference Cookies:"), n.Ub(), n.Ic(66, "\xa0We use Preference Cookies to remember your preferences and various settings. "), n.Ub(), n.Vb(67, "li"), n.Vb(68, "strong"), n.Ic(69, "Security Cookies:"), n.Ub(), n.Ic(70, "\xa0We use Security Cookies for security purposes."), n.Ub(), n.Ub(), n.Vb(71, "h3"), n.Ic(72, "A2. Use of Data"), n.Ub(), n.Vb(73, "p"), n.Ic(74), n.Ub(), n.Vb(75, "ul"), n.Vb(76, "li"), n.Ic(77, "To provide and maintain the Service"), n.Ub(), n.Vb(78, "li"), n.Ic(79, "To notify you about changes to our Service"), n.Ub(), n.Vb(80, "li"), n.Ic(81, "To allow you to participate in interactive features of our Service when you choose to do so"), n.Ub(), n.Vb(82, "li"), n.Ic(83, "To provide customer care and support"), n.Ub(), n.Vb(84, "li"), n.Ic(85, "To provide analysis or valuable information so that we can improve the Service"), n.Ub(), n.Vb(86, "li"), n.Ic(87, "To monitor the usage of the Service"), n.Ub(), n.Vb(88, "li"), n.Ic(89, "To detect, prevent and address technical issues"), n.Ub(), n.Ub(), n.Qb(90, "mat-divider", 5), n.Vb(91, "h2"), n.Ic(92, "B. Transfer Of Data"), n.Ub(), n.Vb(93, "p"), n.Ic(94, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."), n.Ub(), n.Vb(95, "p"), n.Ic(96, "If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there."), n.Ub(), n.Vb(97, "p"), n.Ic(98, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), n.Ub(), n.Vb(99, "p"), n.Ic(100), n.Vb(101, "span", 3), n.Ic(102, "reasonably necessary"), n.Ub(), n.Ic(103, " to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."), n.Ub(), n.Qb(104, "mat-divider", 5), n.Vb(105, "h2"), n.Ic(106, "C. Disclosure Of Data"), n.Ub(), n.Vb(107, "h3"), n.Ic(108, "C1. Legal Requirements"), n.Ub(), n.Vb(109, "p"), n.Ic(110), n.Ub(), n.Vb(111, "ul"), n.Vb(112, "li"), n.Ic(113, "To comply with a legal obligation"), n.Ub(), n.Vb(114, "li"), n.Ic(115), n.Ub(), n.Vb(116, "li"), n.Ic(117, "To prevent or investigate possible wrongdoing in connection with the Service"), n.Ub(), n.Vb(118, "li"), n.Ic(119, "To protect the personal safety of users of the Service or the public"), n.Ub(), n.Vb(120, "li"), n.Ic(121, "To protect against legal liability"), n.Ub(), n.Ub(), n.Qb(122, "mat-divider", 5), n.Vb(123, "h2"), n.Ic(124, "D. Security Of Data"), n.Ub(), n.Vb(125, "p"), n.Ic(126, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), n.Ub(), n.Qb(127, "mat-divider", 5), n.Vb(128, "h2"), n.Ic(129, "E. Service Providers"), n.Ub(), n.Vb(130, "p"), n.Ic(131, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'), n.Ub(), n.Vb(132, "p"), n.Ic(133, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), n.Ub(), n.Qb(134, "mat-divider", 5), n.Vb(135, "h2"), n.Ic(136, "F. Links To Other Sites"), n.Ub(), n.Vb(137, "p"), n.Ic(138, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."), n.Ub(), n.Vb(139, "p"), n.Ic(140, "We have no control over and assume no "), n.Vb(141, "span", 3), n.Ic(142, "responsibility"), n.Ub(), n.Ic(143, " for the content, privacy policies or practices of any third party sites or services."), n.Ub(), n.Qb(144, "mat-divider", 5), n.Vb(145, "h2"), n.Ic(146, "G. Children's Privacy"), n.Ub(), n.Vb(147, "p"), n.Ic(148, 'Our Service does not address anyone under the age of 18 ("Children").'), n.Ub(), n.Vb(149, "p"), n.Ic(150, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."), n.Ub(), n.Qb(151, "mat-divider", 5), n.Vb(152, "h2"), n.Ic(153, "H. Changes To This Privacy Policy"), n.Ub(), n.Vb(154, "p"), n.Ic(155, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), n.Ub(), n.Vb(156, "p"), n.Ic(157, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'), n.Ub(), n.Vb(158, "p"), n.Ic(159, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), n.Ub(), n.Qb(160, "mat-divider", 5), n.Vb(161, "h2"), n.Ic(162, "Contact Us"), n.Ub(), n.Vb(163, "p"), n.Ic(164, "If you have any questions about this Privacy Policy, please contact us:"), n.Ub(), n.Vb(165, "ul"), n.Vb(166, "li"), n.Ic(167), n.Ub(), n.Ub(), n.Ub(), n.Qb(168, "img", 6), n.Ub()), 2 & t && (n.Db(7), n.Kc("", e.applicationName, ' ("us", "we", or "our") operates the '), n.Db(2), n.Jc(e.applicationUrl), n.Db(3), n.Kc("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for ", e.applicationName, " is created with the help of the "), n.Db(5), n.Kc("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from ", e.applicationUrl, " ."), n.Db(57), n.Kc("", e.applicationName, " uses the collected data for various purposes:"), n.Db(26), n.Kc("", e.applicationName, " will take all steps "), n.Db(10), n.Kc("", e.applicationName, " may disclose your Personal Data in the good faith belief that such action is necessary to:"), n.Db(5), n.Kc("To protect and defend the rights or property of ", e.applicationName, ""), n.Db(52), n.Kc("By email: ", e.privacyContactEmail, ""))
                        },
                        directives: [g.a, v.a, Te.a],
                        styles: [".privacy-policy[_ngcontent-%COMP%]{margin-left:8.33333%;width:83.3333%}.privacy-policy[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-bottom:15px}p[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;width:90%}h2[_ngcontent-%COMP%]{padding-top:10px}h3[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:550}strong[_ngcontent-%COMP%]{font-style:italic}h4[_ngcontent-%COMP%]{text-decoration:underline}.hot[_ngcontent-%COMP%]:hover{text-shadow:0 0 20px #fefcc9,10px -10px 30px #feec85,-20px -20px 40px #ffae34,20px -40px 50px #ec760c,-20px -60px 60px #cd4606,0 -80px 70px #973716,10px -90px 80px #451b0e}.divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:9%!important;width:82%!important}"]
                    }), t
                })();

            function Mo(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_COUNTRY "), n.Ub())
            }

            function Ro(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_NAME "), n.Ub())
            }

            function No(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_NUMBER "), n.Ub())
            }
            const Bo = function () {
                return {
                    range: "1000000-9999999999"
                }
            };

            function Go(t, e) {
                1 & t && (n.Vb(0, "mat-error", 18), n.Ic(1, "INVALID_MOBILE_NUMBER "), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, Bo))
            }

            function Fo(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_ZIP "), n.Ub())
            }

            function jo(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, "MANDATORY_ADDRESS"), n.Ub())
            }

            function Ho(t, e) {
                1 & t && (n.Vb(0, "mat-error", 2), n.Ic(1, " MANDATORY_CITY "), n.Ub())
            }
            const Qo = function () {
                return {
                    length: "160"
                }
            };
            let zo = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r) {
                        this.location = t, this.formSubmitService = e, this.addressService = i, this.router = a, this.activatedRoute = n, this.translate = o, this.snackBarHelperService = r, this.countryControl = new s.e("", [s.z.required]), this.nameControl = new s.e("", [s.z.required]), this.numberControl = new s.e("", [s.z.required, s.z.min(1111111), s.z.max(9999999999)]), this.pinControl = new s.e("", [s.z.required, s.z.maxLength(8)]), this.addressControl = new s.e("", [s.z.required, s.z.maxLength(160)]), this.cityControl = new s.e("", [s.z.required]), this.stateControl = new s.e, this.address = void 0, this.mode = "create", this.addressId = void 0
                    }
                    ngOnInit() {
                        this.address = {}, this.activatedRoute.paramMap.subscribe(t => {
                            t.has("addressId") ? (this.mode = "edit", this.addressId = t.get("addressId"), this.addressService.getById(this.addressId).subscribe(t => {
                                this.initializeForm(t)
                            })) : (this.mode = "create", this.addressId = null)
                        }), this.formSubmitService.attachEnterKeyHandler("address-form", "submitButton", () => this.save())
                    }
                    save() {
                        this.address.country = this.countryControl.value, this.address.fullName = this.nameControl.value, this.address.mobileNum = this.numberControl.value, this.address.zipCode = this.pinControl.value, this.address.streetAddress = this.addressControl.value, this.address.city = this.cityControl.value, this.address.state = this.stateControl.value, "edit" === this.mode ? this.addressService.put(this.addressId, this.address).subscribe(t => {
                            this.address = {}, this.ngOnInit(), this.resetForm(), this.routeToPreviousUrl(), this.translate.get("ADDRESS_UPDATED", {
                                city: t.city
                            }).subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            })
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.address = {}, this.resetForm()
                        }) : this.addressService.save(this.address).subscribe(t => {
                            this.address = {}, this.ngOnInit(), this.resetForm(), this.routeToPreviousUrl(), this.translate.get("ADDRESS_ADDED", {
                                city: t.city
                            }).subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            })
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.address = {}, this.resetForm()
                        })
                    }
                    initializeForm(t) {
                        this.countryControl.setValue(t.country), this.nameControl.setValue(t.fullName), this.numberControl.setValue(t.mobileNum), this.pinControl.setValue(t.zipCode), this.addressControl.setValue(t.streetAddress), this.cityControl.setValue(t.city), this.stateControl.setValue(t.state)
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    resetForm() {
                        this.countryControl.markAsUntouched(), this.countryControl.markAsPristine(), this.countryControl.setValue(""), this.nameControl.markAsUntouched(), this.nameControl.markAsPristine(), this.nameControl.setValue(""), this.numberControl.markAsUntouched(), this.numberControl.markAsPristine(), this.numberControl.setValue(""), this.pinControl.markAsUntouched(), this.pinControl.markAsPristine(), this.pinControl.setValue(""), this.addressControl.markAsUntouched(), this.addressControl.markAsPristine(), this.addressControl.setValue(""), this.cityControl.markAsUntouched(), this.cityControl.markAsPristine(), this.cityControl.setValue(""), this.stateControl.markAsUntouched(), this.stateControl.markAsPristine(), this.stateControl.setValue("")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(E.g), n.Pb(At), n.Pb(Ia), n.Pb(S.b), n.Pb(S.a), n.Pb(v.e), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-address-create"]
                    ],
                    decls: 69,
                    vars: 49,
                    consts: [
                        ["fxLayoutAlign", "center"],
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        ["id", "address-form", 1, "form-container"],
                        ["appearance", "outline", "color", "accent"],
                        ["type", "text", "matInput", "", 3, "formControl", "placeholder"],
                        ["translate", "", 4, "ngIf"],
                        ["type", "number", "matInput", "", 3, "formControl", "placeholder"],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        ["pin", ""],
                        ["align", "end"],
                        ["id", "address", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", 3, "formControl", "placeholder"],
                        ["adress", ""],
                        [1, "fas", "fa-exclamation-circle"],
                        ["translate", "", 2, "margin-left", "5px"],
                        ["mat-stroked-button", "", 1, "btn-return", 3, "click"],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"],
                        [1, "material-icons"],
                        ["translate", "", 3, "translateParams"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "mat-card", 1), n.Vb(2, "h1", 2), n.Ic(3, "ADD_NEW_ADDRESS"), n.Ub(), n.Vb(4, "div", 3), n.Vb(5, "mat-form-field", 4), n.Vb(6, "mat-label", 2), n.Ic(7, "LABEL_COUNTRY"), n.Ub(), n.Qb(8, "input", 5), n.ic(9, "translate"), n.Gc(10, Mo, 2, 0, "mat-error", 6), n.Ub(), n.Vb(11, "mat-form-field", 4), n.Vb(12, "mat-label", 2), n.Ic(13, "LABEL_NAME"), n.Ub(), n.Qb(14, "input", 5), n.ic(15, "translate"), n.Gc(16, Ro, 2, 0, "mat-error", 6), n.Ub(), n.Vb(17, "mat-form-field", 4), n.Vb(18, "mat-label", 2), n.Ic(19, "LABEL_MOBILE_NUMBER"), n.Ub(), n.Qb(20, "input", 7), n.ic(21, "translate"), n.Gc(22, No, 2, 0, "mat-error", 6), n.Gc(23, Go, 2, 2, "mat-error", 8), n.Ub(), n.Vb(24, "mat-form-field", 4), n.Vb(25, "mat-label", 2), n.Ic(26, "LABEL_ZIP_CODE"), n.Ub(), n.Qb(27, "input", 5, 9), n.ic(29, "translate"), n.Vb(30, "mat-hint", 10), n.Ic(31), n.Ub(), n.Gc(32, Fo, 2, 0, "mat-error", 6), n.Ub(), n.Vb(33, "mat-form-field", 4), n.Vb(34, "mat-label", 2), n.Ic(35, "LABEL_ADDRESS"), n.Ub(), n.Qb(36, "textarea", 11, 12), n.ic(38, "translate"), n.Vb(39, "mat-hint", 2), n.Qb(40, "i", 13), n.Vb(41, "em", 14), n.Ic(42), n.ic(43, "translate"), n.Ub(), n.Ub(), n.Vb(44, "mat-hint", 10), n.Ic(45), n.Ub(), n.Gc(46, jo, 2, 0, "mat-error", 6), n.Ub(), n.Vb(47, "mat-form-field", 4), n.Vb(48, "mat-label", 2), n.Ic(49, "LABEL_CITY"), n.Ub(), n.Qb(50, "input", 5), n.ic(51, "translate"), n.Gc(52, Ho, 2, 0, "mat-error", 6), n.Ub(), n.Vb(53, "mat-form-field", 4), n.Vb(54, "mat-label", 2), n.Ic(55, "LABEL_STATE"), n.Ub(), n.Qb(56, "input", 5), n.ic(57, "translate"), n.Ub(), n.Ub(), n.Vb(58, "div"), n.Vb(59, "button", 15), n.dc("click", function () {
                            return e.routeToPreviousUrl()
                        }), n.Vb(60, "mat-icon"), n.Ic(61, " navigate_before "), n.Ub(), n.Ic(62), n.ic(63, "translate"), n.Ub(), n.Vb(64, "button", 16), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(65, "i", 17), n.Ic(66, " send "), n.Ub(), n.Ic(67), n.ic(68, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(28),
                                i = n.vc(37);
                            n.Db(8), n.nc("formControl", e.countryControl)("placeholder", n.jc(9, 27, "MANDATORY_COUNTRY")), n.Db(2), n.nc("ngIf", e.countryControl.invalid && e.countryControl.errors.required), n.Db(4), n.nc("formControl", e.nameControl)("placeholder", n.jc(15, 29, "MANDATORY_NAME")), n.Db(2), n.nc("ngIf", e.nameControl.invalid && e.nameControl.errors.required), n.Db(4), n.nc("formControl", e.numberControl)("placeholder", n.jc(21, 31, "MANDATORY_NUMBER")), n.Db(2), n.nc("ngIf", e.numberControl.invalid && e.numberControl.errors.required), n.Db(1), n.nc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)), n.Db(4), n.nc("formControl", e.pinControl)("placeholder", n.jc(29, 33, "MANDATORY_ZIP")), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/8"), n.Db(1), n.nc("ngIf", e.pinControl.invalid && e.pinControl.errors.required), n.Db(4), n.nc("formControl", e.addressControl)("placeholder", n.jc(38, 35, "MANDATORY_ADDRESS")), n.Db(6), n.Jc(n.kc(43, 37, "MAX_TEXTAREA_LENGTH", n.rc(48, Qo))), n.Db(3), n.Kc("", (null == i.value ? null : i.value.length) || 0, "/160"), n.Db(1), n.nc("ngIf", e.addressControl.invalid && e.addressControl.errors.required), n.Db(4), n.nc("formControl", e.cityControl)("placeholder", n.jc(51, 40, "MANDATORY_CITY")), n.Db(2), n.nc("ngIf", e.cityControl.invalid && e.cityControl.errors.required), n.Db(4), n.nc("formControl", e.stateControl)("placeholder", n.jc(57, 42, "STATE_PLACEHOLDER")), n.Db(6), n.Kc(" ", n.jc(63, 44, "LABEL_BACK"), " "), n.Db(2), n.nc("disabled", e.countryControl.invalid || e.nameControl.invalid || e.numberControl.invalid || e.pinControl.invalid || e.addressControl.invalid || e.cityControl.invalid), n.Db(3), n.Kc(" ", n.jc(68, 46, "BTN_SUBMIT"), " ")
                        }
                    },
                    directives: [f.c, g.a, v.a, Lt.c, Lt.g, Et.b, s.d, s.p, s.f, E.l, s.u, Lt.f, Et.d, s.k, I.a, pe.a, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}#submitButton[_ngcontent-%COMP%]{float:right}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.btn-return[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
                }), t
            })(),
                Wo = (() => {
                    class t {
                        constructor(t, e) {
                            this.router = t, this.ngZone = e, this.addressId = void 0, this.showNextButton = !0
                        }
                        getMessage(t) {
                            this.addressId = t
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(S.b), n.Pb(n.B))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-address-select"]
                        ],
                        decls: 2,
                        vars: 1,
                        consts: [
                            ["id", "card"],
                            [3, "showNextButton"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "div", 0), n.Qb(1, "app-address", 1), n.Ub()), 2 & t && (n.Db(1), n.nc("showNextButton", e.showNextButton))
                        },
                        directives: [Fa],
                        styles: [".btn-pay[_ngcontent-%COMP%]{display:block;width:100%}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px;margin-top:3px}#card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }), t
                })(),
                Ko = (() => {
                    class t { }
                    return t.\u0275fac = function (e) {
                        return new (e || t)
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-saved-address"]
                        ],
                        decls: 2,
                        vars: 1,
                        consts: [
                            [1, "main-wrapper"],
                            [3, "allowEdit"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "div", 0), n.Qb(1, "app-address", 1), n.Ub()), 2 & t && (n.Db(1), n.nc("allowEdit", !0))
                        },
                        directives: [Fa],
                        styles: [".main-wrapper[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }), t
                })();
            u.b.add(m.b), u.a.watch();
            let qo = (() => {
                class t {
                    constructor(t) {
                        this.dialogData = t
                    }
                    ngOnInit() {
                        this.title = this.dialogData.title, this.url = this.dialogData.url, this.address = this.dialogData.address, this.data = this.dialogData.data
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.a))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-qr-code"]
                    ],
                    decls: 17,
                    vars: 11,
                    consts: [
                        [1, "qr-code", "mat-typography"],
                        ["fxLayout", "column", "fxLayoutGap", "10px"],
                        [1, "container"],
                        [3, "href"],
                        [3, "value", "size", "level"],
                        ["mat-raised-button", "", "mat-dialog-close", "", 1, "close-dialog"],
                        [1, "fas", "fa-arrow-circle-left", "fa-lg"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "header"), n.Vb(2, "h3"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Vb(5, "div", 1), n.Qb(6, "mat-divider"), n.Vb(7, "div", 2), n.Vb(8, "a", 3), n.Qb(9, "qr-code", 4), n.Ub(), n.Ub(), n.Vb(10, "small"), n.Ic(11), n.Ub(), n.Ub(), n.Vb(12, "footer"), n.Vb(13, "button", 5), n.Qb(14, "i", 6), n.Ic(15), n.ic(16, "translate"), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Jc(n.jc(4, 7, e.title)), n.Db(5), n.nc("href", e.url, n.Bc), n.Db(1), n.nc("value", e.data)("size", 300)("level", "M"), n.Db(2), n.Jc(e.address), n.Db(4), n.Kc(" ", n.jc(16, 9, "BTN_CLOSE"), ""))
                    },
                    directives: [f.d, f.e, Te.a, Uo.a, I.a, _e.d],
                    pipes: [v.d],
                    styles: [""]
                }), t
            })(),
                $o = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/wallet/balance"
                        }
                        get() {
                            return this.http.get(this.host).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        put(t) {
                            return this.http.put(this.host, t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Yo = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Deliverys"
                        }
                        get() {
                            return this.http.get(this.host).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        getById(t) {
                            return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })(),
                Jo = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Cards"
                        }
                        get() {
                            return this.http.get(this.host).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        getById(t) {
                            return this.http.get(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        save(t) {
                            return this.http.post(this.host + "/", t).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        del(t) {
                            return this.http.delete(`${this.host}/${t}`).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function Zo(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 33)
            }

            function Xo(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 33), n.Vb(1, "mat-radio-button", 34), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).emitSelectionToParent(i.id)
                    }), n.Ub(), n.Ub()
                }
            }

            function tr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 35)
            }

            function er(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 35), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.cardNum, " ")
                }
            }

            function ir(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 36)
            }

            function ar(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 36), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Jc(t.fullName)
                }
            }

            function nr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 37)
            }

            function or(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 37), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Lc("", t.expMonth, "/", t.expYear, "")
                }
            }

            function rr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 33)
            }

            function cr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 33), n.Vb(1, "button", 38), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).delete(i.id)
                    }), n.Qb(2, "i", 39), n.Ub(), n.Ub()
                }
            }

            function sr(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function lr(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function br(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Vb(1, "mat-table", 17), n.Tb(2, 18), n.Gc(3, Zo, 1, 0, "mat-header-cell", 19), n.Gc(4, Xo, 2, 0, "mat-cell", 20), n.Sb(), n.Tb(5, 21), n.Gc(6, tr, 1, 0, "mat-header-cell", 22), n.Gc(7, er, 2, 1, "mat-cell", 23), n.Sb(), n.Tb(8, 24), n.Gc(9, ir, 1, 0, "mat-header-cell", 25), n.Gc(10, ar, 2, 1, "mat-cell", 26), n.Sb(), n.Tb(11, 27), n.Gc(12, nr, 1, 0, "mat-header-cell", 28), n.Gc(13, or, 2, 2, "mat-cell", 29), n.Sb(), n.Tb(14, 30), n.Gc(15, rr, 1, 0, "mat-header-cell", 19), n.Gc(16, cr, 3, 0, "mat-cell", 20), n.Sb(), n.Gc(17, sr, 1, 0, "mat-header-row", 31), n.Gc(18, lr, 1, 0, "mat-row", 32), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("dataSource", t.dataSource), n.Db(16), n.nc("matHeaderRowDef", t.displayedColumns), n.Db(1), n.nc("matRowDefColumns", t.displayedColumns)
                }
            }

            function dr(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, " MANDATORY_NAME "), n.Ub())
            }

            function ur(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, " MANDATORY_CARD_NUMBER "), n.Ub())
            }

            function hr(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, " VALID_CARD_NUMBER "), n.Ub())
            }

            function mr(t, e) {
                if (1 & t && (n.Vb(0, "option", 40), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.oc("value", t), n.Db(1), n.Jc(t)
                }
            }

            function pr(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, " MANDATORY_EXPIRY_MONTH "), n.Ub())
            }

            function gr(t, e) {
                if (1 & t && (n.Vb(0, "option", 40), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.oc("value", t), n.Db(1), n.Jc(t)
                }
            }

            function fr(t, e) {
                1 & t && (n.Vb(0, "mat-error", 5), n.Ic(1, " MANDATORY_EXPIRY_YEAR "), n.Ub())
            }
            u.b.add(m.z, p.g), u.a.watch();
            let vr = (() => {
                class t {
                    constructor(t, e, i) {
                        this.paymentService = t, this.translate = e, this.snackBarHelperService = i, this.emitSelection = new n.o, this.allowDelete = !1, this.displayedColumns = ["Number", "Name", "Expiry"], this.nameControl = new s.e("", [s.z.required]), this.numberControl = new s.e("", [s.z.required, s.z.min(1e15), s.z.max(1e16)]), this.monthControl = new s.e("", [s.z.required]), this.yearControl = new s.e("", [s.z.required]), this.card = {}, this.cardsExist = !1, this.paymentId = void 0
                    }
                    ngOnInit() {
                        this.monthRange = Array.from(Array(12).keys()).map(t => t + 1), this.yearRange = Array.from(Array(20).keys()).map(t => t + 2080), this.allowDelete ? this.displayedColumns.push("Remove") : this.displayedColumns.unshift("Selection"), this.load()
                    }
                    load() {
                        this.paymentService.get().subscribe(t => {
                            this.cardsExist = t.length, this.storedCards = t, this.dataSource = new L.o(this.storedCards)
                        }, t => console.log(t))
                    }
                    save() {
                        this.card.fullName = this.nameControl.value, this.card.cardNum = this.numberControl.value, this.card.expMonth = this.monthControl.value, this.card.expYear = this.yearControl.value, this.paymentService.save(this.card).subscribe(t => {
                            this.error = null, this.translate.get("CREDIT_CARD_SAVED", {
                                cardnumber: String(t.cardNum).substring(String(t.cardNum).length - 4)
                            }).subscribe(t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }, t => {
                                this.snackBarHelperService.open(t, "confirmBar")
                            }), this.load(), this.resetForm()
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.resetForm()
                        })
                    }
                    delete(t) {
                        this.paymentService.del(t).subscribe(() => {
                            this.load()
                        }, t => console.log(t))
                    }
                    emitSelectionToParent(t) {
                        this.emitSelection.emit(t)
                    }
                    resetForm() {
                        this.nameControl.markAsUntouched(), this.nameControl.markAsPristine(), this.nameControl.setValue(""), this.numberControl.markAsUntouched(), this.numberControl.markAsPristine(), this.numberControl.setValue(""), this.monthControl.markAsUntouched(), this.monthControl.markAsPristine(), this.monthControl.setValue(""), this.yearControl.markAsUntouched(), this.yearControl.markAsPristine(), this.yearControl.setValue("")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Jo), n.Pb(v.e), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-payment-method"]
                    ],
                    inputs: {
                        allowDelete: "allowDelete"
                    },
                    outputs: {
                        emitSelection: "emitSelection"
                    },
                    decls: 46,
                    vars: 26,
                    consts: [
                        ["fxLayout", "column", "fxLayoutGap", "20px"],
                        [4, "ngIf"],
                        [1, "mat-elevation-z0"],
                        [2, "margin-bottom", "12px"],
                        ["appearance", "outline", "color", "accent"],
                        ["translate", ""],
                        ["type", "text", "matInput", "", 3, "formControl"],
                        ["translate", "", 4, "ngIf"],
                        ["type", "number", "matInput", "", 3, "formControl"],
                        ["cardIn", ""],
                        ["align", "end"],
                        ["appearance", "outline", "color", "accent", 2, "width", "45%", "margin-right", "10%"],
                        ["matNativeControl", "", "required", "", 3, "formControl"],
                        [3, "value", 4, "ngFor", "ngForOf"],
                        ["appearance", "outline", "color", "accent", 2, "width", "45%"],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"],
                        [1, "material-icons"],
                        [3, "dataSource"],
                        ["matColumnDef", "Selection"],
                        ["fxFlex", "15%", 4, "matHeaderCellDef"],
                        ["fxFlex", "15%", 4, "matCellDef"],
                        ["matColumnDef", "Number"],
                        ["fxFlex", "35%", 4, "matHeaderCellDef"],
                        ["fxFlex", "35%", 4, "matCellDef"],
                        ["matColumnDef", "Name"],
                        ["fxFlex", "30%", 4, "matHeaderCellDef"],
                        ["fxFlex", "30%", 4, "matCellDef"],
                        ["matColumnDef", "Expiry"],
                        ["fxFlex", "20%", 4, "matHeaderCellDef"],
                        ["fxFlex", "20%", 4, "matCellDef"],
                        ["matColumnDef", "Remove"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["fxFlex", "15%"],
                        [3, "click"],
                        ["fxFlex", "35%"],
                        ["fxFlex", "30%"],
                        ["fxFlex", "20%"],
                        ["mat-icon-button", "", 3, "click"],
                        [1, "far", "fa-trash-alt"],
                        [3, "value"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "div", 0), n.Vb(1, "h1"), n.Ic(2), n.ic(3, "translate"), n.Ub(), n.Gc(4, br, 19, 3, "div", 1), n.Vb(5, "div"), n.Vb(6, "mat-expansion-panel", 2), n.Vb(7, "mat-expansion-panel-header", 3), n.Vb(8, "mat-panel-title"), n.Ic(9), n.ic(10, "translate"), n.Ub(), n.Vb(11, "mat-panel-description"), n.Ic(12), n.ic(13, "translate"), n.Ub(), n.Ub(), n.Vb(14, "div"), n.Vb(15, "mat-form-field", 4), n.Vb(16, "mat-label", 5), n.Ic(17, "LABEL_NAME"), n.Ub(), n.Qb(18, "input", 6), n.Gc(19, dr, 2, 0, "mat-error", 7), n.Ub(), n.Vb(20, "mat-form-field", 4), n.Vb(21, "mat-label", 5), n.Ic(22, "LABEL_CARD_NUMBER"), n.Ub(), n.Qb(23, "input", 8, 9), n.Vb(25, "mat-hint", 10), n.Ic(26), n.Ub(), n.Gc(27, ur, 2, 0, "mat-error", 7), n.Gc(28, hr, 2, 0, "mat-error", 7), n.Ub(), n.Vb(29, "mat-form-field", 11), n.Vb(30, "mat-label", 5), n.Ic(31, "LABEL_EXPIRY_MONTH"), n.Ub(), n.Vb(32, "select", 12), n.Gc(33, mr, 2, 2, "option", 13), n.Ub(), n.Gc(34, pr, 2, 0, "mat-error", 7), n.Ub(), n.Vb(35, "mat-form-field", 14), n.Vb(36, "mat-label", 5), n.Ic(37, "LABEL_EXPIRY_YEAR"), n.Ub(), n.Vb(38, "select", 12), n.Gc(39, gr, 2, 2, "option", 13), n.Ub(), n.Gc(40, fr, 2, 0, "mat-error", 7), n.Ub(), n.Ub(), n.Vb(41, "button", 15), n.dc("click", function () {
                            return e.save()
                        }), n.Vb(42, "i", 16), n.Ic(43, " send "), n.Ub(), n.Ic(44), n.ic(45, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(24);
                            n.Db(2), n.Jc(n.jc(3, 18, "MY_PAYMENT_OPTIONS")), n.Db(2), n.nc("ngIf", e.cardsExist), n.Db(5), n.Kc(" ", n.jc(10, 20, "ADD_NEW_CARD"), " "), n.Db(3), n.Kc(" ", n.jc(13, 22, "ADD_NEW_CARD_DESCRIPTION"), " "), n.Db(6), n.nc("formControl", e.nameControl), n.Db(1), n.nc("ngIf", e.nameControl.invalid && e.nameControl.errors.required), n.Db(4), n.nc("formControl", e.numberControl), n.Db(3), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/16"), n.Db(1), n.nc("ngIf", e.numberControl.invalid && e.numberControl.errors.required), n.Db(1), n.nc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)), n.Db(4), n.nc("formControl", e.monthControl), n.Db(1), n.nc("ngForOf", e.monthRange), n.Db(1), n.nc("ngIf", e.monthControl.invalid && e.monthControl.errors.required), n.Db(4), n.nc("formControl", e.yearControl), n.Db(1), n.nc("ngForOf", e.yearRange), n.Db(1), n.nc("ngIf", e.yearControl.invalid && e.yearControl.errors.required), n.Db(1), n.nc("disabled", e.nameControl.invalid || e.numberControl.invalid || e.monthControl.invalid || e.yearControl.invalid), n.Db(3), n.Kc(" ", n.jc(45, 24, "BTN_SUBMIT"), " ")
                        }
                    },
                    directives: [f.d, f.e, E.l, Ae.b, Ae.d, Ae.e, Ae.c, Lt.c, Lt.g, v.a, Et.b, s.d, s.p, s.f, s.u, Lt.f, s.y, s.x, E.k, I.a, L.n, L.c, L.i, L.b, L.k, L.m, L.h, f.b, L.a, wa.a, L.j, L.l, Lt.b, s.t, s.B],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
                }), t
            })();

            function Ir(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div", 11), n.Vb(1, "div", 12), n.Vb(2, "div", 13), n.Vb(3, "span", 14), n.Ic(4, "LABEL_PAY_USING_WALLET"), n.Ub(), n.Ub(), n.Vb(5, "div", 15), n.Vb(6, "b"), n.Vb(7, "span", 14), n.Ic(8, "LABEL_WALLET_BALANCE"), n.Ub(), n.Vb(9, "span", 16), n.Ic(10), n.Ub(), n.Ub(), n.Ub(), n.Vb(11, "div", 17), n.Vb(12, "button", 18), n.dc("click", function () {
                        return n.yc(t), n.hc().useWallet()
                    }), n.Qb(13, "i", 19), n.Ic(14), n.ic(15, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(10), n.Kc(" ", t.walletBalanceStr, ""), n.Db(2), n.nc("disabled", t.walletBalance - t.totalPrice < 0), n.Db(2), n.Lc(" ", n.jc(15, 4, "LABEL_PAY"), " ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4 ")
                }
            }

            function Cr(t, e) {
                if (1 & t && (n.Vb(0, "div", 31), n.Ic(1), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(1), n.Kc("", t.couponConfirmation, " ")
                }
            }

            function wr(t, e) {
                if (1 & t && (n.Vb(0, "div", 32), n.Ic(1), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(1), n.Kc("", null == t.couponError ? null : t.couponError.error, " ")
                }
            }

            function Ur(t, e) {
                1 & t && (n.Vb(0, "mat-error"), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Kc(" ", n.jc(2, 1, "COUPON_CODE_HINT"), " "))
            }
            const yr = function (t, e) {
                return {
                    twitter: t,
                    facebook: e
                }
            };

            function Sr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-expansion-panel", 20), n.Vb(1, "mat-expansion-panel-header", 21), n.Vb(2, "mat-panel-title"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Vb(5, "mat-panel-description"), n.Ic(6), n.ic(7, "translate"), n.Ub(), n.Ub(), n.Gc(8, Cr, 2, 1, "div", 22), n.Gc(9, wr, 2, 1, "div", 23), n.Vb(10, "mat-form-field", 24), n.Vb(11, "mat-label", 8), n.Ic(12, "LABEL_COUPON"), n.Ub(), n.Qb(13, "mat-hint", 25), n.ic(14, "translate"), n.Qb(15, "input", 26, 27), n.ic(17, "translate"), n.Vb(18, "mat-hint", 28), n.Ic(19), n.Ub(), n.Gc(20, Ur, 3, 3, "mat-error", 29), n.Ub(), n.Vb(21, "button", 30), n.dc("click", function () {
                        return n.yc(t), n.hc().applyCoupon()
                    }), n.Vb(22, "mat-icon"), n.Ic(23, " redeem "), n.Ub(), n.Ic(24), n.ic(25, "translate"), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.vc(16),
                        e = n.hc();
                    n.nc("expanded", e.couponPanelExpanded), n.Db(3), n.Kc(" ", n.jc(4, 12, "ADD_A_COUPON"), " "), n.Db(3), n.Kc(" ", n.jc(7, 14, "VOUCHERS_AND_PROMOTIONAL_CODE"), " "), n.Db(2), n.nc("ngIf", e.couponConfirmation && !e.couponControl.dirty), n.Db(1), n.nc("ngIf", e.couponError && !e.couponControl.dirty), n.Db(4), n.nc("innerHtml", n.kc(14, 16, "FOLLOW_FOR_MONTHLY_COUPONS", n.tc(23, yr, e.twitterUrl, e.facebookUrl)), n.zc), n.Db(2), n.oc("placeholder", n.jc(17, 19, "ENTER_COUPON_CODE")), n.nc("formControl", e.couponControl), n.Db(4), n.Kc("", (null == t.value ? null : t.value.length) || 0, "/10"), n.Db(1), n.nc("ngIf", e.couponControl.invalid && (e.couponControl.errors.minlength || e.couponControl.errors.maxlength)), n.Db(1), n.nc("disabled", e.couponControl.invalid), n.Db(3), n.Kc(" ", n.jc(25, 21, "BTN_REDEEM"), " ")
                }
            }
            const Dr = function () {
                return {
                    juiceshop: "OWASP Juice Shop"
                }
            };

            function Vr(t, e) {
                1 & t && (n.Vb(0, "span", 54), n.Ic(1, "THANKS_FOR_SUPPORT"), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, Dr))
            }
            const Or = function (t) {
                return {
                    appname: t
                }
            };

            function _r(t, e) {
                if (1 & t && (n.Vb(0, "span", 54), n.Ic(1, "THANKS_FOR_SUPPORT_CUSTOMIZED"), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("translateParams", n.sc(1, Or, t.applicationName))
                }
            }

            function Pr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 55), n.dc("click", function () {
                        return n.yc(t), n.hc(2).showBitcoinQrCode()
                    }), n.Qb(1, "i", 56), n.Ic(2, " Bitcoin "), n.Ub()
                }
            }

            function xr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 55), n.dc("click", function () {
                        return n.yc(t), n.hc(2).showDashQrCode()
                    }), n.Vb(1, "i", 57), n.Ic(2, "\xd0"), n.Ub(), n.Ic(3, " Dash"), n.Ub()
                }
            }

            function kr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 55), n.dc("click", function () {
                        return n.yc(t), n.hc(2).showEtherQrCode()
                    }), n.Qb(1, "i", 58), n.Ic(2, " Ether "), n.Ub()
                }
            }

            function Tr(t, e) {
                1 & t && (n.Vb(0, "span", 54), n.Ic(1, "OFFICIAL_MERCHANDISE_STORES"), n.Ub()), 2 & t && n.nc("translateParams", n.rc(1, Dr))
            }

            function Ar(t, e) {
                if (1 & t && (n.Vb(0, "span", 54), n.Ic(1, "OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED"), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.nc("translateParams", n.sc(1, Or, t.applicationName))
                }
            }

            function Lr(t, e) {
                if (1 & t && (n.Vb(0, "mat-expansion-panel", 33), n.Vb(1, "mat-expansion-panel-header", 21), n.Vb(2, "mat-panel-title"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Vb(5, "div", 34), n.Vb(6, "div", 35), n.Vb(7, "div", 36), n.Vb(8, "label", 8), n.Ic(9, "LABEL_DONATIONS"), n.Ub(), n.Ub(), n.Vb(10, "small"), n.Ic(11, " ("), n.Gc(12, Vr, 2, 2, "span", 37), n.Gc(13, _r, 2, 3, "span", 37), n.Qb(14, "i", 38), n.Ic(15, ") "), n.Ub(), n.Vb(16, "div", 39), n.Vb(17, "a", 40), n.Vb(18, "button", 41), n.Qb(19, "i", 42), n.Ic(20), n.ic(21, "translate"), n.Ub(), n.Ub(), n.Gc(22, Pr, 3, 0, "button", 43), n.Gc(23, xr, 4, 0, "button", 43), n.Gc(24, kr, 3, 0, "button", 43), n.Ub(), n.Ub(), n.Qb(25, "span", 44), n.Vb(26, "div", 45), n.Vb(27, "div", 36), n.Vb(28, "label", 8), n.Ic(29, "LABEL_MERCHANDISE"), n.Ub(), n.Ub(), n.Vb(30, "small"), n.Ic(31, " ("), n.Gc(32, Tr, 2, 2, "span", 37), n.Gc(33, Ar, 2, 3, "span", 37), n.Qb(34, "i", 46), n.Ic(35, ") "), n.Ub(), n.Vb(36, "div", 39), n.Vb(37, "a", 47), n.Vb(38, "button", 41), n.Qb(39, "i", 48), n.Ic(40, " Spreadshirt (US)"), n.Ub(), n.Ub(), n.Vb(41, "a", 49), n.Vb(42, "button", 41), n.Qb(43, "i", 48), n.Ic(44, " Spreadshirt (DE)"), n.Ub(), n.Ub(), n.Vb(45, "a", 50), n.Vb(46, "button", 41), n.Qb(47, "i", 51), n.Ic(48, " StickerYou"), n.Ub(), n.Ub(), n.Vb(49, "a", 52), n.Vb(50, "button", 41), n.Qb(51, "i", 53), n.Ic(52, " Leanpub"), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("expanded", t.paymentPanelExpanded), n.Db(3), n.Kc(" ", n.jc(4, 10, "OTHER_PAYMENT_OPTIONS"), " "), n.Db(9), n.nc("ngIf", "OWASP Juice Shop" === t.applicationName), n.Db(1), n.nc("ngIf", "OWASP Juice Shop" !== t.applicationName), n.Db(7), n.Kc(" ", n.jc(21, 12, "BTN_CREDIT_CARD"), ""), n.Db(2), n.nc("ngIf", !1), n.Db(1), n.nc("ngIf", !1), n.Db(1), n.nc("ngIf", !1), n.Db(8), n.nc("ngIf", "OWASP Juice Shop" === t.applicationName), n.Db(1), n.nc("ngIf", "OWASP Juice Shop" !== t.applicationName)
                }
            }

            function Er(t, e) {
                1 & t && (n.Vb(0, "span", 8), n.Ic(1, "REVIEW_ALERT"), n.Ub())
            }

            function Mr(t, e) {
                1 & t && (n.Vb(0, "span", 8), n.Ic(1, "REVIEW_WALLET"), n.Ub())
            }
            u.b.add(m.d, m.o, m.s, h.g, m.S, m.Y, m.L, m.q, m.g, m.T, h.j), u.a.watch();
            let Rr = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c, l, b, d, u, h) {
                        this.location = t, this.cookieService = e, this.userService = i, this.deliveryService = a, this.walletService = n, this.router = o, this.dialog = r, this.configurationService = c, this.basketService = l, this.translate = b, this.activatedRoute = d, this.ngZone = u, this.snackBarHelperService = h, this.card = {}, this.twitterUrl = null, this.facebookUrl = null, this.applicationName = "OWASP Juice Shop", this.couponControl = new s.e("", [s.z.required, s.z.minLength(10), s.z.maxLength(10)]), this.paymentId = void 0, this.couponPanelExpanded = !1, this.paymentPanelExpanded = !1, this.walletBalance = 0, this.totalPrice = 0, this.paymentMode = "card", this.campaigns = {
                            WMNSDY2019: {
                                validOn: 15519996e5,
                                discount: 75
                            },
                            WMNSDY2020: {
                                validOn: 1583622e6,
                                discount: 60
                            },
                            WMNSDY2021: {
                                validOn: 1615158e6,
                                discount: 60
                            },
                            WMNSDY2022: {
                                validOn: 1646694e6,
                                discount: 60
                            },
                            WMNSDY2023: {
                                validOn: 167823e7,
                                discount: 60
                            },
                            ORANGE2020: {
                                validOn: 15885468e5,
                                discount: 50
                            },
                            ORANGE2021: {
                                validOn: 16200828e5,
                                discount: 40
                            },
                            ORANGE2022: {
                                validOn: 16516188e5,
                                discount: 40
                            },
                            ORANGE2023: {
                                validOn: 16831548e5,
                                discount: 40
                            }
                        }
                    }
                    ngOnInit() {
                        this.initTotal(), this.walletService.get().subscribe(t => {
                            this.walletBalance = t, this.walletBalanceStr = parseFloat(t).toFixed(2)
                        }, t => console.log(t)), this.couponPanelExpanded = !!localStorage.getItem("couponPanelExpanded") && JSON.parse(localStorage.getItem("couponPanelExpanded")), this.paymentPanelExpanded = !!localStorage.getItem("paymentPanelExpanded") && JSON.parse(localStorage.getItem("paymentPanelExpanded")), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.social) && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl), t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl), t.application.name && (this.applicationName = t.application.name))
                        }, t => console.log(t))
                    }
                    initTotal() {
                        this.activatedRoute.paramMap.subscribe(t => {
                            if (this.mode = t.get("entity"), "wallet" === this.mode) this.totalPrice = parseFloat(sessionStorage.getItem("walletTotal"));
                            else if ("deluxe" === this.mode) this.userService.deluxeStatus().subscribe(t => {
                                this.totalPrice = t.membershipCost
                            }, t => console.log(t));
                            else {
                                const t = parseFloat(sessionStorage.getItem("itemTotal")),
                                    e = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * t : 0;
                                this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(i => {
                                    this.totalPrice = t + i.price - e
                                })
                            }
                        }, t => console.log(t))
                    }
                    applyCoupon() {
                        this.campaignCoupon = this.couponControl.value, this.clientDate = new Date;
                        const t = 60 * (this.clientDate.getTimezoneOffset() + 60) * 1e3;
                        this.clientDate.setHours(0, 0, 0, 0), this.clientDate = this.clientDate.getTime() - t, sessionStorage.setItem("couponDetails", `${this.campaignCoupon}-${this.clientDate}`);
                        const e = this.campaigns[this.couponControl.value];
                        e ? this.clientDate === e.validOn ? this.showConfirmation(e.discount) : (this.couponConfirmation = void 0, this.translate.get("INVALID_COUPON").subscribe(t => {
                            this.couponError = {
                                error: t
                            }
                        }, t => {
                            this.couponError = {
                                error: t
                            }
                        }), this.resetCouponForm()) : this.basketService.applyCoupon(Number(sessionStorage.getItem("bid")), encodeURIComponent(this.couponControl.value)).subscribe(t => {
                            this.showConfirmation(t)
                        }, t => {
                            this.couponConfirmation = void 0, this.couponError = t, this.resetCouponForm()
                        })
                    }
                    showConfirmation(t) {
                        this.resetCouponForm(), this.couponError = void 0, sessionStorage.setItem("couponDiscount", t), this.translate.get("DISCOUNT_APPLIED", {
                            discount: t
                        }).subscribe(t => {
                            this.couponConfirmation = t
                        }, t => {
                            this.couponConfirmation = t
                        }), this.initTotal()
                    }
                    getMessage(t) {
                        this.paymentId = t, this.paymentMode = "card"
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    choosePayment() {
                        var t = this;
                        if (sessionStorage.removeItem("itemTotal"), "wallet" === this.mode) this.walletService.put({
                            balance: this.totalPrice,
                            paymentId: this.paymentId
                        }).subscribe(() => {
                            sessionStorage.removeItem("walletTotal"), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/wallet"])
                            })), this.snackBarHelperService.open("CHARGED_WALLET", "confirmBar")
                        }, t => {
                            var e;
                            console.log(t), this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.message, "errorBar")
                        });
                        else if ("deluxe" === this.mode) this.userService.upgradeToDeluxe(this.paymentMode, this.paymentId).subscribe(e => {
                            localStorage.setItem("token", e.token), this.cookieService.put("token", e.token), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/deluxe-membership"])
                            }))
                        }, t => console.log(t));
                        else {
                            if ("wallet" === this.paymentMode) {
                                if (this.walletBalance < this.totalPrice) return void this.snackBarHelperService.open("INSUFFICIENT_WALLET_BALANCE", "errorBar");
                                sessionStorage.setItem("paymentId", "wallet")
                            } else sessionStorage.setItem("paymentId", this.paymentId);
                            this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/order-summary"])
                            }))
                        }
                    }
                    noop() { }
                    showBitcoinQrCode() {
                        this.dialog.open(qo, {
                            data: {
                                data: "bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                url: "./redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                address: "1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                title: "TITLE_BITCOIN_ADDRESS"
                            }
                        })
                    }
                    showDashQrCode() {
                        this.dialog.open(qo, {
                            data: {
                                data: "dash:Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                url: "./redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                address: "Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                title: "TITLE_DASH_ADDRESS"
                            }
                        })
                    }
                    showEtherQrCode() {
                        this.dialog.open(qo, {
                            data: {
                                data: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                                url: "./redirect?to=https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6",
                                address: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                                title: "TITLE_ETHER_ADDRESS"
                            }
                        })
                    }
                    useWallet() {
                        this.paymentMode = "wallet", this.choosePayment()
                    }
                    resetCouponForm() {
                        this.couponControl.setValue(""), this.couponControl.markAsPristine(), this.couponControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(E.g), n.Pb(c.b), n.Pb(y), n.Pb(Yo), n.Pb($o), n.Pb(S.b), n.Pb(_e.b), n.Pb(d), n.Pb(V), n.Pb(v.e), n.Pb(S.a), n.Pb(n.B), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-payment"]
                    ],
                    decls: 24,
                    vars: 10,
                    consts: [
                        [1, "mat-own-card", "mat-elevation-z6"],
                        [3, "allowDelete", "emitSelection"],
                        ["class", "mat-elevation-z0", "class", "custom-card", 4, "ngIf"],
                        ["class", "mat-elevation-z0", "id", "collapseCouponElement", 3, "expanded", 4, "ngIf"],
                        ["class", "mat-elevation-z0", 3, "expanded", 4, "ngIf"],
                        [2, "margin-top", "20px", "margin-bottom", "20px"],
                        ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"],
                        ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to review", 1, "btn", "nextButton", 3, "disabled", "click"],
                        ["translate", ""],
                        [2, "text-align", "center", "margin-top", "-27px"],
                        ["translate", "", 4, "ngIf"],
                        [1, "custom-card"],
                        ["fxLayout", "row"],
                        ["fxFlex", "42%"],
                        ["translate", "", 1, "card-title"],
                        ["fxFlex", "38%"],
                        [1, "confirmation", "card-title"],
                        ["fxFlex", "20%"],
                        ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "btn", 2, "float", "right", 3, "disabled", "click"],
                        [1, "fas", "fa-hand-holding-usd", "fa-lg"],
                        ["id", "collapseCouponElement", 1, "mat-elevation-z0", 3, "expanded"],
                        [1, "detail-divider"],
                        ["style", "margin-top:5px;", "class", "confirmation", 4, "ngIf"],
                        ["style", "margin-top:5px;", "class", "error", 4, "ngIf"],
                        ["appearance", "outline", "color", "accent"],
                        [3, "innerHtml"],
                        ["id", "coupon", "matInput", "", "type", "text", 3, "formControl", "placeholder"],
                        ["coupon", ""],
                        ["align", "end"],
                        [4, "ngIf"],
                        ["type", "submit", "id", "applyCouponButton", "color", "accent", "mat-raised-button", "", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"],
                        [1, "confirmation", 2, "margin-top", "5px"],
                        [1, "error", 2, "margin-top", "5px"],
                        [1, "mat-elevation-z0", 3, "expanded"],
                        ["fxLayout", "row", "fxLayout.lt-lg", "column"],
                        ["fxFlex", "34%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"],
                        [1, "payment-label"],
                        ["translate", "", 3, "translateParams", 4, "ngIf"],
                        [1, "fas", "fa-heart", "error", 2, "margin-left", "3px"],
                        [1, "button-container", 2, "margin-top", "6px"],
                        ["href", "https://pwning.owasp-juice.shop/part3/donations.html"],
                        ["mat-stroked-button", ""],
                        [1, "fab", "fa-stripe", "fa-lg"],
                        ["mat-stroked-button", "", 3, "click", 4, "ngIf"],
                        [1, "fill-remaining-space"],
                        ["fxFlex", "65%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"],
                        [1, "fas", "fa-thumbs-up", "confirmation", 2, "margin-left", "3px"],
                        ["href", "./redirect?to=http://shop.spreadshirt.com/juiceshop"],
                        [1, "fas", "fa-tshirt", "fa-lg"],
                        ["href", "./redirect?to=http://shop.spreadshirt.de/juiceshop"],
                        ["href", "./redirect?to=https://www.stickeryou.com/products/owasp-juice-shop/794"],
                        [1, "fas", "fa-sticky-note", "fa-lg"],
                        ["href", "./redirect?to=http://leanpub.com/juice-shop"],
                        [1, "fab", "fa-leanpub", "fa-lg"],
                        ["translate", "", 3, "translateParams"],
                        ["mat-stroked-button", "", 3, "click"],
                        [1, "fab", "fa-btc", "fa-lg"],
                        [1, "fa-lg"],
                        [1, "fab", "fa-ethereum", "fa-lg"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div"), n.Vb(2, "app-payment-method", 1), n.dc("emitSelection", function (t) {
                            return e.getMessage(t)
                        }), n.Ub(), n.Qb(3, "mat-divider"), n.Gc(4, Ir, 16, 6, "div", 2), n.Qb(5, "mat-divider"), n.Gc(6, Sr, 26, 26, "mat-expansion-panel", 3), n.Qb(7, "mat-divider"), n.Gc(8, Lr, 53, 14, "mat-expansion-panel", 4), n.Qb(9, "mat-divider"), n.Vb(10, "div", 5), n.Vb(11, "button", 6), n.dc("click", function () {
                            return e.routeToPreviousUrl()
                        }), n.Vb(12, "mat-icon"), n.Ic(13, " navigate_before "), n.Ub(), n.Ic(14), n.ic(15, "translate"), n.Ub(), n.Vb(16, "button", 7), n.dc("click", function () {
                            return e.choosePayment()
                        }), n.Vb(17, "mat-icon"), n.Ic(18, " navigate_next "), n.Ub(), n.Vb(19, "span", 8), n.Ic(20, "LABEL_CONTINUE"), n.Ub(), n.Ub(), n.Vb(21, "p", 9), n.Gc(22, Er, 2, 0, "span", 10), n.Gc(23, Mr, 2, 0, "span", 10), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(2), n.nc("allowDelete", !1), n.Db(2), n.nc("ngIf", "wallet" !== e.mode), n.Db(2), n.nc("ngIf", "wallet" !== e.mode), n.Db(2), n.nc("ngIf", "wallet" !== e.mode), n.Db(6), n.Kc(" ", n.jc(15, 8, "LABEL_BACK"), " "), n.Db(2), n.nc("disabled", void 0 === e.paymentId && "wallet" !== e.paymentMode), n.Db(6), n.nc("ngIf", "deluxe" !== e.mode && "wallet" !== e.mode), n.Db(1), n.nc("ngIf", "wallet" === e.mode))
                    },
                    directives: [g.a, vr, Te.a, E.l, I.a, pe.a, v.a, f.d, f.b, Ae.b, Ae.d, Ae.e, Ae.c, Lt.c, Lt.g, Lt.f, Et.b, s.d, s.p, s.f, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}mat-card[_ngcontent-%COMP%]{height:auto}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px}.custom-card[_ngcontent-%COMP%]{padding:18px 24px}.card-title[_ngcontent-%COMP%]{font-size:15px;line-height:36px;vertical-align:middle}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.mat-card[_ngcontent-%COMP%]   .mat-divider-horizontal[_ngcontent-%COMP%]{position:relative!important}"]
                }), t
            })(),
                Nr = (() => {
                    class t { }
                    return t.\u0275fac = function (e) {
                        return new (e || t)
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-saved-payment-methods"]
                        ],
                        decls: 2,
                        vars: 1,
                        consts: [
                            [1, "mat-own-card", "mat-elevation-z6"],
                            [3, "allowDelete"]
                        ],
                        template: function (t, e) {
                            1 & t && (n.Vb(0, "mat-card", 0), n.Qb(1, "app-payment-method", 1), n.Ub()), 2 & t && (n.Db(1), n.nc("allowDelete", !0))
                        },
                        directives: [g.a, vr],
                        styles: [".mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }), t
                })(),
                Br = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/order-history"
                        }
                        get() {
                            return this.http.get(this.host).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        getAll() {
                            return this.http.get(this.host + "/orders").pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                        toggleDeliveryStatus(t, e) {
                            return this.http.put(`${this.host}/${t}/delivery-status`, e).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            const Gr = ["paginatorOrderHistory"],
                Fr = ["paginator"];

            function jr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 32)
            }

            function Hr(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 33), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.orderId, "")
                }
            }

            function Qr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 34)
            }

            function zr(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 35), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4")
                }
            }

            function Wr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 36)
            }

            function Kr(t, e) {
                1 & t && (n.Vb(0, "div", 40), n.Ic(1, "LABEL_IN_TRANSIT"), n.Ub())
            }

            function qr(t, e) {
                1 & t && (n.Vb(0, "div", 41), n.Ic(1, "LABEL_DELIVERED"), n.Ub())
            }

            function $r(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 37), n.Gc(1, Kr, 2, 0, "div", 38), n.Gc(2, qr, 2, 0, "div", 39), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngIf", !t.delivered), n.Db(1), n.nc("ngIf", t.delivered)
                }
            }

            function Yr(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 35)
            }

            function Jr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 43), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc().changeDeliveryStatus(e.delivered, e.id)
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " cached "), n.Ub(), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "LABEL_MARK_AS_TRANSIT"))
            }

            function Zr(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 43), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc().$implicit;
                        return n.hc().changeDeliveryStatus(e.delivered, e.id)
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " check_circle "), n.Ub(), n.Ub()
                }
                2 & t && n.oc("matTooltip", n.jc(1, 1, "LABEL_MARK_AS_DELIVERED"))
            }

            function Xr(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 35), n.Gc(1, Jr, 4, 3, "button", 42), n.Gc(2, Zr, 4, 3, "button", 42), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngIf", t.delivered), n.Db(1), n.nc("ngIf", !t.delivered)
                }
            }

            function tc(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function ec(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function ic(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 44)
            }

            function ac(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 45), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc(" ", t.name, "")
                }
            }

            function nc(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 46)
            }

            function oc(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 47), n.Vb(1, "mat-form-field", 48), n.Qb(2, "input", 49, 50), n.Vb(4, "button", 51), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit,
                            a = n.vc(3);
                        return n.hc().modifyPrice(i.id, a.value)
                    }), n.Qb(5, "i", 52), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit;
                    n.Db(2), n.oc("value", t.price)
                }
            }

            function rc(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 53)
            }

            function cc(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 47), n.Vb(1, "mat-form-field", 48), n.Qb(2, "input", 49, 54), n.Vb(4, "button", 51), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit,
                            a = n.vc(3),
                            o = n.hc();
                        return o.modifyQuantity(o.quantityMap[i.id].id, a.value)
                    }), n.Qb(5, "i", 52), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.Db(2), n.oc("value", i.quantityMap[t.id].quantity)
                }
            }

            function sc(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function lc(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }
            u.b.add(m.f), u.a.watch();
            let bc = (() => {
                class t {
                    constructor(t, e, i, a) {
                        this.productService = t, this.quantityService = e, this.orderHistoryService = i, this.snackBarHelperService = a, this.orderHistoryColumns = ["OrderId", "Price", "Status", "StatusButton"], this.displayedColumns = ["Product", "Price", "Quantity"]
                    }
                    ngAfterViewInit() {
                        this.loadQuantity(), this.loadProducts(), this.loadOrders()
                    }
                    loadQuantity() {
                        this.quantitySubscription = this.quantityService.getAll().subscribe(t => {
                            this.quantityMap = {}, t.map(t => {
                                this.quantityMap[t.ProductId] = {
                                    id: t.id,
                                    quantity: t.quantity
                                }
                            })
                        }, t => console.log(t))
                    }
                    loadProducts() {
                        this.productSubscription = this.productService.search("").subscribe(t => {
                            this.tableData = t, this.dataSource = new L.o(this.tableData), this.dataSource.paginator = this.paginator
                        }, t => console.log(t))
                    }
                    loadOrders() {
                        this.orderHistoryService.getAll().subscribe(t => {
                            this.orderData = [];
                            for (const e of t) this.orderData.push({
                                id: e._id,
                                orderId: e.orderId,
                                totalPrice: e.totalPrice,
                                delivered: e.delivered
                            });
                            this.orderSource = new L.o(this.orderData), this.orderSource.paginator = this.paginatorOrderHistory
                        }, t => console.log(t))
                    }
                    ngOnDestroy() {
                        this.productSubscription && this.productSubscription.unsubscribe(), this.quantitySubscription && this.quantitySubscription.unsubscribe()
                    }
                    modifyQuantity(t, e) {
                        this.quantityService.put(t, {
                            quantity: e < 0 ? 0 : e
                        }).subscribe(t => {
                            const e = this.tableData.find(e => e.id === t.ProductId);
                            this.snackBarHelperService.open(`Quantity for ${e.name} has been updated.`, "confirmBar"), this.loadQuantity()
                        }, t => {
                            this.snackBarHelperService.open(t.error, "errorBar"), console.log(t)
                        })
                    }
                    modifyPrice(t, e) {
                        this.productService.put(t, {
                            price: e < 0 ? 0 : e
                        }).subscribe(t => {
                            this.snackBarHelperService.open(`Price for ${t.name} has been updated.`, "confirmBar"), this.loadProducts()
                        }, t => {
                            this.snackBarHelperService.open(t.error, "errorBar"), console.log(t)
                        })
                    }
                    changeDeliveryStatus(t, e) {
                        this.orderHistoryService.toggleDeliveryStatus(e, {
                            deliveryStatus: t
                        }).subscribe(() => {
                            this.loadOrders()
                        }, t => {
                            this.snackBarHelperService.open(t, "errorBar"), console.log(t)
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Ge), n.Pb(ze), n.Pb(Br), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-accounting"]
                    ],
                    viewQuery: function (t, e) {
                        if (1 & t && (n.Nc(Gr, 3), n.Nc(Fr, 3)), 2 & t) {
                            let t;
                            n.uc(t = n.ec()) && (e.paginatorOrderHistory = t.first), n.uc(t = n.ec()) && (e.paginator = t.first)
                        }
                    },
                    decls: 45,
                    vars: 8,
                    consts: [
                        [1, "mat-elevation-z6", "mat-own-card"],
                        ["translate", ""],
                        ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"],
                        ["fxFlexAlign", "center", 1, "orders-container"],
                        [1, "orders-table"],
                        [1, "heading"],
                        [3, "dataSource"],
                        ["matColumnDef", "OrderId"],
                        ["translate", "LABEL_ORDER_ID", "fxFlex", "50%", 4, "matHeaderCellDef"],
                        ["fxFlex", "50%", 4, "matCellDef"],
                        ["matColumnDef", "Price"],
                        ["translate", "LABEL_PRICE", "fxFlex", "15%", 4, "matHeaderCellDef"],
                        ["fxFlex", "15%", 4, "matCellDef"],
                        ["matColumnDef", "Status"],
                        ["translate", "LABEL_STATUS", "fxFlex", "20%", 4, "matHeaderCellDef"],
                        ["fxFlex", "20%", 4, "matCellDef"],
                        ["matColumnDef", "StatusButton"],
                        ["fxFlex", "15%", 4, "matHeaderCellDef"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize"],
                        ["paginatorOrderHistory", ""],
                        ["fxFlexAlign.lt-md", "center", 1, "inventory-container"],
                        [1, "inventory-table"],
                        ["matColumnDef", "Product"],
                        ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matHeaderCellDef"],
                        ["fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matCellDef"],
                        ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"],
                        ["fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matCellDef"],
                        ["matColumnDef", "Quantity"],
                        ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"],
                        ["paginator", ""],
                        ["translate", "LABEL_ORDER_ID", "fxFlex", "50%"],
                        ["fxFlex", "50%"],
                        ["translate", "LABEL_PRICE", "fxFlex", "15%"],
                        ["fxFlex", "15%"],
                        ["translate", "LABEL_STATUS", "fxFlex", "20%"],
                        ["fxFlex", "20%"],
                        ["class", "error", "translate", "", 4, "ngIf"],
                        ["class", "confirmation", "translate", "", 4, "ngIf"],
                        ["translate", "", 1, "error"],
                        ["translate", "", 1, "confirmation"],
                        ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click", 4, "ngIf"],
                        ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"],
                        ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%"],
                        ["fxFlex", "50%", "fxFlex.lt-md", "50%"],
                        ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%"],
                        ["fxFlex", "25%", "fxFlex.lt-md", "25%"],
                        [1, "input-field"],
                        ["matInput", "", "type", "number", 3, "value"],
                        ["price", ""],
                        ["mat-icon-button", "", "matSuffix", "", 3, "click"],
                        [1, "fas", "fa-check"],
                        ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%"],
                        ["quanitity", ""]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1", 1), n.Ic(2, "ACCOUNTING"), n.Ub(), n.Vb(3, "div", 2), n.Vb(4, "div", 3), n.Vb(5, "div", 4), n.Vb(6, "div", 5), n.Vb(7, "span", 1), n.Ic(8, "TITLE_TRACK_ORDERS"), n.Ub(), n.Ub(), n.Vb(9, "mat-table", 6), n.Tb(10, 7), n.Gc(11, jr, 1, 0, "mat-header-cell", 8), n.Gc(12, Hr, 2, 1, "mat-cell", 9), n.Sb(), n.Tb(13, 10), n.Gc(14, Qr, 1, 0, "mat-header-cell", 11), n.Gc(15, zr, 2, 1, "mat-cell", 12), n.Sb(), n.Tb(16, 13), n.Gc(17, Wr, 1, 0, "mat-header-cell", 14), n.Gc(18, $r, 3, 2, "mat-cell", 15), n.Sb(), n.Tb(19, 16), n.Gc(20, Yr, 1, 0, "mat-header-cell", 17), n.Gc(21, Xr, 3, 2, "mat-cell", 12), n.Sb(), n.Gc(22, tc, 1, 0, "mat-header-row", 18), n.Gc(23, ec, 1, 0, "mat-row", 19), n.Ub(), n.Qb(24, "mat-paginator", 20, 21), n.Ub(), n.Ub(), n.Vb(26, "div", 22), n.Vb(27, "div", 23), n.Vb(28, "div", 5), n.Vb(29, "span", 1), n.Ic(30, "TITLE_ALL_PRODUCTS"), n.Ub(), n.Ub(), n.Vb(31, "mat-table", 6), n.Tb(32, 24), n.Gc(33, ic, 1, 0, "mat-header-cell", 25), n.Gc(34, ac, 2, 1, "mat-cell", 26), n.Sb(), n.Tb(35, 10), n.Gc(36, nc, 1, 0, "mat-header-cell", 27), n.Gc(37, oc, 6, 1, "mat-cell", 28), n.Sb(), n.Tb(38, 29), n.Gc(39, rc, 1, 0, "mat-header-cell", 30), n.Gc(40, cc, 6, 1, "mat-cell", 28), n.Sb(), n.Gc(41, sc, 1, 0, "mat-header-row", 18), n.Gc(42, lc, 1, 0, "mat-row", 19), n.Ub(), n.Qb(43, "mat-paginator", 20, 31), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(9), n.nc("dataSource", e.orderSource), n.Db(13), n.nc("matHeaderRowDef", e.orderHistoryColumns), n.Db(1), n.nc("matRowDefColumns", e.orderHistoryColumns), n.Db(1), n.nc("pageSize", 10), n.Db(7), n.nc("dataSource", e.dataSource), n.Db(10), n.nc("matHeaderRowDef", e.displayedColumns), n.Db(1), n.nc("matRowDefColumns", e.displayedColumns), n.Db(1), n.nc("pageSize", 10))
                    },
                    directives: [g.a, v.a, f.d, f.e, f.a, L.n, L.c, L.i, L.b, L.k, L.m, Fe.a, L.h, f.b, L.a, E.l, I.a, ge.a, pe.a, L.j, L.l, Lt.c, Et.b, Lt.h],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);font-size:large;margin-bottom:10px;padding:12px}.container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.inventory-container[_ngcontent-%COMP%], .orders-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.inventory-table[_ngcontent-%COMP%], .orders-table[_ngcontent-%COMP%]{margin-bottom:25px}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-bottom:20px;margin-left:10%;margin-right:10%}.product[_ngcontent-%COMP%]{cursor:pointer}.input-field[_ngcontent-%COMP%]{width:80px}"]
                }), t
            })();
            const dc = function (t) {
                return {
                    numberdays: t
                }
            };

            function uc(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Vb(1, "div", 30), n.Ic(2, "ESTIMATED_TIME_OF_DELIVERY"), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(1), n.nc("translateParams", n.sc(1, dc, t.orderDetails.eta))
                }
            }

            function hc(t, e) {
                if (1 & t && (n.Vb(0, "div"), n.Gc(1, uc, 3, 3, "span", 7), n.Vb(2, "div"), n.Vb(3, "b", 4), n.Ic(4, "LABEL_DELIVERY_ADDRESS"), n.Ub(), n.Ub(), n.Vb(5, "div"), n.Ic(6), n.Ub(), n.Vb(7, "div"), n.Ic(8), n.Ub(), n.Vb(9, "div"), n.Ic(10), n.Ub(), n.Vb(11, "div"), n.Vb(12, "span", 4), n.Ic(13, "PHONE_NUMBER"), n.Ub(), n.Ic(14), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("ngIf", "?" !== t.orderDetails.eta && void 0 !== t.orderDetails.eta), n.Db(5), n.Jc(null == t.address ? null : t.address.fullName), n.Db(2), n.Mc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""), n.Db(2), n.Jc(null == t.address ? null : t.address.country), n.Db(4), n.Kc(" ", null == t.address ? null : t.address.mobileNum, "")
                }
            }

            function mc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 4), n.Ic(1, "LABEL_PRODUCT"), n.Ub())
            }

            function pc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.name, " ")
                }
            }

            function gc(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell")
            }

            function fc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 4), n.Ic(1, "LABEL_PRICE"), n.Ub())
            }

            function vc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.price, "\xa4")
                }
            }

            function Ic(t, e) {
                1 & t && n.Qb(0, "mat-footer-cell")
            }

            function Cc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 4), n.Ic(1, "LABEL_QUANTITY"), n.Ub())
            }

            function wc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell"), n.Vb(1, "span"), n.Ic(2), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(2), n.Jc(t.quantity)
                }
            }

            function Uc(t, e) {
                1 & t && (n.Vb(0, "mat-footer-cell"), n.Vb(1, "table", 31), n.Vb(2, "tr", 32), n.Vb(3, "td", 4), n.Ic(4, "ITEMS"), n.Ub(), n.Ub(), n.Vb(5, "tr", 32), n.Vb(6, "td", 4), n.Ic(7, "DELIVERY"), n.Ub(), n.Ub(), n.Vb(8, "tr", 32), n.Vb(9, "td", 4), n.Ic(10, "PROMOTION"), n.Ub(), n.Ub(), n.Vb(11, "tr", 33), n.Vb(12, "td", 4), n.Ic(13, "LABEL_TOTAL_PRICE"), n.Ub(), n.Ub(), n.Ub(), n.Ub())
            }

            function yc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 4), n.Ic(1, "LABEL_TOTAL_PRICE"), n.Ub())
            }

            function Sc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 34), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.total.toFixed(2), "\xa4")
                }
            }

            function Dc(t, e) {
                if (1 & t && (n.Vb(0, "mat-footer-cell"), n.Vb(1, "table", 34), n.Vb(2, "tr", 32), n.Vb(3, "td"), n.Ic(4), n.Ub(), n.Ub(), n.Vb(5, "tr", 32), n.Vb(6, "td"), n.Ic(7), n.Ub(), n.Ub(), n.Vb(8, "tr", 32), n.Vb(9, "td"), n.Ic(10), n.Ub(), n.Ub(), n.Vb(11, "tr", 33), n.Vb(12, "td"), n.Ic(13), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc("", null == t.orderDetails.itemTotal ? null : t.orderDetails.itemTotal.toFixed(2), "\xa4"), n.Db(3), n.Kc("", t.deliveryPrice.toFixed(2), "\xa4"), n.Db(3), n.Kc("", t.promotionalDiscount.toFixed(2), "\xa4"), n.Db(3), n.Kc("", null == t.orderDetails.totalPrice ? null : t.orderDetails.totalPrice.toFixed(2), "\xa4")
                }
            }

            function Vc(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Oc(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function _c(t, e) {
                1 & t && n.Qb(0, "mat-footer-row", 35)
            }
            const Pc = function (t) {
                return {
                    id: t
                }
            },
                xc = function (t) {
                    return {
                        bonus: t
                    }
                };
            u.b.add(h.k), u.a.watch();
            let kc = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.configurationService = t, this.addressService = e, this.trackOrderService = i, this.activatedRoute = a, this.basketService = n, this.tableColumns = ["product", "price", "quantity", "total price"], this.orderDetails = {
                            totalPrice: 0
                        }, this.deliveryPrice = 0, this.promotionalDiscount = 0, this.tweetText = "I just purchased", this.truncateTweet = (t, e = 140) => {
                            if (!t) return null;
                            const i = t.length > e;
                            return `${t.substring(0, e)}${i ? "..." : ""}`
                        }
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(t => {
                            this.orderId = t.get("id"), this.trackOrderService.find(this.orderId).subscribe(t => {
                                this.promotionalDiscount = t.data[0].promotionalAmount ? parseFloat(t.data[0].promotionalAmount) : 0, this.deliveryPrice = t.data[0].deliveryPrice ? parseFloat(t.data[0].deliveryPrice) : 0, this.orderDetails.addressId = t.data[0].addressId, this.orderDetails.paymentId = t.data[0].paymentId, this.orderDetails.totalPrice = t.data[0].totalPrice, this.orderDetails.itemTotal = t.data[0].totalPrice + this.promotionalDiscount - this.deliveryPrice, this.orderDetails.eta = t.data[0].eta || "?", this.orderDetails.products = t.data[0].products, this.orderDetails.bonus = t.data[0].bonus, this.dataSource = new L.o(this.orderDetails.products);
                                for (const e of this.orderDetails.products) this.tweetText += `%0a- ${e.name}`;
                                this.tweetText = this.truncateTweet(this.tweetText), this.configurationService.getApplicationConfiguration().subscribe(t => {
                                    var e;
                                    (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.social) && (this.tweetText += "%0afrom ", this.tweetText += t.application.social.twitterUrl ? t.application.social.twitterUrl.replace("https://twitter.com/", "@") : t.application.name)
                                }, t => console.log(t)), this.addressService.getById(this.orderDetails.addressId).subscribe(t => {
                                    this.address = t
                                }, t => console.log(t))
                            }, t => console.log(t))
                        }, t => console.log(t))
                    }
                    openConfirmationPDF() {
                        window.open(`${this.basketService.hostServer}/ftp/order_${this.orderId}.pdf`, "_blank")
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(d), n.Pb(Ia), n.Pb(lt), n.Pb(S.a), n.Pb(V))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-order-completion"]
                    ],
                    decls: 51,
                    vars: 18,
                    consts: [
                        [1, "mat-elevation-z6", "mat-own-card"],
                        ["fxLayout", "row", "fxLayout.lt-md", "column"],
                        ["fxFlex", "60%", 1, "mat-elevation-z0"],
                        ["translate", "", 1, "confirmation"],
                        ["translate", ""],
                        ["routerLink", "/track-result/new", "translate", "", 3, "queryParams"],
                        ["fxFlex", "40%", 1, "mat-elevation-z0"],
                        [4, "ngIf"],
                        [1, "mat-elevation-z0", "table-container"],
                        [1, "heading"],
                        [1, "heading-text"],
                        ["fxFlex", ""],
                        [3, "href"],
                        ["mat-icon-button", "", "aria-label", "Tweet"],
                        [1, "fab", "fa-twitter", "fa-lg"],
                        ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"],
                        [3, "dataSource"],
                        ["matColumnDef", "product"],
                        ["translate", "", 4, "matHeaderCellDef"],
                        [4, "matCellDef"],
                        [4, "matFooterCellDef"],
                        ["matColumnDef", "price"],
                        ["matColumnDef", "quantity"],
                        ["matColumnDef", "total price"],
                        ["class", "price-align", 4, "matCellDef"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["mat-footer-row", "", 4, "matFooterRowDef"],
                        [1, "mat-elevation-z0"],
                        ["translate", "", 3, "translateParams"],
                        ["translate", "", 1, "confirmation", 3, "translateParams"],
                        [1, "mat-table"],
                        [1, "mat-row"],
                        [1, "mat-row", 2, "font-weight", "bold"],
                        [1, "price-align"],
                        ["mat-footer-row", ""]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div"), n.Vb(2, "div", 1), n.Vb(3, "mat-card", 2), n.Vb(4, "div"), n.Vb(5, "h1", 3), n.Ic(6, "THANKS_FOR_PURCHASE"), n.Ub(), n.Vb(7, "div", 4), n.Ic(8, "PURCHASE_COMMENT_PREFIX "), n.Vb(9, "a", 5), n.Ic(10, "TITLE_TRACK_ORDERS"), n.Ub(), n.Ic(11, " PURCHASE_COMMENT_SUFFIX"), n.Ub(), n.Ub(), n.Ub(), n.Vb(12, "mat-card", 6), n.Gc(13, hc, 15, 8, "div", 7), n.Ub(), n.Ub(), n.Ub(), n.Vb(14, "div", 8), n.Vb(15, "div", 9), n.Vb(16, "span", 10), n.Ic(17), n.ic(18, "translate"), n.Ub(), n.Qb(19, "span", 11), n.Vb(20, "a", 12), n.Vb(21, "button", 13), n.Qb(22, "i", 14), n.Ub(), n.Ub(), n.Vb(23, "button", 15), n.dc("click", function () {
                            return e.openConfirmationPDF()
                        }), n.ic(24, "translate"), n.Vb(25, "mat-icon"), n.Ic(26, " note "), n.Ub(), n.Ub(), n.Ub(), n.Vb(27, "mat-table", 16), n.Tb(28, 17), n.Gc(29, mc, 2, 0, "mat-header-cell", 18), n.Gc(30, pc, 2, 1, "mat-cell", 19), n.Gc(31, gc, 1, 0, "mat-footer-cell", 20), n.Sb(), n.Tb(32, 21), n.Gc(33, fc, 2, 0, "mat-header-cell", 18), n.Gc(34, vc, 2, 1, "mat-cell", 19), n.Gc(35, Ic, 1, 0, "mat-footer-cell", 20), n.Sb(), n.Tb(36, 22), n.Gc(37, Cc, 2, 0, "mat-header-cell", 18), n.Gc(38, wc, 3, 1, "mat-cell", 19), n.Gc(39, Uc, 14, 0, "mat-footer-cell", 20), n.Sb(), n.Tb(40, 23), n.Gc(41, yc, 2, 0, "mat-header-cell", 18), n.Gc(42, Sc, 2, 1, "mat-cell", 24), n.Gc(43, Dc, 14, 4, "mat-footer-cell", 20), n.Sb(), n.Gc(44, Vc, 1, 0, "mat-header-row", 25), n.Gc(45, Oc, 1, 0, "mat-row", 26), n.Gc(46, _c, 1, 0, "mat-footer-row", 27), n.Ub(), n.Ub(), n.Vb(47, "div"), n.Vb(48, "mat-card", 28), n.Vb(49, "div", 29), n.Ic(50, "BONUS_POINTS_COUNT"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(9), n.nc("queryParams", n.sc(14, Pc, e.orderId)), n.Db(4), n.nc("ngIf", e.address), n.Db(4), n.Jc(n.jc(18, 10, "ORDER_SUMMARY")), n.Db(3), n.pc("href", "https://twitter.com/intent/tweet?text=", e.tweetText, "&hashtags=security", n.Bc), n.Db(3), n.oc("matTooltip", n.jc(24, 12, "PRINT_ORDER_CONFIRMATION")), n.Db(4), n.nc("dataSource", e.dataSource), n.Db(17), n.nc("matHeaderRowDef", e.tableColumns), n.Db(1), n.nc("matRowDefColumns", e.tableColumns), n.Db(1), n.nc("matFooterRowDef", e.tableColumns), n.Db(3), n.nc("translateParams", n.sc(16, xc, e.orderDetails.bonus)))
                    },
                    directives: [g.a, f.d, f.b, v.a, S.d, E.l, I.a, ge.a, pe.a, L.n, L.c, L.i, L.b, L.e, L.k, L.m, L.g, L.h, L.a, L.d, L.j, L.l, L.f],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
                }), t
            })();

            function Tc(t, e) {
                if (1 & t && (n.Vb(0, "mat-card", 20), n.Vb(1, "div"), n.Vb(2, "div"), n.Vb(3, "b", 14), n.Ic(4, "PAYMENT_METHOD"), n.Ub(), n.Ub(), n.Vb(5, "div"), n.Vb(6, "span", 14), n.Ic(7, "CARD_ENDING_IN"), n.Ub(), n.Ic(8), n.Ub(), n.Vb(9, "div"), n.Vb(10, "span", 14), n.Ic(11, "CARD_HOLDER"), n.Ub(), n.Ic(12), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(8), n.Kc(" ", null == t.paymentMethod ? null : t.paymentMethod.cardNum, ""), n.Db(4), n.Kc(" ", null == t.paymentMethod ? null : t.paymentMethod.fullName, "")
                }
            }

            function Ac(t, e) {
                1 & t && (n.Vb(0, "mat-card", 20), n.Vb(1, "div"), n.Vb(2, "div"), n.Vb(3, "b", 14), n.Ic(4, "PAYMENT_METHOD"), n.Ub(), n.Ub(), n.Vb(5, "div"), n.Vb(6, "span", 14), n.Ic(7, "DIGITAL_WALLET"), n.Ub(), n.Ub(), n.Ub(), n.Ub())
            }

            function Lc(t, e) {
                if (1 & t && (n.Vb(0, "div", 16), n.Vb(1, "mat-card", 17), n.Vb(2, "div"), n.Vb(3, "div"), n.Vb(4, "b", 14), n.Ic(5, "LABEL_DELIVERY_ADDRESS"), n.Ub(), n.Ub(), n.Vb(6, "div"), n.Ic(7), n.Ub(), n.Vb(8, "div"), n.Ic(9), n.Ub(), n.Vb(10, "div"), n.Ic(11), n.Ub(), n.Vb(12, "div"), n.Vb(13, "span", 14), n.Ic(14, "PHONE_NUMBER"), n.Ub(), n.Ic(15), n.Ub(), n.Ub(), n.Ub(), n.Gc(16, Tc, 13, 2, "mat-card", 18), n.Gc(17, Ac, 8, 0, "ng-template", null, 19, n.Hc), n.Ub()), 2 & t) {
                    const t = n.vc(18),
                        e = n.hc();
                    n.Db(7), n.Jc(null == e.address ? null : e.address.fullName), n.Db(2), n.Mc("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""), n.Db(2), n.Jc(null == e.address ? null : e.address.country), n.Db(4), n.Kc(" ", null == e.address ? null : e.address.mobileNum, ""), n.Db(1), n.nc("ngIf", "wallet" !== e.paymentMethod)("ngIfElse", t)
                }
            }
            const Ec = function (t) {
                return {
                    bonus: t
                }
            };
            let Mc = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r) {
                        this.router = t, this.addressService = e, this.paymentService = i, this.basketService = a, this.deliveryService = n, this.ngZone = o, this.snackBarHelperService = r, this.bonus = 0, this.itemTotal = 0, this.deliveryPrice = 0, this.promotionalDiscount = 0
                    }
                    ngOnInit() {
                        this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(t => {
                            this.deliveryPrice = t.price
                        }), this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t => {
                            this.address = t
                        }, t => console.log(t)), "wallet" !== sessionStorage.getItem("paymentId") ? this.paymentService.getById(sessionStorage.getItem("paymentId")).subscribe(t => {
                            t.cardNum = String(t.cardNum).substring(String(t.cardNum).length - 4), this.paymentMethod = t
                        }, t => console.log(t)) : "wallet" === sessionStorage.getItem("paymentId") && (this.paymentMethod = "wallet")
                    }
                    getMessage(t) {
                        this.itemTotal = t[0], this.promotionalDiscount = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * this.itemTotal : 0, this.bonus = t[1]
                    }
                    placeOrder() {
                        var t = this;
                        const e = {
                            paymentId: sessionStorage.getItem("paymentId"),
                            addressId: sessionStorage.getItem("addressId"),
                            deliveryMethodId: sessionStorage.getItem("deliveryMethodId")
                        };
                        this.basketService.checkout(Number(sessionStorage.getItem("bid")), btoa(sessionStorage.getItem("couponDetails")), e).subscribe(e => {
                            sessionStorage.removeItem("paymentId"), sessionStorage.removeItem("addressId"), sessionStorage.removeItem("deliveryMethodId"), sessionStorage.removeItem("couponDetails"), sessionStorage.removeItem("couponDiscount"), this.basketService.updateNumberOfCartItems(), this.ngZone.run(Object(o.a)(function* () {
                                return yield t.router.navigate(["/order-completion", e])
                            }))
                        }, t => {
                            var e;
                            console.log(t), this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error.message, "errorBar")
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.b), n.Pb(Ia), n.Pb(Jo), n.Pb(V), n.Pb(Yo), n.Pb(n.B), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-order-summary"]
                    ],
                    decls: 36,
                    vars: 10,
                    consts: [
                        ["fxLayout", "row", "fxLayoutGap", "10%", "fxLayout.lt-md", "column", 1, "mat-elevation-z6", "mat-own-card"],
                        ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "70%"],
                        ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column", 4, "ngIf"],
                        [3, "allowEdit", "totalPrice", "emitTotal"],
                        ["fxFlex", "40%"],
                        [1, "mat-elevation-z0"],
                        ["translate", "", 1, "order-summary"],
                        [1, "mat-table"],
                        [1, "mat-row"],
                        ["translate", "", 1, "mat-cell", "label"],
                        [1, "mat-cell", "price"],
                        ["translate", "", 1, "mat-footer-cell", "label"],
                        [1, "mat-footer-cell", "price"],
                        ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Complete your purchase", "id", "checkoutButton", 1, "btn", "btn-pay", 3, "click"],
                        ["translate", ""],
                        ["translate", "", 1, "bonus-points", 3, "translateParams"],
                        ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"],
                        ["fxFlex", "60%", 1, "mat-elevation-z0"],
                        ["class", "mat-elevation-z0", "fxFlex", "40%", 4, "ngIf", "ngIfElse"],
                        ["walletPayment", ""],
                        ["fxFlex", "40%", 1, "mat-elevation-z0"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div", 1), n.Gc(2, Lc, 19, 9, "div", 2), n.Vb(3, "app-purchase-basket", 3), n.dc("emitTotal", function (t) {
                            return e.getMessage(t)
                        }), n.Ub(), n.Ub(), n.Vb(4, "div", 4), n.Vb(5, "mat-card", 5), n.Vb(6, "div", 6), n.Ic(7, "ORDER_SUMMARY"), n.Ub(), n.Vb(8, "table", 7), n.Vb(9, "tr", 8), n.Vb(10, "td", 9), n.Ic(11, "ITEMS"), n.Ub(), n.Vb(12, "td", 10), n.Ic(13), n.Ub(), n.Ub(), n.Vb(14, "tr", 8), n.Vb(15, "td", 9), n.Ic(16, "DELIVERY"), n.Ub(), n.Vb(17, "td", 10), n.Ic(18), n.Ub(), n.Ub(), n.Vb(19, "tr", 8), n.Vb(20, "td", 9), n.Ic(21, "PROMOTION"), n.Ub(), n.Vb(22, "td", 10), n.Ic(23), n.Ub(), n.Ub(), n.Vb(24, "tr", 8), n.Vb(25, "td", 11), n.Ic(26, "LABEL_TOTAL_PRICE"), n.Ub(), n.Vb(27, "td", 12), n.Ic(28), n.Ub(), n.Ub(), n.Ub(), n.Vb(29, "button", 13), n.dc("click", function () {
                            return e.placeOrder()
                        }), n.Vb(30, "mat-icon"), n.Ic(31, " monetization_on "), n.Ub(), n.Vb(32, "span", 14), n.Ic(33, "PLACE_ORDER_AND_PAY"), n.Ub(), n.Ub(), n.Vb(34, "div", 15), n.Ic(35, "CHECKOUT_FOR_BONUS_POINTS"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(2), n.nc("ngIf", e.address && e.paymentMethod), n.Db(1), n.nc("allowEdit", !1)("totalPrice", !1), n.Db(10), n.Kc("", null == e.itemTotal ? null : e.itemTotal.toFixed(2), "\xa4"), n.Db(5), n.Kc("", e.deliveryPrice.toFixed(2), "\xa4"), n.Db(5), n.Kc("", e.promotionalDiscount.toFixed(2), "\xa4"), n.Db(5), n.Kc("", e.itemTotal + e.deliveryPrice - e.promotionalDiscount == null ? null : (e.itemTotal + e.deliveryPrice - e.promotionalDiscount).toFixed(2), "\xa4 "), n.Db(6), n.nc("translateParams", n.sc(8, Ec, e.bonus)))
                    },
                    directives: [g.a, f.d, f.e, f.b, E.l, rt, v.a, I.a, pe.a],
                    styles: [".btn-pay[_ngcontent-%COMP%]{display:block;margin-top:10px;width:100%}mat-card[_ngcontent-%COMP%]{height:auto;margin-top:20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price[_ngcontent-%COMP%]:last-of-type{padding-right:10px;text-align:right}.label[_ngcontent-%COMP%]:first-of-type{padding-left:10px}table[_ngcontent-%COMP%]{width:100%}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.order-summary[_ngcontent-%COMP%]{font-size:x-large;padding-bottom:10px;padding-left:10px}.bonus-points[_ngcontent-%COMP%]{margin-top:5px;text-align:center}"]
                }), t
            })();

            function Rc(t, e) {
                1 & t && (n.Vb(0, "mat-error", 1), n.Ic(1, " MANDATORY_AMOUNT "), n.Ub())
            }

            function Nc(t, e) {
                1 & t && (n.Vb(0, "mat-error", 1), n.Ic(1, " AMOUNT_LIMIT "), n.Ub())
            }
            let Bc = (() => {
                class t {
                    constructor(t, e, i) {
                        this.router = t, this.walletService = e, this.ngZone = i, this.balanceControl = new s.e("", [s.z.required, s.z.min(10), s.z.max(1e3)])
                    }
                    ngOnInit() {
                        this.walletService.get().subscribe(t => {
                            this.balance = parseFloat(t).toFixed(2)
                        }, t => {
                            console.log(t)
                        })
                    }
                    continue() {
                        var t = this;
                        sessionStorage.setItem("walletTotal", this.balanceControl.value), this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/payment", "wallet"])
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.b), n.Pb($o), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-wallet"]
                    ],
                    decls: 25,
                    vars: 14,
                    consts: [
                        [1, "mat-elevation-z6"],
                        ["translate", ""],
                        [1, "confirmation"],
                        ["appearance", "outline", "color", "accent"],
                        ["type", "number", "matInput", "", "aria-label", "Enter an amount", 3, "formControl"],
                        ["translate", "", 4, "ngIf"],
                        ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to continue to payment", 3, "disabled", "click"],
                        [1, "material-icons"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1"), n.Vb(2, "div"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub(), n.Vb(5, "h3", 1), n.Ic(6, "LABEL_ADD_MONEY"), n.Ub(), n.Vb(7, "p"), n.Vb(8, "b"), n.Vb(9, "span", 1), n.Ic(10, "LABEL_WALLET_BALANCE"), n.Ub(), n.Vb(11, "span", 2), n.Ic(12), n.Ub(), n.Ub(), n.Ub(), n.Vb(13, "mat-form-field", 3), n.Vb(14, "mat-label"), n.Ic(15), n.ic(16, "translate"), n.Ub(), n.Qb(17, "input", 4), n.Gc(18, Rc, 2, 0, "mat-error", 5), n.Gc(19, Nc, 2, 0, "mat-error", 5), n.Ub(), n.Vb(20, "button", 6), n.dc("click", function () {
                            return e.continue()
                        }), n.Vb(21, "i", 7), n.Ic(22, " send "), n.Ub(), n.Ic(23), n.ic(24, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Jc(n.jc(4, 8, "DIGITAL_WALLET")), n.Db(9), n.Kc(" ", e.balance, ""), n.Db(3), n.Jc(n.jc(16, 10, "LABEL_AMOUNT")), n.Db(2), n.nc("formControl", e.balanceControl), n.Db(1), n.nc("ngIf", e.balanceControl.invalid && e.balanceControl.errors.required), n.Db(1), n.nc("ngIf", e.balanceControl.invalid && (e.balanceControl.errors.min || e.balanceControl.errors.max)), n.Db(1), n.nc("disabled", e.balanceControl.invalid), n.Db(3), n.Kc(" ", n.jc(24, 12, "LABEL_CONTINUE"), " "))
                    },
                    directives: [g.a, v.a, Lt.c, Lt.g, s.u, Et.b, s.d, s.p, s.f, E.l, I.a, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}"]
                }), t
            })();

            function Gc(t, e) {
                1 & t && (n.Vb(0, "div", 32), n.Ic(1, "LABEL_IN_TRANSIT"), n.Ub())
            }

            function Fc(t, e) {
                1 & t && (n.Vb(0, "div", 33), n.Ic(1, "LABEL_DELIVERED"), n.Ub())
            }

            function jc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 34), n.Ic(1, "LABEL_PRODUCT"), n.Ub())
            }

            function Hc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 35), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.name, " ")
                }
            }

            function Qc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 36), n.Ic(1, "LABEL_PRICE"), n.Ub())
            }

            function zc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 37), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.price, "\xa4")
                }
            }

            function Wc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 36), n.Ic(1, "LABEL_QUANTITY"), n.Ub())
            }

            function Kc(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 37), n.Vb(1, "span"), n.Ic(2), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(2), n.Jc(t.quantity)
                }
            }

            function qc(t, e) {
                1 & t && (n.Vb(0, "mat-header-cell", 36), n.Ic(1, "LABEL_TOTAL_PRICE"), n.Ub())
            }

            function $c(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 38), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.total.toFixed(2), "\xa4")
                }
            }

            function Yc(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 36)
            }

            function Jc(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 37), n.Vb(1, "button", 17), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(3).showDetail(i.id)
                    }), n.ic(2, "translate"), n.Vb(3, "mat-icon"), n.Ic(4, " rate_review "), n.Ub(), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(1), n.oc("matTooltip", n.jc(2, 1, "WRITE_REVIEW")))
            }

            function Zc(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function Xc(t, e) {
                1 & t && n.Qb(0, "mat-row")
            }

            function ts(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div"), n.Vb(1, "div", 6), n.Vb(2, "div", 7), n.Vb(3, "div", 8), n.Vb(4, "div", 9), n.Vb(5, "div", 10), n.Ic(6, "LABEL_ORDER_ID"), n.Ub(), n.Vb(7, "div"), n.Ic(8), n.Ub(), n.Ub(), n.Vb(9, "div", 11), n.Vb(10, "div", 10), n.Ic(11, "LABEL_TOTAL_PRICE"), n.Ub(), n.Vb(12, "div"), n.Ic(13), n.Ub(), n.Ub(), n.Vb(14, "div", 11), n.Vb(15, "div", 10), n.Ic(16, "LABEL_BONUS"), n.Ub(), n.Vb(17, "div"), n.Ic(18), n.Ub(), n.Ub(), n.Vb(19, "div", 12), n.Gc(20, Gc, 2, 0, "div", 13), n.Gc(21, Fc, 2, 0, "div", 14), n.Ub(), n.Vb(22, "div", 15), n.Vb(23, "button", 16), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).trackOrder(i.orderId)
                    }), n.ic(24, "translate"), n.Vb(25, "mat-icon"), n.Ic(26, " local_shipping "), n.Ub(), n.Ub(), n.Ub(), n.Vb(27, "div", 15), n.Vb(28, "button", 17), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc(2).openConfirmationPDF(i.orderId)
                    }), n.ic(29, "translate"), n.Vb(30, "mat-icon"), n.Ic(31, " note "), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Qb(32, "div", 18), n.Ub(), n.Vb(33, "mat-table", 19), n.Tb(34, 20), n.Gc(35, jc, 2, 0, "mat-header-cell", 21), n.Gc(36, Hc, 2, 1, "mat-cell", 22), n.Sb(), n.Tb(37, 23), n.Gc(38, Qc, 2, 0, "mat-header-cell", 24), n.Gc(39, zc, 2, 1, "mat-cell", 25), n.Sb(), n.Tb(40, 26), n.Gc(41, Wc, 2, 0, "mat-header-cell", 24), n.Gc(42, Kc, 3, 1, "mat-cell", 25), n.Sb(), n.Tb(43, 27), n.Gc(44, qc, 2, 0, "mat-header-cell", 24), n.Gc(45, $c, 2, 1, "mat-cell", 28), n.Sb(), n.Tb(46, 29), n.Gc(47, Yc, 1, 0, "mat-header-cell", 24), n.Gc(48, Jc, 5, 3, "mat-cell", 25), n.Sb(), n.Gc(49, Zc, 1, 0, "mat-header-row", 30), n.Gc(50, Xc, 1, 0, "mat-row", 31), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(8), n.Kc("#", t.orderId, ""), n.Db(5), n.Kc("", t.totalPrice.toFixed(2), "\xa4"), n.Db(5), n.Jc(t.bonus), n.Db(2), n.nc("ngIf", !t.delivered), n.Db(1), n.nc("ngIf", t.delivered), n.Db(2), n.oc("matTooltip", n.jc(24, 10, "LABEL_TRACK_ORDER")), n.Db(5), n.oc("matTooltip", n.jc(29, 12, "PRINT_ORDER_CONFIRMATION")), n.Db(5), n.nc("dataSource", t.products), n.Db(16), n.nc("matHeaderRowDef", i.tableColumns), n.Db(1), n.nc("matRowDefColumns", i.tableColumns)
                }
            }

            function es(t, e) {
                if (1 & t && (n.Vb(0, "div", 4), n.Gc(1, ts, 51, 14, "div", 5), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("ngForOf", t.orders)
                }
            }

            function is(t, e) {
                1 & t && (n.Vb(0, "mat-card", 39), n.Qb(1, "img", 40), n.Vb(2, "mat-card-title"), n.Vb(3, "span", 41), n.Ic(4, " NO_SEARCH_RESULT "), n.Ub(), n.Ub(), n.Vb(5, "mat-card-content"), n.Vb(6, "span", 41), n.Ic(7, " NO_ORDERS_PLACED "), n.Ub(), n.Ub(), n.Ub())
            }
            let as = (() => {
                class t {
                    constructor(t, e, i, a, n, o) {
                        this.router = t, this.dialog = e, this.orderHistoryService = i, this.basketService = a, this.productService = n, this.ngZone = o, this.tableColumns = ["product", "price", "quantity", "total price", "review"], this.orders = [], this.emptyState = !0
                    }
                    ngOnInit() {
                        this.orderHistoryService.get().subscribe(t => {
                            t = t.reverse(), this.emptyState = 0 === t.length;
                            for (const e of t) {
                                const t = [];
                                for (const i of e.products) t.push({
                                    id: i.id,
                                    name: i.name,
                                    price: i.price,
                                    quantity: i.quantity,
                                    total: i.total
                                });
                                this.orders.push({
                                    orderId: e.orderId,
                                    totalPrice: e.totalPrice,
                                    bonus: e.bonus,
                                    products: new L.o(t),
                                    delivered: e.delivered
                                })
                            }
                        }, t => console.log(t))
                    }
                    showDetail(t) {
                        this.productService.get(t).subscribe(t => {
                            const e = {
                                id: t.id,
                                name: t.name,
                                description: t.description,
                                image: t.image,
                                price: t.price,
                                points: Math.round(t.price / 10)
                            };
                            this.dialog.open(Be, {
                                width: "500px",
                                height: "max-content",
                                data: {
                                    productData: e
                                }
                            })
                        }, t => console.log(t))
                    }
                    openConfirmationPDF(t) {
                        window.open(`${this.basketService.hostServer}/ftp/order_${t}.pdf`, "_blank")
                    }
                    trackOrder(t) {
                        var e = this;
                        this.ngZone.run(Object(o.a)(function* () {
                            return yield e.router.navigate(["/track-result"], {
                                queryParams: {
                                    id: t
                                }
                            })
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(S.b), n.Pb(_e.b), n.Pb(Br), n.Pb(V), n.Pb(Ge), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-order-history"]
                    ],
                    decls: 8,
                    vars: 5,
                    consts: [
                        [1, "card1"],
                        [1, "mat-card-cvr"],
                        ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngIf", "ngIfElse"],
                        ["emptyResult", ""],
                        ["fxLayout", "column", "fxLayoutGap", "20px"],
                        [4, "ngFor", "ngForOf"],
                        [1, "table-container", "mat-elevation-z4", "custom-slate"],
                        [1, "heading"],
                        ["fxLayout", "row"],
                        ["fxFlex", "40%", "fxLayout", "column"],
                        ["translate", ""],
                        ["fxFlex", "15%", "fxLayout", "column"],
                        ["fxFlex", "20%"],
                        ["class", "error", "translate", "", 4, "ngIf"],
                        ["class", "confirmation", "translate", "", 4, "ngIf"],
                        ["fxFlex", "5%", "fxLayoutAlign", "end"],
                        ["mat-icon-button", "", "aria-label", "Track Your Order", "matTooltipPosition", "below", 3, "matTooltip", "click"],
                        ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"],
                        [1, "border"],
                        [3, "dataSource"],
                        ["matColumnDef", "product"],
                        ["translate", "", "fxFlex", "40%", 4, "matHeaderCellDef"],
                        ["fxFlex", "40%", 4, "matCellDef"],
                        ["matColumnDef", "price"],
                        ["translate", "", "fxFlex", "15%", 4, "matHeaderCellDef"],
                        ["fxFlex", "15%", 4, "matCellDef"],
                        ["matColumnDef", "quantity"],
                        ["matColumnDef", "total price"],
                        ["class", "price-align", "fxFlex", "15%", 4, "matCellDef"],
                        ["matColumnDef", "review"],
                        [4, "matHeaderRowDef"],
                        [4, "matRowDef", "matRowDefColumns"],
                        ["translate", "", 1, "error"],
                        ["translate", "", 1, "confirmation"],
                        ["translate", "", "fxFlex", "40%"],
                        ["fxFlex", "40%"],
                        ["translate", "", "fxFlex", "15%"],
                        ["fxFlex", "15%"],
                        ["fxFlex", "15%", 1, "price-align"],
                        [1, "mat-elevation-z6", "emptyState"],
                        ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"],
                        ["translate", "", 1, "noResultText"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "div", 1), n.Vb(2, "mat-card-title"), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Gc(5, es, 2, 1, "div", 2), n.Gc(6, is, 8, 0, "ng-template", null, 3, n.Hc), n.Ub(), n.Ub()), 2 & t) {
                            const t = n.vc(7);
                            n.Db(3), n.Kc(" ", n.jc(4, 3, "LABEL_ORDER_HISTORY"), " "), n.Db(2), n.nc("ngIf", !e.emptyState)("ngIfElse", t)
                        }
                    },
                    directives: [g.a, g.g, E.l, f.d, f.e, E.k, f.b, v.a, f.c, I.a, ge.a, pe.a, L.n, L.c, L.i, L.b, L.k, L.m, L.h, L.a, L.j, L.l, g.b],
                    pipes: [v.d],
                    styles: [".heading[_ngcontent-%COMP%], .heading-text[_ngcontent-%COMP%]{padding:12px 20px}.heading-text[_ngcontent-%COMP%]{justify-content:center}mat-card[_ngcontent-%COMP%]{height:auto;width:80%}.card1[_ngcontent-%COMP%]{border-radius:5px;margin:0 auto;width:80%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}mat-card-title[_ngcontent-%COMP%]{margin-bottom:25px}.border[_ngcontent-%COMP%]{border:.5px solid #f2f2f2}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.custom-slate[_ngcontent-%COMP%]{border-radius:5px}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}"]
                }), t
            })();

            function ns(t, e) {
                if (1 & t && (n.Vb(0, "div", 22), n.Vb(1, "h1", 4), n.Ic(2, "LABEL_DELIVERY_ADDRESS"), n.Ub(), n.Vb(3, "div"), n.Ic(4), n.Ub(), n.Vb(5, "div"), n.Ic(6), n.Ub(), n.Vb(7, "div"), n.Ic(8), n.Ub(), n.Vb(9, "div"), n.Vb(10, "span", 4), n.Ic(11, "PHONE_NUMBER"), n.Ub(), n.Ic(12), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Jc(null == t.address ? null : t.address.fullName), n.Db(2), n.Mc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""), n.Db(2), n.Jc(null == t.address ? null : t.address.country), n.Db(4), n.Kc(" ", null == t.address ? null : t.address.mobileNum, "")
                }
            }

            function os(t, e) {
                1 & t && n.Qb(0, "mat-divider", 23)
            }

            function rs(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 24)
            }

            function cs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-cell", 24), n.Vb(1, "mat-radio-button", 25), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().selectMethod(i.id)
                    })("change", function (i) {
                        n.yc(t);
                        const a = e.$implicit,
                            o = n.hc();
                        return i ? o.selection.toggle(a) : null
                    }), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.Db(1), n.nc("checked", i.selection.isSelected(t))
                }
            }

            function ss(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 26)
            }

            function ls(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 26), n.Qb(1, "i", 27), n.Ic(2), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.nc("ngClass", t.icon), n.Db(1), n.Kc("\xa0", t.name, "")
                }
            }

            function bs(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 28)
            }

            function ds(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 29), n.Ic(1), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Kc("", t.price.toFixed(2), "\xa4")
                }
            }

            function us(t, e) {
                1 & t && n.Qb(0, "mat-header-cell", 30)
            }

            function hs(t, e) {
                if (1 & t && (n.Vb(0, "mat-cell", 29), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t) {
                    const t = e.$implicit;
                    n.Db(1), n.Lc("", t.eta, " ", n.jc(2, 2, "LABEL_DAYS"), "")
                }
            }

            function ms(t, e) {
                1 & t && n.Qb(0, "mat-header-row")
            }

            function ps(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-row", 31), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit,
                            a = e.$implicit,
                            o = n.hc();
                        return o.selection.toggle(i), o.selectMethod(a.id)
                    }), n.Ub()
                }
            }
            u.b.add(m.D, m.G, m.W), u.a.watch();
            let gs = (() => {
                class t {
                    constructor(t, e, i, a, n) {
                        this.location = t, this.deliverySerivce = e, this.addressService = i, this.router = a, this.ngZone = n, this.displayedColumns = ["Selection", "Name", "Price", "ETA"], this.deliveryMethodId = void 0, this.selection = new Ca.c(!1, [])
                    }
                    ngOnInit() {
                        this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t => {
                            this.address = t
                        }, t => console.log(t)), this.deliverySerivce.get().subscribe(t => {
                            console.log(t), this.methods = t, this.dataSource = new L.o(this.methods)
                        }, t => console.log(t))
                    }
                    selectMethod(t) {
                        this.deliveryMethodId = this.selection.hasValue() || t ? t : void 0
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    chooseDeliveryMethod() {
                        var t = this;
                        sessionStorage.setItem("deliveryMethodId", this.deliveryMethodId.toString()), this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/payment", "shop"])
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(E.g), n.Pb(Yo), n.Pb(Ia), n.Pb(S.b), n.Pb(n.B))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-delivery-method"]
                    ],
                    decls: 33,
                    vars: 9,
                    consts: [
                        [1, "mat-elevation-z6"],
                        ["class", "addressCont", 4, "ngIf"],
                        ["class", "detail-divider", 4, "ngIf"],
                        [2, "height", "12px"],
                        ["translate", ""],
                        [3, "dataSource"],
                        ["matColumnDef", "Selection"],
                        ["fxFlex", "20%", 4, "matHeaderCellDef"],
                        ["fxFlex", "20%", 4, "matCellDef"],
                        ["matColumnDef", "Name"],
                        ["fxFlex", "30%", 4, "matHeaderCellDef"],
                        ["fxFlex", "30%", 4, "matCellDef"],
                        ["matColumnDef", "Price"],
                        ["translate", "LABEL_PRICE", "fxFlex", "25%", 4, "matHeaderCellDef"],
                        ["fxFlex", "25%", 4, "matCellDef"],
                        ["matColumnDef", "ETA"],
                        ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%", 4, "matHeaderCellDef"],
                        [4, "matHeaderRowDef"],
                        [3, "click", 4, "matRowDef", "matRowDefColumns"],
                        [2, "margin-top", "20px"],
                        ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"],
                        ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to delivery method selection", 1, "btn", "nextButton", 3, "disabled", "click"],
                        [1, "addressCont"],
                        [1, "detail-divider"],
                        ["fxFlex", "20%"],
                        [3, "checked", "click", "change"],
                        ["fxFlex", "30%"],
                        [3, "ngClass"],
                        ["translate", "LABEL_PRICE", "fxFlex", "25%"],
                        ["fxFlex", "25%"],
                        ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%"],
                        [3, "click"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-card", 0), n.Gc(1, ns, 13, 7, "div", 1), n.Gc(2, os, 1, 0, "mat-divider", 2), n.Qb(3, "div", 3), n.Vb(4, "div"), n.Vb(5, "h1", 4), n.Ic(6, "LABEL_CHOOSE_A_DELIVERY_SPEED"), n.Ub(), n.Vb(7, "mat-table", 5), n.Tb(8, 6), n.Gc(9, rs, 1, 0, "mat-header-cell", 7), n.Gc(10, cs, 2, 1, "mat-cell", 8), n.Sb(), n.Tb(11, 9), n.Gc(12, ss, 1, 0, "mat-header-cell", 10), n.Gc(13, ls, 3, 2, "mat-cell", 11), n.Sb(), n.Tb(14, 12), n.Gc(15, bs, 1, 0, "mat-header-cell", 13), n.Gc(16, ds, 2, 1, "mat-cell", 14), n.Sb(), n.Tb(17, 15), n.Gc(18, us, 1, 0, "mat-header-cell", 16), n.Gc(19, hs, 3, 4, "mat-cell", 14), n.Sb(), n.Gc(20, ms, 1, 0, "mat-header-row", 17), n.Gc(21, ps, 1, 0, "mat-row", 18), n.Ub(), n.Ub(), n.Vb(22, "div", 19), n.Vb(23, "button", 20), n.dc("click", function () {
                            return e.routeToPreviousUrl()
                        }), n.Vb(24, "mat-icon"), n.Ic(25, " navigate_before "), n.Ub(), n.Ic(26), n.ic(27, "translate"), n.Ub(), n.Vb(28, "button", 21), n.dc("click", function () {
                            return e.chooseDeliveryMethod()
                        }), n.Vb(29, "mat-icon"), n.Ic(30, " navigate_next "), n.Ub(), n.Vb(31, "span", 4), n.Ic(32, "LABEL_CONTINUE"), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(1), n.nc("ngIf", e.address), n.Db(1), n.nc("ngIf", e.address), n.Db(5), n.nc("dataSource", e.dataSource), n.Db(13), n.nc("matHeaderRowDef", e.displayedColumns), n.Db(1), n.nc("matRowDefColumns", e.displayedColumns), n.Db(5), n.Kc(" ", n.jc(27, 7, "LABEL_BACK"), " "), n.Db(2), n.nc("disabled", void 0 === e.deliveryMethodId))
                    },
                    directives: [g.a, E.l, v.a, L.n, L.c, L.i, L.b, L.k, L.m, I.a, pe.a, Te.a, L.h, f.b, L.a, wa.a, E.j, M.a, L.j, L.l],
                    pipes: [v.d],
                    styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.addressCont[_ngcontent-%COMP%]{margin-bottom:12px}.detail-divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:1%!important;width:98%!important}.btn-return[_ngcontent-%COMP%]{display:block;margin-left:0;margin-right:auto}.nextButton[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:0;margin-top:-37px}"]
                }), t
            })();
            var fs = i("HDdC");
            const vs = t => {
                if ("string" == typeof t.value) return Object(tn.a)(null);
                const e = t.value,
                    i = new FileReader;
                return new fs.a(t => {
                    i.addEventListener("loadend", () => {
                        const e = new Uint8Array(i.result).subarray(0, 4);
                        let a = "",
                            n = !1;
                        for (let t = 0; t < e.length; t++) a += e[t].toString(16);
                        switch (a) {
                            case "89504e47":
                                n = !0;
                                break;
                            case "ffd8ffe0":
                            case "ffd8ffe1":
                            case "ffd8ffe2":
                            case "ffd8ffe3":
                            case "ffd8ffe8":
                                n = !0;
                                break;
                            default:
                                n = !1
                        }
                        t.next(n ? null : {
                            invalidMimeType: !0
                        }), t.complete()
                    }), i.readAsArrayBuffer(e)
                })
            };
            let Is = (() => {
                class t {
                    constructor(t) {
                        this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/memories"
                    }
                    addMemory(t, e) {
                        const i = new FormData;
                        return i.append("image", e, t), i.append("caption", t), this.http.post(this.host, i).pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                    get() {
                        return this.http.get(this.host + "/").pipe(Object(l.a)(t => t.data), Object(b.a)(t => {
                            throw t
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(r.b))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();

            function Cs(t, e) {
                if (1 & t && (n.Vb(0, "a", 10), n.Vb(1, "button", 11), n.Qb(2, "i", 12), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc().$implicit,
                        e = n.hc(2);
                    n.qc("href", "https://twitter.com/intent/tweet?text=", t.caption, " ", e.twitterHandle, "&hashtags=appsec", n.Bc)
                }
            }

            function ws(t, e) {
                if (1 & t && (n.Vb(0, "span", 6), n.Qb(1, "img", 7), n.Vb(2, "div", 8), n.Vb(3, "div"), n.Ic(4), n.Ub(), n.Gc(5, Cs, 3, 2, "a", 9), n.Ub(), n.Ub()), 2 & t) {
                    const t = e.$implicit,
                        i = n.hc(2);
                    n.Db(1), n.oc("src", t.url, n.Bc), n.oc("alt", t.caption), n.Db(3), n.Jc(t.caption), n.Db(1), n.nc("ngIf", i.twitterHandle)
                }
            }

            function Us(t, e) {
                if (1 & t && (n.Vb(0, "div", 4), n.Gc(1, ws, 6, 4, "span", 5), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(1), n.nc("ngForOf", t.slideshowDataSource)
                }
            }

            function ys(t, e) {
                1 & t && (n.Vb(0, "mat-card", 13), n.Qb(1, "img", 14), n.Vb(2, "mat-card-title"), n.Vb(3, "span", 15), n.Ic(4, " NO_SEARCH_RESULT "), n.Ub(), n.Ub(), n.Vb(5, "mat-card-content"), n.Vb(6, "span", 15), n.Ic(7, " EMPTY_MEMORY_LIST "), n.Ub(), n.Ub(), n.Ub())
            }

            function Ss(t, e) {
                if (1 & t && (n.Vb(0, "div", 28), n.Qb(1, "img", 29), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(1), n.nc("src", t.imagePreview, n.Bc)("alt", t.form.value.caption)
                }
            }

            function Ds(t, e) {
                1 & t && (n.Vb(0, "mat-error", 17), n.Ic(1), n.ic(2, "translate"), n.Ub()), 2 & t && (n.Db(1), n.Jc(n.jc(2, 1, "MANDATORY_CAPTION")))
            }

            function Vs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div"), n.Vb(1, "div", 16), n.Vb(2, "h2", 17), n.Ic(3, "LABEL_SHARE_A_MEMORY"), n.Ub(), n.Vb(4, "form", 18), n.Vb(5, "div"), n.Vb(6, "button", 19), n.dc("click", function () {
                        return n.yc(t), n.vc(10).click()
                    }), n.Ic(7), n.ic(8, "translate"), n.Ub(), n.Vb(9, "input", 20, 21), n.dc("change", function (e) {
                        return n.yc(t), n.hc().onImagePicked(e)
                    }), n.Ub(), n.Ub(), n.Gc(11, Ss, 2, 2, "div", 22), n.Vb(12, "mat-form-field", 23), n.Vb(13, "mat-label", 17), n.Ic(14, "LABEL_CAPTION"), n.Ub(), n.Qb(15, "input", 24), n.Gc(16, Ds, 3, 3, "mat-error", 25), n.Ub(), n.Vb(17, "button", 26), n.dc("click", function () {
                        return n.yc(t), n.hc().save()
                    }), n.Vb(18, "i", 27), n.Ic(19, " send "), n.Ub(), n.Ic(20), n.ic(21, "translate"), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(4), n.nc("formGroup", t.form), n.Db(3), n.Kc("", n.jc(8, 6, "LABEL_PICK_IMAGE"), " "), n.Db(4), n.nc("ngIf", "" !== t.imagePreview && t.imagePreview && t.form.get("image").valid), n.Db(5), n.nc("ngIf", t.form.get("caption").invalid), n.Db(1), n.nc("disabled", t.form.get("image").invalid || t.form.get("caption").invalid), n.Db(3), n.Kc(" ", n.jc(21, 8, "BTN_SUBMIT"), " ")
                }
            }
            u.b.add(h.k), u.a.watch();
            let Os = (() => {
                class t {
                    constructor(t, e, i) {
                        this.photoWallService = t, this.configurationService = e, this.snackBarHelperService = i, this.emptyState = !0, this.form = new s.h({
                            image: new s.e("", {
                                validators: [s.z.required],
                                asyncValidators: [vs]
                            }),
                            caption: new s.e("", [s.z.required])
                        }), this.slideshowDataSource = [], this.twitterHandle = null
                    }
                    ngOnInit() {
                        this.slideshowDataSource = [], this.photoWallService.get().subscribe(t => {
                            var e;
                            this.emptyState = 0 === t.length;
                            for (const i of t) (null === (e = i.User) || void 0 === e ? void 0 : e.username) && (i.caption = `${i.caption} (\xa9 ${i.User.username})`), this.slideshowDataSource.push({
                                url: i.imagePath,
                                caption: i.caption
                            })
                        }, t => console.log(t)), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.social) && t.application.social.twitterUrl && (this.twitterHandle = t.application.social.twitterUrl.replace("https://twitter.com/", "@"))
                        }, t => console.log(t))
                    }
                    onImagePicked(t) {
                        const e = t.target.files[0];
                        this.form.patchValue({
                            image: e
                        }), this.form.get("image").updateValueAndValidity();
                        const i = new FileReader;
                        i.onload = () => {
                            this.imagePreview = i.result
                        }, i.readAsDataURL(e)
                    }
                    save() {
                        this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(() => {
                            this.resetForm(), this.ngOnInit(), this.snackBarHelperService.open("IMAGE_UPLOAD_SUCCESS", "confirmBar")
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    resetForm() {
                        this.form.get("image").setValue(""), this.form.get("image").markAsPristine(), this.form.get("image").markAsUntouched(), this.form.get("caption").setValue(""), this.form.get("caption").markAsPristine(), this.form.get("caption").markAsUntouched(), this.form.get("caption").setErrors(null)
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Is), n.Pb(d), n.Pb(A))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-photo-wall"]
                    ],
                    decls: 9,
                    vars: 6,
                    consts: [
                        [1, "heading", "mat-elevation-z6", "mat-own-card", 2, "margin-bottom", "10px"],
                        ["class", "grid", 4, "ngIf", "ngIfElse"],
                        ["emptyResult", ""],
                        [4, "ngIf"],
                        [1, "grid"],
                        ["class", "container mat-elevation-z6", 4, "ngFor", "ngForOf"],
                        [1, "container", "mat-elevation-z6"],
                        [1, "image", 3, "src", "alt"],
                        [1, "overlay"],
                        ["target", "_blank", 3, "href", 4, "ngIf"],
                        ["target", "_blank", 3, "href"],
                        ["mat-icon-button", "", "aria-label", "Tweet"],
                        [1, "fab", "fa-twitter", "fa-lg"],
                        [1, "mat-elevation-z0", "emptyState"],
                        ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"],
                        ["translate", "", 1, "noResultText"],
                        [2, "margin-top", "10px"],
                        ["translate", ""],
                        ["enctype", "multipart/form-data", 3, "formGroup"],
                        ["mat-stroked-button", "", "type", "button", 3, "click"],
                        ["type", "file", "name", "file", 3, "change"],
                        ["filePicker", ""],
                        ["class", "image-preview", 4, "ngIf"],
                        ["appearance", "outline", "color", "accent"],
                        ["formControlName", "caption", "type", "text", "matInput", ""],
                        ["translate", "", 4, "ngIf"],
                        ["id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"],
                        [1, "material-icons"],
                        [1, "image-preview"],
                        [3, "src", "alt"]
                    ],
                    template: function (t, e) {
                        if (1 & t && (n.Vb(0, "mat-card", 0), n.Vb(1, "h1"), n.Ic(2), n.ic(3, "translate"), n.Ub(), n.Vb(4, "div"), n.Gc(5, Us, 2, 1, "div", 1), n.Ub(), n.Gc(6, ys, 8, 0, "ng-template", null, 2, n.Hc), n.Gc(8, Vs, 22, 10, "div", 3), n.Ub()), 2 & t) {
                            const t = n.vc(7);
                            n.Db(2), n.Jc(n.jc(3, 4, "LABEL_PHOTO_WALL")), n.Db(3), n.nc("ngIf", !e.emptyState)("ngIfElse", t), n.Db(3), n.nc("ngIf", e.isLoggedIn())
                        }
                    },
                    directives: [g.a, E.l, E.k, I.a, g.g, v.a, g.b, s.A, s.q, s.i, Lt.c, Lt.g, s.d, Et.b, s.p, s.g, Lt.b],
                    pipes: [v.d],
                    styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:10px;width:60%}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;box-shadow:2px 2px 6px 0 rgba(0,0,0,.3);max-width:100%}.container[_ngcontent-%COMP%]{position:relative}.image[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{bottom:0;font-size:20px;left:0;opacity:0;padding:20px;position:absolute;right:0;text-align:center;transition:.5s ease}.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
                }), t
            })();

            function _s(t, e) {
                if (1 & t && (n.Vb(0, "div", 22), n.Vb(1, "div", 23), n.Vb(2, "p", 24), n.Ic(3), n.Ub(), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(3), n.Jc(t.error)
                }
            }

            function Ps(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "div"), n.Vb(1, "div", 14), n.Ic(2), n.Ub(), n.Vb(3, "div", 14), n.Vb(4, "button", 25), n.dc("click", function () {
                        return n.yc(t), n.hc().upgradeToDeluxe()
                    }), n.Vb(5, "span", 13), n.Ic(6, "LABEL_BECOME_MEMBER"), n.Ub(), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(2), n.Kc(" ", t.membershipCost, "\xa4 ")
                }
            }
            const xs = function (t) {
                return {
                    appname: t
                }
            },
                ks = [{
                    path: "administration",
                    component: Ki,
                    canActivate: [P]
                }, {
                    path: "accounting",
                    component: bc,
                    canActivate: [x]
                }, {
                    path: "about",
                    component: $t
                }, {
                    path: "address/select",
                    component: Wo,
                    canActivate: [_]
                }, {
                    path: "address/saved",
                    component: Ko,
                    canActivate: [_]
                }, {
                    path: "address/create",
                    component: zo,
                    canActivate: [_]
                }, {
                    path: "address/edit/:addressId",
                    component: zo,
                    canActivate: [_]
                }, {
                    path: "delivery-method",
                    component: gs
                }, {
                    path: "deluxe-membership",
                    component: (() => {
                        class t {
                            constructor(t, e, i, a, n, o, r) {
                                this.router = t, this.userService = e, this.cookieService = i, this.configurationService = a, this.route = n, this.ngZone = o, this.io = r, this.membershipCost = 0, this.error = void 0, this.applicationName = "OWASP Juice Shop", this.logoSrc = "assets/public/images/JuiceShop_Logo.png"
                            }
                            ngOnInit() {
                                this.configurationService.getApplicationConfiguration().subscribe(t => {
                                    const e = this.route.snapshot.queryParams.testDecal;
                                    if ((null == t ? void 0 : t.application) && (t.application.name && (this.applicationName = t.application.name), t.application.logo)) {
                                        let i = t.application.logo;
                                        "http" === i.substring(0, 4) && (i = decodeURIComponent(i.substring(i.lastIndexOf("/") + 1))), this.logoSrc = `assets/public/images/${e || i}`
                                    }
                                    e && this.ngZone.runOutsideAngular(() => {
                                        this.io.socket().emit("verifySvgInjectionChallenge", e)
                                    })
                                }, t => console.log(t)), this.userService.deluxeStatus().subscribe(t => {
                                    this.membershipCost = t.membershipCost
                                }, t => {
                                    this.error = t.error.error
                                })
                            }
                            upgradeToDeluxe() {
                                var t = this;
                                this.ngZone.run(Object(o.a)(function* () {
                                    return yield t.router.navigate(["/payment", "deluxe"])
                                }))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new (e || t)(n.Pb(S.b), n.Pb(y), n.Pb(c.b), n.Pb(d), n.Pb(S.a), n.Pb(n.B), n.Pb(Qe))
                        }, t.\u0275cmp = n.Jb({
                            type: t,
                            selectors: [
                                ["app-deluxe-user"]
                            ],
                            decls: 50,
                            vars: 10,
                            consts: [
                                ["fxLayout", "column", "fxLayoutGap", "10px", 1, "main-wrapper"],
                                ["class", "heading mat-elevation-z6", 4, "ngIf"],
                                [1, "mat-elevation-z6", "deluxe-membership"],
                                ["fxFlexAlign", "center", "fxFlex", "30%", 1, "img-container"],
                                ["viewBox", "0 0 720 720", "xmlns", "http://www.w3.org/2000/svg"],
                                ["href", "assets/public/images/deluxe/blankBoxes.png", "x", "0", "y", "0", "height", "720", "width", "720"],
                                ["x", "260", "y", "130", "height", "50"],
                                ["x", "230", "y", "330", "height", "70"],
                                ["x", "70", "y", "355", "height", "40"],
                                ["x", "120", "y", "450", "height", "55"],
                                ["x", "500", "y", "410", "height", "45"],
                                ["fxFlexAlign", "center", "fxFlex", "60%"],
                                [1, "item-name"],
                                ["translate", ""],
                                [1, "item-description"],
                                ["translate", "", 3, "translateParams"],
                                [4, "ngIf"],
                                ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"],
                                ["fxFlex", "33.33%", 1, "mat-elevation-z6"],
                                ["fxFlexAlign", "center", "fxFlex", "40%", 1, "img-container"],
                                [1, "img-responsive", "img-thumbnail", 2, "font-size", "100px"],
                                ["translate", "", 1, "item-description"],
                                [1, "heading", "mat-elevation-z6"],
                                [2, "margin-top", "5px"],
                                [1, "error"],
                                ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-member", 3, "click"]
                            ],
                            template: function (t, e) {
                                1 & t && (n.Vb(0, "div", 0), n.Gc(1, _s, 4, 1, "div", 1), n.Vb(2, "mat-card", 2), n.Vb(3, "div", 3), n.gc(), n.Vb(4, "svg", 4), n.Qb(5, "image", 5), n.Qb(6, "image", 6), n.Qb(7, "image", 7), n.Qb(8, "image", 8), n.Qb(9, "image", 9), n.Qb(10, "image", 10), n.Ub(), n.Ub(), n.fc(), n.Vb(11, "div", 11), n.Vb(12, "div", 12), n.Vb(13, "b", 13), n.Ic(14, "LABEL_DELUXE_MEMBERSHIP"), n.Ub(), n.Ub(), n.Vb(15, "div", 14), n.Vb(16, "span", 15), n.Ic(17, "DESCRIPTION_DELUXE_MEMBERSHIP"), n.Ub(), n.Ub(), n.Gc(18, Ps, 7, 1, "div", 16), n.Ub(), n.Ub(), n.Vb(19, "div", 17), n.Vb(20, "mat-card", 18), n.Vb(21, "div", 19), n.Vb(22, "mat-icon", 20), n.Ic(23, " slideshow "), n.Ub(), n.Ub(), n.Vb(24, "div", 11), n.Vb(25, "div", 12), n.Vb(26, "b", 13), n.Ic(27, "LABEL_DEALS_OFFERS"), n.Ub(), n.Ub(), n.Vb(28, "div", 21), n.Ic(29, " DESCRIPTION_DEALS_OFFERS "), n.Ub(), n.Ub(), n.Ub(), n.Vb(30, "mat-card", 18), n.Vb(31, "div", 19), n.Vb(32, "mat-icon", 20), n.Ic(33, " directions_car "), n.Ub(), n.Ub(), n.Vb(34, "div", 11), n.Vb(35, "div", 12), n.Vb(36, "b", 13), n.Ic(37, "LABEL_FREE_FAST_DELIVERY"), n.Ub(), n.Ub(), n.Vb(38, "div", 21), n.Ic(39, " DESCRIPTION_FREE_FAST_DELIVERY "), n.Ub(), n.Ub(), n.Ub(), n.Vb(40, "mat-card", 18), n.Vb(41, "div", 19), n.Vb(42, "mat-icon", 20), n.Ic(43, " add "), n.Ub(), n.Ub(), n.Vb(44, "div", 11), n.Vb(45, "div", 12), n.Vb(46, "b", 13), n.Ic(47, "LABEL_UNLIMITED_PURCHASE"), n.Ub(), n.Ub(), n.Vb(48, "div", 21), n.Ic(49, " DESCRIPTION_UNLIMITED_PURCHASE "), n.Ub(), n.Ub(), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(1), n.nc("ngIf", e.error), n.Db(5), n.Eb("href", e.logoSrc), n.Db(1), n.Eb("href", e.logoSrc), n.Db(1), n.Eb("href", e.logoSrc), n.Db(1), n.Eb("href", e.logoSrc), n.Db(1), n.Eb("href", e.logoSrc), n.Db(6), n.nc("translateParams", n.sc(8, xs, e.applicationName)), n.Db(2), n.nc("ngIf", !e.error))
                            },
                            directives: [f.d, f.e, E.l, g.a, f.a, f.b, v.a, pe.a, I.a],
                            styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.img-thumbnail[_ngcontent-%COMP%]{background:none;border:0;width:100%}.btn-member[_ngcontent-%COMP%]{bottom:10%}.item-description[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}"]
                        }), t
                    })(),
                    canActivate: [_]
                }, {
                    path: "saved-payment-methods",
                    component: Nr
                }, {
                    path: "basket",
                    component: st
                }, {
                    path: "order-completion/:id",
                    component: kc
                }, {
                    path: "contact",
                    component: Ft
                }, {
                    path: "photo-wall",
                    component: Os
                }, {
                    path: "complain",
                    component: ba
                }, {
                    path: "chatbot",
                    component: fa
                }, {
                    path: "order-summary",
                    component: Mc
                }, {
                    path: "order-history",
                    component: as
                }, {
                    path: "payment/:entity",
                    component: Rr
                }, {
                    path: "wallet",
                    component: Bc
                }, {
                    path: "login",
                    component: mi
                }, {
                    path: "forgot-password",
                    component: Oe
                }, {
                    path: "recycle",
                    component: Ya
                }, {
                    path: "register",
                    component: me
                }, {
                    path: "search",
                    component: ni
                }, {
                    path: "hacking-instructor",
                    component: ni
                }, {
                    path: "score-board",
                    component: mo
                }, {
                    path: "track-result",
                    component: xt
                }, {
                    path: "track-result/new",
                    component: xt,
                    data: {
                        type: "new"
                    }
                }, {
                    path: "2fa/enter",
                    component: fo
                }, {
                    path: "privacy-security",
                    component: wo,
                    children: [{
                        path: "privacy-policy",
                        component: Eo
                    }, {
                        path: "change-password",
                        component: ta
                    }, {
                        path: "two-factor-authentication",
                        component: Do
                    }, {
                        path: "data-export",
                        component: Ao
                    }, {
                        path: "last-login-ip",
                        component: Lo
                    }]
                }, {
                    matcher: function (t) {
                        return 0 === t.length ? null : window.location.href.includes("#access_token=") ? {
                            consumed: t
                        } : null
                    },
                    data: {
                        params: window.location.href.substr(window.location.href.indexOf("#"))
                    },
                    component: D
                }, {
                    matcher: function (t) {
                        return 0 === t.length ? null : t[0].toString().match(function (...t) {
                            const e = Array.prototype.slice.call([25, 184, 174, 179, 182, 186]),
                                i = e.shift();
                            return e.reverse().map(function (t, e) {
                                return String.fromCharCode(t - i - 45 - e)
                            }).join("")
                        }() + 36669..toString(36).toLowerCase() + function (...t) {
                            const e = Array.prototype.slice.call(arguments),
                                i = e.shift();
                            return e.reverse().map(function (t, e) {
                                return String.fromCharCode(t - i - 24 - e)
                            }).join("")
                        }(13, 144, 87, 152, 139, 144, 83, 138) + 10..toString(36).toLowerCase()) ? {
                            consumed: t
                        } : null
                    },
                    component: w
                }, {
                    path: "403",
                    component: vo
                }, {
                    path: "**",
                    component: ni
                }],
                Ts = S.e.forRoot(ks, {
                    useHash: !0,
                    relativeLinkResolution: "legacy"
                });
            var As = i("k5Gf"),
                Ls = i("IbkX");
            let Es = (() => {
                class t {
                    constructor(t) {
                        this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/admin"
                    }
                    getApplicationVersion() {
                        return this.http.get(this.host + "/application-version").pipe(Object(l.a)(t => t.version), Object(b.a)(t => {
                            throw t
                        }))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(r.b))
                }, t.\u0275prov = n.Lb({
                    token: t,
                    factory: t.\u0275fac,
                    providedIn: "root"
                }), t
            })();
            var Ms = i("l0rg"),
                Rs = i("SqCe");

            function Ns(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 36), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " exit_to_app "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "TITLE_LOGIN"), " "))
            }

            function Bs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 37), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.onToggleSidenav(), e.goToProfilePage()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " account_circle "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc(" ", t.userEmail, " ")
                }
            }

            function Gs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 38), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " account_balance "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "ACCOUNTING"), " "))
            }
            const Fs = function (t) {
                return {
                    rotated: t
                }
            };

            function js(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-list-item", 39), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " check_circle_outline "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Vb(6, "mat-icon", 40), n.Ic(7, " expand_more "), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc(" ", n.jc(5, 2, "ORDERS_AND_PAYMENT"), " "), n.Db(2), n.nc("ngClass", n.sc(4, Fs, t.showOrdersSubmenu))
                }
            }

            function Hs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 47), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " archive "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "LABEL_ORDER_HISTORY"), " "))
            }

            function Qs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 48), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " autorenew "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "NAV_RECYCLE"), " "))
            }

            function zs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 49), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " my_location "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "MY_SAVED_ADRESSES"), " "))
            }

            function Ws(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 50), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " credit_card "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
            }

            function Ks(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 51), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " account_balance_wallet "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "DIGITAL_WALLET"), " "))
            }
            const qs = function (t) {
                return {
                    expanded: t
                }
            };

            function $s(t, e) {
                if (1 & t && (n.Vb(0, "div", 41), n.Gc(1, Hs, 6, 3, "a", 42), n.Gc(2, Qs, 6, 3, "a", 43), n.Qb(3, "mat-divider"), n.Gc(4, zs, 6, 3, "a", 44), n.Gc(5, Ws, 6, 3, "a", 45), n.Gc(6, Ks, 6, 3, "a", 46), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("ngClass", n.sc(6, qs, t.showOrdersSubmenu)), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(2), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn())
                }
            }

            function Ys(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-list-item", 52), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " security "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Vb(6, "mat-icon", 40), n.Ic(7, " expand_more "), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc(" ", n.jc(5, 2, "PRIVACY_AND_SECURITY"), " "), n.Db(2), n.nc("ngClass", n.sc(4, Fs, t.showPrivacySubmenu))
                }
            }

            function Js(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 59), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " assignment "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "TITLE_PRIVACY_POLICY"), n.Ub(), n.Ub()
                }
            }

            function Zs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 61), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " get_app "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "TITLE_REQUEST_DATA_EXPORT"), n.Ub(), n.Ub()
                }
            }

            function Xs(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 62), n.dc("click", function () {
                        return n.yc(t), n.hc(2).goToDataErasurePage()
                    })("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " delete_forever "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "DATA_SUBJECT_TITLE"), n.Ub(), n.Ub()
                }
            }

            function tl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 63), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " edit "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "TITLE_CHANGE_PASSWORD"), n.Ub(), n.Ub()
                }
            }

            function el(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 64), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " exposure_plus_2 "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "TITLE_TWO_FACTOR_AUTH_CONFIG"), n.Ub(), n.Ub()
                }
            }

            function il(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 65), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc(2);
                        return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " place "), n.Ub(), n.Vb(3, "span", 60), n.Ic(4, "LAST_LOGIN_IP"), n.Ub(), n.Ub()
                }
            }

            function al(t, e) {
                if (1 & t && (n.Vb(0, "div", 41), n.Gc(1, Js, 5, 0, "a", 53), n.Gc(2, Zs, 5, 0, "a", 54), n.Gc(3, Xs, 5, 0, "a", 55), n.Qb(4, "mat-divider"), n.Gc(5, tl, 5, 0, "a", 56), n.Gc(6, el, 5, 0, "a", 57), n.Gc(7, il, 5, 0, "a", 58), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.nc("ngClass", n.sc(7, qs, t.showPrivacySubmenu)), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(2), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn()), n.Db(1), n.nc("ngIf", t.isLoggedIn())
                }
            }

            function nl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 66), n.dc("click", function () {
                        n.yc(t);
                        const e = n.hc();
                        return e.onToggleSidenav(), e.logout()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " power_settings_new "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "TITLE_LOGOUT"), " "))
            }

            function ol(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 67), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Vb(1, "i", 13), n.Ic(2, " sentiment_dissatisfied "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "NAV_COMPLAIN"), " "))
            }

            function rl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 68), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Vb(1, "i", 13), n.Ic(2, " chat "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "SECTION_SUPPORT_CHAT"), " "))
            }

            function cl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 69), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Vb(1, "i", 13), n.Ic(2, " card_membership "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "LABEL_DELUXE_MEMBERSHIP"), " "))
            }

            function sl(t, e) {
                1 & t && n.Qb(0, "mat-divider", 70)
            }

            function ll(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 71), n.dc("click", function () {
                        return n.yc(t), n.hc().onToggleSidenav()
                    }), n.Qb(1, "mat-icon", 72), n.Vb(2, "span", 14), n.Ic(3), n.ic(4, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(3), n.Kc(" ", n.jc(4, 1, "TITLE_SCORE_BOARD"), " "))
            }

            function bl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "a", 73), n.dc("click", function () {
                        return n.yc(t), n.hc().startHackingInstructor()
                    }), n.Vb(1, "i", 13), n.Ic(2, " school "), n.Ub(), n.Vb(3, "span", 14), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "BTN_GETTING_STARTED"), " "))
            }

            function dl(t, e) {
                1 & t && (n.Vb(0, "a", 74), n.Qb(1, "mat-icon", 75), n.Vb(2, "span", 14), n.Ic(3, " GitHub "), n.Ub(), n.Ub())
            }
            let ul = (() => {
                class t {
                    constructor(t, e, i, a, o, r, c, s, l) {
                        this.administrationService = t, this.challengeService = e, this.ngZone = i, this.io = a, this.userService = o, this.cookieService = r, this.router = c, this.configurationService = s, this.loginGuard = l, this.applicationName = "OWASP Juice Shop", this.showGitHubLink = !0, this.userEmail = "", this.scoreBoardVisible = !1, this.version = "", this.showPrivacySubmenu = !1, this.showOrdersSubmenu = !1, this.isShowing = !1, this.offerScoreBoardTutorial = !1, this.sidenavToggle = new n.o, this.onToggleSidenav = () => {
                            this.sidenavToggle.emit()
                        }
                    }
                    ngOnInit() {
                        this.administrationService.getApplicationVersion().subscribe(t => {
                            t && (this.version = `v${t}`)
                        }, t => console.log(t)), this.getApplicationDetails(), this.getScoreBoardStatus(), localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "", this.userService.getLoggedInState().subscribe(t => {
                            t ? this.getUserDetails() : this.userEmail = ""
                        }), this.ngZone.runOutsideAngular(() => {
                            this.io.socket().on("challenge solved", t => {
                                "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                            })
                        })
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    logout() {
                        var t = this;
                        this.userService.saveLastLoginIp().subscribe(t => {
                            this.noop()
                        }, t => console.log(t)), localStorage.removeItem("token"), this.cookieService.remove("token"), sessionStorage.removeItem("bid"), sessionStorage.removeItem("itemTotal"), this.userService.isLoggedIn.next(!1), this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/"])
                        }))
                    }
                    goToProfilePage() {
                        window.location.replace("./profile")
                    }
                    goToDataErasurePage() {
                        window.location.replace("./dataerasure")
                    }
                    noop() { }
                    getScoreBoardStatus() {
                        this.challengeService.find({
                            name: "Score Board"
                        }).subscribe(t => {
                            this.ngZone.run(() => {
                                this.scoreBoardVisible = t[0].solved
                            })
                        }, t => console.log(t))
                    }
                    getUserDetails() {
                        this.userService.whoAmI().subscribe(t => {
                            this.userEmail = t.email
                        }, t => console.log(t))
                    }
                    getApplicationDetails() {
                        this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.name) && (this.applicationName = t.application.name), (null == t ? void 0 : t.application) && (this.showGitHubLink = t.application.showGitHubLinks), (null == t ? void 0 : t.application.welcomeBanner.showOnFirstStart) && t.hackingInstructor.isEnabled && (this.offerScoreBoardTutorial = t.application.welcomeBanner.showOnFirstStart && t.hackingInstructor.isEnabled)
                        }, t => console.log(t))
                    }
                    isAccounting() {
                        var t;
                        const e = this.loginGuard.tokenDecode();
                        return "accounting" === (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.role)
                    }
                    startHackingInstructor() {
                        this.onToggleSidenav(), console.log('Starting instructions for challenge "Score Board"'), i.e(6).then(i.bind(null, "s2oO")).then(t => {
                            t.startHackingInstructorFor("Score Board")
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Es), n.Pb(Ja), n.Pb(n.B), n.Pb(Qe), n.Pb(y), n.Pb(c.b), n.Pb(S.b), n.Pb(d), n.Pb(_))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["sidenav"]
                    ],
                    outputs: {
                        sidenavToggle: "sidenavToggle"
                    },
                    decls: 72,
                    vars: 27,
                    consts: [
                        ["color", "primary", 1, "mat-elevation-z6"],
                        ["mat-button", "", 2, "height", "0", "position", "absolute"],
                        ["mat-subheader", "", "translate", "", "fxHide", "", "fxShow.lt-md", "", 1, "side-subHeader"],
                        ["fxHide", "", "fxShow.lt-md", ""],
                        ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click", 4, "ngIf"],
                        ["class", "parent", "aria-label", "Show Orders and Payment Menu", 3, "click", 4, "ngIf"],
                        ["class", "submenu", 3, "ngClass", 4, "ngIf"],
                        ["class", "parent", "aria-label", "Show Privacy and Security Menu", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "aria-label", "Logout", 3, "click", 4, "ngIf"],
                        ["mat-subheader", "", "translate", "", 1, "side-subHeader"],
                        ["mat-list-item", "", "routerLink", "/contact", "aria-label", "Go to contact us page", 3, "click"],
                        [1, "material-icons"],
                        [1, "menu-text", "truncate"],
                        ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/about", "aria-label", "Go to about us page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/photo-wall", "aria-label", "Go to photo wall", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click", 4, "ngIf"],
                        ["style", "margin-bottom: 10px;", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page", 4, "ngIf"],
                        [1, "appVersion"],
                        [2, "font-size", "13px"],
                        [2, "font-size", "12px"],
                        [2, "margin-top", "10px"],
                        [1, "icon-angular"],
                        [1, "icon-html5"],
                        [1, "icon-sass"],
                        [1, "icon-css3"],
                        [1, "icon-javascript-alt"],
                        [1, "icon-nodejs"],
                        [1, "icon-database-alt2"],
                        [1, "icon-mongodb"],
                        ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click"],
                        ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click"],
                        ["aria-label", "Show Orders and Payment Menu", 1, "parent", 3, "click"],
                        [1, "menu-button", 3, "ngClass"],
                        [1, "submenu", 3, "ngClass"],
                        ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click"],
                        ["aria-label", "Show Privacy and Security Menu", 1, "parent", 3, "click"],
                        ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click", 4, "ngIf"],
                        ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click"],
                        ["translate", "", 1, "menu-text", "truncate"],
                        ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click"],
                        ["mat-list-item", "", "aria-label", "Go to data subject page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click"],
                        ["mat-list-item", "", "aria-label", "Logout", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click"],
                        ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click"],
                        [2, "margin-bottom", "10px"],
                        ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click"],
                        ["matListIcon", "", 1, "fas", "fa-trophy", "fa-lg"],
                        ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click"],
                        ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page"],
                        ["matListIcon", "", 1, "fab", "fa-github", "fa-lg"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "mat-toolbar", 0), n.Vb(1, "mat-toolbar-row"), n.Vb(2, "h2"), n.Ic(3), n.Ub(), n.Ub(), n.Ub(), n.Vb(4, "mat-nav-list"), n.Qb(5, "button", 1), n.Vb(6, "h3", 2), n.Ic(7, "ACCOUNT"), n.Ub(), n.Vb(8, "div", 3), n.Gc(9, Ns, 6, 3, "a", 4), n.Gc(10, Bs, 5, 1, "a", 5), n.Gc(11, Gs, 6, 3, "a", 6), n.Gc(12, js, 8, 6, "mat-list-item", 7), n.Gc(13, $s, 7, 8, "div", 8), n.Gc(14, Ys, 8, 6, "mat-list-item", 9), n.Gc(15, al, 8, 9, "div", 8), n.Gc(16, nl, 6, 3, "a", 10), n.Ub(), n.Qb(17, "mat-divider", 3), n.Vb(18, "h3", 11), n.Ic(19, "TITLE_CONTACT"), n.Ub(), n.Vb(20, "a", 12), n.dc("click", function () {
                            return e.onToggleSidenav()
                        }), n.Vb(21, "i", 13), n.Ic(22, " feedback "), n.Ub(), n.Vb(23, "span", 14), n.Ic(24), n.ic(25, "translate"), n.Ub(), n.Ub(), n.Gc(26, ol, 6, 3, "a", 15), n.Gc(27, rl, 6, 3, "a", 16), n.Qb(28, "mat-divider"), n.Vb(29, "h3", 11), n.Ic(30, "COMPANY"), n.Ub(), n.Vb(31, "a", 17), n.dc("click", function () {
                            return e.onToggleSidenav()
                        }), n.Vb(32, "i", 13), n.Ic(33, " business_center "), n.Ub(), n.Vb(34, "span", 14), n.Ic(35), n.ic(36, "translate"), n.Ub(), n.Ub(), n.Vb(37, "a", 18), n.dc("click", function () {
                            return e.onToggleSidenav()
                        }), n.Vb(38, "i", 13), n.Ic(39, " camera "), n.Ub(), n.Vb(40, "span", 14), n.Ic(41), n.ic(42, "translate"), n.Ub(), n.Ub(), n.Gc(43, cl, 6, 3, "a", 19), n.Gc(44, sl, 1, 0, "mat-divider", 20), n.Gc(45, ll, 5, 3, "a", 21), n.Gc(46, bl, 6, 3, "a", 22), n.Gc(47, dl, 4, 0, "a", 23), n.Ub(), n.Vb(48, "div", 24), n.Vb(49, "span"), n.Vb(50, "span", 25), n.Ic(51), n.Ub(), n.Qb(52, "br"), n.Vb(53, "span", 26), n.Ic(54), n.Ub(), n.Qb(55, "br"), n.Vb(56, "div", 27), n.Qb(57, "i", 28), n.Ic(58, "\xa0 "), n.Qb(59, "i", 29), n.Ic(60, "\xa0 "), n.Qb(61, "i", 30), n.Ic(62, "\xa0 "), n.Qb(63, "i", 31), n.Ic(64, "\xa0 "), n.Qb(65, "i", 32), n.Ic(66, "\xa0 "), n.Qb(67, "i", 33), n.Ic(68, "\xa0 "), n.Qb(69, "i", 34), n.Ic(70, "\xa0 "), n.Qb(71, "i", 35), n.Ub(), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Kc(" ", e.applicationName, ""), n.Db(6), n.nc("ngIf", !e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn() && e.isAccounting()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.showOrdersSubmenu), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.showPrivacySubmenu), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(8), n.Kc(" ", n.jc(25, 21, "SECTION_CUSTOMER_FEEDBACK"), " "), n.Db(2), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(8), n.Kc(" ", n.jc(36, 23, "TITLE_ABOUT"), " "), n.Db(6), n.Kc(" ", n.jc(42, 25, "LABEL_PHOTO_WALL"), " "), n.Db(2), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.scoreBoardVisible || e.showGitHubLink), n.Db(1), n.nc("ngIf", e.scoreBoardVisible), n.Db(1), n.nc("ngIf", !e.scoreBoardVisible && e.offerScoreBoardTutorial), n.Db(1), n.nc("ngIf", e.showGitHubLink), n.Db(4), n.Jc(e.applicationName), n.Db(3), n.Jc(e.version))
                    },
                    directives: [Ms.a, Ms.c, Rs.e, I.a, Rs.d, v.a, M.b, E.l, Te.a, Rs.b, S.d, pe.a, E.j, M.a, Rs.a],
                    pipes: [v.d],
                    styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}a[_ngcontent-%COMP%]{text-decoration:none!important}.menu-text[_ngcontent-%COMP%]{padding-left:10px}.mat-list-base[_ngcontent-%COMP%], .mat-list-icon[_ngcontent-%COMP%], .mat-list-item[_ngcontent-%COMP%]{padding:0!important}.toolbar-title[_ngcontent-%COMP%]{margin:0 16px}.mat-subheader[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.app-nav-list-icon[_ngcontent-%COMP%]{margin:0 12px}.side-subHeader[_ngcontent-%COMP%]{font-weight:300}mat-nav-list[_ngcontent-%COMP%]{margin-bottom:50px}.menu-button[_ngcontent-%COMP%]{transform:rotate(0deg);transition:.3s ease-in-out}.menu-button.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.submenu[_ngcontent-%COMP%]{overflow-y:hidden;padding-left:30px;transform:scaleY(0);transform-origin:top;transition:transform .3s ease}.submenu.expanded[_ngcontent-%COMP%]{transform:scaleY(1)}.appVersion[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px;text-align:center}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                }), t
            })(),
                hl = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = "."
                        }
                        getLanguages() {
                            return this.http.get(`${this.hostServer}/rest/languages`).pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();
            var ml = i("lGt0"),
                pl = i("rJgo");

            function gl(t, e) {
                1 & t && (n.Vb(0, "button", 38), n.Vb(1, "mat-icon"), n.Ic(2, " exit_to_app "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "TITLE_LOGIN"), " "))
            }

            function fl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 39), n.dc("click", function () {
                        return n.yc(t), n.hc().goToProfilePage()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " account_circle "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc(" ", t.userEmail, " ")
                }
            }

            function vl(t, e) {
                1 & t && (n.Vb(0, "button", 40), n.Vb(1, "mat-icon"), n.Ic(2, " account_balance "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "ACCOUNTING"), " "))
            }

            function Il(t, e) {
                if (1 & t && (n.Vb(0, "button", 41), n.Vb(1, "mat-icon"), n.Ic(2, " check_circle_outline "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    n.hc();
                    const t = n.vc(71);
                    n.nc("matMenuTriggerFor", t), n.Db(4), n.Kc(" ", n.jc(5, 2, "ORDERS_AND_PAYMENT"), " ")
                }
            }

            function Cl(t, e) {
                if (1 & t && (n.Vb(0, "button", 42), n.Vb(1, "mat-icon"), n.Ic(2, " security "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t) {
                    n.hc();
                    const t = n.vc(38);
                    n.nc("matMenuTriggerFor", t), n.Db(4), n.Kc(" ", n.jc(5, 2, "PRIVACY_AND_SECURITY"), " ")
                }
            }

            function wl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 43), n.dc("click", function () {
                        return n.yc(t), n.hc().logout()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " power_settings_new "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()
                }
                2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "TITLE_LOGOUT"), " "))
            }

            function Ul(t, e) {
                if (1 & t && (n.Vb(0, "button", 44), n.Vb(1, "mat-icon"), n.Ic(2, " shopping_cart "), n.Ub(), n.Vb(3, "span", 20), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Vb(6, "span", 45), n.Ic(7), n.Ub(), n.Ub()), 2 & t) {
                    const t = n.hc();
                    n.Db(4), n.Kc(" ", n.jc(5, 2, "TITLE_BASKET"), ""), n.Db(3), n.Jc(t.itemTotal)
                }
            }

            function yl(t, e) {
                1 & t && n.Qb(0, "span"), 2 & t && n.Fb("flag-icon flag-icon-" + e.$implicit)
            }

            function Sl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-radio-button", 46), n.dc("click", function () {
                        n.yc(t);
                        const i = e.$implicit;
                        return n.hc().changeLanguage(i.key)
                    }), n.Vb(1, "div", 47), n.Gc(2, yl, 1, 2, "span", 48), n.Ic(3), n.Ub(), n.Qb(4, "i"), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.oc("checked", i.selectedLanguage === t), n.oc("aria-label", t.lang), n.nc("value", t), n.Db(2), n.nc("ngForOf", t.icons), n.Db(1), n.Kc(" ", null == t ? null : t.lang, " "), n.Db(1), n.Fb("fas fa-thermometer-" + t.gauge + (t.percentage > 70 ? " confirmation" : " error"))
                }
            }

            function Dl(t, e) {
                1 & t && (n.Vb(0, "button", 49), n.Vb(1, "mat-icon"), n.Ic(2, " my_location "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "MY_SAVED_ADRESSES"), " "))
            }

            function Vl(t, e) {
                1 & t && (n.Vb(0, "button", 50), n.Vb(1, "mat-icon"), n.Ic(2, " credit_card "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
            }

            function Ol(t, e) {
                1 & t && (n.Vb(0, "button", 51), n.Vb(1, "mat-icon"), n.Ic(2, " account_balance_wallet "), n.Ub(), n.Vb(3, "span"), n.Ic(4), n.ic(5, "translate"), n.Ub(), n.Ub()), 2 & t && (n.Db(4), n.Kc(" ", n.jc(5, 1, "DIGITAL_WALLET"), " "))
            }
            const _l = function () {
                return ["privacy-security/privacy-policy"]
            },
                Pl = function () {
                    return ["privacy-security/data-export"]
                },
                xl = function () {
                    return ["privacy-security/change-password"]
                },
                kl = function () {
                    return ["privacy-security/two-factor-authentication"]
                },
                Tl = function () {
                    return ["privacy-security/last-login-ip"]
                };
            u.b.add(m.w, m.F, m.I, m.J, m.h, m.c, m.V, m.u, m.H, m.fb, m.C, m.x, m.cb, h.d, p.b, m.N, m.Q, m.P, m.R, m.O), u.a.watch();
            let Al = (() => {
                class t {
                    constructor(t, e, i, a, o, r, c, s, l, b, d, u, h) {
                        this.administrationService = t, this.challengeService = e, this.configurationService = i, this.userService = a, this.ngZone = o, this.cookieService = r, this.router = c, this.translate = s, this.io = l, this.langService = b, this.loginGuard = d, this.snackBar = u, this.basketService = h, this.userEmail = "", this.languages = [], this.selectedLanguage = "placeholder", this.version = "", this.applicationName = "OWASP Juice Shop", this.showGitHubLink = !0, this.logoSrc = "assets/public/images/JuiceShop_Logo.png", this.scoreBoardVisible = !1, this.shortKeyLang = "placeholder", this.itemTotal = 0, this.sidenavToggle = new n.o, this.onToggleSidenav = () => {
                            this.sidenavToggle.emit()
                        }
                    }
                    ngOnInit() {
                        this.getLanguages(), this.basketService.getItemTotal().subscribe(t => this.itemTotal = t), this.administrationService.getApplicationVersion().subscribe(t => {
                            t && (this.version = `v${t}`)
                        }, t => console.log(t)), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e, i;
                            if ((null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.name) && (this.applicationName = t.application.name), (null == t ? void 0 : t.application) && (this.showGitHubLink = t.application.showGitHubLinks), null === (i = null == t ? void 0 : t.application) || void 0 === i ? void 0 : i.logo) {
                                let e = t.application.logo;
                                "http" === e.substring(0, 4) && (e = decodeURIComponent(e.substring(e.lastIndexOf("/") + 1))), this.logoSrc = "assets/public/images/" + e
                            }
                        }, t => console.log(t)), localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "", this.userService.getLoggedInState().subscribe(t => {
                            t ? this.getUserDetails() : this.userEmail = ""
                        }), this.getScoreBoardStatus(), this.ngZone.runOutsideAngular(() => {
                            this.io.socket().on("challenge solved", t => {
                                "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                            })
                        })
                    }
                    checkLanguage() {
                        if (this.cookieService.get("language")) {
                            const t = this.cookieService.get("language");
                            this.translate.use(t), this.selectedLanguage = this.languages.find(e => e.key === t), this.shortKeyLang = this.languages.find(e => e.key === t).shortKey
                        } else this.changeLanguage("en"), this.selectedLanguage = this.languages.find(t => "en" === t.key), this.shortKeyLang = this.languages.find(t => "en" === t.key).shortKey
                    }
                    search(t) {
                        var e = this;
                        if (t) {
                            const i = {
                                queryParams: {
                                    q: t
                                }
                            };
                            this.ngZone.run(Object(o.a)(function* () {
                                return yield e.router.navigate(["/search"], i)
                            }))
                        } else this.ngZone.run(Object(o.a)(function* () {
                            return yield e.router.navigate(["/search"])
                        }))
                    }
                    getUserDetails() {
                        this.userService.whoAmI().subscribe(t => {
                            this.userEmail = t.email
                        }, t => console.log(t))
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    logout() {
                        var t = this;
                        this.userService.saveLastLoginIp().subscribe(t => {
                            this.noop()
                        }, t => console.log(t)), localStorage.removeItem("token"), this.cookieService.remove("token"), sessionStorage.removeItem("bid"), sessionStorage.removeItem("itemTotal"), this.userService.isLoggedIn.next(!1), this.ngZone.run(Object(o.a)(function* () {
                            return yield t.router.navigate(["/"])
                        }))
                    }
                    changeLanguage(t) {
                        this.translate.use(t);
                        const e = new Date;
                        if (e.setFullYear(e.getFullYear() + 1), this.cookieService.put("language", t, {
                            expires: e
                        }), this.languages.find(e => e.key === t)) {
                            const e = this.languages.find(e => e.key === t);
                            this.shortKeyLang = e.shortKey, this.snackBar.open(`Language has been changed to ${e.lang}`, "Force page reload", {
                                duration: 5e3
                            }).onAction().subscribe(() => {
                                location.reload()
                            })
                        }
                    }
                    getScoreBoardStatus() {
                        this.challengeService.find({
                            name: "Score Board"
                        }).subscribe(t => {
                            this.ngZone.run(() => {
                                this.scoreBoardVisible = t[0].solved
                            })
                        }, t => console.log(t))
                    }
                    goToProfilePage() {
                        window.location.replace("./profile")
                    }
                    goToDataErasurePage() {
                        window.location.replace("./dataerasure")
                    }
                    noop() { }
                    getLanguages() {
                        this.langService.getLanguages().subscribe(t => {
                            this.languages = t, this.checkLanguage()
                        })
                    }
                    isAccounting() {
                        const t = this.loginGuard.tokenDecode();
                        return (null == t ? void 0 : t.data) && "accounting" === t.data.role
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(Es), n.Pb(Ja), n.Pb(d), n.Pb(y), n.Pb(n.B), n.Pb(c.b), n.Pb(S.b), n.Pb(v.e), n.Pb(Qe), n.Pb(hl), n.Pb(_), n.Pb(T.a), n.Pb(V))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-navbar"]
                    ],
                    outputs: {
                        sidenavToggle: "sidenavToggle"
                    },
                    decls: 88,
                    vars: 43,
                    consts: [
                        ["color", "primary", "fxLayout", "column", "xmlns", "http://www.w3.org/1999/html", 1, "mat-elevation-z6"],
                        ["fxLayout", "row"],
                        ["mat-button", "", "aria-label", "Open Sidenav", "matTooltipPosition", "below", 2, "height", "48px", "width", "48px", 3, "matTooltip", "click"],
                        ["mat-button", "", "routerLink", "/search", "aria-label", "Back to homepage", 1, "buttons", 2, "height", "60px"],
                        [1, "logo", 3, "src", "alt"],
                        ["fxHide.lt-sm", "", "fxShow", "", 2, "font-size", "x-large"],
                        [1, "fill-remaining-space"],
                        ["id", "searchQuery", "aria-label", "Click to search", 3, "onEnter"],
                        ["searchControl", ""],
                        ["mat-button", "", "fxHide.lt-md", "", "fxShow", "", "aria-label", "Show/hide account menu", "id", "navbarAccount", 1, "buttons", 2, "vertical-align", "middle", "height", "48px", 3, "matMenuTriggerFor"],
                        [1, "material-icons"],
                        ["userMenu", "matMenu"],
                        ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton", 4, "ngIf"],
                        ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"],
                        ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 4, "ngIf"],
                        ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor", 4, "ngIf"],
                        ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor", 4, "ngIf"],
                        ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click", 4, "ngIf"],
                        ["mat-button", "", "routerLink", "/basket", "style", "height:48px;", "class", "buttons", "aria-label", "Show the shopping cart", 4, "ngIf"],
                        ["mat-button", "", "aria-label", "Language selection menu", "matTooltipPosition", "below", 1, "buttons", 2, "height", "48px", "width", "48px", 3, "matMenuTriggerFor", "matTooltip"],
                        ["fxHide.lt-md", "", "fxShow", ""],
                        [3, "overlapTrigger"],
                        ["menu", "matMenu"],
                        ["class", "mat-menu-item", "style", "width: 240px;", 3, "value", "checked", "aria-label", "click", 4, "ngFor", "ngForOf"],
                        ["privacySubMenu", "matMenu"],
                        ["mat-menu-item", "", "aria-label", "Go to privacy policy page", 3, "routerLink"],
                        ["translate", ""],
                        ["mat-menu-item", "", "aria-label", "Go to data export page", 3, "routerLink"],
                        ["mat-menu-item", "", "aria-label", "Go to data subject page", 3, "click"],
                        ["mat-menu-item", "", "aria-label", "Go to change password page", 3, "routerLink"],
                        ["mat-menu-item", "", "aria-label", "Go to two factor authentication page", 3, "routerLink"],
                        ["mat-menu-item", "", "aria-label", "Go to last login ip page", 3, "routerLink"],
                        ["ordersSubMenu", "matMenu"],
                        ["mat-menu-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page"],
                        ["mat-menu-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page"],
                        ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 4, "ngIf"],
                        ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 4, "ngIf"],
                        ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 4, "ngIf"],
                        ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton"],
                        ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click"],
                        ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page"],
                        ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor"],
                        ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor"],
                        ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click"],
                        ["mat-button", "", "routerLink", "/basket", "aria-label", "Show the shopping cart", 1, "buttons", 2, "height", "48px"],
                        [1, "fa-layers-counter", "fa-layers-top-right", "fa-3x", "warn-notification", 2, "font-size", "47px"],
                        [1, "mat-menu-item", 2, "width", "240px", 3, "value", "checked", "aria-label", "click"],
                        [2, "display", "inline-block", "width", "200px", "margin-left", "5px"],
                        [3, "class", 4, "ngFor", "ngForOf"],
                        ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page"],
                        ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page"],
                        ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page"]
                    ],
                    template: function (t, e) {
                        if (1 & t) {
                            const t = n.Wb();
                            n.Vb(0, "mat-toolbar", 0), n.Vb(1, "mat-toolbar-row", 1), n.Vb(2, "button", 2), n.dc("click", function () {
                                return e.onToggleSidenav()
                            }), n.ic(3, "translate"), n.Vb(4, "mat-icon"), n.Ic(5, "menu"), n.Ub(), n.Ub(), n.Vb(6, "button", 3), n.Qb(7, "img", 4), n.Vb(8, "span", 5), n.Ic(9), n.Ub(), n.Ub(), n.Qb(10, "span", 6), n.Vb(11, "mat-search-bar", 7, 8), n.dc("onEnter", function () {
                                n.yc(t);
                                const i = n.vc(12);
                                return e.search(i.value)
                            }), n.Ub(), n.Vb(13, "button", 9), n.Vb(14, "i", 10), n.Ic(15, " account_circle "), n.Ub(), n.Vb(16, "span"), n.Ic(17), n.ic(18, "translate"), n.Ub(), n.Ub(), n.Vb(19, "mat-menu", null, 11), n.Gc(21, gl, 6, 3, "button", 12), n.Gc(22, fl, 5, 1, "button", 13), n.Gc(23, vl, 6, 3, "button", 14), n.Gc(24, Il, 6, 4, "button", 15), n.Gc(25, Cl, 6, 4, "button", 16), n.Gc(26, wl, 6, 3, "button", 17), n.Ub(), n.Gc(27, Ul, 8, 4, "button", 18), n.Vb(28, "button", 19), n.ic(29, "translate"), n.Vb(30, "mat-icon"), n.Ic(31, " language "), n.Ub(), n.Vb(32, "span", 20), n.Ic(33), n.Ub(), n.Ub(), n.Vb(34, "mat-menu", 21, 22), n.Gc(36, Sl, 5, 7, "mat-radio-button", 23), n.Ub(), n.Vb(37, "mat-menu", null, 24), n.Vb(39, "button", 25), n.Vb(40, "mat-icon"), n.Ic(41, " assignment "), n.Ub(), n.Vb(42, "span", 26), n.Ic(43, "TITLE_PRIVACY_POLICY"), n.Ub(), n.Ub(), n.Vb(44, "button", 27), n.Vb(45, "mat-icon"), n.Ic(46, " get_app "), n.Ub(), n.Vb(47, "span", 26), n.Ic(48, "TITLE_REQUEST_DATA_EXPORT"), n.Ub(), n.Ub(), n.Vb(49, "button", 28), n.dc("click", function () {
                                return e.goToDataErasurePage()
                            }), n.Vb(50, "mat-icon"), n.Ic(51, " delete_forever "), n.Ub(), n.Vb(52, "span", 26), n.Ic(53, "DATA_SUBJECT_TITLE"), n.Ub(), n.Ub(), n.Qb(54, "mat-divider"), n.Vb(55, "button", 29), n.Vb(56, "mat-icon"), n.Ic(57, " edit "), n.Ub(), n.Vb(58, "span", 26), n.Ic(59, "TITLE_CHANGE_PASSWORD"), n.Ub(), n.Ub(), n.Vb(60, "button", 30), n.Vb(61, "mat-icon"), n.Ic(62, " exposure_plus_2 "), n.Ub(), n.Vb(63, "span", 26), n.Ic(64, "TITLE_TWO_FACTOR_AUTH_CONFIG"), n.Ub(), n.Ub(), n.Vb(65, "button", 31), n.Vb(66, "mat-icon"), n.Ic(67, " place "), n.Ub(), n.Vb(68, "span", 26), n.Ic(69, "LAST_LOGIN_IP"), n.Ub(), n.Ub(), n.Ub(), n.Vb(70, "mat-menu", null, 32), n.Vb(72, "button", 33), n.Vb(73, "mat-icon"), n.Ic(74, " archive "), n.Ub(), n.Vb(75, "span"), n.Ic(76), n.ic(77, "translate"), n.Ub(), n.Ub(), n.Vb(78, "button", 34), n.Vb(79, "mat-icon"), n.Ic(80, " autorenew "), n.Ub(), n.Vb(81, "span"), n.Ic(82), n.ic(83, "translate"), n.Ub(), n.Ub(), n.Qb(84, "mat-divider"), n.Gc(85, Dl, 6, 3, "button", 35), n.Gc(86, Vl, 6, 3, "button", 36), n.Gc(87, Ol, 6, 3, "button", 37), n.Ub(), n.Ub(), n.Ub()
                        }
                        if (2 & t) {
                            const t = n.vc(20),
                                i = n.vc(35);
                            n.Db(2), n.oc("matTooltip", n.jc(3, 28, "SIDENAV_HINT")), n.Db(5), n.oc("alt", e.applicationName), n.nc("src", e.logoSrc, n.Bc), n.Db(2), n.Kc(" ", e.applicationName, " "), n.Db(4), n.nc("matMenuTriggerFor", t), n.Db(4), n.Kc(" ", n.jc(18, 30, "ACCOUNT"), " "), n.Db(4), n.nc("ngIf", !e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn() && e.isAccounting()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.oc("matTooltip", n.jc(29, 32, "LANGUAGE_SEL_HINT")), n.nc("matMenuTriggerFor", i), n.Db(5), n.Kc(" ", e.shortKeyLang, " "), n.Db(1), n.nc("overlapTrigger", !0), n.Db(2), n.nc("ngForOf", e.languages), n.Db(3), n.nc("routerLink", n.rc(38, _l)), n.Db(5), n.nc("routerLink", n.rc(39, Pl)), n.Db(11), n.nc("routerLink", n.rc(40, xl)), n.Db(5), n.nc("routerLink", n.rc(41, kl)), n.Db(5), n.nc("routerLink", n.rc(42, Tl)), n.Db(11), n.Kc(" ", n.jc(77, 34, "LABEL_ORDER_HISTORY"), " "), n.Db(6), n.Kc(" ", n.jc(83, 36, "NAV_RECYCLE"), " "), n.Db(3), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn()), n.Db(1), n.nc("ngIf", e.isLoggedIn())
                        }
                    },
                    directives: [Ms.a, f.d, Ms.c, I.a, ge.a, pe.a, S.c, M.b, ml.b, pl.d, pl.a, E.l, E.k, pl.b, v.a, Te.a, wa.a],
                    pipes: [v.d],
                    styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}.mat-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.logo[_ngcontent-%COMP%]{max-height:60px;width:auto}.avatar[_ngcontent-%COMP%]{background-repeat:no-repeat;border-radius:50%;display:inline-block;max-height:35px;max-width:35px;padding:0;pointer-events:none}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.language-select[_ngcontent-%COMP%]{margin-left:10px;width:11%}  .mat-select-value-text{font-size:15px}.user-info[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.flag-icon[_ngcontent-%COMP%]{margin-right:2px}[_nghost-%COMP%]     mat-form-field{background:transparent!important}[_nghost-%COMP%]     mat-icon{background:transparent!important}mat-search-bar[_ngcontent-%COMP%]{font-size:13px;margin-right:14px}.buttons[_ngcontent-%COMP%]{width:auto}@media screen and (max-width:959px){.buttons[_ngcontent-%COMP%]{width:48px}}[_nghost-%COMP%]     .mat-form-field-infix{max-width:250px!important;width:14vw!important}"]
                }), t
            })();

            function Ll(t, e) {
                1 & t && (n.Vb(0, "span", 2), n.Ic(1, "RESTART_REQUIRED"), n.Ub())
            }

            function El(t, e) {
                1 & t && (n.Vb(0, "span", 2), n.Ic(1, "RESET_HACKING_PROGRESS"), n.Ub())
            }

            function Ml(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-card", 1), n.Qb(1, "mat-card-header"), n.Vb(2, "mat-card-content"), n.Vb(3, "span", 2), n.Ic(4, "NOTIFICATION_SERVER_STARTED"), n.Ub(), n.Ic(5), n.Vb(6, "button", 3), n.dc("click", function () {
                        return n.yc(t), n.hc().closeNotification()
                    }), n.Ic(7, "X"), n.Ub(), n.Vb(8, "button", 4), n.dc("click", function () {
                        return n.yc(t), n.hc().clearProgress()
                    }), n.Vb(9, "mat-icon"), n.Ic(10, " delete_forever "), n.Ub(), n.Gc(11, Ll, 2, 0, "span", 5), n.Gc(12, El, 2, 0, "span", 5), n.Ub(), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = n.hc();
                    n.Db(5), n.Kc(": ", t.hackingProgress.autoRestoreMessage, "\xa0"), n.Db(3), n.nc("disabled", t.hackingProgress.cleared), n.Db(3), n.nc("ngIf", t.hackingProgress.cleared), n.Db(1), n.nc("ngIf", !t.hackingProgress.cleared)
                }
            }
            let Rl = (() => {
                class t {
                    constructor(t, e, i, a, n, o) {
                        this.ngZone = t, this.challengeService = e, this.translate = i, this.cookieService = a, this.ref = n, this.io = o, this.hackingProgress = {}
                    }
                    ngOnInit() {
                        this.ngZone.runOutsideAngular(() => {
                            this.io.socket().on("server started", () => {
                                const t = this.cookieService.get("continueCode"),
                                    e = this.cookieService.get("continueCodeFindIt"),
                                    i = this.cookieService.get("continueCodeFixIt");
                                t && this.challengeService.restoreProgress(encodeURIComponent(t)).subscribe(() => {
                                    this.translate.get("AUTO_RESTORED_PROGRESS").subscribe(t => {
                                        this.hackingProgress.autoRestoreMessage = t
                                    }, t => {
                                        this.hackingProgress.autoRestoreMessage = t
                                    })
                                }, t => {
                                    console.log(t), this.translate.get("AUTO_RESTORE_PROGRESS_FAILED", {
                                        error: t
                                    }).subscribe(t => {
                                        this.hackingProgress.autoRestoreMessage = t
                                    }, t => {
                                        this.hackingProgress.autoRestoreMessage = t
                                    })
                                }), e && this.challengeService.restoreProgressFindIt(encodeURIComponent(e)).subscribe(() => { }, t => {
                                    console.log(t)
                                }), i && this.challengeService.restoreProgressFixIt(encodeURIComponent(i)).subscribe(() => { }, t => {
                                    console.log(t)
                                }), this.ref.detectChanges()
                            })
                        })
                    }
                    closeNotification() {
                        this.hackingProgress.autoRestoreMessage = null
                    }
                    clearProgress() {
                        this.cookieService.remove("continueCode"), this.cookieService.remove("continueCodeFixIt"), this.cookieService.remove("continueCodeFindIt"), this.cookieService.remove("token"), sessionStorage.removeItem("bid"), sessionStorage.removeItem("itemTotal"), localStorage.removeItem("token"), localStorage.removeItem("displayedDifficulties"), localStorage.removeItem("showSolvedChallenges"), localStorage.removeItem("showDisabledChallenges"), localStorage.removeItem("showOnlyTutorialChallenges"), localStorage.removeItem("displayedChallengeCategories"), this.hackingProgress.cleared = !0
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(n.B), n.Pb(Ja), n.Pb(v.e), n.Pb(c.b), n.Pb(n.h), n.Pb(Qe))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-server-started-notification"]
                    ],
                    decls: 1,
                    vars: 1,
                    consts: [
                        ["class", "container primary-notification mat-elevation-z4", 4, "ngIf"],
                        [1, "container", "primary-notification", "mat-elevation-z4"],
                        ["translate", ""],
                        ["id", "closeButton", "mat-button", "", 3, "click"],
                        ["mat-stroked-button", "", 3, "disabled", "click"],
                        ["translate", "", 4, "ngIf"]
                    ],
                    template: function (t, e) {
                        1 & t && n.Gc(0, Ml, 13, 4, "mat-card", 0), 2 & t && n.nc("ngIf", e.hackingProgress.autoRestoreMessage)
                    },
                    directives: [E.l, g.a, g.c, g.b, v.a, I.a, pe.a],
                    styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}#closeButton[_ngcontent-%COMP%]{float:right}"]
                }), t
            })(),
                Nl = (() => {
                    class t {
                        constructor(t) {
                            this.http = t, this.hostServer = "."
                        }
                        getCountryMapping() {
                            return this.http.get(this.hostServer + "/rest/country-mapping").pipe(Object(b.a)(t => {
                                throw t
                            }))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Zb(r.b))
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }), t
                })();

            function Bl(t, e) {
                if (1 & t && (n.Qb(0, "span"), n.ic(1, "lowercase")), 2 & t) {
                    const t = n.hc(2).$implicit;
                    n.Gb("flag-icon flag-icon-", n.jc(1, 3, t.country.code), "")
                }
            }

            function Gl(t, e) {
                1 & t && (n.Vb(0, "mat-icon"), n.Ic(1, "my_location"), n.Ub())
            }

            function Fl(t, e) {
                if (1 & t && (n.Vb(0, "span"), n.Ic(1), n.Ub()), 2 & t) {
                    const t = n.hc(2).$implicit;
                    n.Db(1), n.Kc(" ", t.country.name, " ")
                }
            }

            function jl(t, e) {
                if (1 & t && (n.Vb(0, "span", 5), n.Gc(1, Bl, 2, 5, "span", 8), n.Gc(2, Gl, 2, 0, "mat-icon", 9), n.Ic(3, "\xa0 "), n.Gc(4, Fl, 2, 1, "span", 9), n.Ub()), 2 & t) {
                    const t = n.hc(2);
                    n.Db(1), n.nc("ngIf", "flag" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications), n.Db(1), n.nc("ngIf", "name" === t.showCtfCountryDetailsInNotifications), n.Db(2), n.nc("ngIf", "name" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications)
                }
            }

            function Hl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "mat-card", 2), n.Vb(1, "div"), n.Ic(2), n.Vb(3, "button", 3), n.dc("click", function (i) {
                        n.yc(t);
                        const a = e.index;
                        return n.hc().closeNotification(a, i.shiftKey)
                    }), n.Ic(4, "X"), n.Ub(), n.Ub(), n.Qb(5, "br"), n.Vb(6, "div", 4), n.Vb(7, "span", 5), n.Vb(8, "mat-icon"), n.Ic(9, "outlined_flag"), n.Ub(), n.Ic(10), n.Ub(), n.Ic(11, "\xa0 "), n.Vb(12, "button", 6), n.dc("cbOnSuccess", function () {
                        return e.$implicit.copied = !0
                    }), n.Vb(13, "mat-icon"), n.Ic(14, "content_copy"), n.Ub(), n.Vb(15, "span", 4), n.Ic(16), n.ic(17, "translate"), n.Ub(), n.Vb(18, "span", 4), n.Ic(19), n.ic(20, "translate"), n.Ub(), n.Ub(), n.Qb(21, "br"), n.Gc(22, jl, 5, 3, "span", 7), n.Ub(), n.Ub()
                }
                if (2 & t) {
                    const t = e.$implicit,
                        i = n.hc();
                    n.Db(2), n.Jc(t.message), n.Db(4), n.nc("hidden", !i.showCtfFlagsInNotifications), n.Db(4), n.Kc(" ", t.flag, ""), n.Db(2), n.nc("cbContent", t.flag)("disabled", t.copied), n.Db(3), n.nc("hidden", !t.copied), n.Db(1), n.Jc(n.jc(17, 10, "COPY_SUCCESS")), n.Db(2), n.nc("hidden", t.copied), n.Db(1), n.Jc(n.jc(20, 12, "COPY_TO_CLIPBOARD")), n.Db(3), n.nc("ngIf", "none" !== i.showCtfCountryDetailsInNotifications)
                }
            }
            let Ql = (() => {
                class t {
                    constructor(t, e, i, a, n, o, r, c) {
                        this.ngZone = t, this.configurationService = e, this.challengeService = i, this.countryMappingService = a, this.translate = n, this.cookieService = o, this.ref = r, this.io = c, this.notifications = [], this.showCtfFlagsInNotifications = !1, this.showCtfCountryDetailsInNotifications = "none"
                    }
                    ngOnInit() {
                        this.ngZone.runOutsideAngular(() => {
                            this.io.socket().on("challenge solved", t => {
                                (null == t ? void 0 : t.challenge) && (t.hidden || (this.showNotification(t), i.e(1).then(i.bind(null, "5RHJ")).then(t => {
                                    t.shootConfetti()
                                })), t.isRestore || this.saveProgress(), this.io.socket().emit("notification received", t.flag))
                            })
                        }), this.configurationService.getApplicationConfiguration().subscribe(t => {
                            (null == t ? void 0 : t.ctf) && (this.showCtfFlagsInNotifications = !!t.ctf.showFlagsInNotifications && t.ctf.showFlagsInNotifications, t.ctf.showCountryDetailsInNotifications ? (this.showCtfCountryDetailsInNotifications = t.ctf.showCountryDetailsInNotifications, "none" !== t.ctf.showCountryDetailsInNotifications && this.countryMappingService.getCountryMapping().subscribe(t => {
                                this.countryMap = t
                            }, t => console.log(t))) : this.showCtfCountryDetailsInNotifications = "none")
                        })
                    }
                    closeNotification(t, e = !1) {
                        e ? this.notifications = [] : this.notifications.splice(t, 1), this.ref.detectChanges()
                    }
                    showNotification(t) {
                        this.translate.get("CHALLENGE_SOLVED", {
                            challenge: t.challenge
                        }).toPromise().then(t => t, t => t).then(e => {
                            let i;
                            this.showCtfCountryDetailsInNotifications && "none" !== this.showCtfCountryDetailsInNotifications && (i = this.countryMap[t.key]), this.notifications.push({
                                message: e,
                                flag: t.flag,
                                country: i,
                                copied: !1
                            }), this.ref.detectChanges()
                        })
                    }
                    saveProgress() {
                        this.challengeService.continueCode().subscribe(t => {
                            if (!t) throw new Error("Received invalid continue code from the sever!");
                            const e = new Date;
                            e.setFullYear(e.getFullYear() + 1), this.cookieService.put("continueCode", t, {
                                expires: e
                            })
                        }, t => console.log(t))
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(n.B), n.Pb(d), n.Pb(Ja), n.Pb(Nl), n.Pb(v.e), n.Pb(c.b), n.Pb(n.h), n.Pb(Qe))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-challenge-solved-notification"]
                    ],
                    decls: 2,
                    vars: 1,
                    consts: [
                        [1, "container", "challenge-solved-toast", "mat-elevation-z4"],
                        ["class", "accent-notification", 4, "ngFor", "ngForOf"],
                        [1, "accent-notification"],
                        ["id", "closeButton", "mat-button", "", 3, "click"],
                        [3, "hidden"],
                        [1, "icon-box"],
                        ["ngxClipboard", "", "mat-stroked-button", "", 3, "cbContent", "disabled", "cbOnSuccess"],
                        ["class", "icon-box", 4, "ngIf"],
                        [3, "class", 4, "ngIf"],
                        [4, "ngIf"]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Gc(1, Hl, 23, 14, "mat-card", 1), n.Ub()), 2 & t && (n.Db(1), n.nc("ngForOf", e.notifications))
                    },
                    directives: [E.k, g.a, I.a, pe.a, Ls.a, E.l],
                    pipes: [v.d, E.i],
                    styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}#closeButton[_ngcontent-%COMP%]{float:right}.icon-box[_ngcontent-%COMP%]{display:inline-flex;vertical-align:middle}"]
                }), t
            })();

            function zl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 4), n.dc("click", function () {
                        return n.yc(t), n.hc().startHackingInstructor()
                    }), n.ic(1, "translate"), n.Vb(2, "mat-icon"), n.Ic(3, " school "), n.Ub(), n.Vb(4, "span", 5), n.Ic(5, "BTN_GETTING_STARTED"), n.Ub(), n.Ub()
                }
                2 & t && n.nc("matTooltip", n.jc(1, 1, "SCORE_BOARD_HACKING_INSTRUCTOR"))
            }

            function Wl(t, e) {
                if (1 & t) {
                    const t = n.Wb();
                    n.Vb(0, "button", 6), n.dc("click", function () {
                        return n.yc(t), n.hc().closeWelcome()
                    }), n.Vb(1, "mat-icon"), n.Ic(2, " visibility_off "), n.Ub(), n.Vb(3, "span", 7), n.Ic(4, "BTN_DISMISS"), n.Ub(), n.Ub()
                }
            }
            let Kl = (() => {
                class t {
                    constructor(t, e, i) {
                        this.dialogRef = t, this.configurationService = e, this.cookieService = i, this.title = "Welcome to OWASP Juice Shop", this.message = "<p>Being a web application with a vast number of intended security vulnerabilities, the <strong>OWASP Juice Shop</strong> is supposed to be the opposite of a best practice or template application for web developers: It is an awareness, training, demonstration and exercise tool for security risks in modern web applications. The <strong>OWASP Juice Shop</strong> is an open-source project hosted by the non-profit <a href='https://owasp.org' target='_blank'>Open Web Application Security Project (OWASP)</a> and is developed and maintained by volunteers. Check out the link below for more information and documentation on the project.</p><h1><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h1>", this.showHackingInstructor = !0, this.showDismissBtn = !0, this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t => {
                            var e, i, a;
                            (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.welcomeBanner) && (this.title = t.application.welcomeBanner.title, this.message = t.application.welcomeBanner.message), this.showHackingInstructor = null === (i = null == t ? void 0 : t.hackingInstructor) || void 0 === i ? void 0 : i.isEnabled, this.showHackingInstructor && (null === (a = null == t ? void 0 : t.challenges) || void 0 === a ? void 0 : a.restrictToTutorialsFirst) && (this.dialogRef.disableClose = !0, this.showDismissBtn = !1)
                        }, t => console.log(t))
                    }
                    startHackingInstructor() {
                        this.closeWelcome(), console.log('Starting instructions for challenge "Score Board"'), i.e(6).then(i.bind(null, "s2oO")).then(t => {
                            t.startHackingInstructorFor("Score Board")
                        })
                    }
                    closeWelcome() {
                        this.dialogRef.close();
                        const t = new Date;
                        t.setFullYear(t.getFullYear() + 1), this.cookieService.put(this.welcomeBannerStatusCookieKey, "dismiss", {
                            expires: t
                        })
                    }
                }
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Pb(_e.g), n.Pb(d), n.Pb(c.b))
                }, t.\u0275cmp = n.Jb({
                    type: t,
                    selectors: [
                        ["app-welcome-banner"]
                    ],
                    decls: 8,
                    vars: 4,
                    consts: [
                        [1, "mat-typography"],
                        [1, "text-justify", 3, "innerHtml"],
                        ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"],
                        ["mat-raised-button", "", "class", "close-dialog", "color", "primary", "aria-label", "Close Welcome Banner", 3, "click", 4, "ngIf"],
                        ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click"],
                        ["fxShow", "", "fxHide.lt-lg", "", "translate", ""],
                        ["mat-raised-button", "", "color", "primary", "aria-label", "Close Welcome Banner", 1, "close-dialog", 3, "click"],
                        ["fxShow", "", "fxHide.lt-sm", "", "translate", ""]
                    ],
                    template: function (t, e) {
                        1 & t && (n.Vb(0, "div", 0), n.Vb(1, "h1"), n.Vb(2, "span"), n.Ic(3), n.Ub(), n.Ub(), n.Qb(4, "div", 1), n.Vb(5, "div"), n.Gc(6, zl, 6, 3, "button", 2), n.Gc(7, Wl, 5, 0, "button", 3), n.Ub(), n.Ub()), 2 & t && (n.Db(3), n.Jc(e.title), n.Db(1), n.nc("innerHtml", e.message, n.zc), n.Db(2), n.nc("ngIf", e.showHackingInstructor), n.Db(1), n.nc("ngIf", e.showDismissBtn))
                    },
                    directives: [E.l, I.a, ge.a, pe.a, M.b, v.a],
                    pipes: [v.d],
                    styles: [".text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}[_nghost-%COMP%]     h1 a{font-size:20px}[_nghost-%COMP%]     strong{font-style:italic}"]
                }), t
            })(),
                ql = (() => {
                    class t {
                        constructor(t, e, i) {
                            this.dialog = t, this.configurationService = e, this.cookieService = i, this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                        }
                        ngOnInit() {
                            "dismiss" !== this.cookieService.get(this.welcomeBannerStatusCookieKey) && this.configurationService.getApplicationConfiguration().subscribe(t => {
                                var e;
                                (null === (e = null == t ? void 0 : t.application) || void 0 === e ? void 0 : e.welcomeBanner) && !t.application.welcomeBanner.showOnFirstStart || this.dialog.open(Kl, {
                                    minWidth: "320px",
                                    width: "35%",
                                    position: {
                                        top: "50px"
                                    }
                                })
                            }, t => console.log(t))
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(_e.b), n.Pb(d), n.Pb(c.b))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-welcome"]
                        ],
                        decls: 1,
                        vars: 0,
                        template: function (t, e) {
                            1 & t && n.Qb(0, "div")
                        },
                        styles: [".welcome-style[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:50%;min-width:320px}"]
                    }), t
                })(),
                $l = (() => {
                    class t {
                        constructor(t, e) {
                            this._document = t, this.translate = e, this.translate.setDefaultLang("en")
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)(n.Pb(E.d), n.Pb(v.e))
                    }, t.\u0275cmp = n.Jb({
                        type: t,
                        selectors: [
                            ["app-root"]
                        ],
                        decls: 10,
                        vars: 0,
                        consts: [
                            [1, "mat-typography"],
                            ["fullscreen", ""],
                            ["mode", "over"],
                            ["sidenav", ""],
                            [3, "sidenavToggle"]
                        ],
                        template: function (t, e) {
                            if (1 & t) {
                                const t = n.Wb();
                                n.Vb(0, "div", 0), n.Vb(1, "mat-sidenav-container", 1), n.Vb(2, "mat-sidenav", 2, 3), n.Vb(4, "sidenav", 4), n.dc("sidenavToggle", function () {
                                    return n.yc(t), n.vc(3).toggle()
                                }), n.Ub(), n.Ub(), n.Vb(5, "app-navbar", 4), n.dc("sidenavToggle", function () {
                                    return n.yc(t), n.vc(3).toggle()
                                }), n.Ub(), n.Qb(6, "app-server-started-notification"), n.Qb(7, "app-challenge-solved-notification"), n.Qb(8, "app-welcome"), n.Qb(9, "router-outlet"), n.Ub(), n.Ub()
                            }
                        },
                        directives: [Co.b, Co.a, ul, Al, Rl, Ql, ql, S.f],
                        styles: [".mat-sidenav[_ngcontent-%COMP%]{width:280px}"]
                    }), t
                })(),
                Yl = (() => {
                    class t {
                        intercept(t, e) {
                            return localStorage.getItem("token") && (t = t.clone({
                                setHeaders: {
                                    Authorization: `Bearer ${localStorage.getItem("token")}`
                                }
                            })), localStorage.getItem("email") && (t = t.clone({
                                setHeaders: {
                                    "X-User-Email": String(localStorage.getItem("email"))
                                }
                            })), e.handle(t)
                        }
                    }
                    return t.\u0275fac = function (e) {
                        return new (e || t)
                    }, t.\u0275prov = n.Lb({
                        token: t,
                        factory: t.\u0275fac
                    }), t
                })();
            var Jl = i("u9T3"),
                Zl = i("omvX"),
                Xl = i("1O3W");

            function tb(t) {
                return new As.a(t, "./assets/i18n/", ".json")
            }
            let eb = (() => {
                class t {
                    constructor(t, e) {
                        this.configurationService = t, this.overlayContainer = e, t.getApplicationConfiguration().subscribe(t => {
                            e.getContainerElement().classList.add(t.application.theme + "-theme")
                        })
                    }
                }
                var e, l, b, u, h;
                return t.\u0275fac = function (e) {
                    return new (e || t)(n.Zb(d), n.Zb(Xl.e))
                }, t.\u0275mod = n.Nb({
                    type: t,
                    bootstrap: [$l]
                }), t.\u0275inj = n.Mb({
                    providers: [{
                        provide: r.a,
                        useClass: Yl,
                        multi: !0
                    }, {
                        provide: cn.a,
                        useValue: {
                            coreLibraryLoader: (h = Object(o.a)(function* () {
                                return yield i.e(8).then(i.t.bind(null, "ECCn", 7))
                            }), function () {
                                return h.apply(this, arguments)
                            }),
                            lineNumbersLoader: (u = Object(o.a)(function* () {
                                return yield i.e(12).then(i.t.bind(null, "gPJM", 7))
                            }), function () {
                                return u.apply(this, arguments)
                            }),
                            languages: {
                                typescript: (b = Object(o.a)(function* () {
                                    return yield i.e(10).then(i.t.bind(null, "r0Rl", 7))
                                }), function () {
                                    return b.apply(this, arguments)
                                }),
                                javascript: (l = Object(o.a)(function* () {
                                    return yield i.e(9).then(i.t.bind(null, "TdF3", 7))
                                }), function () {
                                    return l.apply(this, arguments)
                                }),
                                yaml: (e = Object(o.a)(function* () {
                                    return yield i.e(11).then(i.t.bind(null, "Lns6", 7))
                                }), function () {
                                    return e.apply(this, arguments)
                                })
                            }
                        }
                    }, Ge, d, Es, Jt, Oo, y, Yt, Tt, kt, oi, Pe, ea, da, lt, va, V, Ja, c.b, P, _, Jo, x, k, Vo, Ia, ze, $o, Br, Yo, Is],
                    imports: [
                        [a.a, Ts, v.c.forRoot({
                            loader: {
                                provide: v.b,
                                useFactory: tb,
                                deps: [r.b]
                            }
                        }), c.a.forRoot(), Xt.c.forRoot(), Jl.a, r.c, s.w, Zl.b, jt.a, Uo.b, ia.b, Ls.b, wn.b, Ms.b, pe.b, Lt.e, te.b, I.b, Co.d, L.p, Fe.b, g.e, Et.c, ri.b, _e.f, Te.b, ja.c, ee.j, Ae.a, Un.b, ge.b, pl.c, Rs.c, yn.b, Io.c, We.b, ml.a, kn.b, wa.c, T.b, Mt.b, rn.d, Zt.b, Sn.c, bn.b, cn.c]
                    ]
                }), t
            })();
            Object(n.U)(), a.f().bootstrapModule(eb).catch(t => console.log(t))
        },
        zn8P: function (t, e) {
            function i(t) {
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                })
            }
            i.keys = function () {
                return []
            }, i.resolve = i, t.exports = i, i.id = "zn8P"
        }
    },
    [
        [0, 0, 7]
    ]
]);