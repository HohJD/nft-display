"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-retry */ \"./node_modules/axios-retry/lib/esm/index.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n\n\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Home = function() {\n    _s();\n    var links = [\n        {\n            link: \"/\",\n            label: \"Home\"\n        },\n        {\n            link: \"/upskill\",\n            label: \"Online Courses\"\n        },\n        {\n            link: \"/authentication\",\n            label: \"Admin\"\n        }\n    ];\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), address = _useState[0], setAddress = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), nfts = _useState1[0], setNfts = _useState1[1];\n    var network_id = \"137\";\n    var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].create();\n    (0,axios_retry__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(axiosInstance, {\n        retries: 3\n    });\n    var fetchNFTs = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n            var page, moreDataExists, nftData, url, response, pageData, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        page = 1;\n                        moreDataExists = true;\n                        nftData = [];\n                        _state.label = 1;\n                    case 1:\n                        if (!moreDataExists) return [\n                            3,\n                            8\n                        ];\n                        url = \"http://localhost:8000/https://api.chainbase.online/v1/account/nfts?chain_id=\".concat(network_id, \"&address=\").concat(address, \"&page=\").concat(page, \"&limit=100\");\n                        _state.label = 2;\n                    case 2:\n                        _state.trys.push([\n                            2,\n                            6,\n                            ,\n                            7\n                        ]);\n                        return [\n                            4,\n                            axiosInstance.get(url, {\n                                headers: {\n                                    \"Content-Type\": \"application/json\",\n                                    \"x-api-key\": \"2S65t1iBkZGg0KsMrWqGRGR9LLX\"\n                                }\n                            })\n                        ];\n                    case 3:\n                        response = _state.sent();\n                        if (response.status !== 200) {\n                            throw new Error(\"HTTP error! status: \".concat(response.status));\n                        }\n                        pageData = response.data.data.map(function(nft) {\n                            return (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_8__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_9__._)({}, nft.metadata), {\n                                image_url: nft.metadata && nft.metadata.image ? nft.metadata.image.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\") : \"\"\n                            });\n                        });\n                        nftData = (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_10__._)(nftData).concat((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_10__._)(pageData));\n                        // If the number of items returned is less than the limit, it means there is no more data.\n                        moreDataExists = pageData.length === 100;\n                        page++;\n                        if (!moreDataExists) return [\n                            3,\n                            5\n                        ];\n                        return [\n                            4,\n                            new Promise(function(resolve) {\n                                return setTimeout(resolve, 1000);\n                            })\n                        ];\n                    case 4:\n                        _state.sent();\n                        _state.label = 5;\n                    case 5:\n                        return [\n                            3,\n                            7\n                        ];\n                    case 6:\n                        error = _state.sent();\n                        if (error.response && error.response.status === 429) {\n                            // Handle rate limit error\n                            console.error(\"Rate limit exceeded. Please slow down your requests.\");\n                            return [\n                                3,\n                                8\n                            ]; // break the loop if rate limit is exceeded\n                        } else {\n                            // Handle general errors\n                            console.error(error);\n                        }\n                        return [\n                            3,\n                            7\n                        ];\n                    case 7:\n                        return [\n                            3,\n                            1\n                        ];\n                    case 8:\n                        setNfts(nftData);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (address) fetchNFTs();\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            minHeight: \"100vh\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.HeaderResponsive, {\n                links: links\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: \"2rem\",\n                    fontWeight: \"bold\",\n                    marginBottom: \"20px\"\n                },\n                children: \"Students Certificates Ownership\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        style: {\n                            fontSize: \"1rem\",\n                            fontWeight: \"bold\",\n                            marginBottom: \"5px\",\n                            display: \"block\"\n                        },\n                        htmlFor: \"address-input\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.Input, {\n                        id: \"address-input\",\n                        type: \"text\",\n                        placeholder: \"Address\",\n                        value: address,\n                        onChange: function(e) {\n                            return setAddress(e.currentTarget.value);\n                        },\n                        style: {\n                            width: \"100%\",\n                            padding: \"10px\",\n                            fontSize: \"1rem\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.Button, {\n                variant: \"outline\",\n                color: \"blue\",\n                onClick: fetchNFTs,\n                style: {\n                    marginBottom: \"20px\"\n                },\n                children: \"Show me!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n                gutter: \"md\",\n                children: nfts.map(function(nft, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"100%\",\n                            marginBottom: \"20px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                style: {\n                                    width: \"100%\",\n                                    height: \"auto\",\n                                    borderRadius: \"4px\"\n                                },\n                                src: nft.image_url,\n                                alt: \"NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: \"10px\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                        style: {\n                                            fontSize: \"1.25rem\",\n                                            fontWeight: \"bold\",\n                                            marginBottom: \"5px\"\n                                        },\n                                        children: nft.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_11__.Text, {\n                                        style: {\n                                            fontSize: \"1rem\",\n                                            color: \"gray\"\n                                        },\n                                        children: nft.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN 2023\\\\Documents\\\\projects\\\\nft-display\\\\pages\\\\index.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"huCj9UUZjNMglpWznRPtOjvIUM0=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGF4aW9zUmV0cnkgZnJvbSAnYXhpb3MtcmV0cnknO1xyXG5pbXBvcnQgeyBHcmlkLCBUZXh0LCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlclJlc3BvbnNpdmUgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcblxyXG5pbnRlcmZhY2UgTkZUIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpbWFnZV91cmw6IHN0cmluZztcclxuICAvLyBBZGQgbW9yZSBwcm9wZXJ0aWVzIGlmIG5lZWRlZFxyXG59XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgICAgIHsgbGluazogJy8nLCBsYWJlbDogJ0hvbWUnIH0sXHJcbiAgICAgICAgeyBsaW5rOiAnL3Vwc2tpbGwnLCBsYWJlbDogJ09ubGluZSBDb3Vyc2VzJyB9LFxyXG4gICAgICAgIHsgbGluazogJy9hdXRoZW50aWNhdGlvbicsIGxhYmVsOiAnQWRtaW4nfSxcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgbW9yZSBsaW5rcyBhcyBuZWVkZWRcclxuICAgICAgXTsgXHJcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5GVFtdPihbXSk7XHJcbiAgY29uc3QgbmV0d29ya19pZCA9ICcxMzcnO1xyXG5cclxuICBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKCk7XHJcbiAgYXhpb3NSZXRyeShheGlvc0luc3RhbmNlLCB7IHJldHJpZXM6IDMgfSk7XHJcblxyXG4gIGNvbnN0IGZldGNoTkZUcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgIGxldCBtb3JlRGF0YUV4aXN0cyA9IHRydWU7XHJcbiAgICBsZXQgbmZ0RGF0YTogTkZUW10gPSBbXTtcclxuXHJcbiAgICB3aGlsZSAobW9yZURhdGFFeGlzdHMpIHtcclxuICAgICAgbGV0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvaHR0cHM6Ly9hcGkuY2hhaW5iYXNlLm9ubGluZS92MS9hY2NvdW50L25mdHM/Y2hhaW5faWQ9JHtuZXR3b3JrX2lkfSZhZGRyZXNzPSR7YWRkcmVzc30mcGFnZT0ke3BhZ2V9JmxpbWl0PTEwMGA7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQodXJsLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICd4LWFwaS1rZXknOiAnMlM2NXQxaUJrWkdnMEtzTXJXcUdSR1I5TExYJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFnZURhdGEgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwKChuZnQ6IGFueSkgPT4gKHtcclxuICAgICAgICAgIC4uLm5mdC5tZXRhZGF0YSxcclxuICAgICAgICAgIGltYWdlX3VybDogbmZ0Lm1ldGFkYXRhICYmIG5mdC5tZXRhZGF0YS5pbWFnZSA/IG5mdC5tZXRhZGF0YS5pbWFnZS5yZXBsYWNlKCdpcGZzOi8vJywgJ2h0dHBzOi8vaXBmcy5pby9pcGZzLycpIDogJycsXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBuZnREYXRhID0gWy4uLm5mdERhdGEsIC4uLnBhZ2VEYXRhXTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIG51bWJlciBvZiBpdGVtcyByZXR1cm5lZCBpcyBsZXNzIHRoYW4gdGhlIGxpbWl0LCBpdCBtZWFucyB0aGVyZSBpcyBubyBtb3JlIGRhdGEuXHJcbiAgICAgICAgbW9yZURhdGFFeGlzdHMgPSBwYWdlRGF0YS5sZW5ndGggPT09IDEwMDtcclxuICAgICAgICBwYWdlKys7XHJcblxyXG4gICAgICAgIC8vIFdhaXQgZm9yIDEgc2Vjb25kIGJldHdlZW4gcmVxdWVzdHMgdG8gYXZvaWQgcmF0ZSBsaW1pdGluZ1xyXG4gICAgICAgIGlmIChtb3JlRGF0YUV4aXN0cykge1xyXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MjkpIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSByYXRlIGxpbWl0IGVycm9yXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdSYXRlIGxpbWl0IGV4Y2VlZGVkLiBQbGVhc2Ugc2xvdyBkb3duIHlvdXIgcmVxdWVzdHMuJyk7XHJcbiAgICAgICAgICBicmVhazsgLy8gYnJlYWsgdGhlIGxvb3AgaWYgcmF0ZSBsaW1pdCBpcyBleGNlZWRlZFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZ2VuZXJhbCBlcnJvcnNcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE5mdHMobmZ0RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRyZXNzKSBmZXRjaE5GVHMoKTtcclxuICB9LCBbYWRkcmVzc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1pbkhlaWdodDogJzEwMHZoJywgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgIDxIZWFkZXJSZXNwb25zaXZlIGxpbmtzPXtsaW5rc30gLz5cclxuICAgICAgPGgxIHN0eWxlPXt7IGZvbnRTaXplOiAnMnJlbScsIGZvbnRXZWlnaHQ6ICdib2xkJywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+U3R1ZGVudHMgQ2VydGlmaWNhdGVzIE93bmVyc2hpcDwvaDE+XHJcblxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIGRpc3BsYXk6ICdibG9jaycgfX0gaHRtbEZvcj1cImFkZHJlc3MtaW5wdXRcIj5cclxuICAgICAgICAgIEFkZHJlc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgaWQ9XCJhZGRyZXNzLWlucHV0XCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiXHJcbiAgICAgICAgICB2YWx1ZT17YWRkcmVzc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzEwcHgnLCBmb250U2l6ZTogJzFyZW0nIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgb25DbGljaz17ZmV0Y2hORlRzfVxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XHJcbiAgICAgID5cclxuICAgICAgICBTaG93IG1lIVxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxHcmlkIGd1dHRlcj1cIm1kXCI+XHJcbiAgICAgICAge25mdHMubWFwKChuZnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nLCBib3JkZXJSYWRpdXM6ICc0cHgnIH19IHNyYz17bmZ0LmltYWdlX3VybH0gYWx0PVwiTkZUXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcxLjI1cmVtJywgZm9udFdlaWdodDogJ2JvbGQnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PntuZnQubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFNpemU6ICcxcmVtJywgY29sb3I6ICdncmF5JyB9fT57bmZ0LmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiYXhpb3NSZXRyeSIsIkdyaWQiLCJUZXh0IiwiSW5wdXQiLCJCdXR0b24iLCJIZWFkZXJSZXNwb25zaXZlIiwiSG9tZSIsImxpbmtzIiwibGluayIsImxhYmVsIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJuZnRzIiwic2V0TmZ0cyIsIm5ldHdvcmtfaWQiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwicmV0cmllcyIsImZldGNoTkZUcyIsInBhZ2UiLCJtb3JlRGF0YUV4aXN0cyIsIm5mdERhdGEiLCJ1cmwiLCJyZXNwb25zZSIsInBhZ2VEYXRhIiwiZXJyb3IiLCJnZXQiLCJoZWFkZXJzIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwibWFwIiwibmZ0IiwibWV0YWRhdGEiLCJpbWFnZV91cmwiLCJpbWFnZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwiZGl2Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiaHRtbEZvciIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJjdXJyZW50VGFyZ2V0Iiwid2lkdGgiLCJ2YXJpYW50IiwiY29sb3IiLCJvbkNsaWNrIiwiZ3V0dGVyIiwiaW5kZXgiLCJpbWciLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJzcmMiLCJhbHQiLCJuYW1lIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});