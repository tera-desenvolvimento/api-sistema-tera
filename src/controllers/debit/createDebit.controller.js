const debitModel = require('../../models/debit.model');
const customerModel = require('../../models/customer.model');

async function createDebit(sellerId, customerId, value, paymentsAmount, paymentsRemaing, paymentModel, firstPaymentDate) {
    try {
        var debits = await debitModel.find();
        var debitId;

        if (debits.length === 0) {
            debitId = "debit_00000"
        } else {
            let lastId = debits[debits.length - 1].debitId;
            debitId = 'debit_' + Math.abs((parseInt(lastId.split("_")[1]) + 1)).toString().padStart(5, '0');
        }

        const customerData = await customerModel.findOne({ _id: customerId });

        var totalValue = value + ((value / 100) * 20);

        const debitCreated = await debitModel.create(
            {
                debitId,
                sellerId,
                customerData,
                totalValue,
                valueRemaing: totalValue,
                paymentsAmount,
                paymentsRemaing,
                paymentModel,
                firstPaymentDate,
                payments: [],
                isQuited: false
            }
        );

        return debitCreated;
    } catch (error) {
        return error
    }
}

module.exports = createDebit;