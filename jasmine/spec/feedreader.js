/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* Placing all tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Created a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
         
        it('URL should be defined and not empty', function() {
            for (var j=0, length=allFeeds.length; j<length; j++) {
                expect(allFeeds[j].url).toBeDefined();
                expect(allFeeds[j].url.length).not.toBe(0);
            }
        });

        /* Created a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names in each feed should be defined and not empty', function() {
            for (var j=0, length=allFeeds.length; j<length; j++) {
                expect(allFeeds[j].name).toBeDefined();
                expect(allFeeds[j].name.length).not.toBe(0);
            }
        });
    });
        


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /*Analyzed html and css to see how the hide/show 
        feature of the menu is implemented
        */
        var body = $('body');
        var hamburger = $('.menu-icon-link');

        /* Wrote a test that ensures the menu element is
         * hidden by default.
         */
        it('should hide menu element by default', function() {
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });
         /* Wrote a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu should display and hide when clicked', function () {
            hamburger.click();
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            hamburger.click();
            expect(body.hasClass('menu-hidden')).toBeTruthy();
          });
    });
    

    /*test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
    })

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
