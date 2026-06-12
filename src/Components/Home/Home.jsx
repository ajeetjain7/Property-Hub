import React, { useContext } from 'react'
import "./Home.css"
import Card from '../Card/Card'
import { datacontext } from '../../Context/Usercontext'
import house from "../../assets/images/house.jpg"
import house1 from "../../assets/images/housekichen.jpg"
import house2 from "../../assets/images/houseliving.jpg"
import farmhouse from "../../assets/images/farmhouse2.jpg"
import farmhouse1 from "../../assets/images/farmhouse1.jpg"
import farmhouse2 from "../../assets/images/farmhouse.jpg"
import flat from "../../assets/images/roomhouse.avif"
import flat1 from "../../assets/images/roomhouse1.avif"
import flat2 from "../../assets/images/roomhouse3.avif"
import villa from "../../assets/images/villa.jpg"
import villa1 from "../../assets/images/villa1.jpg"
import villa2 from "../../assets/images/villa3.jpg"
import mountain from "../../assets/images/mountain.avif"
import mountain1 from "../../assets/images/mountain1.avif"
import mountain2 from "../../assets/images/mountain3.avif"
import huthouse from "../../assets/images/huthouse.jpg"
import huthouse1 from "../../assets/images/huthouse1.jpg"
import huthouse2 from "../../assets/images/huthouse2.jpg"
import village from "../../assets/images/village1.avif"
import village1 from "../../assets/images/village2.avif"
import village2 from "../../assets/images/village3.avif"
import room from "../../assets/images/room.jpg"
import room1 from "../../assets/images/room1.jpg"
import room2 from "../../assets/images/room2.jpg"
import old from "../../assets/images/old.avif"
import old1 from "../../assets/images/old2.avif"
import old2 from "../../assets/images/old3.avif"
import roomnew from "../../assets/images/roomnew.avif"
import roomnew1 from "../../assets/images/roomnew1.avif"
import roomnew2 from "../../assets/images/roomnew2.avif"
import hut from "../../assets/images/hut1.avif"
import hut1 from "../../assets/images/hut2.avif"
import hut2 from "../../assets/images/hut3.avif"
import ski from "../../assets/images/ski.avif"
import ski1 from "../../assets/images/ski1.avif"
import ski2 from "../../assets/images/ski2.avif"

function Home() {
  const {
          title, setTitle,
          addListing, setaddListing,
          addImage1, setaddImage1,
          addImage2, setaddImage2,
          addImage3, setaddImage3,
          price, setprice
      } = useContext(datacontext)
  return (
    <div id='home'>
        <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
        <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farmhouse in Lucknow"} price={"60,000"}/>
        <Card image1={flat} image2={flat1} image3={flat2} title={"2BHK House in Agra"} price={"30,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"1BHK Modern villa in Agra"} price={"60,000"}/>
        <Card image1={mountain} image2={mountain1} image3={mountain2} title={"2BHK House in manali"} price={"50,000"}/>
        <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Huthouse in kasol"} price={"20,000"}/>
        <Card image1={room} image2={room1} image3={room2} title={"1BHK Flat in Indore"} price={"20,000"}/>
        <Card image1={old} image2={old1} image3={old2} title={"1BHK Flat in Manali"} price={"20,000"}/>
        <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"2BHK House in Agra"} price={"50,000"}/>
        <Card image1={hut} image2={hut1} image3={hut2} title={"3BHK Flat in Mumbai"} price={"90,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Flat in Manali"} price={"60,000"}/>
        {addListing && addImage1 && addImage2 && addImage3 ? (
          <Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>
        ) : null}
        </div>
        
  )
}

export default Home

    