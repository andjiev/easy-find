enum Environment {
  Development = 'development',
  Production = 'production'
}

enum ProductTypes {
  Laptop = 1
}

enum CategoryTypes {
  Technology = 1,
  Sport = 2,
  Fashion = 3,
  Beauty = 4,
  Home = 5,
  Services = 6
}

enum OrderTypes {
  PriceAscending = 1,
  PriceDescending = 2,
  Latest = 3
}

enum ListTypes {
  Products = 1,
  Stores = 2
}

export { Environment, CategoryTypes, OrderTypes, ProductTypes, ListTypes };
