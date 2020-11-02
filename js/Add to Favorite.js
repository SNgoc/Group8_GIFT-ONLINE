// ************************************************
// FAVORITE API List
// ************************************************

var Favorite = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    favor = [];

    // Constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save favor
    function saveFavor() {
        sessionStorage.setItem("Favorite", JSON.stringify(favor));
    }

    // Load favor
    function loadFavor() {
        favor = JSON.parse(sessionStorage.getItem("Favorite"));
    }
    if (sessionStorage.getItem("Favorite") != null) {
        loadFavor();
    }

    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to favor
    obj.addItemToFavor = function (name, price, count) {
        for (var item in favor) {
            if (favor[item].name === name) {
                saveFavor();
                return;
            }
        }
        var item = new Item(name, price, count);
        favor.push(item);
        saveFavor();
    };
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in favor) {
            if (favor[i].name === name) {
                favor[i].count = count;
                break;
            }
        }
    };
    // Remove item from favor
    obj.removeItemFromFavor = function (name) {
        for (var item in favor) {
            if (favor[item].name === name) {
                favor[item].count--;
                if (favor[item].count === 0) {
                    favor.splice(item, 1);
                }
                break;
            }
        }
        saveFavor();
    };

    // Remove all items from favor
    obj.removeItemFromCartAll = function (name) {
        for (var item in favor) {
            if (favor[item].name === name) {
                favor.splice(item, 1);
                break;
            }
        }
        saveFavor();
    };

    // Clear favor
    obj.clearFavor = function () {
        favor = [];
        saveFavor();
    };

    // Count favor
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in favor) {
            totalCount += favor[item].count;
        }
        return totalCount;
    };

    // Total favor
    obj.totalFavor = function () {
        var totalFavor = 0;
        for (var item in favor) {
            totalFavor += favor[item].count;
        }
        return Number(totalFavor.toFixed(2));
    };

    // List favor
    obj.listFavor = function () {
        var favorCopy = [];
        for (i in favor) {
            item = favor[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            favorCopy.push(itemCopy);
        }
        return favorCopy;
    };

    // favor : Array
    // Item : Object/Class
    // addItemToFavor : Function
    // removeItemFromFavor : Function
    // removeItemFromCartAll : Function
    // clearFavor : Function
    // countFavor : Function
    // totalFavor : Function
    // listFavor : Function
    // saveFavor : Function
    // loadFavor : Function
    return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item
$(".add-to-favor").click(function (event) {
    event.preventDefault();
    var name = $(this).data("name");
    var price = Number($(this).data("price"));
    Favorite.addItemToFavor(name, price, 1);
    displayFavor();
});

// Clear items
$(".clear-favor").click(function () {
    Favorite.clearFavor();
    displayFavor();
});

function displayFavor() {
    var FavorArray = Favorite.listFavor();
    var output = "";
    for (var i in FavorArray) {
        output +=
            "<tr>" +
            "<td>" +
            FavorArray[i].name +
            "</td>" +
            "<td>Price: (" +
            FavorArray[i].price +
            " $)</td>" +
            "<td><div class='input-group'>" +
            "" +
            "</div></td>" +
            "<td><button class='delete-item btn btn-danger' data-name=" +
            FavorArray[i].name +
            ">X</button></td>" +
            " = " +
            "<td>" +
            "</td>" +
            "</tr>";
    }
    $(".show-favor").html(output);
    $(".total-favor").html(Favorite.totalFavor());
    $(".total-count.Favor").html(Favorite.totalCount());
}

// Delete item button

$(".show-favor").on("click", ".delete-item", function (event) {
    var name = $(this).data("name");
    Favorite.removeItemFromCartAll(name);
    displayFavor();
});

displayFavor();
