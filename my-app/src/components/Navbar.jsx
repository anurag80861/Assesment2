import React from "react";



const Navbar = () => {
  return (
    
   <div className="w-full h-16 border-b-2 flex items-center justify-between mx-auto pl-24 pr-24"> 

    
        <div className="flex w-[15%] justify-between items-center">
         <img className="w-16 h-12" src= "https://e7.pngegg.com/pngimages/342/648/png-clipart-payment-retro-cartoon-official-bag-cartoon-character-rectangle.png" alt="" />
          <div><h1>Explorin Solution</h1></div>
        </div>

        <div className="flex w-[30%] justify-between items-center" >
          <div className="w-7 h-7 border-2 border-gray-400 rounded-md"></div>
          <div className="text-gray-500">My saved jobs only </div>
          <div>
            <img  className="w-16 h-16"src="https://th.bing.com/th/id/OIP.-CnYaCHnj7cT8iDHaKT3MAHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
          </div>
          <div>
            <img  className="w-14 h-14 rounded-3xl" src="https://th.bing.com/th/id/OIP._qme_IJj03PBDiEJfSAyZQHaJQ?rs=1&pid=ImgDetMain"/>
          </div>
        </div>
      </div>

  );
};

export default Navbar;
