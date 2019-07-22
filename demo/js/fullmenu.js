var menuItems = {
    topMenu: [
                            {
                                title: "Docus", //text displayed below the icon or in the sub menu, its what the user will read.
                                iconClass: "documentary-icon", //used to apply CSS background image and hook for callback
                                callback: function () {
                                    console.log("documentaries 2");
                                } //gets executed when the item is selected
                            },
                            {
                                title: "Comedy", //text displayed below the icon or in the sub menu, its what the user will read.
                                iconClass: "comedy-icon", //used to apply CSS background image and hook for callback
                                callback: function () {
                                    console.log("comedy 2");
                                } //gets executed when the item is selected
                            },
                            {
                                title: "Sports", //text displayed below the icon or in the sub menu, its what the user will read.
                                iconClass: "sports-icon", //used to apply CSS background image and hook for callback
                                callback: function () {
                                    console.log("sports 2");
                                } //gets executed when the item is selected
                            },
                            {
                                title: "Tragedy", //text displayed below the icon or in the sub menu, its what the user will read.
                                iconClass: "tragedy-icon", //used to apply CSS background image and hook for callback
                                callback: function () {

                                    console.log("tragedy 2");

                                } //gets executed when the item is selected
                            }
                     ],
    subMenu: [
                {
                    title: "Sub Item 1", //text displayed below the icon or in the sub menu, its what the user will read.
                    iconClass: "sub-menu-one", //used to apply CSS background image and hook for callback
                    callback: function () {
                        console.log("sub menu 1 2");
                    } //gets executed when the item is selected
                },
                {
                    title: "Sub Item 2", //text displayed below the icon or in the sub menu, its what the user will read.
                    iconClass: "sub-menu-two", //used to apply CSS background image and hook for callback
                    callback: function () {
                        console.log("sub menu 2 2");
                    } //gets executed when the item is selected
                },
                {
                    title: "Sub Item 3", //text displayed below the icon or in the sub menu, its what the user will read.
                    iconClass: "sub-menu-three", //used to apply CSS background image and hook for callback
                    callback: function () {
                        console.log("sub menu 3 2");
                    } //gets executed when the item is selected
                },
                {
                    title: "Sub Item 4", //text displayed below the icon or in the sub menu, its what the user will read.
                    iconClass: "sub-menu-four", //used to apply CSS background image and hook for callback
                    callback: function () {
                        console.log("sub menu 4 2");
                    } //gets executed when the item is selected
                }
                ]
}
            ;

var tb = toolbar(".toolbar",
                        {
                            menuItems: {
                                topMenu: [
                                        {
                                            title: "Sports", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "sports-icon", //used to apply CSS background image and hook for callback
                                            callback: function (e) {
                                                console.log("Sports");
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Comedy", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "comedy-icon", //used to apply CSS background image and hook for callback
                                            callback: function (e) {

                                                tb.setToolbarMenu(menuItems);
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Docus", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "documentary-icon", //used to apply CSS background image and hook for callback
                                            callback: function (e) {

                                                console.log("Documentaries");
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Tragedy", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "tragedy-icon", //used to apply CSS background image and hook for callback
                                            callback: function (e) {

                                                console.log("Tragedy");
                                            } //gets executed when the item is selected
                                        }
                                   ],
                                subMenu: [
                                        {
                                            title: "Sub Item 1", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "sub-menu-one", //used to apply CSS background image and hook for callback
                                            callback: function () {

                                                console.log("Sub Item 1");
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Sub Item 2", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "sub-menu-two", //used to apply CSS background image and hook for callback
                                            callback: function () {
                                                console.log("Sub Item 2");
                                                tb.expandToolbar(true);
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Sub Item 3", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "sub-menu-three", //used to apply CSS background image and hook for callback
                                            callback: function () {
                                                console.log("Sub Item 3");
                                            } //gets executed when the item is selected
                                        },
                                        {
                                            title: "Sub Item 4", //text displayed below the icon or in the sub menu, its what the user will read.
                                            iconClass: "sub-menu-four", //used to apply CSS background image and hook for callback
                                            callback: function () {

                                                window.location.href = "noitems.html";
                                            } //gets executed when the item is selected
                                        }
                        ]
                            }
                        });
