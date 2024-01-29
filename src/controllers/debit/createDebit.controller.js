const debitModel = require('../../models/debit.model');

async function createDebit(sellerId, customerId, totalValue, payments, paymentsAmount, paymentsRemaing) {
    try {
        var debits = await debitModel.find();
        var debitId;

        if (debits.length === 0) {
            debitId = "debit_00000"
        } else {
            let lastId = debits[debits.length - 1].debitId;
            customerId = 'debit_' + Math.abs((parseInt(lastId.split("_")[1]) + 1)).toString().padStart(5, '0');
        }

        const debitCreated = await debitModel.create(
            {
                debitId,
                sellerId,
                customerId,
                totalValue,
                paymentsAmount,
                paymentsRemaing,
                payments,
                isQuited: false
            }
        );

        return debitCreated;
    } catch (error) {
        return error
    }
}

module.exports = createDebit;