class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputAmount = $('#quantidade');
    this._inputDate = $('#data');
    this._inputValue = $('#valor');
  }
  add(event) {
    event.preventDefault();
    let negotiation = new Negotiation(
      this._inputDate.value,
      this._inputAmount.value,
      this._inputValue.value
    );

    //add negotiation in list
  }
}
