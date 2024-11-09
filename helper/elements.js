var logoBtn = '[data-qa-test-id="qa-test-logo-btn"]';
var acceptCookieBtn = '[data-qa-test-id="accept-cookie-btn"]';
var searchInput = '[data-qa-test-id="qa-test-search-input"]';
var searchShowAllBtn = '.search-all-button';  // TODO: create our on selector
var firstSearchProduct = '.top-seller-list > li:first-of-type > .top-seller-card';

var locationSwitcher = {
    menuBtn: '.header-action.location-switcher > .header-locale-switcher', // TODO: create our on selector
    currentCountry: '.current-country', // TODO: create our on selector
    languageBtn: '.header-actions-right .header-switcher-container.language',// TODO: create our on selector
    switcherBtn: '.header-actions-right .header-switcher-container.location',// TODO: create our on selector
}

var account = {
    menuBtn: '[data-qa-test-id="qa-test-account-menu-btn"]',
    logoutBtn: '[data-qa-test-id="qa-test-offcanvas-account-logout-btn"]',
}

var productDetail = {
    addToCartBtn: '[id="product-detail-add-to-cart-button"]' // TODO: create our on selector
};

var offcanvas = {
    loginBtn: '[data-qa-test-id="qa-test-offcanvas-login-btn"]',
    emailInput: '[data-qa-test-id="qa-test-offcanvas-email-input"]',
    passwordInput: '[data-qa-test-id="qa-test-offcanvas-password-input"]',
    menuBtn: '[data-qa-test-id="qa-test-offcanvas-menu-btn"]',
    displayShoppingCartBtn: '[data-qa-test-id="qa-test-offcanvas-display-shopping-cart-btn"]',
}

var register = {
    selectAccountType: '[id="accountType"]', //'[data-qa-test-id="qa-test-register-select-account-type"]',
    selectSalution: '[id="personalSalutation"]', // [data-qa-test-id="qa-test-register-select-salutation"]',
    firstNameInput: '[id="personalFirstName"]', //[data-qa-test-id="qa-test-register-firstname-input"]',
    lastNameInput: '[id="personalLastName"]', //[data-qa-test-id="qa-test-register-lastname-input"]',
    phoneInput: '[id="billingAddressAddressPhoneNumber"]',//'[data-qa-test-id="qa-test-register-phone-input"]',
    emailInput: '[id="personalMail"]', //'[data-qa-test-id="qa-test-register-email-input"]',
    confirmEmailInput: '[id="personalMailConfirmation"]', //'[data-qa-test-id="qa-test-register-confirm-email-input"]',
    passwordInput: '[id="personalPassword"]', //'[data-qa-test-id="qa-test-register-password-input"]',
    confirmPasswordInput: '[id="personalPasswordConfirmation"]', //'[data-qa-test-id="qa-test-register-confirm-password"]',
    addressInput: '[id="billingAddressAddressStreet"]', //'[data-qa-test-id="qa-test-register-address-input"]',
    zipCodeInput: '[id="billingAddressAddressZipcode"]', //'[data-qa-test-id="qa-test-register-zip-code-input"]',
    cityInput: '[id="billingAddressAddressCity"]', //'[data-qa-test-id="qa-test-register-city-input"]',
    submitBtn: '[data-qa-test-id="qa-test-register-submit-btn"]'
};

var cart = {
    checkoutBtn: '.begin-checkout-btn', // TODO: create our on selector
    addPromotionBtn: '[data-qa-test-id="qa-test-add-promotion-btn"]',
    addPromotionInput: '[data-qa-test-id="qa-test-add-promotion-input"]',
    addPromotionSubmitBtn: '[data-qa-test-id="qa-test-add-promotion-submit-btn"]',
    giftCardLineItemLabel: '.cart-item-promotion .line-item-label', // TODO: create our on selector

}

var checkout = {
    tosCheckbox: '#tos', // // TODO: create our on selector , [data-qa-test-id="qa-test-tos-checkbox"]
    confirmOrderBtn: '[data-qa-test-id="qa-test-confirm-order-btn"]',
    walleeCancelBtn: '#backToMerchant-btn',
    walleeConfirmBtn: '#confirmFormSubmit',
    completePaymentBtn: '#confirmOrderForm > button', // // TODO: create our on selector
    finishOrderNumber: '.finish-ordernumber',
    cartItemTotalPrice: '.cart-item-total-price-value',
    cartTotalPrice: '.checkout-aside-summary-value.checkout-aside-summary-total',
}


var mobile = {
    locationMenuSwitcherBtn: '[data-qa-test-id="qa-test-location-menu-switcher-btn"]',
    searchBtn: '[data-qa-test-id="qa-test-mobile-search-btn"]',
    searchInput: '[data-qa-test-id="qa-test-search-input"]',
};

module.exports = {
    firstSearchProduct,
    logoBtn,
    searchShowAllBtn,
    acceptCookieBtn,
    account,
    register,
    searchInput,
    productDetail,
    mobile,
    offcanvas,
    cart,
    checkout,
    locationSwitcher
};