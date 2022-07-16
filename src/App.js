import './App.css';
import {useState} from 'react'
// import BioData from './BioData';
// import PersonalInfo from './components/PersonalInfo';
// import Skills from './components/Skills';
// import SocialInfo from './components/SocialInfo';

function App() {
  // let name = "anisur vai";
  // let arr = [1,2,3,4,5]

  const [counter, setCounter] =  useState(100); // setCounter
  const [counter2, setCounter2] = useState(12);


  // counter + 1


  const increase = (payload) => {
    setCounter(counter + payload) // counter + 1 = 100  + 1  = 101 
    // counter  = 101;
    // counter = counter + 1
  }

  const decrease = (payload) => {
    setCounter(counter - payload)
  }

  // console.log(amarFunction)


  // let counter = 0;

  


  return (
    <div className="App">

      <p>
        {counter}
      </p>
      <p>
        {counter2}
      </p>
      <button onClick = {() => increase(1)} >
          Increase By One
      </button>
      <button onClick = {() => increase(5)} >
          Increase By Five
      </button>
      <button onClick = {() => increase(10)} >
          Increase By 10
      </button>

      <button onClick= {() => decrease(1)} >
        Decrease By One
      </button>
      <button onClick= {() => decrease(5)} >
        Decrease By 5
      </button>
      <button onClick= {() => decrease(10)} >
        Decrease By 10
      </button>

     {/* <BioData 
        name = "SRSETU"
        mobile = '+005154554455'
        email = 'srsetu@gmail.com'
        twitter = 'sr/twitter'
        linkedIn = 'sr/linkedIn'
        fb = 'fb/srsetu'
        skills = {['Js', 'WP', 'PHP', 'MySql']}
     /> */}
     {/* <BioData>
        <PersonalInfo />
        <SocialInfo />
        <Skills />
     </BioData> */}

     {/* <BioData 
        socialInfo = {<SocialInfo 
                        twitter = 'sr/twitter'
                        linkedIn = 'sr/linkedIn'
                        fb = 'fb/srsetu'
                      />}
        personalInfo = {
          <PersonalInfo 
            name = "SRSETU"
            mobile = '+005154554455'
            email = 'srsetu@gmail.com'
          />
        }

        skillSection = {
          <Skills 
            skills = {['Js', 'WP', 'PHP', 'MySql']}
          />
        }

        // interesSection = {<Interests />}
     /> */}
     {/* <BioData 
        name = "Mahir"
        email = 'mahr@gmail.com'
        twitter = 'mahir/twitter'
        linkedIn = 'mahir/linkedIn'
        fb = 'fb/mahr'
        skills = {['Js', 'MySql']}
     /> */}
     
     {/* <hr /> */}
    </div>
  );
}


<App />

// App(1, 1)

/**
 * 1) It should be a function
 * 2) This function should return "something"
 * 3) That "something" must be some jsx - (html-eish code)
 */

export default App;
