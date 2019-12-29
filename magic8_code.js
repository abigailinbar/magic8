function ShowNumi () {
    let num = Math.random() * 5 + 1
    let numi = Math.round(num)
    basic.showNumber(numi)
}
input.onButtonPressed(Button.A, ShowNumi)
