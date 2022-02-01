export interface Data {
  id?:       number;
  clientId?: number;
  client?:   Client;
  detail?:   Detail[];
  iva?:      number;
  subTotal?: number;
  total?:    number;
}

export interface Client {
  id?:   number;
  name?: string;
}

export interface Detail {
  id?:        number;
  productId?: number;
  product?:   Product;
  invoiceId?: number;
  invoice?:   null;
  quantity?:  number;
  price?:     number;
  iva?:       number;
  subTotal?:  number;
  total?:     number;
}

export interface Product {
  id?:    number;
  name?:  string;
  price?: number;
}
