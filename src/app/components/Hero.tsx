"use client"; // Ensure this is at the top

import React, { useState } from "react";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa"; // For gas
import { RiUserLine } from "react-icons/ri"; // Example: export-user
import { RiTeamLine } from "react-icons/ri"; // Example: export-profile-2use



function Hero() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  return (
    <div className="w-full bg-white flex flex-col  p-8  justify-between space-x-4 space-y-4 ">
      {/* Left Section */}
      <div className="flex flex-wrap justify-between items-center space-x-8  max-w-[640] h-360  mx-auto-screen mt-2">
        {/* Left Section */}
<div className="flex flex-col justify-between w-full max-w-[640px] h-[360px] bg-blue-500 text-white p-8 rounded-lg mx-auto">
  <h1 className="text-2xl font-bold mb-4">
    The Best Platform for Car Rental
  </h1>
  <p className="text-md mb-6">
    Ease of doing car rental safely 
    and reliably. Of course, at a lower price.
  </p>
  <button type="button" className="bg-blue-700 text-white font-semibold w-1/4 h-80 rounded-md hover:bg-blue-600">
    Rental Car
  </button>
  <Image
    src="/images/car1.png"
    alt="Car rental platform"
    width={406}
    height={137}
    className="mt-8"
  />
</div>
       {/* Right Section */}
<div className="flex flex-col justify-between w-full max-w-[640px] h-[360px] bg-blue-700 text-white p-8 rounded-lg mx-auto">
  <h1 className="text-2xl font-bold mb-4">
    Easy way to rent a car at a low price
  </h1>
  <p className="text-md mb-6">
    Providing cheap car rental services 
    and safe and comfortable facilities.
  </p>
  <button type="button" className="bg-blue-500 text-white font-semibold w-1/4 h-60 rounded-md hover:bg-blue-600">
    Rental Car
  </button>
  <Image
    src="/images/car img1.png" 
    alt="Affordable car rental options"
    width={406}
    height={110}
    className="mt-8"
  />
</div>

      </div>
      <div className="bg-gray-100 flex flex-wrap  items-center justify-between px-4 py-4 rounded-md mx-auto-screen">
  {/* Left Side - Pick-Up */}
  <div className="bg-white rounded-md w-full max-w-[500px] h-[180px] p-6 shadow-md flex flex-col justify-between">
    <h1 className="text-black font-bold text-lg mb-4">Pick-Up</h1>
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col w-full md:w-auto">
        <span className="text-gray-900 text-md font-bold">Locations</span>
        <select className="border text-gray-500 rounded-md p-2 text-sm">
          <option>Select  your city</option>
        </select>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <span className="text-gray-900 text-sm">Date</span>
        <select className="border text-gray-500 rounded-md p-2 text-sm">
          <option>Select your date</option>
        </select>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <span className="text-gray-900 text-sm">Time</span>
        <select className="border text-gray-500 rounded-md p-2 text-sm">
          <option>Select your time</option>
        </select>
      </div>
    </div>
  </div>

  {/* Switch Icon */}
  <div className="flex items-center justify-center mx-6">
    <button
      onClick={() => alert('Switch locations!')} // Replace with actual logic
      className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
    >
      ↔
    </button>
  </div>

  {/* Right Side - Drop-Off */}
<div className="bg-white rounded-md w-full max-w-[500px] h-[180px] p-6 shadow-md flex flex-col justify-between mx-auto">
  <h1 className="text-black font-bold text-lg mb-4">Drop-Off</h1>
  <div className="flex flex-col md:flex-row items-center justify-between">
    <div className="flex flex-col w-full md:w-auto">
      <span className="text-gray-900 text-sm">Locations</span>
      <select className="border text-gray-500 rounded-md p-2 text-sm">
        <option>Select your city</option>
      </select>
    </div>
    <div className="flex flex-col w-full md:w-auto">
      <span className="text-gray-900 text-sm">Date</span>
      <select className="border text-gray-500 rounded-md p-2 text-sm">
        <option>Select your date</option>
      </select>
    </div>
    <div className="flex flex-col w-full md:w-auto">
      <span className="text-gray-900 text-sm">Time</span>
      <select className="border text-gray-500 rounded-md p-2 text-sm">
        <option>Select your time</option>
      </select>
    </div>
  </div>
</div>

</div>

      <div className="flex justify-between w-full items-center p-4 bg-white border-b">
        
      {/* Left Side - Popular Cars */}
      <h2 className="text-black text-lg font-semibold">
        Popular Cars
      </h2>

      {/* Right Side - View All */}
      <a 
        href="/all-cars" // Update this link to your actual route
        className="text-blue-500 text-lg font-semibold hover:underline">
        View All
      </a>
    </div>
    <div className="bg-gray-100 flex flex-wrap items-center justify-between px-4 py-8 w-full rounded-md">
  {/* Car Card 1 */}
  <div className="bg-white rounded-md w-full max-w-[304px] h-[388px] p-4 mb-4 shadow-md flex flex-col justify-between">
    <h1 className="flex justify-between font-bold">
      Koenigsegg
      <i className="fa fa-heart text-red-500 text-4xl" />
    </h1>
    <p className="text-gray-500">Sport</p>
    <Image
      src="/images/car1a.png"
      alt="Affordable car rental options"
      width={232}
      height={72}
      className="mt-8"
    />
    <div className="flex items-center justify-between">
      {/* Gas Icon */}
      <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
      </div>
      {/* Manual Icon */}
      <div className="flex items-center space-x-2">
        <RiUserLine className="text-gray-400" />
        <span>Manual</span>
      </div>
      {/* People Icon */}
      <div className="flex items-center space-x-2">
        <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
      </div>
    </div>
    <div className="flex items-center justify-between w-full py-8">
      $99.0/<h5 className="text-gray-400">day</h5>
      <button type="button" className="bg-blue-700 text-white font-semibold px-3 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
    </div>
  </div>

  {/* Car Card 2 */}
  <div className="bg-white rounded-md w-full max-w-[304px] h-[388px] p-4 mb-4 shadow-md flex flex-col justify-between">
    <h1 className="flex items-center justify-between font-bold">
      Nissan Gt-R
      <span className="flex text-gray-200 text-xl">♡</span> {/* Unicode hollow heart */}
    </h1>
    <p className="text-gray-500">Sport</p>
    <Image
      src="/images/car1b.png"
      alt="Affordable car rental options"
      width={232}
      height={72}
      className="mt-8"
    />
    <div className="flex items-center justify-between">
      {/* Gas Icon */}
      <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
      </div>
      {/* Manual Icon */}
      <div className="flex items-center space-x-2">
        <RiUserLine className="text-gray-400" />
        <span>Manual</span>
      </div>
      {/* People Icon */}
      <div className="flex items-center space-x-2">
        <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
      </div>
    </div>
    <div className="flex items-center justify-between w-full">
      $99.0/<h5 className="text-gray-400">day</h5>
      <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
    </div>
  </div>

  {/* Car Card 3 */}
  <div className="bg-white rounded-md w-full max-w-[304px] h-[388px] p-4 mb-4 shadow-md flex flex-col justify-between">
    <h1 className="flex justify-between font-bold">
      Rolls-Royce
      <i className="fa fa-heart text-red-500 text-4xl" />
    </h1>
    <p className="text-gray-500">Sedan</p>
    <Image
      src="/images/car1c.png"
      alt="Affordable car rental options"
      width={232}
      height={72}
      className="mt-8"
    />
    <div className="flex items-center justify-between w-full h-[452px]">
      {/* Gas Icon */}
      <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
      </div>
      {/* Manual Icon */}
      <div className="flex items-center space-x-2">
        <RiUserLine className="text-gray-400" />
        <span>Manual</span>
      </div>
      {/* People Icon */}
      <div className="flex items-center space-x-2">
        <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
      </div>
    </div>
    <div className="flex items-center text-gray-900 justify-between w-full">
      $96.00/<h5 className="text-gray-400">day</h5>
      <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
    </div>
  </div>

  {/* Car Card 4 */}
  <div className="bg-white rounded-md w-full max-w-[304px] h-[388px] p-4 mb-4 shadow-md flex flex-col justify-between">
    <h1 className="flex justify-between font-bold">
       Nissan Gt-R 
       {/* Hollow heart using Unicode */}
       <span className='flex text-gray-200 text-xl'>♡</span> 
     </h1> 
     <p className='text-gray-500'>sport</p>

     <Image
       src="/images/car1d.png"
       alt='Affordable car rental options'
       width={232}
       height={72}
       className='mt-8'
     />

     {/* Features Section */}
     <div className='flex items-center justify-between'>
       {/* Gas Icon */}
       <div className='flex items-center space-x-2'>
         <FaGasPump className='text-gray-400' />
         <span>80L</span>
       </div>

       {/* Manual Icon */}
       <div className='flex items-center space-x-2'>
         <RiUserLine className='text-gray-400' />
         <span>Manual</span>
       </div>

       {/* People Icon */}
       <div className='flex items-center space-x-2'>
         <RiTeamLine className='text-gray-400' />
         <span>2 People</span>
       </div>
     </div>

     {/* Price and Button Section */}
     <div className='flex items-center justify-between w-full'>
       $80.00/<h5 className='text-gray-400'>day</h5>
       <button type='button' 
               className='bg-blue-700 text-white font-semibold px=6 py=3 rounded-md hover:bg-blue=600'>
         Rental Now
       </button>
     </div>

   </div>

</div>
    <div>
      <div className=" flex items- center justify-between w-full bg-gray-100 text-gray-500 p-6 font-semi bold"><h1 className="text-lg md:text-xl">Recomendation Car</h1>
     </div>
     <div className="bg-gray-100 flex flex-wrap items-center justify-between space-x-4 px-12 py-8 rounded-md">
        <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">All New Rush 
          {/* Hollow heart using Unicode */}
          <div className="flex items-center justify-center">
           <span className=" flex text-gray-200 text-xl">♡</span> {/* Unicode hollow heart */}
           </div>
           </h1><p className="text-gray-500">SUV</p>
           <Image
            src="/images/car2a.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
        <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $72.00/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div>
      </div>
        <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">CR-V {/* Add margin to the right of h1 */}
          {/* Solid heart with red fill */}
          <i className="fa fa-heart text-red-500 text-4xl" /> {/* Filled heart */}</h1>
          
          <p className="text-gray-500">SUV</p>
          <Image
            src="/images/car2b.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
           <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $80.00/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div>
        </div>
        <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">All New Terois
          {/* Hollow heart using Unicode */}
          <div className="flex items-center justify-center">
           <span className=" flex text-gray-200 text-xl">♡</span> {/* Unicode hollow heart */}
           </div>
           </h1>  <p className="text-gray-500">SUV</p>
            <Image
            src="/images/car2c.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
            <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $74.00/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
        <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">CR-V {/* Add margin to the right of h1 */}
          {/* Solid heart with red fill */}
          <i className="fa fa-heart text-red-500 text-4xl" /> {/* Filled heart */} </h1><p className="text-gray-500">SUV</p>
          <Image
            src="/images/car2d.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
           <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $99.0/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
      </div>
      <div className="bg-gray-100 flex flex-wrap items-center justify-between space-x-4 px-12 py-8 rounded-md">
      <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">MG ZX Exclusive {/* Add margin to the right of h1 */}
          {/* Solid heart with red fill */}
          <i className="fa fa-heart text-red-500 text-4xl" /> {/* Filled heart */} </h1> <p className="text-gray-500">SUV</p> 
          <Image
            src="/images/car2e.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
          <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $99.0/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
      <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1 className=" flex justify-between font-bold">New MG ZS {/* Hollow heart using Unicode */}
            <div className="flex items-center justify-center">
           <span className=" flex text-gray-200 text-xl">♡</span> {/* Unicode hollow heart */}
           </div> </h1> <p className="text-gray-500">SUV</p> 
           <Image
            src="/images/car2f.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
           <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $99.0/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700  p-4 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
      <div className="bg-white rounded-md w-max-304 h-388 p-4 mb-2"><h1>MG ZX Excite  {/* Add margin to the right of h1 */}
          {/* Solid heart with red fill */}
          <i className="fa fa-heart text-red-500 text-4xl" /> {/* Filled heart */}</h1><p className="text-gray-500">SUV</p>
          <Image
            src="/images/car2g.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
            <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $99.0/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
      <div className="bg-white round-md w-304 h-388 p-4 mb-2">
        <h1 className=" flex justify-between font-bold">New MG ZS {/* Hollow heart using Unicode */}

            <div className="flex items-center justify-center">
           <span className=" flex text-gray-200 text-xl">♡</span> {/* Unicode hollow heart */}
           </div>
       </h1>  <p className="text-gray-500">SUV</p> 
       <Image
            src="/images/car2f.png"
            alt="Affordable car rental options"
            width={232}
            height={72}
            className="mt-8"/>
            <div className="flex items-center justify-between  w-1352px h-452">
           {/* Gas Icon */}
         <div className="flex items-center space-x-2">
        <FaGasPump className="text-gray-400" />
        <span>70L</span>
        </div>
      {/*Manual Icon */}
       <div className="flex items-center space-x-2">
     <RiUserLine className="text-gray-400" />
     <span>Manual</span>
      </div>
       {/* People Icon */}
       <div className="flex items-center space-x-2">
       <RiTeamLine className="text-gray-400" />
        <span>4 People</span>
       </div>
        </div>
       <div className="flex items-center justify-between w-full">
        $99.0/<h5 className="text-gray-400">day</h5>
        <button type="button" className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600">
        Rental Now
      </button>
      </div></div>
    </div></div>

    </div>

  );
}

export default Hero;
