class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
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
    this.registerClick = this.registerClick.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleView() {
    if (this.state.currentForm === 'form4') {
      return (
        <div> 
          <Form4 registerClick={this.registerClick}
                 handleChange={this.handleChange}
                 state={this.state}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form3') {
      return (
        <div> 
          <Form3 registerClick={this.registerClick}
                 handleChange={this.handleChange}
                 state={this.state}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form2') {
      return (
        <div> 
          <Form2 registerClick={this.registerClick}
                 handleChange={this.handleChange}
                 state={this.state}/> 
        </div>
      )
    } else if (this.state.currentForm === 'form1') {
      return (
        <div> 
          <Form1 registerClick={this.registerClick}
                 handleChange={this.handleChange}
                 state={this.state}/> 
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

  handleChange(e) {
    let stateElement = e.target.id;
    this.setState({[stateElement]: e.target.value})
  }

  render() { 
    console.log(this.state.currentForm)
    return this.toggleView()
  }
}


let Form1 = (props) => {
  console.log(props)
  return (
    <div id='form1'>
      <h1>Enter Your User Info!</h1>
      <form>
        <input type='text' id='name' onChange={props.handleChange} value={props.state.name} placeholder='User Name'></input>
        <input type='text' id='email' onChange={props.handleChange} value={props.state.email} placeholder='Email Address'></input>
        <input type='password' id='password' onChange={props.handleChange} value={props.state.password} placeholder='Password'></input>
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
        <input type='text' id='address1' onChange={props.handleChange} value={props.state.address1} placeholder='address1'></input>
        <input type='text' id='address2' onChange={props.handleChange} value={props.state.address2} placeholder='address2'></input>
        <input type='text' id='city' onChange={props.handleChange} value={props.state.city} placeholder='city'></input>
        <input type='text' id='state' onChange={props.handleChange} value={props.state.state} placeholder='state'></input>
        <input type='text' id='zip' onChange={props.handleChange} value={props.state.zip} placeholder='zip'></input>
        <input type='text' id='phone' onChange={props.handleChange} value={props.state.phone} placeholder='phone'></input>
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
        <input type='text' id='cc' onChange={props.handleChange} value={props.state.cc} placeholder='cc'></input>
        <input type='text' id='expiration' onChange={props.handleChange} value={props.state.expiration} placeholder='expiration'></input>
        <input type='text' id='cvv' onChange={props.handleChange} value={props.state.cvv} placeholder='cvv'></input>
        <input type='text' id='billingZip' onChange={props.handleChange} value={props.state.billingZip} placeholder='billingZip'></input>
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