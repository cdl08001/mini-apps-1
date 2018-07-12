'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Checkout, [{
    key: 'toggleView',
    value: function toggleView() {
      if (this.state.currentForm === 'form4') {
        return React.createElement(
          'div',
          null,
          React.createElement(Form4, { registerClick: this.registerClick,
            handleChange: this.handleChange,
            state: this.state })
        );
      } else if (this.state.currentForm === 'form3') {
        return React.createElement(
          'div',
          null,
          React.createElement(Form3, { registerClick: this.registerClick,
            handleChange: this.handleChange,
            state: this.state })
        );
      } else if (this.state.currentForm === 'form2') {
        return React.createElement(
          'div',
          null,
          React.createElement(Form2, { registerClick: this.registerClick,
            handleChange: this.handleChange,
            state: this.state })
        );
      } else if (this.state.currentForm === 'form1') {
        return React.createElement(
          'div',
          null,
          React.createElement(Form1, { registerClick: this.registerClick,
            handleChange: this.handleChange,
            state: this.state })
        );
      } else if (this.state.currentForm === 'home') {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: 'home' },
            'Welcome to Checkout!'
          ),
          React.createElement(
            'button',
            { id: 'start', onClick: this.registerClick },
            'Start Checkout'
          )
        );
      }
    }
  }, {
    key: 'registerClick',
    value: function registerClick(e) {
      if (e.target.id === 'start') {
        this.setState({ currentForm: 'form1' });
      } else if (e.target.id === 'form1') {
        this.setState({ currentForm: 'form2' });
      } else if (e.target.id === 'form2') {
        this.setState({ currentForm: 'form3' });
      } else if (e.target.id === 'form3') {
        this.setState({ currentForm: 'form4' });
      } else if (e.target.id === 'goHome') {
        this.setState({ currentForm: 'home' });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var stateElement = e.target.id;
      this.setState(_defineProperty({}, stateElement, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.currentForm);
      return this.toggleView();
    }
  }]);

  return Checkout;
}(React.Component);

var Form1 = function Form1(props) {
  console.log(props);
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
      React.createElement('input', { type: 'text', id: 'name', onChange: props.handleChange, value: props.state.name, placeholder: 'User Name' }),
      React.createElement('input', { type: 'text', id: 'email', onChange: props.handleChange, value: props.state.email, placeholder: 'Email Address' }),
      React.createElement('input', { type: 'password', id: 'password', onChange: props.handleChange, value: props.state.password, placeholder: 'Password' }),
      React.createElement('input', { type: 'button', id: 'form1', onClick: props.registerClick, value: 'Next' })
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
    ),
    React.createElement(
      'form',
      null,
      React.createElement('input', { type: 'text', id: 'address1', onChange: props.handleChange, value: props.state.address1, placeholder: 'address1' }),
      React.createElement('input', { type: 'text', id: 'address2', onChange: props.handleChange, value: props.state.address2, placeholder: 'address2' }),
      React.createElement('input', { type: 'text', id: 'city', onChange: props.handleChange, value: props.state.city, placeholder: 'city' }),
      React.createElement('input', { type: 'text', id: 'state', onChange: props.handleChange, value: props.state.state, placeholder: 'state' }),
      React.createElement('input', { type: 'text', id: 'zip', onChange: props.handleChange, value: props.state.zip, placeholder: 'zip' }),
      React.createElement('input', { type: 'text', id: 'phone', onChange: props.handleChange, value: props.state.phone, placeholder: 'phone' }),
      React.createElement('input', { type: 'button', id: 'form2', onClick: props.registerClick, value: 'Next' })
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
    ),
    React.createElement(
      'form',
      null,
      React.createElement('input', { type: 'text', id: 'cc', onChange: props.handleChange, value: props.state.cc, placeholder: 'cc' }),
      React.createElement('input', { type: 'text', id: 'expiration', onChange: props.handleChange, value: props.state.expiration, placeholder: 'expiration' }),
      React.createElement('input', { type: 'text', id: 'cvv', onChange: props.handleChange, value: props.state.cvv, placeholder: 'cvv' }),
      React.createElement('input', { type: 'text', id: 'billingZip', onChange: props.handleChange, value: props.state.billingZip, placeholder: 'billingZip' }),
      React.createElement('input', { type: 'button', id: 'form3', onClick: props.registerClick, value: 'Next' })
    )
  );
};

var Form4 = function Form4(props) {
  console.log(props.state);
  return React.createElement(
    'div',
    { id: 'form4' },
    React.createElement(
      'h1',
      null,
      'Please Confirm The Below!'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Name: ',
        props.state.name
      ),
      React.createElement(
        'li',
        null,
        'Email: ',
        props.state.email
      ),
      React.createElement(
        'li',
        null,
        'Address 1: ',
        props.state.address1
      ),
      React.createElement(
        'li',
        null,
        'Address 2: ',
        props.state.address2
      ),
      React.createElement(
        'li',
        null,
        'City: ',
        props.state.city
      ),
      React.createElement(
        'li',
        null,
        'State: ',
        props.state.state
      ),
      React.createElement(
        'li',
        null,
        'Zip: ',
        props.state.zip
      ),
      React.createElement(
        'li',
        null,
        'Phone: ',
        props.state.phone
      ),
      React.createElement(
        'li',
        null,
        'Credit Card: ',
        props.state.cc
      ),
      React.createElement(
        'li',
        null,
        'Expiration: ',
        props.state.expiration
      ),
      React.createElement(
        'li',
        null,
        'Billing Zip Code: ',
        props.state.billingZip
      )
    ),
    React.createElement('input', { type: 'button', id: 'goHome', onClick: props.registerClick, value: 'Return Home' })
  );
};

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(Checkout, null), domContainer);
