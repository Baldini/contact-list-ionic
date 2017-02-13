angular.module('ionicApp', ['ionic', 'angular.filter'])

  .controller('MyCtrl', function($scope) {

    $scope.data = {
      showDelete: false
    };

    $scope.onItemDelete = function(item) {
      $scope.contacts.splice($scope.contacts.indexOf(item), 1);
    };

    $scope.addItem = function(item) {
      $scope.contacts.push({
        id: item.id,
        img: item.img,
        name: item.name,
        tel: item.tel,
        email: item.email,
        firstLetter: item.substring(0, 1)
      });
        $scope.modal.hide();
      //save to local
    }
    $scope.contacts = [{
        "id": 1,
        "img": "http://i.imgur.com/yeNwgZ2.jpg",
        "name": "Tio Saulo",
        "tel": "(11)99332-3123",
        "email": "saulo@gama.com",
        "firstLetter": "S"
      },
      {
        "id": 2,
        "img": "http://i.imgur.com/yeNwgZ2.jpg",
        "name": "Junqueira",
        "tel": "(11)99332-2424",
        "email": "junks@gama.com",
        "firstLetter": "J"
      }
    ];
    //load from local

  });
