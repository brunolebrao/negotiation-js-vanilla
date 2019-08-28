class NegotiationController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputAmount = $('#quantidade');
    this._inputDate = $('#data');
    this._inputValue = $('#valor');
    this._listNegotiations = new ListNegotiations();
  }
  add(event) {
    event.preventDefault();

    this._listNegotiations.add(this._createNegotiation());
    this._cleanForm();
  }

  _createNegotiation() {
    return new Negotiation(
      DateHelper.textForDate(this._inputDate.value),
      this._inputAmount.value,
      this._inputValue.value
    );
  }

  _cleanForm() {
    this._inputDate.value = '';
    this._inputAmount.value = 1;
    this._inputValue.value = 0.0;

    this._inputDate.focus();
  }
}
