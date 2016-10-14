/*
 * main.html: index page template
 */
Template.main.onCreated = function () {
    var self = this;

    self.minHeight = new ReactiveVar($(window).height() - $('.main-header').height());

    $(window).resize(function () {
        self.minHeight.set($(window).height() - $('.main-header').height());
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
