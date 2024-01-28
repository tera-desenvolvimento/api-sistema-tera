const router = require('express').Router();

const createCustomer = require('../controllers/customer/createCustomer.controller');
const listCustomers = require('../controllers/customer/listCustomers.controller');
const searchCustomer = require('../controllers/customer/searchCustomer.controller');
const updateCustomer = require('../controllers/customer/updateCustomer.controller');

router.post('/customer/create', (req, res) => {
    const { sellerId, name, address, docId, phone, route } = req.body;

    createCustomer(sellerId, name, address, docId, phone, route)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/customer/list', (req, res) => {
    const { sellerId } = req.body;

    listCustomers(sellerId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/customer/search', (req, res) => {
    const {queryString, sellerId} = req.body;

    searchCustomer(queryString, sellerId)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/customer/update', (req, res) => {
    const { customerId, key, newvalue } = req.body;

    updateCustomer(customerId, key, newvalue)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;