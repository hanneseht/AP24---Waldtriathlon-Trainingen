document.addEventListener("DOMContentLoaded", function () {
    const iconMappings = {
        "fahrrad-icon-vtst": "vp-text-vtst-fahrrad",
        "laufen-icon-vtst": "vp-text-vtst-laufen",
        "fahrrad-icon-ktfs": "vp-text-ktfs"
    };

    Object.keys(iconMappings).forEach(iconId => {
        const icon = document.getElementById(iconId);
        const textId = iconMappings[iconId];
        const textElement = document.getElementById(textId);

        icon.addEventListener("mouseenter", function () {
            textElement.classList.add("visible");
        });

        icon.addEventListener("mouseleave", function () {
            textElement.classList.remove("visible");
        });

        icon.addEventListener("click", function () {
            // Toggle the "clicked" class on the text element
            textElement.classList.toggle("clicked");
            // Ensure the text element is visible if it has the "clicked" class
            if (textElement.classList.contains("clicked")) {
                textElement.classList.add("visible");
            } else {
                textElement.classList.remove("visible");
            }
        });
    });

    
    // Open and close nav
    document.getElementById('navbar-toggle').addEventListener('click', function () {
        const navUl = document.querySelector('nav ul');
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
    });

    // Hamburger toggle
    document.getElementById('navbar-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
    });

    // If a link has a dropdown, add sub menu toggle
    // document.querySelectorAll('nav ul li a:not(:only-child)').forEach(function (anchor) {
    //     anchor.addEventListener('click', function (e) {
    //         const dropdown = this.nextElementSibling;
    //         if (dropdown && dropdown.classList.contains('navbar-dropdown')) {
    //             if (dropdown.style.display === 'block') {
    //                 dropdown.style.display = 'none';
    //             } else {
    //                 dropdown.style.display = 'block';
    //             }

    //             // Close other dropdowns
    //             document.querySelectorAll('.navbar-dropdown').forEach(function (dd) {
    //                 if (dd !== dropdown) {
    //                     dd.style.display = 'none';
    //                 }
    //             });

    //             e.stopPropagation();
    //         }
    //     });
    // });

    // Click outside the dropdown will remove the dropdown class
    document.addEventListener('click', function (e) {
        if (!e.target.closest('nav ul li')) {
            document.querySelectorAll('.navbar-dropdown').forEach(function (dropdown) {
                dropdown.style.display = 'none';
            });
        }
    });

    const buttonPathPairs = [
        { buttonId: 'fahrrad-icon-vtst', pathId: 'Rundstrecke_Rad_00000101785726139887476600000002229146419551543712_'},
        { buttonId: 'laufen-icon-vtst', pathId: 'Rundstrecke_Laufen_00000173842876962810542500000009065913313045574066_' },
        { buttonId: 'schwimmen-icon-vtst', pathId: 'schwimmen-strecke' },
        { buttonId: 'fahrrad-icon-ktfs', pathId: 'Rundstrecke_Rad' },
        { buttonId: 'laufen-icon-ktfs', pathId: 'Rundstrecke_Laufen' },
        { buttonId: 'schwimmen-icon-ktfs', pathId: 'schwimmen-strecke' },
        
    ];
     
    buttonPathPairs.forEach(pair => {
        const button = document.getElementById(pair.buttonId);
        const path = document.getElementById(pair.pathId);
     
        button.addEventListener('mouseover', () => path.classList.add('visible'));
        button.addEventListener('mouseout', () => {
            if (!path.classList.contains('clicked')) {
                path.classList.remove('visible');
            }
        });
        button.addEventListener('click', () => {
            if (path.classList.contains('clicked')) {
                path.classList.remove('clicked', 'visible');
            } else {
                path.classList.add('clicked', 'visible');
            }
        });
    });

});






