class TermsPolitics {
    constructor() {
        this.popup = document.getElementById('popup')
        this.okButton = document.getElementById('okButton')
        this.okButton.addEventListener('click', this.reject.bind(this))
    }
    show() {
        this.popup.style.display = 'block'
    }

    hide() {
        this.popup.style.display = 'none'
    }
    reject() {
        this.hide()
        localStorage.setItem('accessedAllReady', true)
    }

}
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('accessedAllReady')) {
        new TermsPolitics().hide()
    }
})
export default TermsPolitics