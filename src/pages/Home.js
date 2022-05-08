import React, {useState, useRef} from 'react';
import './Home.css';
import headshot from '../Assets/Headshot1.png';
import emailjs from "emailjs-com";


const Home = () => {
  const [atTop, setTop] = useState(true);
  const [hoveredAtTop, setHoveredAtTop] = useState(false);

  const scrollable = document.querySelector('body');
  function handleScroll() {
      if (scrollable.scrollTop <= 0) {
          setTop(true);
          if (hovered) {
            setHoveredAtTop(true);
          }
          if (!hovered) {
            setHoveredAtTop(false);
          }
      }
      else { // Not at Top
          setTop(false);
          setHoveredAtTop(false);
      }

  }
  scrollable.addEventListener('scroll', () => {throttle(handleScroll, 250)});

  const myRef = useRef(null);
  const [hovered, setHover] = useState(false);
  
  function handleMouseLeave() {
    setHover(false);
    setHoveredAtTop(false);

  }
  function handleMouseEnter() {
    setHover(true);
    if (atTop) {
      setHoveredAtTop(true);
    }
  }
  function scroll_ref() {
    myRef.current.scrollIntoView({behavior: 'smooth'});
    console.log("myRef");
  }

  let throttlePause;
  const throttle = (callback, time) => {
      if (throttlePause) return;
      throttlePause = true;
      setTimeout(() => {
          callback();
          throttlePause = false;
      }, time);
  };
    return (
      <>
        <div className={hoveredAtTop ? "home_hovered" : "home"}>
          <Header parentState={hoveredAtTop} parentStateChanger1={handleMouseLeave} parentStateChanger2={handleMouseEnter} scroller={scroll_ref} ref_value={myRef}/>
          <Padding />
        </div>
        <div className="home_content">
          <About />
          <Contact className="Contact" ref_val={myRef}/>
        </div>
      </>
    );

  };
  
  function Header(props) {
    return (
      <div id="header" className={props.parentState ? "header_hovered" : "header"} onMouseLeave={props.parentStateChanger1} onMouseEnter={props.parentStateChanger2}>
        <section className={props.parentState ? "name_hovered" : "name"}>Alex Zhang</section>
        <section className={props.parentState ? "intro_hovered" : "intro"}>Personal Portfolio</section>
        <button className="button" onClick={props.scroller}>Contact</button> 
      </div>

    );
  }


  function About() {
    return (
      <div className="about">
        <div id="about_background" />
        <img src={headshot} className="headshot" alt="headshot"/>
        <div className="aboutme">
          <h2>About me</h2>
          <section id="bio">Hey! My name is Alex Zhang and I am currently a sophomore at the University of Michigan
                  studying business and computer science. Current professional occupations, Professional Interests xyz.
                  More professional interests. Some broader interests. Creative interests perhaps. Closing. <br/> <br/>
                  I am very eager about exploring emerging technologies and how they can be applied to make an impact in various industries. 
                  Reach out with any
                  questions or comments!</section>
        </div>
        <div className="additional">
          <h2>Additional</h2>
          <ul>
            <li>Born and raised Boston, MA</li>
            <li>Foo</li>
            <li>Foo</li>
            <li>Foo</li>
          </ul>
        </div>
        <div className="hobbies">
          <h2>Hobbies</h2>
          <ul>
            <li>Classical Music</li>
            <li>Hiking/Biking/Skiing</li>
            <li>Learning different recipes</li>
            <li>Exploring new restaurants</li>
          </ul>
        </div>
        <div className="goals">
          <h2>Goals</h2>
          <section>I am currently looking to gain professional experience within the tech industry as a software engineer. 
            Blah blah blah. 
            Lorem Ipsum
          </section>
        </div>
      </div>
    );
  }

  function Contact(props) {
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("@");
    const [msg, setMsg] = useState("");

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    function handleSubmit(e) {
      e.preventDefault();
      console.log(name, " ", email, " ", msg);

      setLoading(true);

      emailjs.sendForm('gmail', 'portfolio_react', e.target, 'x1l1P-CWRUyzNBxo2')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          setSubmitted(true);
          setTimeout(function() {
            setSubmitted(false);
          }, 4000);
      }, (error) => {
          console.log(error.text);
      });

      myRef1.current.value = "";
      myRef2.current.value = "";
      myRef3.current.value = "";

      return false;
    }
    function handleName(e) {
      setName(e.target.value);
    }
    function handleEmail(e) {
      setEmail(e.target.value);
    }
    function handleMsg(e) {
      setMsg(e.target.value);
    }

    /* TODO: Debounce handlers */

    return (
      <div className="contact" ref={props.ref_val}>
        <div className="contactme">        
          <h1>Contact Me</h1>
          <section>Reach out to me with any burning questions or comments here!</section>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="textarea1">
            <textarea name="name" id="name" type="text" maxLength="64" required onChange={handleName} ref={myRef1}></textarea>
            <label>Name</label>
          </div>
          <div className="textarea2">
            <textarea name="email" id="email" type="email" maxLength="64" required onChange={handleEmail} ref={myRef2}></textarea>
            <label>Email</label>
          </div>
          <div className="textarea3">
            <textarea name="msg" id="msg" type="text" maxLength="1024" required onChange={handleMsg} ref={myRef3}></textarea>
            <label>Message</label>
          </div>
          <div className="inputarea">
            <input id="submit" type="submit" value={submitted ? "SUBMITTED" : loading ? "    " : "SEND"}/>
            {loading === true && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
          </div>
        </form>
      </div>
    );
  }
  function Padding() {
    return (
      <div className="padding" />
    );
  }
  export default Home;
  