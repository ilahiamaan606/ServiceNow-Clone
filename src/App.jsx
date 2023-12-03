import Header from "./components/Header"
import Powering from "./components/Powering"
import Whyopt from "./components/Whyopt"
import Whydifferent from "./components/Whydifferent"
import SolutionsList from "./components/SolutionsList"
import Button from "./components/Button"
import Whatis from "./components/Whatis"
import Engagement from "./components/Engagement"
import OtherServices from "./components/OtherServices"
import Partner from "./components/Partner"
import Footer from "./components/Footer"


function App() {


  return (
    <main>
      <Header> </Header>
      <Powering></Powering>
      <Whyopt></Whyopt>

      <div className="whydifferent-container">
        <h1>Why are we different?</h1>
        <div>
          <Whydifferent
            image={"bulb.svg"}
            text={"Delivering cutting-edge tech"}></Whydifferent>
          <Whydifferent
            image={"team.svg"}
            text={"We build passionate teams"}></Whydifferent>
          <Whydifferent
            image={"hand-shield.svg"}
            text={"Swift at problem-solving"}></Whydifferent>
        </div>
      </div>

      <div className="solutions-container">
        <h1>SeviceNow Solutions</h1>
        <p>We combine the ServiceNow platform with our multidisciplinary expertise to deliver transformative solutions.</p>
        <div>
          <SolutionsList
            text1="IT Service Management"
            text2="Workplace Service Delivery"
            text3="App Engine"></SolutionsList>
          <SolutionsList
            text1="IT Operations Management"
            text2="Customer Service Management"
            text3="Automation Engine"></SolutionsList>
          <SolutionsList
            text1="HR Service Delivery"
            text2="Field Service Management"></SolutionsList>
        </div>
        <Button
        text="Request a Consultation"></Button>
      </div>

      <Whatis></Whatis>
      <Engagement></Engagement>
      <OtherServices></OtherServices>
      <Partner></Partner>
      <Footer></Footer>

    </main>


  )
}

export default App
