"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Pathname),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@magnolia/react-editor"
const react_editor_namespaceObject = require("@magnolia/react-editor");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./utils.js

const NEXT_PUBLIC_MGNL_HOST = process.env.NEXT_PUBLIC_MGNL_HOST;
const utils_languages = "en de".split(" ");
const nodeName = process.env.NEXT_APP_MGNL_SITE_PATH;
const templateAnnotationsApi = `${NEXT_PUBLIC_MGNL_HOST}/.rest/template-annotations/v1`;
const pagesApi = `${NEXT_PUBLIC_MGNL_HOST}/.rest/delivery/pages/v1`;
const pagenavApi = `${NEXT_PUBLIC_MGNL_HOST}/.rest/delivery/pagenav/v1`;
async function getProps(resolvedUrl) {
    const magnoliaContext = react_editor_namespaceObject.EditorContextHelper.getMagnoliaContext(resolvedUrl, nodeName, utils_languages);
    //
    let props = {
        nodeName,
        magnoliaContext
    };
    // Fetching page content
    const pagesRes = await fetch(pagesApi + magnoliaContext.nodePath + magnoliaContext.search);
    props.page = await pagesRes.json();
    // Fetching page navigation
    const pagenavRes = await fetch(pagenavApi + nodeName);
    props.pagenav = await pagenavRes.json();
    // Fetch template annotations only inside Magnolia WYSIWYG
    if (magnoliaContext.isMagnolia) {
        const templateAnnotationsRes = await fetch(templateAnnotationsApi + magnoliaContext.nodePath);
        props.templateAnnotations = await templateAnnotationsRes.json();
    }
    global.mgnlInPageEditor = magnoliaContext.isMagnoliaEdit;
    return {
        props
    };
}

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./templates/components/Navigation.js





let NODE_NAME;
let BASENAME = "";
function renderLink(item) {
    return /*#__PURE__*/ _jsxs(React.Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Link, {
                href: BASENAME + item["@path"].replace(NODE_NAME, "") || "/",
                children: item["@name"]
            }),
            item["@nodes"].length > 0 && item["@nodes"].map((nodeName)=>renderLink(item[nodeName]))
        ]
    }, item["@id"]);
}
function Navigation(props) {
    const router = useRouter();
    const { nodeName , content , currentLanguage  } = props;
    const pathname = router.asPath;
    NODE_NAME = nodeName;
    BASENAME = currentLanguage === languages[0] ? "" : "/" + currentLanguage;
    return /*#__PURE__*/ _jsxs("nav", {
        children: [
            renderLink(content, currentLanguage),
            languages.map((language, i)=>/*#__PURE__*/ _jsx(Link, {
                    style: {
                        padding: "initial"
                    },
                    href: (i === 0 ? "" : "/" + language) + pathname.replace("/" + languages[1], ""),
                    children: /*#__PURE__*/ _jsx("button", {
                        children: language
                    })
                }, language))
        ]
    });
}
/* harmony default export */ const components_Navigation = ((/* unused pure expression or super */ null && (Navigation)));

;// CONCATENATED MODULE: ./templates/pages/Basic.js



const Basic = (props)=>{
    const { main , extras , title  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "Basic",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "hint",
                children: "[Basic Page]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: title || props.metadata["@name"]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "hint",
                        children: "[Main Area]"
                    }),
                    main && /*#__PURE__*/ jsx_runtime_.jsx(react_editor_namespaceObject.EditableArea, {
                        className: "Area",
                        content: main
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "Extras",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "hint",
                        children: "[Sercondary Area]"
                    }),
                    extras && /*#__PURE__*/ jsx_runtime_.jsx(react_editor_namespaceObject.EditableArea, {
                        className: "Area",
                        content: extras
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages_Basic = (Basic);

;// CONCATENATED MODULE: ./templates/components/Headline.js


const Headline = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "Headline",
        children: props.text
    });
/* harmony default export */ const components_Headline = (Headline);

;// CONCATENATED MODULE: ./templates/components/Image.js


const Image = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
        className: "Image",
        src: process.env.NEXT_PUBLIC_MGNL_HOST + "/dam/" + props.image["@id"] + props.image["@path"],
        alt: "Etiam Purus"
    });
/* harmony default export */ const components_Image = (Image);

;// CONCATENATED MODULE: ./templates/components/Paragraph.js


function Paragraph(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "Paragraph",
        dangerouslySetInnerHTML: {
            __html: props.richText
        }
    });
}
/* harmony default export */ const components_Paragraph = (Paragraph);

;// CONCATENATED MODULE: ./templates/components/Expander.js



class Expander extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {};
        this.state = {
            isCollapsed: true
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(event) {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
        event.preventDefault();
    }
    render() {
        const expanderItems = this.props.expanderItems;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "expander",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: this.toggle,
                    className: this.state.isCollapsed ? "open expanderHeader" : "closed expanderHeader",
                    children: [
                        "Expander",
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "expanderIcon",
                            focusable: "false",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            role: "presentation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                            })
                        })
                    ]
                }),
                !this.state.isCollapsed && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hint",
                            children: "[EXPANDER OPENED]"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_editor_namespaceObject.EditableArea, {
                            content: expanderItems,
                            parentTemplateId: this.props.metadata["mgnl:template"]
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const components_Expander = (Expander);

;// CONCATENATED MODULE: ./templates/components/List.js



const List = (props)=>{
    const { items  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hint",
                children: "[LIST]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "List",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_editor_namespaceObject.EditableArea, {
                    content: items,
                    parentTemplateId: props.metadata["mgnl:template"]
                })
            })
        ]
    });
};
/* harmony default export */ const components_List = (List);

;// CONCATENATED MODULE: ./templates/components/Item.js


const Item = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "Item",
        children: props.text
    });
/* harmony default export */ const components_Item = (Item);

;// CONCATENATED MODULE: ./pages/[[...pathname]].js











const config = {
    componentMappings: {
        "spa-lm:pages/basic": pages_Basic,
        "spa-lm:components/headline": components_Headline,
        "spa-lm:components/image": components_Image,
        "spa-lm:components/paragraph": components_Paragraph,
        "spa-lm:components/expander": components_Expander,
        "spa-lm:components/list": components_List,
        "spa-lm:components/listItem": components_Item
    }
};
async function getServerSideProps(context) {
    return await getProps(context.resolvedUrl);
}
function Pathname(props) {
    const { nodeName , page ={} , pagenav ={} , templateAnnotations ={} , magnoliaContext  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: magnoliaContext.isMagnoliaEdit ? "disable-a-pointer-events" : "",
        children: page && /*#__PURE__*/ jsx_runtime_.jsx(react_editor_namespaceObject.EditablePage, {
            content: page,
            config: config,
            templateAnnotations: templateAnnotations
        })
    });
}


/***/ }),

/***/ 280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(436)));
module.exports = __webpack_exports__;

})();