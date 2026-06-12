import React from 'react'
import "./Houses.css"
import Card from '../Card/Card'
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

function Houses() {
  return (
    <div id='houses'>
        <Card image1={old} image2={old1} image3={old2} title={"1BHK Flat in Manali"} price={"20,000"}/>
        <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"2BHK House in Agra"} price={"50,000"}/>
        <Card image1={hut} image2={hut1} image3={hut2} title={"3BHK Flat in Mumbai"} price={"90,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Flat in Manali"} price={"60,000"}/>
    </div>
  )
}

export default Houses
