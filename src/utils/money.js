export function formatMoney (amountCents){

    if (amountCents >= 0) {
        return `$ ${(amountCents / 100).toFixed(2)}`
    } else if (amountCents < 0) {
        return `-$ ${Math.abs(amountCents / 100).toFixed(2)}`
    } else {
        return `Something went wrong`
    }
}
