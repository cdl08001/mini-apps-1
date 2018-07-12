'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkout = function (_React$Component) {
  _inherits(Checkout, _React$Component);

  function Checkout(props) {
    _classCallCheck(this, Checkout);

    var _this = _possibleConstructorReturn(this, (Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call(this, props));

    _this.state = {
      currentForm: 'home',
      value: '',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      expiration: '',
      cvv: '',
      billingZip: ''
    };
    _this.registerClick = _this.registerClick.bind(_this);
    _this.toggleView = _this.toggleView.bind(_this);
    return _this;
  }

  _createClass(Checkout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.toggleView();
    }
  }, {
    key: 'toggleView',
    value: function toggleView() {
      console.log('I AM TOGGLING!');
      if (this.state.currentForm = 'home') {
        $('.home').show();
        $('#form1').hide();
        $('#form2').hide();
        $('#form3').hide();
        $('#form4').hide();
      } else if (this.state.currentForm = 'form1') {
        $('#form1').hide();
        $('#form2').show();
      } else if (this.state.currentForm = 'form2') {
        $('#form2').hide();
        $('#form3').show();
      } else if (this.state.currentForm = 'form3') {
        $('#form3').hide();
        $('#form4').show();
      } else {
        $('#form4').hide();
        $('.home').show();
      }
    }
  }, {
    key: 'registerClick',
    value: function registerClick(e) {
      console.log(_typeof(e.target.id));
      if (e.target.id === 'start') {
        this.setState({ currentForm: 'form1' }, function () {
          this.toggleView();
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'home' },
          'Welcome to Checkout!'
        ),
        React.createElement(Form1, { registerClick: this.registerClick }),
        React.createElement(Form2, { registerClick: this.registerClick }),
        React.createElement(Form3, { registerClick: this.registerClick }),
        React.createElement(Form4, { registerClick: this.registerClick }),
        React.createElement(
          'button',
          { id: 'start', onClick: this.registerClick },
          'Start Checkout'
        )
      );
    }
  }]);

  return Checkout;
}(React.Component);

var Form1 = function Form1(props) {
  return React.createElement(
    'div',
    { id: 'form1' },
    React.createElement(
      'h1',
      null,
      'Enter Your User Info!'
    ),
    React.createElement(
      'form',
      null,
      React.createElement('input', { type: 'text', placeholder: 'User Name' }),
      React.createElement('input', { type: 'text', placeholder: 'Email Address' }),
      React.createElement('input', { type: 'password', placeholder: 'Password' }),
      React.createElement('input', { type: 'submit', id: 'userInfo', onSubmit: props.registerClick, value: 'Submit' })
    )
  );
};

var Form2 = function Form2(props) {

  return React.createElement(
    'div',
    { id: 'form2' },
    React.createElement(
      'h1',
      null,
      'Enter Your Address Information!'
    )
  );
};

var Form3 = function Form3(props) {

  return React.createElement(
    'div',
    { id: 'form3' },
    React.createElement(
      'h1',
      null,
      'Enter Your Payment Method!'
    )
  );
};

var Form4 = function Form4(props) {

  return React.createElement(
    'div',
    { id: 'form4' },
    React.createElement(
      'h1',
      null,
      'Please Confirm The Below!'
    )
  );
};

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(Checkout, null), domContainer);
