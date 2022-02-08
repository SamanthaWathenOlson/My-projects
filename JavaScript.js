Function makeSalad(topping1, topping2, topping3) {
    salad = 'lettuce' + ','
    salad += topping1 + ','
    salad += topping2 + ','
    salad += topping3 + ','
    salad += 'lettuce' 
    return salad
}

result = makeSalad('tomato', 'radish', 'cheese')


if (mode === 'public') {
showDetails();
} else {
hideDetails();
}
