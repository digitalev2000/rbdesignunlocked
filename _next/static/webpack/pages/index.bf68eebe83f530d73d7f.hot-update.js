self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Angstrom360',
  description: "Angstrom360 is a design and build company that specializes in architectural and construction services. The company offers services related to designing and building residential or commercial properties.",
  image: '/images/1.png',
  tags: ['Mongo', 'Express', 'React', 'Node', 'Javascript'],
  task: 'The client needed a website to promote their business and attract the right clients. I used Photoshop to design a layout and built them a site once the mock ups were approved using the tech stack below.',
  source: 'https://www.angstromdesignbuild.com/',
  visit: 'https://www.angstromdesignbuild.com/',
  id: 0
}, {
  title: 'Midwest Canvas',
  description: "Midwest Canvas is a Chicago based corporation posed as America's leading manufacturer of pool covers and supplies. From the beginning, our business philosophy has been simple; quality products of superior value, and timely delivery.",
  image: '/images/2.png',
  tags: ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySql', 'SEO'],
  task: 'After being contacted by a supervisor of the company on Craigslist I designed and developed the site for the client. This helped the client to increase sales by at least 20% using the SEO skills I applied for the site.',
  source: 'http://www.midwestcanvas.com/',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Marketron Digital',
  description: "A Chicago based marketing agency providing products and services, users can successfully propose, price and execute multimedia advertising campaigns including television, radio, O&O and digital media.",
  image: '/images/3.png',
  tags: ['Angular 2', 'Javascript', 'SASS', 'XML', 'Git Hub'],
  task: 'I was hired on with the company to fill in for another developer that left the company. Using the tech stack below I was able to increase the production of websites for their clients by 30% before the company stop web develoment services.',
  source: 'https://www.marketron.com/',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'Apartments.com',
  description: "Apartments.com is a site to search over 1 million housing listings including apartments, houses, condos, and townhomes available for rent. You’ll find your next home, in any style you prefer.",
  image: '/images/4.png',
  tags: ['HTML', 'CSS', 'Javascript', 'ASP', 'Photoshop'],
  task: 'In using the tech stack below I was able to work for the company as a Front-end Web Developer troubleshooting errors, updating the site, run A/B split tests and code out designs submitted by Graphic Designers.',
  source: 'https:www.apartments.com',
  visit: 'https://google.com',
  id: 3
}, {
  title: 'Purohit Navigation',
  description: "The website offers services related to marine navigation, including training courses and consulting services. The company offers Training Courses, Consulting Services and Vessel Traffic Services.",
  image: '/images/5.png',
  tags: ['HTML', 'CSS', 'Wordpress', 'PHP', 'Javascript'],
  task: 'I took on a 6 month assignment with Purohit that need various upadtes to their live website and changes in their site design. Using the tech stacks below I was able help the company achieve their desired results.',
  source: 'https://purohitnavigation.com',
  visit: 'https://google.com',
  id: 4
}, {
  title: 'MiMi Productions',
  description: "Mimi Productions is an award winning Chicago Video and Television Production Company. Their clients range from Healthcare, Automotive, Television Networks, Advertising Agencies and many others.",
  image: '/images/6.png',
  tags: ['HTML', 'CSS', 'Drupal', 'PHP'],
  task: 'MiMi Productions contected me after I was reffered to by a past co-worker of mine. They needed someone to build a site for them and be able to upload content and make changes to the site on their own. Using Drupal I setup a web site for them and they were able to showcase their work to future clients.',
  source: 'https://www.mimiproductions.com/',
  visit: 'https://google.com',
  id: 5
}];
var TimeLineData = [{
  year: 2003,
  text: 'Started my journey after finishing college'
}, {
  year: 2004,
  text: 'Worked as a freelance developer with staffing agencies'
}, {
  year: 2005,
  text: 'Designed and developed sites for companies I worked for'
}, {
  year: 2021,
  text: 'Took on various classes online to enhance my skills further'
}, {
  year: 2022,
  text: 'Decided to work as a freelance developer with staffing agencies again'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwidGFzayIsInNvdXJjZSIsInZpc2l0IiwiaWQiLCJUaW1lTGluZURhdGEiLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSw0TUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQixFQUE4QixNQUE5QixFQUFzQyxZQUF0QyxDQUpWO0FBS0lDLE1BQUksRUFBRSw0TUFMVjtBQU1FQyxRQUFNLEVBQUUsc0NBTlY7QUFPRUMsT0FBSyxFQUFFLHNDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBRHNCLEVBV3RCO0FBQ0VQLE9BQUssRUFBRSxnQkFEVDtBQUVFQyxhQUFXLEVBQUMsME9BRmQ7QUFHRUMsT0FBSyxFQUFFLGVBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsS0FBdkIsRUFBOEIsS0FBOUIsRUFBcUMsT0FBckMsRUFBOEMsS0FBOUMsQ0FKUjtBQUtFQyxNQUFJLEVBQUUsNE5BTFI7QUFNRUMsUUFBTSxFQUFFLCtCQU5WO0FBT0VDLE9BQUssRUFBRSxvQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQVhzQixFQXFCdEI7QUFDRVAsT0FBSyxFQUFFLG1CQURUO0FBRUVDLGFBQVcsRUFBRSwwTUFGZjtBQUdJQyxPQUFLLEVBQUUsZUFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxXQUFELEVBQWMsWUFBZCxFQUE0QixNQUE1QixFQUFvQyxLQUFwQyxFQUEyQyxTQUEzQyxDQUpWO0FBS0lDLE1BQUksRUFBRSxnUEFMVjtBQU1FQyxRQUFNLEVBQUUsNEJBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBckJzQixFQStCdEI7QUFDRVAsT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFBRSxpTUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QixLQUE5QixFQUFxQyxXQUFyQyxDQUpSO0FBS0VDLE1BQUksRUFBRSxtTkFMUjtBQU1FQyxRQUFNLEVBQUUsMEJBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBL0JzQixFQXlDdEI7QUFDRVAsT0FBSyxFQUFFLG9CQURUO0FBRUVDLGFBQVcsRUFBRSxxTUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixXQUFoQixFQUE2QixLQUE3QixFQUFvQyxZQUFwQyxDQUpSO0FBS0VDLE1BQUksRUFBRSxzTkFMUjtBQU1FQyxRQUFNLEVBQUUsK0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBekNzQixFQW1EdEI7QUFDRVAsT0FBSyxFQUFFLGtCQURUO0FBRUVDLGFBQVcsRUFBRSxtTUFGZjtBQUdFQyxPQUFLLEVBQUUsZUFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixRQUFoQixFQUEwQixLQUExQixDQUpSO0FBS0VDLE1BQUksRUFBRSxnVEFMUjtBQU1FQyxRQUFNLEVBQUUsa0NBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBbkRzQixDQUFqQjtBQStEQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZjY4ZWViZTgzZjUzMGQ3M2Q3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdBbmdzdHJvbTM2MCcsXG4gICAgZGVzY3JpcHRpb246IFwiQW5nc3Ryb20zNjAgaXMgYSBkZXNpZ24gYW5kIGJ1aWxkIGNvbXBhbnkgdGhhdCBzcGVjaWFsaXplcyBpbiBhcmNoaXRlY3R1cmFsIGFuZCBjb25zdHJ1Y3Rpb24gc2VydmljZXMuIFRoZSBjb21wYW55IG9mZmVycyBzZXJ2aWNlcyByZWxhdGVkIHRvIGRlc2lnbmluZyBhbmQgYnVpbGRpbmcgcmVzaWRlbnRpYWwgb3IgY29tbWVyY2lhbCBwcm9wZXJ0aWVzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzEucG5nJyxcbiAgICAgIHRhZ3M6IFsnTW9uZ28nLCAnRXhwcmVzcycsICdSZWFjdCcsICdOb2RlJywgJ0phdmFzY3JpcHQnXSxcbiAgICAgIHRhc2s6ICdUaGUgY2xpZW50IG5lZWRlZCBhIHdlYnNpdGUgdG8gcHJvbW90ZSB0aGVpciBidXNpbmVzcyBhbmQgYXR0cmFjdCB0aGUgcmlnaHQgY2xpZW50cy4gSSB1c2VkIFBob3Rvc2hvcCB0byBkZXNpZ24gYSBsYXlvdXQgYW5kIGJ1aWx0IHRoZW0gYSBzaXRlIG9uY2UgdGhlIG1vY2sgdXBzIHdlcmUgYXBwcm92ZWQgdXNpbmcgdGhlIHRlY2ggc3RhY2sgYmVsb3cuJyxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5hbmdzdHJvbWRlc2lnbmJ1aWxkLmNvbS8nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly93d3cuYW5nc3Ryb21kZXNpZ25idWlsZC5jb20vJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTWlkd2VzdCBDYW52YXMnLFxuICAgIGRlc2NyaXB0aW9uOlwiTWlkd2VzdCBDYW52YXMgaXMgYSBDaGljYWdvIGJhc2VkIGNvcnBvcmF0aW9uIHBvc2VkIGFzIEFtZXJpY2EncyBsZWFkaW5nIG1hbnVmYWN0dXJlciBvZiBwb29sIGNvdmVycyBhbmQgc3VwcGxpZXMuIEZyb20gdGhlIGJlZ2lubmluZywgb3VyIGJ1c2luZXNzIHBoaWxvc29waHkgaGFzIGJlZW4gc2ltcGxlOyBxdWFsaXR5IHByb2R1Y3RzIG9mIHN1cGVyaW9yIHZhbHVlLCBhbmQgdGltZWx5IGRlbGl2ZXJ5LlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy8yLnBuZycsXG4gICAgdGFnczogWydIVE1MJywgJ0phdmFTY3JpcHQnLCAnQ1NTJywgJ1BIUCcsICdNeVNxbCcsICdTRU8nXSxcbiAgICB0YXNrOiAnQWZ0ZXIgYmVpbmcgY29udGFjdGVkIGJ5IGEgc3VwZXJ2aXNvciBvZiB0aGUgY29tcGFueSBvbiBDcmFpZ3NsaXN0IEkgZGVzaWduZWQgYW5kIGRldmVsb3BlZCB0aGUgc2l0ZSBmb3IgdGhlIGNsaWVudC4gVGhpcyBoZWxwZWQgdGhlIGNsaWVudCB0byBpbmNyZWFzZSBzYWxlcyBieSBhdCBsZWFzdCAyMCUgdXNpbmcgdGhlIFNFTyBza2lsbHMgSSBhcHBsaWVkIGZvciB0aGUgc2l0ZS4nLFxuICAgIHNvdXJjZTogJ2h0dHA6Ly93d3cubWlkd2VzdGNhbnZhcy5jb20vJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01hcmtldHJvbiBEaWdpdGFsJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIENoaWNhZ28gYmFzZWQgbWFya2V0aW5nIGFnZW5jeSBwcm92aWRpbmcgcHJvZHVjdHMgYW5kIHNlcnZpY2VzLCB1c2VycyBjYW4gc3VjY2Vzc2Z1bGx5IHByb3Bvc2UsIHByaWNlIGFuZCBleGVjdXRlIG11bHRpbWVkaWEgYWR2ZXJ0aXNpbmcgY2FtcGFpZ25zIGluY2x1ZGluZyB0ZWxldmlzaW9uLCByYWRpbywgTyZPIGFuZCBkaWdpdGFsIG1lZGlhLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzLzMucG5nJyxcbiAgICAgIHRhZ3M6IFsnQW5ndWxhciAyJywgJ0phdmFzY3JpcHQnLCAnU0FTUycsICdYTUwnLCAnR2l0IEh1YiddLFxuICAgICAgdGFzazogJ0kgd2FzIGhpcmVkIG9uIHdpdGggdGhlIGNvbXBhbnkgdG8gZmlsbCBpbiBmb3IgYW5vdGhlciBkZXZlbG9wZXIgdGhhdCBsZWZ0IHRoZSBjb21wYW55LiBVc2luZyB0aGUgdGVjaCBzdGFjayBiZWxvdyBJIHdhcyBhYmxlIHRvIGluY3JlYXNlIHRoZSBwcm9kdWN0aW9uIG9mIHdlYnNpdGVzIGZvciB0aGVpciBjbGllbnRzIGJ5IDMwJSBiZWZvcmUgdGhlIGNvbXBhbnkgc3RvcCB3ZWIgZGV2ZWxvbWVudCBzZXJ2aWNlcy4nLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3Lm1hcmtldHJvbi5jb20vJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FwYXJ0bWVudHMuY29tJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBcGFydG1lbnRzLmNvbSBpcyBhIHNpdGUgdG8gc2VhcmNoIG92ZXIgMSBtaWxsaW9uIGhvdXNpbmcgbGlzdGluZ3MgaW5jbHVkaW5nIGFwYXJ0bWVudHMsIGhvdXNlcywgY29uZG9zLCBhbmQgdG93bmhvbWVzIGF2YWlsYWJsZSBmb3IgcmVudC4gWW914oCZbGwgZmluZCB5b3VyIG5leHQgaG9tZSwgaW4gYW55IHN0eWxlIHlvdSBwcmVmZXIuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzQucG5nJyxcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ0phdmFzY3JpcHQnLCAnQVNQJywgJ1Bob3Rvc2hvcCddLFxuICAgIHRhc2s6ICdJbiB1c2luZyB0aGUgdGVjaCBzdGFjayBiZWxvdyBJIHdhcyBhYmxlIHRvIHdvcmsgZm9yIHRoZSBjb21wYW55IGFzIGEgRnJvbnQtZW5kIFdlYiBEZXZlbG9wZXIgdHJvdWJsZXNob290aW5nIGVycm9ycywgdXBkYXRpbmcgdGhlIHNpdGUsIHJ1biBBL0Igc3BsaXQgdGVzdHMgYW5kIGNvZGUgb3V0IGRlc2lnbnMgc3VibWl0dGVkIGJ5IEdyYXBoaWMgRGVzaWduZXJzLicsXG4gICAgc291cmNlOiAnaHR0cHM6d3d3LmFwYXJ0bWVudHMuY29tJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1B1cm9oaXQgTmF2aWdhdGlvbicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHdlYnNpdGUgb2ZmZXJzIHNlcnZpY2VzIHJlbGF0ZWQgdG8gbWFyaW5lIG5hdmlnYXRpb24sIGluY2x1ZGluZyB0cmFpbmluZyBjb3Vyc2VzIGFuZCBjb25zdWx0aW5nIHNlcnZpY2VzLiBUaGUgY29tcGFueSBvZmZlcnMgVHJhaW5pbmcgQ291cnNlcywgQ29uc3VsdGluZyBTZXJ2aWNlcyBhbmQgVmVzc2VsIFRyYWZmaWMgU2VydmljZXMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzLzUucG5nJyxcbiAgICB0YWdzOiBbJ0hUTUwnLCAnQ1NTJywgJ1dvcmRwcmVzcycsICdQSFAnLCAnSmF2YXNjcmlwdCddLFxuICAgIHRhc2s6ICdJIHRvb2sgb24gYSA2IG1vbnRoIGFzc2lnbm1lbnQgd2l0aCBQdXJvaGl0IHRoYXQgbmVlZCB2YXJpb3VzIHVwYWR0ZXMgdG8gdGhlaXIgbGl2ZSB3ZWJzaXRlIGFuZCBjaGFuZ2VzIGluIHRoZWlyIHNpdGUgZGVzaWduLiBVc2luZyB0aGUgdGVjaCBzdGFja3MgYmVsb3cgSSB3YXMgYWJsZSBoZWxwIHRoZSBjb21wYW55IGFjaGlldmUgdGhlaXIgZGVzaXJlZCByZXN1bHRzLicsXG4gICAgc291cmNlOiAnaHR0cHM6Ly9wdXJvaGl0bmF2aWdhdGlvbi5jb20nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTWlNaSBQcm9kdWN0aW9ucycsXG4gICAgZGVzY3JpcHRpb246IFwiTWltaSBQcm9kdWN0aW9ucyBpcyBhbiBhd2FyZCB3aW5uaW5nIENoaWNhZ28gVmlkZW8gYW5kIFRlbGV2aXNpb24gUHJvZHVjdGlvbiBDb21wYW55LiBUaGVpciBjbGllbnRzIHJhbmdlIGZyb20gSGVhbHRoY2FyZSwgQXV0b21vdGl2ZSwgVGVsZXZpc2lvbiBOZXR3b3JrcywgQWR2ZXJ0aXNpbmcgQWdlbmNpZXMgYW5kIG1hbnkgb3RoZXJzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy82LnBuZycsXG4gICAgdGFnczogWydIVE1MJywgJ0NTUycsICdEcnVwYWwnLCAnUEhQJ10sXG4gICAgdGFzazogJ01pTWkgUHJvZHVjdGlvbnMgY29udGVjdGVkIG1lIGFmdGVyIEkgd2FzIHJlZmZlcmVkIHRvIGJ5IGEgcGFzdCBjby13b3JrZXIgb2YgbWluZS4gVGhleSBuZWVkZWQgc29tZW9uZSB0byBidWlsZCBhIHNpdGUgZm9yIHRoZW0gYW5kIGJlIGFibGUgdG8gdXBsb2FkIGNvbnRlbnQgYW5kIG1ha2UgY2hhbmdlcyB0byB0aGUgc2l0ZSBvbiB0aGVpciBvd24uIFVzaW5nIERydXBhbCBJIHNldHVwIGEgd2ViIHNpdGUgZm9yIHRoZW0gYW5kIHRoZXkgd2VyZSBhYmxlIHRvIHNob3djYXNlIHRoZWlyIHdvcmsgdG8gZnV0dXJlIGNsaWVudHMuJyxcbiAgICBzb3VyY2U6ICdodHRwczovL3d3dy5taW1pcHJvZHVjdGlvbnMuY29tLycsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiA1LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDAzLCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5IGFmdGVyIGZpbmlzaGluZyBjb2xsZWdlJywgfSxcbiAgeyB5ZWFyOiAyMDA0LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlciB3aXRoIHN0YWZmaW5nIGFnZW5jaWVzJywgfSxcbiAgeyB5ZWFyOiAyMDA1LCB0ZXh0OiAnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBzaXRlcyBmb3IgY29tcGFuaWVzIEkgd29ya2VkIGZvcicsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1Rvb2sgb24gdmFyaW91cyBjbGFzc2VzIG9ubGluZSB0byBlbmhhbmNlIG15IHNraWxscyBmdXJ0aGVyJywgfSxcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiAnRGVjaWRlZCB0byB3b3JrIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlciB3aXRoIHN0YWZmaW5nIGFnZW5jaWVzIGFnYWluJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==