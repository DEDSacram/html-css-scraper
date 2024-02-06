
const css = require('css');
const fs = require('fs');

let selectors = [
    "html",
    "head",
    "meta",
    "title",
    "link",
    "body",
    ".uvnitr",
    "div",
    ".texty",
    ".tabulka",
    ".pro2",
    ".aktivni",
    ".cenik",
    "h3",
    "sup",
    "p",
    "h4",
    "ul",
    "li",
    ".zn",
    "strong",
    ".pro3",
    "span"
  ]

// Read the CSS from the .txt file
const file = fs.readFileSync('./style.css', 'utf8');

// Parse the CSS

   const obj = css.parse(file);



let savetofile = [];

// Filter the rules for the selectors you're interested in
const rules = obj.stylesheet.rules.filter(rule => {
    savetofile.push(rule.selectors)
    if (rule.selectors) {
        return rule.selectors.some(selector => {
            // selector is an entire line of the css file
            // Check if the selector has pseudo
        
            const hashashtagtag = selector.includes(':') && selectors.includes(selector) || selector.includes(':') && selectors.includes('.' + selector) || selector.includes(':') && selectors.includes('#' + selector);
            const hasPseudo = selector.includes(':') && selectors.includes(selector) || selector.includes(':') && selectors.includes('.' + selector) || selector.includes(':') && selectors.includes('#' + selector);
            const haschild = selector.includes('>') && selectors.includes(selector) || selector.includes('>') && selectors.includes('.' + selector) || selector.includes('>') && selectors.includes('#' + selector);


            // return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector)) || hasPseudo;

            return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector)) || hasPseudo || haschild || hashashtagtag;
            // return (selectors.includes(selector) || selectors.includes('.' + selector) || selectors.includes('#' + selector));
        });
    }
    return false;
});



fs.writeFileSync('./test.txt', savetofile.join('\n'));

// Get all rules that mention the selectors
const mentionedRules = obj.stylesheet.rules.filter(rule => {

       // If the rule is a media rule
    if (rule.type === 'media') {
        // Check if any of the contained rules apply to your selectors
        return rule.rules.some(cssRule =>
            selectors.some(sel => cssRule.selectors.includes(sel))
        );
    }

    // if (rule.rules) {
    //     // Check if any of the contained rules apply to your selectors
    //     return rule.rules.some(cssRule =>
    //         selectors.some(sel => cssRule.selectors && cssRule.selectors.includes(sel))
    //     );
    // }


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