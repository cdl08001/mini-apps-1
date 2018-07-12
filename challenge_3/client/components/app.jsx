class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
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
    this.registerClick = this.registerClick.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    if (this.state.currentForm === 'form4') {
      return (
        <div> 
          <Form4 registerClick={this.registerClick}
                 state={this.state}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form3') {
      return (
        <div> 
          <Form3 registerClick={this.registerClick}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form2') {
      return (
        <div> 
          <Form2 registerClick={this.registerClick}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form1') {
      return (
        <div> 
          <Form1 registerClick={this.registerClick}/> 
        </div>
      )
    } else if(this.state.currentForm === 'home') {
      return (
        <div> 
          <div className='home'>Welcome to Checkout!</div>
          <button id="start" onClick={this.registerClick}>Start Checkout</button>
        </div>
      )
    }
  }

  registerClick(e) {
    if (e.target.id === 'start') {
      this.setState({currentForm: 'form1'});

    } else if (e.target.id === 'form1') {
        this.setState({currentForm: 'form2'});

    } else if (e.target.id === 'form2') {
        this.setState({currentForm: 'form3'});

    } else if (e.target.id === 'form3') {
        this.setState({currentForm: 'form4'});

    } else {
        this.setState({currentForm: 'start'});
    }
  }

  render() { 
    console.log(this.state.currentForm)
    return this.toggleView()
  }
}


let Form1 = (props) => {
  console.log(props.registerClick)
  return (
    <div id='form1'>
      <h1>Enter Your User Info!</h1>
      <form>
        <input type='text' placeholder='User Name'></input>
        <input type='text' placeholder='Email Address'></input>
        <input type='password' placeholder='Password'></input>
        <input type='button' id='form1' onClick={props.registerClick} value='Next'></input>
      </form>
    </div>
  )
}

let Form2 = (props) => {
  return (
    <div id='form2'>
      <h1>Enter Your Address Information!</h1>
      <form>
        <input type='text' placeholder='address1'></input>
        <input type='text' placeholder='address2'></input>
        <input type='text' placeholder='city'></input>
        <input type='text' placeholder='state'></input>
        <input type='text' placeholder='zip'></input>
        <input type='button' id='form2' onClick={props.registerClick} value='Next'></input>
      </form>
    </div>
  )
}

let Form3 = (props) => {
  return (
    <div id='form3'>
      <h1>Enter Your Payment Method!</h1>
      <form>
        <input type='text' placeholder='cc'></input>
        <input type='text' placeholder='expiration'></input>
        <input type='text' placeholder='cvv'></input>
        <input type='text' placeholder='billingZip'></input>
        <input type='button' id='form3' onClick={props.registerClick} value='Next'></input>
      </form>
    </div>
  )
}

let Form4 = (props) => {
  console.log(props.state)
  return (
    <div id='form4'>
      <h1>Please Confirm The Below!</h1>
      <ul>
        <li>Name: {props.state.name}</li>
        <li>Email: {props.state.email}</li>
        <li>Address 1: {props.state.address1}</li>
        <li>Address 2: {props.state.address2}</li>
        <li>City: {props.state.city}</li>
        <li>State: {props.state.state}</li>
        <li>Zip: {props.state.zip}</li>
        <li>Phone: {props.state.phone}</li>
        <li>Credit Card: {props.state.cc}</li>
        <li>Expiration: {props.state.expiration}</li>
        <li>Billing Zip Code: {props.state.billingZip}</li>
      </ul>
    </div>
  )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<Checkout />, domContainer);