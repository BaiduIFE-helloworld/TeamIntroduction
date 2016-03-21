/*
******  fullpage ==>
*/
$(document).ready(function () {
    $('#hello-world').fullpage({
        //nav
        sectionsColor: ['#fff', '#4BBFC3', '#f6f6f6'],
        anchors: ['section-one', 'section-two','section-tree'],
        // scrolling
        //Design
        controlArrows: false,

        //自定义selector
        sectionSelector: '.hello-world-section',
        slideSelector: '.hello-world-member',
    });
});