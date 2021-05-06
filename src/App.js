import React from 'react';
import IdCard from "./IdCard"
import Greetings from "./Greetings"
import Random from "./Random"
import BoxColor from "./BoxColor"
import CreditCard from "./CreditCard"
import Rating from "./Rating"
import DriverCard from "./DriverCard"
import LikeButton from "./LikeButton"
import ClickablePicture from "./ClickablePicture"
import Carousel from "./Carousel"
import ListAndKeys from "./ListAndKeys"
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="idcard">
      <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
  </div>
  <div className="idcard">
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
  </div>
  <div className="greet"> <Greetings lang="de">Ludwig</Greetings> </div>
  <div className="greet"> <Greetings lang="fr">François</Greetings> </div>
  <div className="random"> <Random min={1} max={6}/> </div>
  <div className="random"> <Random min={1} max={100}/> </div>
  <div className="box"> <BoxColor r={255} g={0} b={0} /> </div>
  <div className="box"> <BoxColor r={128} g={255} b={0} /> </div>
  <div className="credit">
      <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" />
  </div>
  <div className="credit">
    <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222" />
  </div>
  <div className="credit">
    <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" />
  </div>
  <div className="rating">
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
  </div>
  <div className="driver">
      <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} />
  </div>
  <div className="driver">
    <DriverCard
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }} />
  </div>
  <div className="button">
      <LikeButton /> 
  </div>
  <div>
      <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
      />
  </div>
      <Carousel
      imgs={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
    />
    <ListAndKeys limit={12} />
    </div>
  );

}

export default App;
