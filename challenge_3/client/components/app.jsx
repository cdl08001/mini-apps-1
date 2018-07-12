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

  componentDidMount(){
    this.toggleView()
  }

  toggleView() {
    console.log('I AM TOGGLING!')
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

  registerClick(e) {
    console.log(typeof e.target.id)
    if(e.target.id === 'start'){
      this.setState({currentForm: 'form1'}, function () {
        this.toggleView();
      });
    }
  }

  handleChange() {

  }

  render() {
    return (
     <div> 
      <div className='home'>Welcome to Checkout!</div>
      <Form1 registerClick={this.registerClick}/>
      <Form2 registerClick={this.registerClick}/>
      <Form3 registerClick={this.registerClick}/>
      <Form4 registerClick={this.registerClick}/>
      <button id="start" onClick={this.registerClick}>Start Checkout</button>
     </div>
    );
  }
}





let Form1 = (props) => {
  return (
    <div id='form1'>
      <h1>Enter Your User Info!</h1>
      <form>
        <input type='text' placeholder='User Name'></input>
        <input type='text' placeholder='Email Address'></input>
        <input type='password' placeholder='Password'></input>
        <input type='submit' id='userInfo' onSubmit={props.registerClick} value='Submit'></input>
      </form>
    </div>
  )

}

let Form2 = (props) => {

  return (
    <div id='form2'>
      <h1>Enter Your Address Information!</h1>
    </div>
  )

}

let Form3 = (props) => {

  return (
    <div id='form3'>
      <h1>Enter Your Payment Method!</h1>
    </div>
  )

}

let Form4 = (props) => {

  return (
    <div id='form4'>
      <h1>Please Confirm The Below!</h1>
    </div>
  )

}

const domContainer = document.querySelector('#app');
ReactDOM.render(<Checkout />, domContainer);