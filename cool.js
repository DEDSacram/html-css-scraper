let selectors = [
  ".component-pricing-desktop",
  "div",
  ".component-pricing-button-main-plans",
  ".component-pricing-button",
  ".component-pricing-button-arrow",
  ".component-pricing-button-arrow-icon",
  "svg",
  "use",
  ".component-pricing-button-caption",
  ".component-pricing-table-main-container",
  ".component-pricing-table-container",
  ".component-pricing-table-main",
  ".component-pricing-table",
  ".component-pricing-table-columns",
  ".component-pricing-plan",
  ".component-pricing-plan-header",
  ".component-pricing-plan-title",
  ".component-pricing-plan-description",
  ".component-pricing-plan-content",
  ".component-pricing-plan-price-container",
  ".component-pricing-plan-price-wrapper",
  ".component-pricing-plan-price",
  ".component-pricing-plan-price-currency",
  ".component-pricing-plan-price-value",
  ".component-pricing-plan-price-period",
  ".component-pricing-plan-price-caption",
  ".component-pricing-plan-price-save-yearly-placeholder",
  ".component-pricing-plan-button-container",
  ".component-pricing-plan-button",
  ".button-blue",
  ".button-40",
  ".button-full-width",
  ".button",
  "a",
  ".component-pricing-plan-features",
  ".component-pricing-plan-features-item-bold",
  ".component-pricing-plan-features-item",
  ".component-pricing-plan-features-item-name",
  "span",
  ".tooltip",
  ".tooltip-content",
  ".tooltip-content-inner",
  "p",
  ".component-pricing-plan-descriptiondddd",
  ".component-pricing-plan-features-item-strikethrough",
  ".component-pricing-plan-discount",
  ".component-pricing-plan-price-old",
  ".component-pricing-plan-price-save-yearly",
  ".component-pricing-plan-price-save-yearly-value",
  ".component-pricing-plan-popular",
  ".component-pricing-table-enterprise-container",
  ".component-pricing-table-enterprise",
  ".component-pricing-table-enterprise-custom-plan",
  ".component-pricing-button-enterprise-plans"
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


            // const hasPseudo = selector.includes(':');
            // return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector)) || hasPseudo;
            return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector));
        });
    }
    return false;
});

// Get all rules that mention the selectors
// const mentionedRules = obj.stylesheet.rules.filter(rule => {

//     //    // If the rule is a media rule
//     // if (rule.type === 'media') {
//     //     // Check if any of the contained rules apply to your selectors
//     //     return rule.rules.some(cssRule =>
//     //         selectors.some(sel => cssRule.selectors.includes(sel))
//     //     );
//     // }

//     if (rule.rules) {
//         // Check if any of the contained rules apply to your selectors
//         return rule.rules.some(cssRule =>
//             selectors.some(sel => cssRule.selectors && cssRule.selectors.includes(sel))
//         );
//     }


//     // Check if any of the contained rules apply to your selectors
//     if (rule.selectors) {
//         return rule.selectors.some(selector => selectors.includes(selector));
//     }
//     return false;
// });

// // Add the mentionedRules to the rules array
// rules.push(...mentionedRules);


// Create a new CSS string with only the rules you're interested in
const newCss = css.stringify({ stylesheet: { rules } });

// Write the new CSS to a new file
fs.writeFileSync('./new.css', newCss);