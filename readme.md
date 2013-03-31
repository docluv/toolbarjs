# [toolbar.js](http://toolbarjs.com/)

toolbar.js is a JavaScript library that mimics the functionality of the Windows Phone AppBar. iOS and Android native apps also use the concept of a toolbar for application navigation. 

* Source: [https://github.com/docluv/toolbarjs](https://github.com/docluv/toolbarjs)
* Homepage: [http://toolbarjs.com](http://toolbarjs.com)
* Twitter: [@ChrisLove](http://twitter.com/ChrisLove)

## Quick start

Clone the git repo - `git clone git://github.com/docluv/toolbarjs.git` -
or [download it](https:////github.com/docluv/toolbarjs/toolbar.min.js)


## Features

* Displays navigation icons along the bottom of the browser.
* Supports a hidden sub-navigation.
* An expand elipse that expands the height of the toolbar to reveal the icon navigation titles
* it also expands to reveal any sub-navigation items.
* The toolbar sticks to the screen bottom and adjusts between portrait and landscape orientation
* Expansion happens over a defined time period and uses CSS3 transitions

 ## Documentation

 toolbarjs uses markup, css and JavaScript to create the toolbar experience. Included are some 
 reference pages so you can see how to use toolbarjs to add a toolbar to your mobile client
 experiences.

 The following is a guideline set of markup. It utilizes the footer element, since the toolbar
 should be placed at the foot of the view. Since the toolbar is really a menu the footer contains
 two nav elements, one for the top-level menu and one for the sub level menu.

         <footer class="toolbar">
            <nav class="toolbar-top-menu"></nav>
            <nav class="toolbar-sub-menu"></nav>
        </footer>

The nav elements do not contain any child elements, these will be added by toolbarjs. Take note
the footer element has a toolbar class and the two nav elements have classes as well. They are
used as hooks for styling and JavaScript references. You do not have to use these classes, they
can be set to anything you like. When you change the class names you will need to adjust the 
toolbarjs settiings. This will be demonstrated further down this document.

To apply toolbarjs to your target toolbar you would do so by passing the toolbar's node and 
an object containing settings. The bare minimum settings you should include is a pair of 
object arrays defining your menu.

 var tb = toolbar(document.querySelector(".toolbar"),
                        {
                            menuItems: {
                                topMenu: [...],
                                subMenu: [...]
                            }
                        });

Each of the menu item arrays should contain (the subMenu is optional) items for 
each naviation item. A menu item consist of a title, iconClass and callback. The
title is the caption displayed below the icon or the text rendered in the submenu.
The iconClass is the CSS class that defines the background image displayed in the top
menu. toolbarjs assumes the top level menu items use a background image. This is done 
to encourage you to use either image sprites or data uris.

The callback is an optional method that executes when the user touchs the menu item. I say
it is optional, but if this is not provided nothing will actually happen. The point of
a menu is to allow the user to drive the application, typically displaying a new view. The
examples do simple console.logs or reset the toolbar. But there is not real limit to what
you can do with the callback method.

    {
        title: "Sports", //text displayed below the icon or in the sub menu, its what the user will read.
        iconClass: "sports-icon", //used to apply CSS background image and hook for callback
        callback: function (e) {
            console.log("Sports");
        } //gets executed when the item is selected
    }

The same object structure works for both top and sub menues. If you omit the iconClass 
on submenu items it should not matter.

Many settings for toolbarjs are configurable, such as the classes referenced above. Below is 
the complete set of options. Of course if you change any of these settings please be sure
to test them before deploying them to your production server.

        settings: {

            minHeight: 35,
            minWidth: 42,
            expandWidth: 200,

            mainSelector: ".toolbar",
            topMenuSelector: ".toolbar-top-menu",
            subMenuSelector: ".toolbar-sub-menu",
            expandTargetSelector: ".expand-toolbar",
            topMenuItemSelector: ".toolbar-item",

            menuItems: {
                topMenu: [],
                subMenu: []
            },
            toolbarItemTemplate: "<div class='toolbar-item'><div class='toolbar-item-icon {{iconClass}}'></div><figcaption>{{title}}</figcaption></div>",
            subMenuItemTemplate: "<div class='toolbar-sub-menu-nav-item {{iconClass}}'>{{title}}</div>",

            topLevelItems: [],
            secondLevelItems: [],
            expandSpeed: 1000, //ms
            that: undefined,

            easing: "ease-in-out"
        }

An example of adjusting a setting can be seen in this slight modification from the above 
code. Here the expandSpeed is changed from 1 full second to 700 miliseconds.

 var tb = toolbar(document.querySelector(".toolbar"),
                        {
                            menuItems: {
                                topMenu: [...],
                                subMenu: [...]
                            },
                            expandSpeed: 700
                        });

For production you should use the minified version of toolbarjs, toolbar.min.js. If you 
need to generate the minized version you can execute the included grunt file. For more information
about using grunt refer to http://gruntjs.com.

toolbarjs does have a couple of dependencies, the Mobile Boilerplate helper and some 
extension methods I wrote to help toolbarjs and other JavaScript libraries I have also 
written lately. These are also included as well as the minimized version, helper.min.js.

I chose to extend the mobile boilerplate's helper object because it includes some very helpful
methods for moderrn web applications. It is very easy to extend as well. I am also a proponent
of mobile first and the mobile boilerplate is probably the best starting point for modern
web applications to use.

If you choose to move those methods to your own utility library you should find the references
in the toolbar.js file and update them accordingly. You should be able to locate them by searching
for 'MBP.'.

CSS

Before I forget there is a CSS file also included in this project. You can use it as a reference
to adjust for your needs. If you change the class hooks in the base markup and toolbarjs settings
you should also take care to adjust the CSS file.

The CSS is setup to render a Metro UI style toolbar. If you want to adjust those settings feel
free there is no 100% right way to define an application's style. I do prefer Metro and the toolbar
was inspired by the Windows Phone appBar, so you can see why the reference styles are what they are.

It is also designed with a phone in mind. I have intentions on adding behavior to mimic a Windows 8
style application toolbar, which is hidden by default and displayed from a touch gesture or right-mouse
click usually. So the style and behaviors do vary some.


Enjoy and please do not hesitate to provide feedback and bug reports. I know it currently does not 
work on the stock Android browser (Chrome for Android seems fine). I am still testing across various
platforms and will make updates as I have time.

Thanks,

Chris Love
