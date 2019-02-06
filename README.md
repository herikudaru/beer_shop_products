# PRODUCTS CATALOG

## Local developmet setup

clone this repository

```sh
git clone git@github.com:herikudaru/beer_shop_products.git
cd beer_shop_products
```

install dependencies

```sh
npm install
```

## API Spec

### Get products

Method: GET

#### Request

path: /get

#### Response

Status code: 200, 404

Payload:

```json
[
    {
        "id": 42312,
        "name": "Fancy beer",
        "description": "IPA, 4.2%",
        "image": "example.com/0.png"
    },

    {
        "id": 165341124,
        "name": "Cool beer",
        "description": "Lager, 5%",
        "image": "example.com/1.png"
    },
]
```

### Get single product

Method: GET

#### Request

path: /get/{id}

#### Response

Status code: 200, 404

Payload:

```json
{
    "id": 165341124,
    "name": "Fancy beer",
    "description": "IPA, 4.2%",
    "image": "example.com/0.png"
}
```

### Create a sigle product

Method: POST

#### Request

path: /create

payload:

```json
{
    "name": "New beer",
    "description": "Ale, 3.1%",
    "image": "example.com/12.png"
}
```

#### Response

Status code: 201, 400

payload:

```json
{
    "id": 6557498272,
    "name": "New beer",
    "description": "Ale, 3.1%",
    "image": "example.com/12.png"
}
```
