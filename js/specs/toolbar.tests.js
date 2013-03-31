
var target, gtb,
    foo = function () { },
    menuItems = {
        topMenu: [
        {
            title: "First", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-first-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        },
        {
            title: "Second", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-second-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        },
        {
            title: "Third", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-third-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        }],
        subMenu: [
        {
            title: "First Sub Item", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-first-sub-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        },
        {
            title: "Second Sub Item", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-second-sub-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        },
        {
            title: "Third Sub Item", //text displayed below the icon or in the sub menu, its what the user will read.
            iconClass: "your-third-sub-identifier", //used to apply CSS background image and hook for callback
            callback: function () { } //gets executed when the item is selected
        }
        ]
    };

module("Toolbar Unit Tests", {
    setup: function () {

        target = document.querySelector(".toolbar");
        gtb = toolbar(target);
    },
    teardown: function () {

    }
});


test("Verify We Have a toolbar object with expected members", function () {

    //basic sainty assertions to know members are present
    ok(toolbar, "toolbar object should exist");
    ok(toolbar.fn.setToolbarMenu, "setToolbarMenu function should exist");
    ok(toolbar.fn.parseMenuItem, "parseMenuItem function should exist");
    ok(toolbar.fn.buildTransitionValue, "buildTransitionValue function should exist");
    ok(toolbar.fn.checkTransform3dSupport, "checkTransform3dSupport function should exist");
    ok(toolbar.fn.buildVendorNames, "buildVendorNames function should exist");
    ok(toolbar.fn.setupToolbarElements, "setupToolbarElements function should exist");
    ok(toolbar.fn.applyTransitionEnd, "applyTransitionEnd function should exist");
    ok(toolbar.fn.transitionEnd, "transitionEnd function should exist");
    ok(toolbar.fn.setupExpand, "setupExpand function should exist");
    ok(toolbar.fn.expandToolbar, "expandToolbar function should exist");
    ok(toolbar.fn.setupOritentationChange, "setupOritentationChange function should exist");
    ok(toolbar.fn.settings, "settings function should exist");

});


test("Verify constructor executes expected members", function () {

    var tb = toolbar(target),
        buildVendorNames = sinon.stub(tb, "buildVendorNames"),
        setupToolbarElements = sinon.stub(tb, "setupToolbarElements"),
        applyTransitionEnd = sinon.stub(tb, "applyTransitionEnd"),
        setupOritentationChange = sinon.stub(tb, "setupOritentationChange"),
        setupExpand = sinon.stub(tb, "setupExpand");

    tb.init(target);

    ok(buildVendorNames.calledOnce, "buildVendorNames should be called");
    ok(setupToolbarElements.calledOnce, "setupToolbarElements should be called passing the target element");
    ok(applyTransitionEnd.calledOnce, "applyTransitionEnd should be called");
    ok(setupOritentationChange.calledOnce, "setupOritentationChange should be called");
    ok(setupExpand.calledOnce, "setupExpand should be called");

});


test("Verify setupToolbarElements sets references to the specific node elements", function () {

    var tb = toolbar(target);

    tb.setupToolbarElements(target, {
        topMenuSelector: ".toolbar-top-menu",
        subMenuSelector: ".toolbar-sub-menu",
        expandTargetSelector: ".expand-toolbar"
    });

    equal(tb.toolbar, target, "should be our main target element");
    equal(tb.topMenu, document.querySelector(".toolbar-top-menu"), "should be the top menu element element");
    equal(tb.subMenu, document.querySelector(".toolbar-sub-menu"), "should be thye sub menu element");
    equal(tb.expandTarget, document.querySelector(".expand-toolbar"), "should be the elipese element");

});


test("parseMenuItem should create a string with the expected values", function () {

    var expected = "the title is 'my test' and the iconClass is very 'classy'.",
        template = "the title is '{{title}}' and the iconClass is very '{{iconClass}}'.",
        obj = {
            title: "my test",
            iconClass: "classy"
        },
        result = gtb.parseMenuItem(obj, template);

    equal(result, expected, "the method should merge values as expected");

});


test("setToolbarMenu should call parseMenuItem 6 times and add menu items to toolbar", function () {

    var i = 0,
        parseMenuItem = sinon.stub(gtb, "parseMenuItem"),
        setupExpand = sinon.stub(gtb, "setupExpand"),
        bindCallBacks = sinon.stub(gtb, "bindCallBacks");

    gtb.setToolbarMenu(menuItems);

    equal(parseMenuItem.callCount, 6, "parseMenuItem should be called 6 times");
    ok(setupExpand.calledOnce, "should call setupExpand");
    ok(bindCallBacks.calledOnce, "should call setupExpand");

});


test("setToolbarMenu should call parseMenuItem 6 times and add menu items to toolbar", function () {

    var i = 0;

    gtb.setToolbarMenu(menuItems);

    for (i = 0; i < menuItems.topMenu.length; i++) {
        equal(document.querySelectorAll("." + menuItems.topMenu[i].iconClass).length, 1, "should be a single instance of the menu item");
    }

    for (i = 0; i < menuItems.subMenu.length; i++) {
        equal(document.querySelectorAll("." + menuItems.subMenu[i].iconClass).length, 1, "should be a single instance of the menu item");
    }

    equal(document.querySelectorAll(".expand-toolbar").length, 1, "should be a single instance of the expand elipses");

});


test("setupTouch should setup properties properly", function () {

    gtb.setupTouch();

    equal(gtb.touchType, window.navigator.msPointerEnabled ? "pointer" :
                                "ontouchstart" in window ? "touch" : "mouse");

    equal(gtb.hasMouse, ("ontouchstart" in window && "onmousedown" in window));

    equal(gtb.touchStart, gtb.touchType === "pointer" ? "MSPointerDown" :
                            gtb.touchType === "touch" ? "touchstart" : "mousedown");

});


test("setupExpand should call setupTouch", function () {

    var setupTouch = sinon.stub(gtb, "setupTouch");

    gtb.setupExpand();

    equal(setupTouch.callCount, 1, "setupTouch should be called once");

});


test("expandToolbar should apply heights to toolbar when in portrait mode", function () {

    //need to pass a fake event object in
    var e = { preventDefault: function () { } };

    //force the toolbar to portrait mode
    gtb.toolbar.orientation = "portrait";

    //initial test are in expanded mode
    gtb.toolbar.expanded = true;
    
    gtb.expandToolbar(e);

    //since initially expanded should set to collapsed state
    equal(gtb.toolbar.style.height, gtb.settings.minHeight + "px", "should have a minHeight");

    //initial test are in expanded mode
    gtb.toolbar.expanded = false;
    
    gtb.expandToolbar(e);

    //Here is needs to be expanded and since the actual height may vary lets just check to make sure it is more than the default height.
    ok(parseFloat(gtb.toolbar.style.height, 10) > gtb.settings.minHeight, 
                        "should have a minHeight");

    //force the toolbar to landscape mode
    gtb.toolbar.orientation = "landscape";
    gtb.toolbar.expanded = true;

    gtb.expandToolbar(e);

    //Here is needs to be expanded and since the actual height may vary lets just check to make sure it is more than the default height.
    equal(parseInt(gtb.toolbar.style.width, 10) , gtb.settings.minWidth , 
                                                        "should be minWidth ");

    gtb.toolbar.expanded = false;

    gtb.expandToolbar(e);

    //Here is needs to be expanded and since the actual height may vary lets just check to make sure it is more than the default height.
    equal(parseInt(gtb.toolbar.style.width, 10) , gtb.settings.expandWidth , 
                                                        "should be expandWidth ");

});

/*

test("", function () { });

*/