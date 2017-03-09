angular.module('app')
    .controller('MainController', function($scope) {
        $scope.title = 'Parallax Template';
        $scope.desc = 'A modern responsive front-end framework based on Material Design';
        $scope.things = [{
                icon: 'flash_on',
                title: 'Speeds up development',
                desc: 'We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.'
            },
            {
                icon: 'group',
                title: 'User Experience Focused',
                desc: 'By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.'
            },
            {
                icon: 'settings',
                title: 'Easy to work with',
                desc: 'We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.'
            }
        ];
        (function($) {
            $(function() {

                $('.button-collapse').sideNav();
                $('.parallax').parallax();

            });
        })(jQuery);
});
