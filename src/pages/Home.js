import React,{Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
               <div>
  <header>      
    <a href="#" className="logo">Rasoi<span>.</span></a>
    <ul className="navbar">
      <li><a href="#background">Home<i className="fa fa-home" /></a></li>
      <li><a href="#about">About<i className="fa fa-info-circle" aria-hidden="true" /></a></li>
      <li><a href="#menu">Menu<i className="fa fa-bars" aria-hidden="true" /></a></li>
      <li><a href="#team">Team<i className="fa fa-users" aria-hidden="true" /></a></li>
      <li><a href="#review">Review<i className="fa fa-comments" aria-hidden="true" /></a></li>
      <li><a href="#contact">Contact<i className="fa fa-phone-square" aria-hidden="true" /></a></li>
      <div className="title">
        <a href="#login" className="btnLogin">Login<i className="fas fa-sign-in-alt" /> </a>
      </div>
    </ul>         
  </header>
  <section className="background" id="background">
    <div className="content">
      <h2>Heavenly Food</h2><hr />
      <p> Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truely an amazing experience to enjoy authentic Indian food. We are known for our
        great Indian food that will satisfy your cravings.
      </p>
      <a href="mailto: chahalbharti15@gmail.com?subject=Reservation inquiry" className="btn">Reserve A Table</a>
    </div>
  </section>
  {/*Home Page Ends here*/}
  {/* Second Page About Us Start*/}
  {/* Second Page About Us Start*/}
  <section className="about" id="about">
    <div className="row">
      <div className="col50">
        <h2><span className="titleText">A</span>bout Us</h2>
        <hr />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum saepe beatae culpa quaerat distinctio quas nostrum esse officia. 
        Rerum maiores sed eos et nesciunt. Fugit dolores similique ab soluta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus odio doloremque culpa. Optio porro ratione perspiciatis earum alias cum cumque, 
        ea officia suscipit quae dolorem eveniet, eos corporis. Unde!
      </div>
      <div className="col50">
        <div className="imgBx">
          <div className="scene">
            <div className="cube">
              <div className="side back" />
              <div className="side left" />
              <div className="side right" />
              <div className="side top" />
              <div className="side bottom" />
              <div className="side front" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Second Page About Us Ends*/}
  {/* Second Page About Us Ends*/}
  {/*Third Page Menu starts */}
  {/*Third Page Menu starts */}
  <section className="menu" id="menu">
    <div className="title">
      <h2 className="titleText"><span>O</span>ur Menu</h2>
      <h3>Food from Heaven</h3><br />
    </div><hr /><br />
    <ul className="image-list-small">
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/menu1.jpeg')"}} />
        <div className="details">
          <h3><a href="#">Butter chicken</a></h3>
          <p className="Price">$12.99</p>
        </div>
      </li>
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/menu2.jpeg')"}} />
        <div className="details">
          <h3><a href="#">Fish Pakora</a></h3>
          <p className="Price">$10.99</p>
        </div>
      </li>
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/Goat\\ curry\\ and\\ rice.jpg')"}} />
        <div className="details">
          <h3><a href="#">Goat Curry with Rice</a></h3>
          <p className="Price">$12.99</p>
        </div>
      </li>
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/Mix\\ veg\\ roll.jpg')"}} />
        <div className="details">
          <h3><a href="#">Mix veg roll</a></h3>
          <p className="Price">$14.99</p>
        </div>
      </li>
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/Samosa.jpg')"}} />
        <div className="details">
          <h3><a href="#">Samosa</a></h3>
          <p className="Price">$13.99</p>
        </div>
      </li>
      <li>
        <a href="#" style={{"background-image":"url('assets/Pictures/Fish\\ Fry.jpg')"}} />
        <div className="details">
          <h3><a href="#">Fish Fry</a></h3>
          <p className="Price">$14.99</p>
        </div>
      </li>
    </ul>
    <div className="title">
      <a href="#" className="btnMenu">Main Page</a>
    </div>
  </section>
  {/*Fourth Page*/}
  <section className="team" id="team">
    <div className="title white">
      <h2 className="titleText"><span>O</span>ur Team</h2>
      <h4>Our Talented Team</h4><br />
    </div><hr />
    <div className="s-box-container">
      <div className="s-box">
        <div className="bar" />
        <img alt={1} src="assets/Pictures/Main Chef.jpg" />
        <h1>Head Chef</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <a className="s-btn" href="#">More..</a>
      </div>
      <div className="s-box">
        <div className="bar" />
        <img alt={2} src="assets/Pictures/Manager.jpg" />
        <h1>Manager</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a className="s-btn" href="#">More..</a>
      </div>
      <div className="s-box">
        <div className="bar" />
        <img alt={3} src="assets/Pictures/Customer2.jpg" />
        <h1>Server</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <a className="s-btn" href="#">More..</a>
      </div>
    </div>
  </section>
  {/*5th Page*/}
  <section className="review" id="review">
    <div className="title white">
      <h2 className="titleText"><span>R</span>eview</h2>
      <h4>Reviews of our valued customers.</h4><br />
    </div>
    <hr /><br />
    <div className="clientReview">
      <div className="box">
        <i className="fas fa-quote-left quote" />
        Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.
        <div className="content">
          <div className="info">
            <div className="name">Customer 1</div>
            <div className="job">Food Blogger</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="assets/Pictures/Customer1.jpg" alt="Customer 1" />
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left quote" />
        Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits.
        <div className="content">
          <div className="info">
            <div className="name">Customer 2</div>
            <div className="job">Food Critic</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="assets/Pictures/Assistant Chef.jpg" alt="Customer 2" />
          </div>
        </div>
      </div>
      <div className="box">
        <i className="fas fa-quote-left  quote" />
        Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. 
        <div className="content">
          <div className="info">
            <div className="name">Customer 3</div>
            <div className="job">Regular Client</div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
          </div>
          <div className="image">
            <img src="assets/Pictures/Manager.jpg" alt="customer3" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/*Contact Form */}
  <section className="contact" id="contact">
    <div className="title white">
      <h2 className="titleText"><span>C</span>ontact Us.</h2>
      <h4>Contact us for more details.</h4>
    </div><br /><hr /><br />
    <div className="container">
      <div style={{"-webkit-text-align":"center","text-align":"center"}}>
      </div>
      <div className="row">
        <div className="column">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321199.8319828372!2d-114.36870947404599!3d51.02771858420285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1629499193285!5m2!1sen!2sca" width={400} height={300} style={{"border":"0"}} allowFullScreen loading="lazy" />
        </div>
        <div className="column">
          <form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="POST">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your First name" autoComplete="off"/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name" autoComplete="off"/>
            <label htmlFor="city">City</label>
            <select id="city" name="city">
              <option value="select your choice" selected>Select your City</option>
              <option value="Calgary">Calgary</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Okatokas">Okotoks</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your message here..." autoComplete="off" style={{"height":"170px"}} defaultValue={""} />
            <div className="subscribe">
              <button className="buttonfx" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>

  <section className="login" id="login">
    <div className="title white">
      <h2 className="titleText"><span>L</span>ogin Form</h2>
    </div><hr /><br />
    <div className="login-card">
      <div className="log_head">
        <h1>Login info <i className="fas fa-sign-in-alt" /></h1>
      </div>
      <div className="log_body">
        <form action="#" method="get">
          <table width={200} border={0} align="center">
            <tbody><tr>
                <td><input type="User Id" type="text" name="loginid" className="log_user"  autoComplete="off" required/></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><input type="Password" type="password" name="pass" className="log_Pass" autoComplete="off" required/></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><input name="remember" type="checkbox" defaultValue="Remember Me" /> Keep me logged in</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><input type="submit" name="login" className="login-submit" defaultValue="SIGN IN" /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Don't have an account ? <a href="#background" rel="signup">Sign Up</a></td>
              </tr>
            </tbody></table>
        </form> 
      </div>
    </div>
        </section>
</div>
            </div>
        )
    }
}
export default Home