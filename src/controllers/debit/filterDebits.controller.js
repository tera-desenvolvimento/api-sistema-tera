const debitModel = require('../../models/debit.model');

async function filterDebits(sellerId, initialDate, finalDate) {
    try {
        const debits = await debitModel.find({sellerId: sellerId});
        var filteredPayments = [];
        var totalValue = 0;

        var iniDate = new Date(initialDate);
        var finDate = new Date(finalDate);

        debits.forEach(debit => {
            debit.payments.forEach(payment => {
                var paymentDate = new Date(payment[0].date);

                if (paymentDate >= iniDate && paymentDate <= finDate) {
                    totalValue = parseFloat(totalValue) + parseFloat(payment[0].value);

                    var paymentInfo = {
                        clientName: debit.customerData.name,
                        paymentDate: payment[0].date,
                        paymentValue: payment[0].value
                    }

                    filteredPayments.push(paymentInfo);
                }
            })
        })

        return {
            payments: filteredPayments,
            totalValue: totalValue
        }

    } catch (error) {
        return error;
    }
}

module.exports = filterDebits;