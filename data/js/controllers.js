var app = angular.module('eKassa',[]);

app.controller("main", ["$scope", function($main){
  
}])

app.controller("itemController", ["$scope", function ($items) {
  // $items.searchBar = function() {
  // }
  // $items.items = data;

  $items.items = angular.fromJson(data);
  $items.categories = angular.fromJson(categories);

  $items.resetDropDown = function(){
    $items.categoryItems = "";
  }

  $items.toggleAll = function() {
    var toggleStatus = !$items.isAllSelected;
    angular.forEach($items.items, function(itm){ itm.selected = toggleStatus; });
  
 }
 
 $items.optionToggled = function(){
   $items.isAllSelected = $items.items.every(function(itm){ return itm.selected; })
 }

 $items.orderByClick = function(items) {
  $items.myOrderBy = items;
}
 
}]);

app.filter('unique', function () {
  return function (items, filterOn) {
    if (filterOn === false) {
      return items;
    }
    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];
      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };
      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;
        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }
      });
      items = newItems;
    }
    return items;
  };
});


var categories = ['fruit', 'vegetable'];

var data = [
  {
    id: 1,
    name: 'apple',
    category: 'fruit',
    price: '20000',
    cost: '15000',
    margin: '',
    inStock: 35
  },
  {
    id: 2,
    name: 'lemon',
    category: 'fruit',
    price: '25000',
    cost: '20000',
    margin: '',
    inStock: 40
  },
  {
    id: 3,
    name: 'grenade',
    category: 'fruit',
    price: '28500',
    cost: '16000',
    margin: '',
    inStock: 5
  },
  {
    id: 4,
    name: 'carrot',
    category: 'vegetable',
    price: '10000',
    cost: '6000',
    margin: '',
    inStock: '-'
  }
]
