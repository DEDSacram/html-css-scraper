
const css = require('css');
const fs = require('fs');

let selectors = [
    "html",
    "head",
    "script",
    "base",
    "meta",
    "title",
    "link",
    "style",
    "body",
    ".stranka",
    "div",
    ".seo-nadpis",
    "h1",
    "#hlavicka",
    ".lang",
    "p",
    "a",
    ".uvnitr",
    ".logo",
    "span",
    ".menu-container",
    ".menu",
    ".menu-mobile",
    "i",
    "ul",
    ".menu-dropdown-icon",
    "li",
    ".noodkaz",
    ".popis",
    ".mobil",
    ".socialni",
    ".facebook",
    ".instagram",
    ".youtube",
    ".menumezera",
    ".mezera",
    ".texty",
    ".cerny",
    "h2",
    ".clan",
    ".vyska400",
    ".obrpravy50",
    ".bun50",
    ".bunka",
    ".grey",
    ".submenu",
    ".pro2",
    ".aktivni",
    ".pro3",
    "br",
    ".tab",
    "strong",
    ".tabulka",
    ".cenik",
    "h3",
    "sup",
    "h4",
    ".zn",
    ".clear",
    ".center",
    ".blue",
    ".obrlevy50",
    "iframe",
    ".mensi",
    ".clan2",
    ".swiper-container",
    ".swiper-container-initialized",
    ".swiper-container-horizontal",
    ".swiper-wrapper",
    ".swiper-slide",
    ".swiper-slide-duplicate",
    ".hodnoceni",
    ".hvezda",
    ".swiper-slide-prev",
    ".swiper-slide-active",
    ".swiper-slide-next",
    ".swiper-slide-duplicate-prev",
    ".swiper-notification",
    ".sipky",
    ".swiper-button-next",
    ".swiper-button-prev",
    ".pruh",
    ".lightblue",
    ".padding5",
    ".spoluprace",
    "#paticka",
    ".text1",
    ".kontakty",
    ".email",
    ".telefon",
    ".formular",
    "#message",
    "#frmContact",
    "form",
    "#mail-status",
    ".form50",
    ".required",
    "#name",
    "input",
    ".phone",
    "#phone",
    "#email",
    "#comment-content",
    "textarea",
    ".g-recaptcha",
    ".g-recaptcha-response",
    "#g-recaptcha-response",
    "#send-message",
    "button",
    "#loader-icon",
    "img",
    ".patlogo",
    ".copy",
    ".elfsight-app-009444e9-886a-49be-ac6a-40e98ea69357",
    ".RootLayout__RootComponent-sc-1doisyz-0",
    ".cvBsnK",
    ".eapps-whatsapp-chat-009444e9-886a-49be-ac6a-40e98ea69357-custom-css-hook",
    "#eapps-whatsapp-chat-009444e9-886a-49be-ac6a-40e98ea69357",
    ".Window__Component-sc-1wwhwms-0",
    ".cKfWgp",
    ".Window__WindowComponent-sc-1wwhwms-2",
    ".krFdrd",
    ".Window__WindowContent-sc-1wwhwms-1",
    ".dkLpGG",
    ".Close__Component-sc-9nuxpx-0",
    ".bHDPhi",
    ".Header__Component-sc-5nh99s-0",
    ".ieCCgf",
    ".Avatar__Container-sc-9uf7h8-0",
    ".fSqrex",
    ".Avatar__Component-sc-7coa9h-0",
    ".hBiCiV",
    ".Avatar__Background-sc-9uf7h8-1",
    ".gJOYgw",
    ".Avatar__StyledAvatar-sc-9uf7h8-2",
    ".UobXQ",
    ".Header__Info-sc-5nh99s-1",
    ".kRqifD",
    ".Header__Name-sc-5nh99s-2",
    ".hgwDJP",
    ".Header__AnswerTime-sc-5nh99s-3",
    ".coXmzM",
    ".ChatLayout__Component-sc-k3uffe-0",
    ".dvYRBo",
    ".ChatLayout__MessageContainer-sc-k3uffe-4",
    ".chJVkN",
    ".WhatsappDots__Component-sc-inte9t-0",
    ".dcUHJP",
    ".WhatsappDots__ComponentInner-sc-inte9t-1",
    ".ZSLkz",
    ".WhatsappDots__Dot-sc-inte9t-2",
    ".WhatsappDots__DotOne-sc-inte9t-3",
    ".iAzjNW",
    ".eoQXKa",
    ".WhatsappDots__DotTwo-sc-inte9t-4",
    ".jVsCox",
    ".WhatsappDots__DotThree-sc-inte9t-5",
    ".gRVhYZ",
    ".ChatLayout__Message-sc-k3uffe-6",
    ".drCIHo",
    ".ChatLayout__Author-sc-k3uffe-8",
    ".TZMBk",
    ".ChatLayout__Text-sc-k3uffe-7",
    ".fPKXxD",
    ".ChatLayout__TimeBottom-sc-k3uffe-9",
    ".TGVsQ",
    ".ButtonBase__ButtonContainer-sc-p43e7i-3",
    ".euBiGU",
    ".DefaultButton__DefaultButtonComponent-sc-1v663dx-0",
    ".hyKfPo",
    ".ButtonBase__Overlay-sc-p43e7i-4",
    ".jUXzLe",
    ".Icon__IconContainer-sc-11wrh3u-0",
    ".hPVtvf",
    ".ButtonBase__ButtonIcon-sc-p43e7i-0",
    ".ButtonBase__LeftIcon-sc-p43e7i-1",
    ".gMSomS",
    ".ilvJjM",
    ".gLdxoB",
    "svg",
    "path",
    ".ButtonBase__Ellipsis-sc-p43e7i-5",
    ".dqiKFy",
    ".g-recaptcha-bubble-arrow",
    ".FloatingButton__FloatingButtonContainer-sc-q5md4t-0",
    ".lbvXTF",
    ".Bubble__BubbleComponent-sc-13azvyr-0",
    ".dPgPhr",
    ".asGVT",
    ".injected-svg",
    "g",
    "defs",
    "#a-1",
    "clippath",
    ".BubbleContent__NotificationBadge-sc-9iwasx-0",
    ".hKWkLV",
    ".BubbleContent__BubbleContentText-sc-9iwasx-1",
    ".jeSdwj",
    "#portal-009444e9-886a-49be-ac6a-40e98ea69357"
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