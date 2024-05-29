import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const about = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);

 return (
   <><><div>
         <h2 class="container">About Yes Man Jr.</h2>
         <p class="container"> Yes Man Jr. is a band from Marietta, Georgia. Beginning in summer of 2019 as the recording experiment of Jay Harris and Nicholas Cullinane, the project evolved into a full-fledged performing group upon the addition of Garett Lohner in 2021.
             Combining folk & psychedelic-inspired soundscapes with a lo-fi analogue sensibility, Yes Man Jr. forge an aura that is both fresh and yet unmistakenly indicative of their Atlanta roots.
             In autumn of 2022, Yes Man Jr. were joined by Alexander White. As a four-piece, the band continues recording new material in addition to performing live. On this page feel free
             to leave any comments on our songs, live concert reuquests, or criticisms you may have! Thank you for listening!</p>
     </div>

         <div class="container">
             <h2 class="aboutPageHeader">Live Performances</h2>
             <p class="container">11/12/2022 - at Lemonaid Bash (Athens, GA) with Claire Elitha, Josey, Summer Sick, and The Downstairs</p>
             <p class="container">4/21/2023 - at Innerspace (Carl Janes' studio - Underground Atlanta, GA) with Lexy Grizzle, Bright Red Blood, Gordan, and The Harvest Law</p>
             <p class="container">12/8/2023 - at Innerspace with Mt. Wasabi, Seth Brown and Ashley Wingo</p>
             <p class="container">12/31/2023 - New Years Eve secret show in Marietta, GA</p>
         </div></><div>
            <h2 class="container">Releases</h2>
            <p class="container">12/1/2021 - "Terminado/Turn the Light Off/Broken Now" single released on digital streaming</p>
            <p class="container">5/20/2022 - "Thank You, Thank You" LP released on digital streaming</p>
            <p class="container">10/31/2023 - "Say It Again" mini-LP released on digital streaming</p>
            <p class="container">4/12/2024 - "Wildflower Honey" single released on digital streaming</p>
         </div></>

 );
}