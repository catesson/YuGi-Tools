exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 6567:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 5526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4495))

/***/ }),

/***/ 5453:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 751))

/***/ }),

/***/ 4495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Error({ error, reset }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Log the error to an error reporting service
        console.error(error);
    }, [
        error
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Something went wrong!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: // Attempt to recover by trying to re-render the segment
                ()=>reset(),
                children: "Try again"
            })
        ]
    });
}


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/styles/globals.css
var globals = __webpack_require__(5554);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/component/layout/Nav.jsx
/* __next_internal_client_entry_do_not_use__ Nav auto */ 


function Nav() {
    const [navOpen, setNavOpen] = (0,react_.useState)(false);
    const handleNavClick = ()=>{
        setNavOpen(!navOpen);
    };
    const NavBtnContent = ()=>{
        if (navOpen) {
            return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                viewBox: "0 0 15 15",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#ffffff",
                    d: "M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
                })
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                viewBox: "0 0 28 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#ffffff",
                    d: "M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                })
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex items-center flex-col sm:flex-row justify-center h-min",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: handleNavClick,
                className: "h-14 w-6 sm:hidden",
                children: NavBtnContent()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: `flex flex-col myTransition origin-top ${navOpen ? "h-56" : "h-0"} sm:flex-row sm:h-auto`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline",
                            href: "/",
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline",
                            href: "/cards",
                            children: "Cards"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline",
                            href: "/deck",
                            children: "Deck"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline",
                            href: "/lp-counter",
                            children: "LP Counter"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
;// CONCATENATED MODULE: ./src/store/store.js

const userSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "user",
    initialState: {
        id: null,
        email: null
    },
    reducers: {
        setUser: (state, action)=>{
            return action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(disconnect, (state)=>{
            return {
                id: null,
                email: null
            };
        });
    }
});
const tokenSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "tokenUser",
    initialState: null,
    reducers: {
        setToken: (state, action)=>{
            return action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(disconnect, (state)=>{
            return null;
        });
    }
});
const connectSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "connect",
    initialState: false,
    reducers: {
        setConnect: (state)=>{
            return true;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(disconnect, (state)=>{
            return false;
        });
    }
});
const disconnect = (0,redux_toolkit_cjs_production_min.createAction)("disconnect");
console.log(connectSlice.actions);
const { setConnect } = connectSlice.actions;
const { setToken } = tokenSlice.actions;
const { setUser } = userSlice.actions;
const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        connect: connectSlice.reducer,
        user: userSlice.reducer,
        token: tokenSlice.reducer
    }
});

;// CONCATENATED MODULE: ./src/app/component/layout/ConnectionBtn.jsx




function ProfilBtn() {
    //recuper la propriétet connect du store global
    const userConnect = (0,lib.useSelector)((state)=>state.connect);
    const dispatch = (0,lib.useDispatch)();
    console.log(userConnect);
    const ProfilBtn = ()=>{
        //   const handleClick = (event) => {
        //     // modifie la propriéter connect du store globale à l'aide de l'action setConnect pour la passer à true.
        //     dispatch(setConnect());
        //   };
        if (userConnect) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                // onClick={handleClick}
                className: `connectBtn flex justify-center items-center h-11 bg-white rounded-full px-2`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-red-900 font-bold",
                        children: "Connexion"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                            fill: "none",
                            stroke: "#7f1d1d",
                            strokeWidth: "2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    strokeLinejoin: "round",
                                    d: "M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    cx: "12",
                                    cy: "7",
                                    r: "3"
                                })
                            ]
                        })
                    })
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                // onClick={handleClick}
                className: `profilBtn flex justify-center items-center h-11 bg-red-900 border-solid border-4 rounded-full px-1`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-white font-bold",
                        children: "Profil"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        width: "32px",
                        height: "32px",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fill: "#ffffff",
                            fillRule: "evenodd",
                            d: "M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4Zm7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413l-.005-.018ZM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z",
                            clipRule: "evenodd"
                        })
                    })
                ]
            });
        }
    };
    return ProfilBtn();
}

// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(6558);
;// CONCATENATED MODULE: ./src/app/component/Button.jsx

function Button({ onClick, text, className }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        className: `${className} rounded-xl border-2 w-24 px-3 py-2 min m-4 transition active:shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.4);] hover:scale-105`,
        children: text
    });
}

// EXTERNAL MODULE: ./src/app/styles/form.css
var styles_form = __webpack_require__(1103);
;// CONCATENATED MODULE: ./src/app/component/userConnect_sign/ConnectModal.jsx




function ConnectModal({ visibility, setHidden }) {
    const { register, handleSubmit, formState: { errors } } = (0,index_esm/* useForm */.cI)();
    const logOrSingForm = ()=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `fixed top-0 left-0 right-0 bottom-0 bg-gray-400 bg-opacity-25 ${visibility ? "" : "hidden"} flex justify-center items-center minWidth`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white border-4 border-red-900 rounded-xl relative w-5/6 sm:w-1/2 connectForm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-center",
                        children: "Login"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "",
                        className: "flex flex-col justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "label-input",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "Email",
                                        children: "Email"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        id: "Email",
                                        "data-test-id": "Email",
                                        type: "email",
                                        placeholder: "Email",
                                        ...register("Email")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "label-input",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "Password",
                                        children: "Password"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        id: "Password",
                                        "data-test-id": "Password",
                                        type: "password",
                                        placeholder: "Password",
                                        ...register("Password")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row justify-around w-5/6 md:w-1/2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        onClick: setHidden,
                                        text: "Cancel",
                                        className: "btnCancel"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        onClick: setHidden,
                                        text: "Submit",
                                        className: "btnValidation"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    };
    return logOrSingForm();
}

;// CONCATENATED MODULE: ./src/app/component/layout/Header.jsx






function Header() {
    //variable pour afficher ou non la modale de connection.
    const [visibility, setVisibility] = (0,react_.useState)(false);
    const handleClickVisibility = ()=>{
        setVisibility(true);
    };
    const handleClickNotVisibility = ()=>{
        setVisibility(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-full bg-red-900 flex justify-evenly sm:justify-center sm:items-center items-start ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-14 flex items-center",
                onClick: handleClickVisibility,
                children: /*#__PURE__*/ jsx_runtime_.jsx(ProfilBtn, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ConnectModal, {
                visibility: visibility,
                setHidden: handleClickNotVisibility
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/store/provider.jsx
/* __next_internal_client_entry_do_not_use__ ReduxProvider auto */ 


function ReduxProvider({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: store,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/app/layout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const metadata = {
    title: "Yugi Tools",
    description: "Constructeur de deck et gestionnaire de collection"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "fr",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "height=device-height, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: metadata.title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: "h-full min-h-screen w-screen minWidth",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ReduxProvider, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full m-auto ",
                            children: children
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 6015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/steven/Documents/Projet perso/yugi-tools/src/app/error.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/steven/Documents/Projet perso/yugi-tools/src/app/layout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 1103:
/***/ (() => {



/***/ }),

/***/ 5554:
/***/ (() => {



/***/ })

};
;