# PRODUCTS CATALOG

## Local developmet setup

### Requirements

- node.js
- [serverless](https://www.npmjs.com/package/serverless)
- [aws cli](https://aws.amazon.com/cli/) (optional, for keys for database)
- [dynamodb](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html) (optional, for local database)

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

**You will need a key, message us to recieve it**

### Get products

Method: GET

#### Request

path: /products

Header: 

    shared_secret_key: <KEY>


#### Response

Status code: 200

Payload:

```json
[
    {
        "id": "10ba038e-48da-487b-96e8-8d3b99b6d18a",
        "name": "Fancy beer",
        "description": "IPA, 4.2%",
        "image": "example.com/0.png",
        "price": 4.2
    },

    {
        "id": "7b057629-5dfe-4994-bcaf-63c501bd7720",
        "name": "Cool beer",
        "description": "Lager, 5%",
        "image": "example.com/1.png",
        "price": 13.37
    },
]
```

### Get single product

Method: GET

#### Request

path: /products

Header: 

    product_id: 10ba038e-48da-487b-96e8-8d3b99b6d18a
    shared_secret_key: <KEY>

#### Response

Status code: 200, 404

Payload:

```json
{
    "id": "10ba038e-48da-487b-96e8-8d3b99b6d18a",
    "name": "Fancy beer",
    "description": "IPA, 4.2%",
    "image": "example.com/0.png",
    "price": 4.2
}
```

### Create a single product

Method: POST

#### Request

path: /products

Header: 

    shared_secret_key: <KEY>

payload:

```json
{
    "name": "New beer",
    "description": "Ale, 3.1%",
    "image": "example.com/12.png",
    "price": 9.99
}
```

#### Response

Status code: 201, 400

payload:

```json
{
    "id": "9e38fd3d-d136-4784-9918-51d9823ba7df"
}
```

### Modify product

Method: PUT

#### Request

path: /products

Header: 

    product_id: 10ba038e-48da-487b-96e8-8d3b99b6d18a
    shared_secret_key: <KEY>

payload:

```json
{
    "name": "Modified beer",
    "description": "Ale, 3.1%",
    "image": "example.com/12_new_final_final_new.png",
    "price": 10.99
}
```

#### Response

Status code: 200, 502

payload:

```json
{
    "id": "10ba038e-48da-487b-96e8-8d3b99b6d18a",
    "name": "Modified beer",
    "description": "Ale, 3.1%",
    "image": "example.com/12_new_final_final_new.png",
    "price": 10.99
}
```

### Delete product

Method: DELETE

#### Request

path: /products

Header: 

    product_id: 10ba038e-48da-487b-96e8-8d3b99b6d18a
    shared_secret_key: <KEY>

#### Response

Status code: 200, 502

Payload: none
