
const express = require('express');
const {faker} = require('@faker-js/faker');

const app = express();
const port = 3000;

// Generate random user data
const generateUserData = () => {
  const isHaveVariant = faker.helpers.arrayElement([true, false]);

  const price = parseInt(faker.commerce.price({ min: 10000, max: 100000 }));
  const order_type1 = faker.helpers.arrayElement([true, false]);
  const order_type2 = faker.helpers.arrayElement([true, false]);
  const order_type3 = faker.helpers.arrayElement([true, false]);
  const order_type4 = faker.helpers.arrayElement([true, false]);
  const order_type5 = faker.helpers.arrayElement([true, false]);

  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: price,
    is_have_variant: isHaveVariant,
    variants: generateVariant(faker.helpers.arrayElement([10, 5, 2, 1, 6, 7])),
    order_type1,
    order_type2,
    order_type3,
    order_type4,
    order_type5,
    order_type1_price: order_type1 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type2_price: order_type2 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type3_price: order_type3 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type4_price: order_type4 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type5_price: order_type5 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price
  };
};

const generateVariantData = () => {
  const price = parseInt(faker.commerce.price({ min: 10000, max: 100000 }));
  const order_type1 = faker.helpers.arrayElement([true, false]);
  const order_type2 = faker.helpers.arrayElement([true, false]);
  const order_type3 = faker.helpers.arrayElement([true, false]);
  const order_type4 = faker.helpers.arrayElement([true, false]);
  const order_type5 = faker.helpers.arrayElement([true, false]);

  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    price: price,
    order_type1,
    order_type2,
    order_type3,
    order_type4,
    order_type5,
    order_type1_price: order_type1 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type2_price: order_type2 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type3_price: order_type3 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type4_price: order_type4 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price,
    order_type5_price: order_type5 ? parseInt(faker.commerce.price({ min: 10000, max: 100000 })) : price
  };
};

// Generate multiple users
const generateUsers = (count = 1000) => {
  return Array.from({ length: count }, generateUserData);
};

const generateVariant = (count = 10) => {
  return Array.from({ length: count }, generateVariantData);
};

// Routes
app.get('/api/users', (req, res) => {
  const count = req.query.count || 1000; // default to 10 users if count not specified
  const users = generateUsers(Number(count));
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const user = generateUserData();
  user.id = req.params.id; // set the id to the requested id
  res.json(user);
});

app.listen(port, () => {
  console.log(`Mock API server is running at http://localhost:${port}`);
});
