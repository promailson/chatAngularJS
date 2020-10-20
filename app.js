// Define the `chatApp` module
var chatApp = angular.module('chatApp', ['luegg.directives']);

// Define the `PhoneListController` controller on the `chatApp` module
chatApp.controller('ChatListController', ['$scope', '$filter', function ($scope, $filter) {
    // $scope.scrollTo = 'bottom';
    $scope.glued = true;
    $scope.chats = [
        {
            name: 'Mailson Queiroz',
            visible: 0,
            status: 'online',
            photo: 'https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/121627892_4129001250447431_299207920428832938_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=wVmT56lfJZgAX8p8Dn_&_nc_ht=scontent.ffrc5-1.fna&oh=f08d8783e67b508a8018d391f19cadfd&oe=5FB5AAEB',
            messages: [{
                message: 'Teste',
                from: 0,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste2',
                from: 0,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste2',
                from: 1,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste3',
                from: 0,
                time: 'Hoje 04:55'
            },

            ]
        },
        {
            name: 'Bruno Santos',
            visible: 0,
            status: 'online',
            photo: 'https://scontent.ffrc5-1.fna.fbcdn.net/v/t1.0-9/118654857_3475594035833056_9188345165801536797_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=keKSHuypvZUAX-S3-Bb&_nc_ht=scontent.ffrc5-1.fna&oh=2b21975a6279b48809699fb4fc8cd110&oe=5FB4D740',
            messages: [{
                message: 'Teste',
                from: 0
            },
            {
                message: 'Teste2',
                from: 1
            },
            {
                message: 'Teste3',
                from: 0
            },

            ]
        }, {
            name: 'Marcelo Galvão',
            visible: 0,
            status: 'online',
            photo: 'https://generated.photos/vue-static/home/hero/2.png',
            messages: [{
                message: 'Teste',
                from: 0,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste2',
                from: 0,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste2',
                from: 1,
                time: 'Hoje 04:55'
            },
            {
                message: 'Teste3',
                from: 0,
                time: 'Hoje 04:55'
            },

            ]
        },
    ];
    $scope.chats = $filter('filter')($scope.chats, { visible: 0 })
    $scope.remove = function (item) {
        var index = $scope.chats.indexOf(item);
        $scope.chats.splice(index, 1);
    }
    $scope.focusfn = function () {
        $scope.focus = true;
        expand();

        //$scope.mensagem='Focused'
    }
    $scope.blurfn = function () {
        $scope.focus = false;
        //$scope.mensagem = ''      


    }
    $scope.autoExpand = function (e) {
        var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight - 10; // replace 10 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight + "px";
    };

    function expand() {
        $scope.autoExpand('TextArea');
    }

    // and fire it after definition

}]);


chatApp.directive('autoResize', autoResize);

autoResize.$inject = ['$timeout'];

function autoResize($timeout) {

    var directive = {
        restrict: 'A',
        link: function autoResizeLink(scope, element, attributes, controller) {

            element.css({ 'height': 'auto', 'overflow-y': 'hidden' });
            $timeout(function () {
                element.css('height', element[0].scrollHeight + 'px');
            }, 100);

            element.on('input', function () {
                element.css({ 'height': 'auto', 'overflow-y': 'hidden' });
                element.css('height', element[0].scrollHeight + 'px');
            });
        }
    };
    return directive;
};