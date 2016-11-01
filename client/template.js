/*
 * main.html: index page template
 */
/*Template.main.onCreated = function () {
    var self = this;

    self.minHeight = new ReactiveVar($(window).height() - $('.main-header').height());

    $(window).resize(function () {
        self.minHeight.set($(window).height() - $('.main-header').height());
    });
};

Template.main.onRendered = function () {
    windowHeight=jQuery(window).height();
    sidebarHeight=jQuery(".sidebar").height();
    mainHeight=jQuery(".main-header").outerHeight()+jQuery(".main-footer").outerHeight()
    if(windowHeight>=sidebarHeight) {
        jQuery(".content-wrapper, .right-side").css("min-height",windowHeight-mainHeight)
    } else {
        jQuery(".content-wrapper, .right-side").css("min-height",sidebarHeight)
    }
};
*/
Template.main.helpers({
    minHeight: function () {
        return Template.instance().minHeight.get() + 'px'
    }
});


/*
 * login.html: login page template
 */
