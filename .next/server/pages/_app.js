(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,690];
exports.modules = {

/***/ 3272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./layout/context/layoutcontext.tsx
var layoutcontext = __webpack_require__(8338);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "primereact/hooks"
const hooks_namespaceObject = require("primereact/hooks");
// EXTERNAL MODULE: external "primereact/utils"
var utils_ = __webpack_require__(4355);
;// CONCATENATED MODULE: ./layout/AppFooter.tsx
/* eslint-disable @next/next/no-img-element */ 


const AppFooter = ()=>{
    const { layoutConfig  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `/layout/images/logo-${layoutConfig.colorScheme === "light" ? "dark" : "white"}.svg`,
                alt: "Logo",
                height: "20",
                className: "mr-2"
            }),
            "by",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-medium ml-2",
                children: "PrimeReact"
            })
        ]
    });
};
/* harmony default export */ const layout_AppFooter = (AppFooter);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "primereact/ripple"
var ripple_ = __webpack_require__(1267);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
;// CONCATENATED MODULE: ./layout/context/menucontext.tsx


const MenuContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const MenuProvider = ({ children  })=>{
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)("");
    const value = {
        activeMenu,
        setActiveMenu
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./layout/AppMenuitem.tsx








const AppMenuitem = (props)=>{
    const { activeMenu , setActiveMenu  } = (0,external_react_.useContext)(MenuContext);
    const router = (0,router_.useRouter)();
    const item = props.item;
    const key = props.parentKey ? props.parentKey + "-" + props.index : String(props.index);
    const isActiveRoute = item.to && router.pathname === item.to;
    const active = activeMenu === key || activeMenu.startsWith(key + "-");
    (0,external_react_.useEffect)(()=>{
        if (item.to && router.pathname === item.to) {
            setActiveMenu(key);
        }
        const onRouteChange = (url)=>{
            if (item.to && item.to === url) {
                setActiveMenu(key);
            }
        };
        router.events.on("routeChangeComplete", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
        };
    }, []);
    const itemClick = (event)=>{
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        // toggle active state
        if (item.items) setActiveMenu(active ? props.parentKey : key);
        else setActiveMenu(key);
    };
    const subMenu = item.items && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
        timeout: {
            enter: 1000,
            exit: 450
        },
        classNames: "layout-submenu",
        in: props.root ? true : active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: item.items.map((child, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(AppMenuitem, {
                    item: child,
                    index: i,
                    className: child.badgeClass,
                    parentKey: key
                }, child.label);
            })
        })
    }, item.label);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: (0,utils_.classNames)({
            "layout-root-menuitem": props.root,
            "active-menuitem": active
        }),
        children: [
            props.root && item.visible !== false && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-menuitem-root-text",
                children: item.label
            }),
            (!item.to || item.items) && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: item.url,
                onClick: (e)=>itemClick(e),
                className: (0,utils_.classNames)(item.class, "p-ripple"),
                target: item.target,
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_.Ripple, {})
                ]
            }) : null,
            item.to && !item.items && item.visible !== false ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: item.to,
                replace: item.replaceUrl,
                target: item.target,
                onClick: (e)=>itemClick(e),
                className: (0,utils_.classNames)(item.class, "p-ripple", {
                    "active-route": isActiveRoute
                }),
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: (0,utils_.classNames)("layout-menuitem-icon", item.icon)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "layout-menuitem-text",
                        children: item.label
                    }),
                    item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "pi pi-fw pi-angle-down layout-submenu-toggler"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ripple_.Ripple, {})
                ]
            }) : null,
            subMenu
        ]
    });
};
/* harmony default export */ const layout_AppMenuitem = (AppMenuitem);

;// CONCATENATED MODULE: ./layout/AppMenu.tsx
/* eslint-disable @next/next/no-img-element */ 





const AppMenu = ()=>{
    const { layoutConfig  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const model = [
        {
            label: "Home",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-fw pi-home",
                    to: "/"
                }
            ]
        },
        {
            label: "UI Components",
            items: [
                {
                    label: "Form Layout",
                    icon: "pi pi-fw pi-id-card",
                    to: "/uikit/formlayout"
                },
                {
                    label: "Input",
                    icon: "pi pi-fw pi-check-square",
                    to: "/uikit/input"
                },
                {
                    label: "Float Label",
                    icon: "pi pi-fw pi-bookmark",
                    to: "/uikit/floatlabel"
                },
                {
                    label: "Invalid State",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/uikit/invalidstate"
                },
                {
                    label: "Button",
                    icon: "pi pi-fw pi-mobile",
                    to: "/uikit/button",
                    class: "rotated-icon"
                },
                {
                    label: "Table",
                    icon: "pi pi-fw pi-table",
                    to: "/uikit/table"
                },
                {
                    label: "List",
                    icon: "pi pi-fw pi-list",
                    to: "/uikit/list"
                },
                {
                    label: "Tree",
                    icon: "pi pi-fw pi-share-alt",
                    to: "/uikit/tree"
                },
                {
                    label: "Panel",
                    icon: "pi pi-fw pi-tablet",
                    to: "/uikit/panel"
                },
                {
                    label: "Overlay",
                    icon: "pi pi-fw pi-clone",
                    to: "/uikit/overlay"
                },
                {
                    label: "Media",
                    icon: "pi pi-fw pi-image",
                    to: "/uikit/media"
                },
                {
                    label: "Menu",
                    icon: "pi pi-fw pi-bars",
                    to: "/uikit/menu",
                    preventExact: true
                },
                {
                    label: "Message",
                    icon: "pi pi-fw pi-comment",
                    to: "/uikit/message"
                },
                {
                    label: "File",
                    icon: "pi pi-fw pi-file",
                    to: "/uikit/file"
                },
                {
                    label: "Chart",
                    icon: "pi pi-fw pi-chart-bar",
                    to: "/uikit/charts"
                },
                {
                    label: "Misc",
                    icon: "pi pi-fw pi-circle",
                    to: "/uikit/misc"
                }
            ]
        },
        {
            label: "Prime Blocks",
            items: [
                {
                    label: "Free Blocks",
                    icon: "pi pi-fw pi-eye",
                    to: "/blocks",
                    badge: "NEW"
                },
                {
                    label: "All Blocks",
                    icon: "pi pi-fw pi-globe",
                    url: "https://blocks.primereact.org",
                    target: "_blank"
                }
            ]
        },
        {
            label: "Utilities",
            items: [
                {
                    label: "PrimeIcons",
                    icon: "pi pi-fw pi-prime",
                    to: "/utilities/icons"
                },
                {
                    label: "PrimeFlex",
                    icon: "pi pi-fw pi-desktop",
                    url: "https://www.primefaces.org/primeflex/",
                    target: "_blank"
                }
            ]
        },
        {
            label: "Pages",
            icon: "pi pi-fw pi-briefcase",
            to: "/pages",
            items: [
                {
                    label: "Landing",
                    icon: "pi pi-fw pi-globe",
                    to: "/landing"
                },
                {
                    label: "Auth",
                    icon: "pi pi-fw pi-user",
                    items: [
                        {
                            label: "Login",
                            icon: "pi pi-fw pi-sign-in",
                            to: "/auth/login"
                        },
                        {
                            label: "Error",
                            icon: "pi pi-fw pi-times-circle",
                            to: "/auth/error"
                        },
                        {
                            label: "Access Denied",
                            icon: "pi pi-fw pi-lock",
                            to: "/auth/access"
                        }
                    ]
                },
                {
                    label: "Crud",
                    icon: "pi pi-fw pi-pencil",
                    to: "/pages/crud"
                },
                {
                    label: "Timeline",
                    icon: "pi pi-fw pi-calendar",
                    to: "/pages/timeline"
                },
                {
                    label: "Not Found",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/pages/notfound"
                },
                {
                    label: "Empty",
                    icon: "pi pi-fw pi-circle-off",
                    to: "/pages/empty"
                }
            ]
        },
        {
            label: "Hierarchy",
            items: [
                {
                    label: "Submenu 1",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 1.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.3",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        },
                        {
                            label: "Submenu 1.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "Submenu 2",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 2.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 2.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        },
                        {
                            label: "Submenu 2.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Get Started",
            items: [
                {
                    label: "Documentation",
                    icon: "pi pi-fw pi-question",
                    to: "/documentation"
                },
                {
                    label: "View Source",
                    icon: "pi pi-fw pi-search",
                    url: "https://github.com/primefaces/sakai-react",
                    target: "_blank"
                }
            ]
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(MenuProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "layout-menu",
            children: [
                model.map((item, i)=>{
                    return !item?.seperator ? /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenuitem, {
                        item: item,
                        root: true,
                        index: i
                    }, item.label) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "menu-separator"
                    });
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "https://blocks.primereact.org",
                    target: "_blank",
                    style: {
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        alt: "Prime Blocks",
                        className: "w-full mt-3",
                        src: `/layout/images/banner-primeblocks${layoutConfig.colorScheme === "light" ? "" : "-dark"}.png`
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_AppMenu = (AppMenu);

;// CONCATENATED MODULE: ./layout/AppSidebar.tsx


const AppSidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_AppMenu, {});
};
/* harmony default export */ const layout_AppSidebar = (AppSidebar);

;// CONCATENATED MODULE: ./layout/AppTopbar.tsx
/* eslint-disable @next/next/no-img-element */ 



const AppTopbar = /*#__PURE__*/ (0,external_react_.forwardRef)((props, ref)=>{
    const { layoutConfig , layoutState , onMenuToggle , showProfileSidebar  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const menubuttonRef = (0,external_react_.useRef)(null);
    const topbarmenuRef = (0,external_react_.useRef)(null);
    const topbarmenubuttonRef = (0,external_react_.useRef)(null);
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            menubutton: menubuttonRef.current,
            topbarmenu: topbarmenuRef.current,
            topbarmenubutton: topbarmenubuttonRef.current
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "layout-topbar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "/",
            className: "layout-topbar-logo",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `/layout/images/logo-${layoutConfig.colorScheme !== "light" ? "white" : "dark"}.svg`,
                    width: "47.22px",
                    height: "35px",
                    alt: "logo"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "dbAURiS"
                })
            ]
        })
    });
});
AppTopbar.displayName = "AppTopbar";
/* harmony default export */ const layout_AppTopbar = (AppTopbar);

// EXTERNAL MODULE: ./layout/AppConfig.tsx
var AppConfig = __webpack_require__(5725);
// EXTERNAL MODULE: external "primereact/api"
var api_ = __webpack_require__(2250);
var api_default = /*#__PURE__*/__webpack_require__.n(api_);
;// CONCATENATED MODULE: ./layout/layout.tsx
/* eslint-disable react-hooks/exhaustive-deps */ 











const Layout = ({ children  })=>{
    const { layoutConfig , layoutState , setLayoutState  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const topbarRef = (0,external_react_.useRef)(null);
    const sidebarRef = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = (0,hooks_namespaceObject.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(sidebarRef.current?.isSameNode(event.target) || sidebarRef.current?.contains(event.target) || topbarRef.current?.menubutton?.isSameNode(event.target) || topbarRef.current?.menubutton?.contains(event.target));
            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const [bindProfileMenuOutsideClickListener, unbindProfileMenuOutsideClickListener] = (0,hooks_namespaceObject.useEventListener)({
        type: "click",
        listener: (event)=>{
            const isOutsideClicked = !(topbarRef.current?.topbarmenu?.isSameNode(event.target) || topbarRef.current?.topbarmenu?.contains(event.target) || topbarRef.current?.topbarmenubutton?.isSameNode(event.target) || topbarRef.current?.topbarmenubutton?.contains(event.target));
            if (isOutsideClicked) {
                hideProfileMenu();
            }
        }
    });
    const hideMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                overlayMenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false
            }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };
    const hideProfileMenu = ()=>{
        setLayoutState((prevLayoutState)=>({
                ...prevLayoutState,
                profileSidebarVisible: false
            }));
        unbindProfileMenuOutsideClickListener();
    };
    const blockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.add("blocked-scroll");
        } else {
            document.body.className += " blocked-scroll";
        }
    };
    const unblockBodyScroll = ()=>{
        if (document.body.classList) {
            document.body.classList.remove("blocked-scroll");
        } else {
            document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    };
    (0,hooks_namespaceObject.useMountEffect)(()=>{
        (api_default()).ripple = true;
    });
    (0,external_react_.useEffect)(()=>{
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }
        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [
        layoutState.overlayMenuActive,
        layoutState.staticMenuMobileActive
    ]);
    (0,external_react_.useEffect)(()=>{
        if (layoutState.profileSidebarVisible) {
            bindProfileMenuOutsideClickListener();
        }
    }, [
        layoutState.profileSidebarVisible
    ]);
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeComplete", ()=>{
            hideMenu();
            hideProfileMenu();
        });
    }, []);
    (0,hooks_namespaceObject.useUnmountEffect)(()=>{
        unbindMenuOutsideClickListener();
        unbindProfileMenuOutsideClickListener();
    });
    const containerClass = (0,utils_.classNames)("layout-wrapper", {
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Sakai by PrimeReact | Free Admin Template for NextJS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Sakai by PrimeReact | Free Admin Template for NextJS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://www.primefaces.org/sakai-react"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "The ultimate collection of design-agnostic, flexible and accessible React UI Components."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://www.primefaces.org/static/social/sakai-nextjs.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:ttl",
                        content: "604800"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: `/favicon.ico`,
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: containerClass,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_AppTopbar, {
                        ref: topbarRef
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: sidebarRef,
                        className: "layout-sidebar",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_AppSidebar, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "layout-main-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "layout-main",
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(layout_AppFooter, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AppConfig/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-mask"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.css
var primereact = __webpack_require__(1909);
// EXTERNAL MODULE: ./node_modules/primeflex/primeflex.css
var primeflex = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/primeicons/primeicons.css
var primeicons = __webpack_require__(3248);
// EXTERNAL MODULE: ./styles/layout/layout.scss
var layout_layout = __webpack_require__(5895);
// EXTERNAL MODULE: ./styles/demo/Demos.scss
var Demos = __webpack_require__(9267);
;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return /*#__PURE__*/ jsx_runtime_.jsx(layoutcontext/* LayoutProvider */.a, {
            children: Component.getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }))
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(layoutcontext/* LayoutProvider */.a, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        });
    }
}


/***/ }),

/***/ 4723:
/***/ (() => {



/***/ }),

/***/ 3248:
/***/ (() => {



/***/ }),

/***/ 1909:
/***/ (() => {



/***/ }),

/***/ 9267:
/***/ (() => {



/***/ }),

/***/ 5895:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/api");

/***/ }),

/***/ 1088:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/button");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 2948:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/radiobutton");

/***/ }),

/***/ 1267:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/ripple");

/***/ }),

/***/ 2720:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/sidebar");

/***/ }),

/***/ 4355:
/***/ ((module) => {

"use strict";
module.exports = require("primereact/utils");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,338,725], () => (__webpack_exec__(3272)));
module.exports = __webpack_exports__;

})();