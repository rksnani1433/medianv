import './index.css';
import React, { useState } from 'react';
import { FaFilter, FaArrowDown } from "react-icons/fa";

const data = [
{
sno: 1,
bidBy: { 
bidNumber: "323",
createdBy: "surender"
},
dateTime: {
startDate: "14/02/2024",
startTime: "12:00"
},
bidRemain: {
bidtimeRemaining: "7hr 20min" // Corrected typo
},
city: {
fromCity: "Hyderabad",
toCity: "Bangalore"
}, 
vechilesDetails: {
vechileType: "truck", // Corrected typo
bodySize: "20ft",
noOfVechiles: 2
},
material: {
materialWeight: "400kg" // Corrected typo
},
response: {
responded: 4
},
assigned: {
assignedName: "Ranjith",
id: "12345"
},
details: "details" 
},
{
sno: 2,
bidBy: { 
bidNumber: "456",
createdBy: "John"
},
dateTime: {
startDate: "15/02/2024",
startTime: "14:00"
},
bidRemain: {
bidtimeRemaining: "5hr 45min" // Corrected typo
},
city: {
fromCity: "Chennai",
toCity: "Mumbai"
}, 
vechilesDetails: {
vechileType: "van",
bodySize: "15ft",
noOfVechiles: 1
},
material: {
materialWeight: "300kg" // Corrected typo
},
response: {
responded: 2
},
assigned: {
assignedName: "Alice",
id: "67890"
},
details: "details" 
},
{
sno: 3,
bidBy: { 
bidNumber: "789",
createdBy: "Emily"
},
dateTime: {
startDate: "16/02/2024",
startTime: "10:30"
},
bidRemain: {
bidtimeRemaining: "10hr 15min" // Corrected typo
},
city: {
fromCity: "Delhi",
toCity: "Kolkata"
}, 
vechilesDetails: {
vechileType: "trailer",
bodySize: "40ft",
noOfVechiles: 3
},
material: {
materialWeight: "800kg" // Corrected typo
},
response: {
responded: 6
},
assigned: {
assignedName: "Bob",
id: "54321"
},
details: "details" 
}
];


let innerData={
loadingpoint: "manikonda, hyderabad",
undloadingpoint:"mahabubnagr",
vachileloadingdate:"14-02-24",
vachiletype:"20 ft truck close body",
material:"agricultural products",
weight:"100 Tones",
requestdate:"13-1-2024",
expirydate:"13-1-2024",
remarks:'urgent ',
assignedstaff:"Rahul",
phonenumber:"12345567890",
targetprice:"10000",
numberofbider:"23"
};

const Home = () => {
const [clickedData, setClickedData] = useState(null);

const handleClick = (rowData) => {
setClickedData(rowData === clickedData ? null : rowData);
};

return(
<div className='home-container'>
<div className='timing-options'>
<div className='left-options'>
<span className='option'>Live(30)</span>
<span style={{color:"green"}} className='option'>00Responded(30)</span>
<span style={{color:"red"}} className='option'>Unresponded(30)</span>
</div>
<div className='right-options'>
<span className='option'>Bid Created</span>
<span className='option'>Today</span>
<span className='option'>Yesterday</span>
<span className='option'><input type='date' placeholder='Calendar' /></span>
<span className='option'><FaFilter/></span>
</div>
</div>

<div>
<table>
<thead className='t-heads'>
<tr>
<th>S.No</th>
<th>Bid number<br/> created by</th>
<th>Start Date <br/> & Time</th>
<th>Bid timing<br/> remaining</th>
<th>From city <br/> to city</th>
<th>Vehicle type,<br/> size, no. of vehicles</th>
<th>Material weight <br/>(kg)</th>
<th>Response</th>
<th>Assigned staff</th>
<th>Details</th>
</tr>
</thead>
<tbody>
{data.map((eachData, i) => (
<React.Fragment key={i}>
    <tr>
        <td>{eachData.sno}</td>
        <td>{eachData.bidBy.bidNumber}<br/><p className='graytext'>{eachData.bidBy.createdBy}</p></td>
        <td>{eachData.dateTime.startDate}<br/> <p className='graytext'>{eachData.dateTime.startTime}</p></td>
        <td>{eachData.bidRemain.bidtimeRemaining}</td>
        <td>{eachData.city.fromCity}<br/><p className='downarrow'><FaArrowDown/></p>{eachData.city.toCity}</td>
        <td>{eachData.vechilesDetails.vechileType}, {eachData.vechilesDetails.bodySize} closebody<br/>{eachData.vechilesDetails.noOfVechiles}</td>
        <td>{eachData.material.materialWeight}</td>
        <td>{eachData.response.responded}<br/><span className='view-results'>View Results</span></td>
        <td>{eachData.assigned.assignedName} <br/><span className='graytext'>{eachData.assigned.id}</span></td>
        <td><span className='view-results' onClick={() => handleClick(eachData)}>Details</span></td>
    </tr>
{/*     
    {clickedData === eachData && (
        <tr key={`details-${i}`}>
            <td colSpan="10" className='container'>
                <div>
                    <p>Bid No : {eachData.bidBy.bidNumber}</p>
                    <p>Loading Point: <span>{innerData.loadingpoint}</span></p>
                    <p><FaArrowDown/></p>
                    <p>unloading Point: <span>{innerData.undloadingpoint}</span></p>
                </div>
                <div>
                    <p>vechile Loading Date: {innerData.vachileloadingdate}</p>
                    <p>vechile type: {innerData.vechileType}</p>
                    <div><p>material:{innerData.material}</p>
                    <p>Weight: <span>{innerData.weight}</span></p>
                    </div>
                    <div>
                    <p>Request Date:{innerData.requestdate}</p>
                    <p>Expiry Date: {innerData.expirydate}</p>
                    </div> 
                    
                    <p>Reamarks:{innerData.remarks} </p>
                </div>
                <div>
                    
                        <p> Assigned Staff: {innerData.assignedstaff}</p>
                    <p>Phone Number :{innerData.phonenumber}</p>
                    <p> Target PRice: {innerData.targetprice}</p>
                    <p> number of bider for this bid: {innerData.numberofbider}</p>
                    
                </div>
            </td>
        </tr>
    )} */}
</React.Fragment>
))}
</tbody>
</table>
</div>
</div>
);
};

export default Home;
