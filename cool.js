let selectors = [
    "html",
    "head",
    "meta",
    "title",
    "link",
    "body",
    ".sm-px-4",
    "div",
    ".color-bg-gray-light",
    ".sm-br-4",
    ".lg-mw-13",
    ".mx-a",
    ".p-3",
    ".sm-p-4",
    ".md-p-5",
    ".pos-r",
    ".ov-h",
    ".lg-px-4",
    ".my-3",
    ".sm-my-4",
    ".xlg-my-5",
    ".lg-mw-12",
    ".side-tabs",
    ".lg-flex",
    ".lg-justify-between",
    ".lg-items-center",
    ".lg-ml-0",
    ".lg-mr-0",
    ".ta-c",
    ".lg-w-30",
    ".fit",
    ".mb-4",
    ".md-mb-0",
    ".z-10",
    ".lg-order-1",
    ".lg-pl-5",
    ".side-tabs__nav",
    ".touch-scroll",
    ".o-x-a",
    ".list-reset",
    ".justify-start",
    ".lg-justify-around",
    ".flex",
    ".lg-flex-column",
    "ul",
    ".side-tabs__nav-item",
    ".active",
    ".br-3",
    ".cur-p",
    "li",
    ".side-tabs__nav-link",
    ".wf-100",
    ".lg-w-a",
    ".lh-title",
    ".lg-ta-l",
    ".fs3",
    ".md-fs2",
    ".lg-fs1",
    ".d-b",
    ".side-tabs__nav-link-text",
    "strong",
    ".wf-125",
    ".td-n-hover",
    ".td-n",
    "a",
    ".fw-n",
    ".lg-w-70",
    ".tab-content",
    ".side-tabs__content",
    ".items-center",
    ".modal",
    ".fade",
    ".video-modal",
    "#videoModal",
    ".modal-dialog",
    ".modal-lg",
    ".modal-content",
    ".modal-body",
    ".embed-responsive",
    ".embed-responsive-16by9",
    ".tab-pane",
    "#side-tab-1",
    ".br-10",
    "img",
    "#side-tab-2",
    "#side-tab-3",
    "#side-tab-4",
    "#side-tab-5",
    "#side-tab-6",
    ".d-ib",
    ".transition",
    ".video-modal-trigger",
    ".md-miwf-600",
    ".xlg-miwf-800",
    ".youtube-custom__play-button",
    "#side-tab-7",
    ".color-bg-white",
    ".bs-5",
    ".ta-r",
    ".mtn-6",
    ".lg-mt-0",
    ".mrn-3",
    ".wf-175",
    ".sm-wf-225",
    ".lg-pos-a",
    ".bottom-4",
    ".rightn-4"
  ]



const css = require('css');
const fs = require('fs');

// Read the CSS from the .txt file
const file = fs.readFileSync('./style.css', 'utf8');

// Parse the CSS
const obj = css.parse(file);


// Filter the rules for the selectors you're interested in
const rules = obj.stylesheet.rules.filter(rule => {
    if (rule.selectors) {
        return rule.selectors.some(selector => {
            // selector is an entire line of the css file
            // Check if the selector has pseudo


            const hasPseudo = selector.includes(':');
            const haschild = selector.includes('>');
            return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector)) || hasPseudo || haschild;
            // return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector));
        });
    }
    return false;
});

// Get all rules that mention the selectors
const mentionedRules = obj.stylesheet.rules.filter(rule => {

    //    // If the rule is a media rule
    // if (rule.type === 'media') {
    //     // Check if any of the contained rules apply to your selectors
    //     return rule.rules.some(cssRule =>
    //         selectors.some(sel => cssRule.selectors.includes(sel))
    //     );
    // }

    if (rule.rules) {
        // Check if any of the contained rules apply to your selectors
        return rule.rules.some(cssRule =>
            selectors.some(sel => cssRule.selectors && cssRule.selectors.includes(sel))
        );
    }


    // Check if any of the contained rules apply to your selectors
    if (rule.selectors) {
        return rule.selectors.some(selector => selectors.includes(selector));
    }
    return false;
});

// Add the mentionedRules to the rules array
rules.push(...mentionedRules);


// Create a new CSS string with only the rules you're interested in
const newCss = css.stringify({ stylesheet: { rules } });

// Write the new CSS to a new file
fs.writeFileSync('./new.css', newCss);