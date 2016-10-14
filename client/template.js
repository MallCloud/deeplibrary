import { Template } from 'meteor/templating';
/*
 * main.html: index page template
 */

function resizeHeightFix() {
    windowHeight=jQuery(window).height();
    sidebarHeight=jQuery(".sidebar").height();
    mainHeight=jQuery(".main-header").outerHeight()+jQuery(".main-footer").outerHeight()
    if(windowHeight>=sidebarHeight) {
        jQuery(".content-wrapper, .right-side").css("min-height",windowHeight-mainHeight)
    } else {
        jQuery(".content-wrapper, .right-side").css("min-height",sidebarHeight)
    }
}
Template.main.rendered = function () {
    setTimeout(function() {
        resizeHeightFix()
    }, 50);
    $(window).resize(function () {
        resizeHeightFix();
    });
};

Template.main.helpers({
    minHeight: function () {
        return Template.instance().minHeight.get() + 'px'
    }
});

/*
 * login.html: login page template
 */



 /*
  *
  */
Template.input.rendered = function () {
    setTimeout(function() {
        resizeHeightFix()
    }, 50);
    $(window).resize(function () {
        resizeHeightFix();
    });
};

Template.input.helpers({
    minHeight: function () {
        return Template.instance().minHeight.get() + 'px'
    }
});

/*
 *
 */
Template.graph.rendered = function () {
    setTimeout(function() {
        resizeHeightFix()
    }, 50);
    $(window).resize(function () {
        resizeHeightFix();
    });
};

Template.graph.helpers({
    minHeight: function () {
        return Template.instance().minHeight.get() + 'px'
    }
});
