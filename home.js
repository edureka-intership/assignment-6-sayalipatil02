var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
]

// find unique restaurant
// total number of occurance of particular restaurant
// find avg
// return object

let distinct = [];
for(i=0;i<ratingData.length;i++){
    if(distinct.indexOf(ratingData[i].restaurant) == -1){
        distinct.push(ratingData[i].restaurant)
    }
}

//console.log(distinct)

let unique = [ 'KFC', 'Burger King', 'Domino', 'Subway', 'Pizza Hut' ]
let avgRating = [];
let outRating = 0;
let count = 0

for(i=0;i<unique.length;i++){
    for(j=0;j<ratingData.length;j++){
        if(unique[i] == ratingData[j].restaurant){
            outRating += ratingData[j].rating;
            count = count+1
        }
    }

    //console.log("outRating>>>>>",outRating)
    //console.log("count>>>>>",count)
    let output = Number(outRating)/Number(count);
    let myObj = {};
    myObj.restaurant = unique[i];
    myObj.averageRating = output
    avgRating.push(myObj);
    outRating = 0;
    count = 0
}

//console.log(avgRating)

/*
[
  { restaurant: 'KFC', averageRating: 4 },
  { restaurant: 'Burger King', averageRating: 4 },
  { restaurant: 'Domino', averageRating: 1.5 },
  { restaurant: 'Subway', averageRating: 3.5 },
  { restaurant: 'Pizza Hut', averageRating: 5 }
]
*/

let out = [
    { restaurant: 'KFC', averageRating: 4 },
    { restaurant: 'Burger King', averageRating: 4 },
    { restaurant: 'Domino', averageRating: 1.5 },
    { restaurant: 'Subway', averageRating: 3.5 },
    { restaurant: 'Pizza Hut', averageRating: 5 }
]

out.filter((data) => {return data.averageRating>4}) 









class restaurantManager{
    //part1 -a
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    //part1(b)
    printAllRestaurantsName=()=>{
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    //part1(c)
    filterRestaurantsByCity=(cityName) => {
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}

// let restObj = new restaurantManager()

// restObj.restaurantList
// (4) [{…}, {…}, {…}, {…}]
// restObj.printAllRestaurantsName()
// (4) ['KFC', 'Domino', 'Burger King', 'Subway']
// restObj.filterRestaurantsByCity('Delhi')
// (2) [{…}, {…}]

//////part2-a/////
var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

let out = 0;
for(key in orderData){
    out += Number(orderData[key])
}

console.log(out)
// 20/199*100
// 10.050251256281408
// 29/199*100
// 14.572864321608039
// 30/199*100
// 15.07537688442211
// 44/199*100
// 22.110552763819097
// 76/199*100
// 38.19095477386934

// calculate total Number
// find %
// create final object
// push in the array


function getPercentage(orderData){
    let total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    let output = [];
    let count = 0;
    for(key in orderData){
        let percentValue = ((orderData[key]/total)*100).toFixed(2);
        count = count+1
        let myObj = {};
        myObj.id = count;
        myObj.order = key;
        myObj.order_percentage = `${percentValue}%`;
        myObj.restaurant = "Punjabi Tadka"
        //console.log(myObj);
        output.push(myObj)
    }
    return output
}

console.log(getPercentage(orderData))
/*
[
  {
    id: 1,
    order: 'Below 500',
    order_percentage: '10.05%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 2,
    order: '500-1000',
    order_percentage: '14.57%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 3,
    order: '1000-1500',
    order_percentage: '15.08%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 4,
    order: '1500-2000',
    order_percentage: '22.11%',
    restaurant: 'Punjabi Tadka'
  },
  {
    id: 5,
    order: 'Above 2000',
    order_percentage: '38.19%',
    restaurant: 'Punjabi Tadka'
  }
]
*/ 
