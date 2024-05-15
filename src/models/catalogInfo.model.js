const mongoose = require('mongoose');

const catalogInfoSchema = new mongoose.Schema(
    {
        sellerId: 'String',
        whatsappNumber: 'String',
        instaLink: 'String',
        catalogName: 'String',
        topoBannerUrl: 'String',
        openHour: 'Object',
        paymentOptions: 'Array',
        deliveryValues: 'Array',
    },
    {
        timestamps: true
    }
);

const CatalogInfo = mongoose.model('CatalogInfo', catalogInfoSchema);

module.exports = CatalogInfo;