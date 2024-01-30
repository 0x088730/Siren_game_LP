"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_screens_header_jsx";
exports.ids = ["src_components_screens_header_jsx"];
exports.modules = {

/***/ "./src/components/screens/header.jsx":
/*!*******************************************!*\
  !*** ./src/components/screens/header.jsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"react-scroll\");\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__]);\nreact_i18next__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Header({ currentMenu, setCurrentMenu }) {\n    const [showFlag, setShowFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        menu: false\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();\n    const menuList = [\n        t(\"Home\"),\n        t(\"How To Play\"),\n        t(\"WhitePaper\"),\n        t(\"Gems\"),\n        t(\"Characters\"),\n        t(\"How To Earn\"),\n        t(\"About Us\"),\n        t(\"Contact\")\n    ];\n    const handleMenuClick = (menu)=>{\n        // if(menu===t(\"Presale\")){\n        //   router.push('/presale')\n        // }\n        // else{\n        setCurrentMenu(menu);\n        setShowFlag({\n            menu: false\n        });\n    // }\n    };\n    const handleLangClick = ()=>{\n        const lang = i18n.language === \"ru\" ? \"en\" : \"ru\";\n        const imgElement = document.querySelector(\".lang-image\");\n        if (imgElement) {\n            imgElement.src = `assets/images/la_${lang}.png`;\n        }\n        i18n.changeLanguage(lang);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!menuList.includes(currentMenu)) {\n            setCurrentMenu(\"Home\");\n        }\n    }, [\n        currentMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed w-full h-20 bg-[#8d70ff] z-10 flex items-center shadow-2xl justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-start h-full \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-4 text-xl text-center text-gray-300 cursor-pointer font-animeace lg:text-2xl\",\n                        children: [\n                            \"\\xab\",\n                            t(\"CRYPTO_SHOWDOWN\"),\n                            \"\\xbb\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-start hidden h-full lg:text-lg px-30 xl:flex\",\n                        children: menuList.map((menu)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                to: menu,\n                                spy: true,\n                                smooth: true,\n                                offset: -70,\n                                duration: 500,\n                                className: `px-4 hover:bg-[#3d208e] hover:text-orange-300 text-sm font-animeace duration-700 h-full flex items-center cursor-pointer \n                             hover:scale-105 border-0 border-b-4 border-transparent hover:border-orange-300\n                               \n                             ${currentMenu === menu ? \"text-orange-300 \" : \"text-white\"}`,\n                                onClick: ()=>handleMenuClick(menu),\n                                children: menu\n                            }, menu, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center hidden h-full space-x-5 xl:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/images/icons/tg.png\",\n                            alt: \"\",\n                            className: \"object-cover w-full cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/images/icons/tw.png\",\n                            alt: \"\",\n                            className: \"object-cover w-full cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1/3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"assets/images/icons/discord.png\",\n                            alt: \"\",\n                            className: \"object-cover w-full cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2 text-white cursor-pointer font-animeace \",\n                        onClick: handleLangClick,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"\",\n                                className: \"lang-image\",\n                                src: `assets/images/la_${i18n.language === \"en\" ? \"en\" : \"ru\"}.png`\n                            }, void 0, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: t(\"EN\")\n                            }, void 0, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                strokeWidth: 1.5,\n                                stroke: \"currentColor\",\n                                className: \"w-6 h-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    d: \"M19.5 8.25l-7.5 7.5-7.5-7.5\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center w-32 h-full text-2xl text-white duration-500 cursor-pointer font-animeace bg-cyan-500 hover:bg-cyan-800\",\n                        children: t(\"PLAY\")\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/2 h-full text-right xl:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setShowFlag({\n                                ...showFlag,\n                                menu: !showFlag.menu\n                            }),\n                        className: \"w-32 h-full \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: 1.5,\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6 mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: `absolute right-0 w-64 text-center xl:hidden bg-[#8d70ff] text-3xl transition-transform duration-500 transform ${showFlag.menu ? \"translate-x-0\" : \"translate-x-full\"}`,\n                        children: showFlag.menu === true && menuList.map((menu)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: `px-4 py-2 cursor-pointer hover:bg-[#3d208e] hover:text-white duration-700 ${currentMenu === menu ? \"text-orange-500 \" : \"text-white\"}`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    to: menu,\n                                    spy: true,\n                                    smooth: true,\n                                    offset: -70,\n                                    duration: 500,\n                                    onClick: ()=>handleMenuClick(menu),\n                                    children: menu\n                                }, menu, false, {\n                                    fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 19\n                                }, this)\n                            }, menu, false, {\n                                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                                lineNumber: 154,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\product\\\\My github\\\\SirenGame\\\\Legend_LP-main-main\\\\src\\\\components\\\\screens\\\\header.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ2RDLGdCQUFlO29DQUNmQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLUiw4REFBQ3BCO3dCQUFJQyxXQUFVO2tDQUNaZCxFQUFFOzs7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ29CO3dCQUNDYixTQUFTLElBQU14QixZQUFZO2dDQUFFLEdBQUdELFFBQVE7Z0NBQUVFLE1BQU0sQ0FBQ0YsU0FBU0UsSUFBSTs0QkFBQzt3QkFDL0RnQixXQUFVO2tDQUVWLDRFQUFDVTs0QkFDQ0MsT0FBTTs0QkFDTkMsTUFBSzs0QkFDTEMsU0FBUTs0QkFDUkMsYUFBYTs0QkFDYkMsUUFBTzs0QkFDUGYsV0FBVTtzQ0FFViw0RUFBQ2dCO2dDQUNDQyxlQUFjO2dDQUNkQyxnQkFBZTtnQ0FDZkMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJUiw4REFBQ3BCO3dCQUNDQyxXQUFXLENBQUMsOEdBQThHLEVBQ3hIbEIsU0FBU0UsSUFBSSxHQUFHLGtCQUFrQixtQkFDbkMsQ0FBQztrQ0FFREYsU0FBU0UsSUFBSSxLQUFLLFFBQ2pCSSxTQUFTYSxHQUFHLENBQUMsQ0FBQ2pCOzRCQUNaLHFCQUNFLDhEQUFDZTtnQ0FFQ0MsV0FBVyxDQUFDLDBFQUEwRSxFQUNwRnBCLGdCQUFnQkksT0FDZCxxQkFBbUIsYUFDdEIsQ0FBQzswQ0FFRiw0RUFBQ1IsOENBQUlBO29DQUVIMEIsSUFBSWxCO29DQUNKbUIsS0FBSztvQ0FDTEMsUUFBUTtvQ0FDUkMsUUFBUSxDQUFDO29DQUNUQyxVQUFVO29DQUNWQyxTQUFTLElBQU1sQixnQkFBZ0JMOzhDQUU5QkE7bUNBUklBOzs7OzsrQkFQRkE7Ozs7O3dCQW1CWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL3NjcmVlbnMvaGVhZGVyLmpzeD8xZGM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjdXJyZW50TWVudSwgc2V0Q3VycmVudE1lbnUgfSkge1xuICBjb25zdCBbc2hvd0ZsYWcsIHNldFNob3dGbGFnXSA9IHVzZVN0YXRlKHsgbWVudTogZmFsc2UgfSk7XG4gIGNvbnN0IHJvdXRlciA9ICB1c2VSb3V0ZXIoKVxuICBjb25zdCB7dCxpMThufSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbWVudUxpc3QgPSBbXG4gICAgdCgnSG9tZScpLFxuICAgIHQoXCJIb3cgVG8gUGxheVwiKSxcbiAgICB0KFwiV2hpdGVQYXBlclwiKSxcbiAgICB0KFwiR2Vtc1wiKSxcbiAgICB0KFwiQ2hhcmFjdGVyc1wiKSxcbiAgICB0KFwiSG93IFRvIEVhcm5cIiksXG4gICAgdChcIkFib3V0IFVzXCIpLFxuICAgIHQoXCJDb250YWN0XCIpLFxuICAgIFxuICBdO1xuICBcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKG1lbnUpID0+IHtcbiAgICAvLyBpZihtZW51PT09dChcIlByZXNhbGVcIikpe1xuICAgIC8vICAgcm91dGVyLnB1c2goJy9wcmVzYWxlJylcbiAgICAvLyB9XG4gICAgLy8gZWxzZXtcbiAgICAgIHNldEN1cnJlbnRNZW51KG1lbnUpO1xuICAgICAgc2V0U2hvd0ZsYWcoeyBtZW51OiBmYWxzZSB9KTtcbiAgICAvLyB9XG4gICAgXG4gIH07XG4gIGNvbnN0IGhhbmRsZUxhbmdDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gaTE4bi5sYW5ndWFnZSA9PT0gJ3J1JyA/ICdlbicgOiAncnUnO1xuICAgIGNvbnN0IGltZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZy1pbWFnZScpO1xuICAgIGlmIChpbWdFbGVtZW50KSB7XG4gICAgICBpbWdFbGVtZW50LnNyYyA9IGBhc3NldHMvaW1hZ2VzL2xhXyR7bGFuZ30ucG5nYDtcbiAgICB9XG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5nKTtcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWVudUxpc3QuaW5jbHVkZXMoY3VycmVudE1lbnUpKSB7XG4gICAgICBzZXRDdXJyZW50TWVudShcIkhvbWVcIik7XG4gICAgfVxuICB9LCBbY3VycmVudE1lbnVdKTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBoLTIwIGJnLVsjOGQ3MGZmXSB6LTEwIGZsZXggaXRlbXMtY2VudGVyIHNoYWRvdy0yeGwganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgaC1mdWxsIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgdGV4dC14bCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGZvbnQtYW5pbWVhY2UgbGc6dGV4dC0yeGxcIj5cbiAgICAgICAgwqt7dChcIkNSWVBUT19TSE9XRE9XTlwiKX3Cu1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LXN0YXJ0IGhpZGRlbiBoLWZ1bGwgbGc6dGV4dC1sZyBweC0zMCB4bDpmbGV4XCI+XG4gICAgICAgICAge21lbnVMaXN0Lm1hcCgobWVudSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e21lbnV9XG4gICAgICAgICAgICAgICAgdG89e21lbnV9XG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgaG92ZXI6YmctWyMzZDIwOGVdIGhvdmVyOnRleHQtb3JhbmdlLTMwMCB0ZXh0LXNtIGZvbnQtYW5pbWVhY2UgZHVyYXRpb24tNzAwIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6c2NhbGUtMTA1IGJvcmRlci0wIGJvcmRlci1iLTQgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1lbnUgPT09IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LW9yYW5nZS0zMDAgXCIgOiBcInRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51Q2xpY2sobWVudSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVudX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgaGlkZGVuIGgtZnVsbCBzcGFjZS14LTUgeGw6ZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvM1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvdGcucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvM1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvdHcucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEvM1wiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvaWNvbnMvZGlzY29yZC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXIgZm9udC1hbmltZWFjZSBcIiBvbkNsaWNrPXtoYW5kbGVMYW5nQ2xpY2t9PlxuICAgICAgICBcbiAgICAgICAgPGltZyBhbHQ9JycgY2xhc3NOYW1lPVwibGFuZy1pbWFnZVwiIHNyYz17YGFzc2V0cy9pbWFnZXMvbGFfJHtpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ2VuJyA6ICdydSd9LnBuZ2B9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0KCdFTicpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIGQ9XCJNMTkuNSA4LjI1bC03LjUgNy41LTcuNS03LjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMzIgaC1mdWxsIHRleHQtMnhsIHRleHQtd2hpdGUgZHVyYXRpb24tNTAwIGN1cnNvci1wb2ludGVyIGZvbnQtYW5pbWVhY2UgYmctY3lhbi01MDAgaG92ZXI6YmctY3lhbi04MDBcIj5cbiAgICAgICAgICB7dCgnUExBWScpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLWZ1bGwgdGV4dC1yaWdodCB4bDpoaWRkZW5cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dGbGFnKHsgLi4uc2hvd0ZsYWcsIG1lbnU6ICFzaG93RmxhZy5tZW51IH0pfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC1mdWxsIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IG14LWF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBkPVwiTTMuNzUgNi43NWgxNi41TTMuNzUgMTJoMTYuNW0tMTYuNSA1LjI1aDE2LjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSByaWdodC0wIHctNjQgdGV4dC1jZW50ZXIgeGw6aGlkZGVuIGJnLVsjOGQ3MGZmXSB0ZXh0LTN4bCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICBzaG93RmxhZy5tZW51ID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LWZ1bGxcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dGbGFnLm1lbnUgPT09IHRydWUgJiZcbiAgICAgICAgICAgIG1lbnVMaXN0Lm1hcCgobWVudSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17bWVudX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bIzNkMjA4ZV0gaG92ZXI6dGV4dC13aGl0ZSBkdXJhdGlvbi03MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudE1lbnUgPT09IG1lbnVcbiAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtb3JhbmdlLTUwMCBcIjpcInRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAga2V5PXttZW51fVxuICAgICAgICAgICAgICAgICAgICB0bz17bWVudX1cbiAgICAgICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNZW51Q2xpY2sobWVudSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttZW51fVxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVJvdXRlciIsIkhlYWRlciIsImN1cnJlbnRNZW51Iiwic2V0Q3VycmVudE1lbnUiLCJzaG93RmxhZyIsInNldFNob3dGbGFnIiwibWVudSIsInJvdXRlciIsInQiLCJpMThuIiwibWVudUxpc3QiLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVMYW5nQ2xpY2siLCJsYW5nIiwibGFuZ3VhZ2UiLCJpbWdFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwiY2hhbmdlTGFuZ3VhZ2UiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRvIiwic3B5Iiwic21vb3RoIiwib2Zmc2V0IiwiZHVyYXRpb24iLCJvbkNsaWNrIiwiaW1nIiwiYWx0Iiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/screens/header.jsx\n");

/***/ })

};
;