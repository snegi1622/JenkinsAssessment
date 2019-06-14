var chai = require("chai");
var mocks = require("../../mocks/objects");

describe('Checkout product using credit card for Guest User', () => {
    it('Opens the site for the first time and validates welcome mat', () => {
        // browser.maximizeWindow();
        browser.url('https://storefront:movado123@dev13-na-movadogroup.demandware.net/s/MovadoUS/en_US/shop-watches/mens-designs/');
        
        browser.pause(7000);
        
        // var welcomeMat=$('div.modal-lg>div');
        // var continueToMovadoBtn=$('button.continue-here');

        if(browser.isExisting(mocks.welcomeMat)){
            console.log("Continue to Movado Btn Exists: ?",browser.isExisting(mocks.continueToMovadoBtn));
            browser.click(mocks.continueToMovadoBtn);
            browser.pause(3000);
        }
        else{
            console.log("WelcomeMat is not visible");
        }
    });

    // it('Validates homepage and click on Men\'s Watch', () => {
    //     var promotionalBanner = $('div.content');
    //     var shopWatchesOption = $('a#shop-watches');
    //     var mensWatch = $('a*=Men\'s Designs');

    //     if(promotionalBanner.isExisting() && shopWatchesOption.isExisting()){
    //         shopWatchesOption.moveTo();
    //         //browser.pause(2000);
    //         mensWatch.click();
    //     }
    // });

    it('Validates PLP and proceed to PDP', () => {
            // var pageHeading = $('h1.page-title');
            // var watchName = $('//a [text()=\'Movado Heritage Series\']');
            // var sort = $('select#sort-order');
            // var filter = $('div.refinements');

            if(browser.isExisting(mocks.pageHeading)){
                console.log("Page Heading Exists: ?", browser.isExisting(mocks.pageHeading));
                console.log("Watch Name Exists: ?", browser.isExisting(mocks.watchName));
                console.log("Sort Exists: ?", browser.isExisting(mocks.sort));
                console.log("Filter Exists: ?", browser.isExisting(mocks.filter));

                // watchName.scroll(0,200);
                // browser.pause(3000);
                browser.click(mocks.watchName);
                browser.pause(7000);
            }
    });

    it('Add product to cart', () => {
        // var addToCartBtn= $('//button[@class=\'add-to-cart btn btn-primary\']');
        // var checkoutNowBtn=$('//a[text()=\'Checkout Now\']');

        if(browser.isExisting(mocks.addToCartButton)){
            console.log("Add to Cart Button Exists: ?", browser.isExisting(mocks.addToCartButton));

            // watchName.scroll(0,200);
            // browser.pause(3000);
            browser.click(mocks.addToCartButton);
            browser.pause(2000);
            browser.click(mocks.conitnueCheckout);
        }
    });

    it("Proceed to checkout", () => {

        console.log("Checkout button exists?: ", browser.isExisting(mocks.checkoutBtn));
        browser.pause(3000);
        browser.click(mocks.checkoutBtn);
        browser.pause(3000);
        browser.click(mocks.guestCheckoutOption);

    });

    it("Landed on Shipping Page", () => {

        console.log("User landed on Shipping page");
        browser.pause(6000);
        browser.setValue(mocks.firstName,"Test");
        browser.pause(3000);
        browser.setValue(mocks.lastName,"Automation");
        browser.pause(3000);
        browser.setValue(mocks.addressLine1,"301 W 2nd Street");
        browser.pause(3000);
        browser.selectByValue(mocks.stateDropdown,"AZ");
        browser.pause(5000);
        browser.setValue(mocks.city,"Austin");
        browser.pause(3000);
        browser.setValue(mocks.zipcode,"78701");
        browser.setValue(mocks.phoneNumber,"99446468");
        console.log("Entered Address");
        console.log("Payment Button exists?: ", browser.isExisting(mocks.nextPaymentButton));
        browser.click(mocks.nextPaymentButton);
        browser.pause(3000);

    });
})