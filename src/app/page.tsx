"use client";
import Image from 'next/image';
import { motion } from 'framer-motion'; // Keep framer motion for animations
import logo from '/public/images/loggo.png'; // Adjust this path if necessary
import star from '/public/images/star.png';
export default function Home() {
 



  return (
    <div className="max-w-screen-xl mx-auto p-4 relative">
      {/* Glowing Circles */}
      <div className="glow-circle glow-circle-1 bg-red-500"></div>
      <div className="glow-circle glow-circle-2 bg-red-500"></div>
      <div className="glow-circle glow-circle-3 bg-red-500"></div>
      <div className="glow-circle glow-circle-4 bg-red-500"></div>
      <div className="glow-circle glow-circle-5 bg-red-500"></div>
      <div className="glow-circle glow-circle-6 bg-red-500"></div>

      {/* Stars - Add more stars with rotating animation */}
      
      <Image src={star} alt="Star" className="absolute top-20 right-10 w-12 h-12 star-rotate" />
      <Image src={star} alt="Star" className="absolute bottom-20 left-20 w-8 h-8 star-rotate" />
      <Image src={star} alt="Star" className="absolute bottom-32 right-40 w-6 h-6 star-rotate" />
      <Image src={star} alt="Star" className="absolute top-40 right-80 w-10 h-10 star-rotate" />
      
      {/* More rotating stars */}
      <Image src={star} alt="Star" className="absolute top-16 left-40 w-8 h-8 star-rotate" />
      <Image src={star} alt="Star" className="absolute bottom-44 left-72 w-10 h-10 star-rotate" />
      <Image src={star} alt="Star" className="absolute bottom-16 right-12 w-6 h-6 star-rotate" />
      <Image src={star} alt="Star" className="absolute top-60 left-80 w-12 h-12 star-rotate" />
      <Image src={star} alt="Star" className="absolute top-32 right-60 w-8 h-8 star-rotate" />

      {/* Header */}
      <header className="flex justify-between items-center py-4 z-10 relative">
        <div className='flex gap-12 items-center'>
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Uifry logo" width={40} height={40} />
          <span className="text-xl font-bold">uifry</span>
        </div>
        <nav className="space-x-8">
          <a href="#" className="text-red-500 font-bold">Home</a>
          <a href="#" className="text-gray-700 hover:text-red-500 hover:font-bold">About Us</a>
          <a href="#" className="text-gray-700 hover:text-red-500 hover:font-bold">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-red-500 hover:font-bold">Features</a>
        </nav>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Download</button>
      </header>

      {/* Main Section */}
      <main>
        <section className="text-center relative overflow-hidden mt-12">
          <div className="flex items-start justify-between">
            {/* Title */}
            <div className="text-left pl-12 pr-8 max-w-lg pt-16">
              <h1 className="text-5xl font-bold gradient-text">Make The Best Financial Decisions</h1>
              <p className="text-gray-600 mt-4">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
              </p>

              {/* Buttons */}
              <div className="flex space-x-4 mt-8">
             
               
               
                <button className="bg-black text-white px-6 py-3 rounded flex gap-4 items-center">Get Started
                <Image src="/images/Vector1.png" alt="Badge" width={25} height={25} />
                </button>
            
                <button className="flex items-center space-x-2">
                  <i className="fas fa-play-circle text-2xl"></i>
                  <span className='flex items-center gap-4 font-semibold'> <Image src="/images/Group 3.png" alt="Badge" width={25} height={25} /><p>Watch Video</p></span>
                </button>
              </div>

              {/* Badge Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-8 flex items-center justify-center"
              >
                <Image src="/images/ribbon.png" alt="Badge" width={500} height={250} />
              </motion.div>
            </div>

            {/* Merged Mobiles with animation */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              {/* Phone 1 */}
              <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left of the viewport
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.2 }} // Animation duration
                whileHover={{ scale: 1.05 }}
                className="absolute z-30 left-[-2.5rem] rotate-[-20deg]"
              >
                <Image src="/images/iphone-1.png" alt="iPhone 1" width={400} height={420} />
              </motion.div>

              {/* Phone 2 */}
              <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.4, delay: 0.2 }} // Add delay for sequential appearance
                whileHover={{ scale: 1.05 }}
                className="absolute z-20 left-12 top-6 rotate-[-5deg]"
              >
                <Image src="/images/iphone-2.png" alt="iPhone 2" width={400} height={420} />
              </motion.div>


              {/* Phone 3 */}
              <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.6, delay: 0.4 }} // Add more delay for sequential appearance
                whileHover={{ scale: 1.05 }}
                className="absolute z-10 left-[8rem] top-12 rotate-[15deg]"
              >
                <Image src="/images/iphone-3.png" alt="iPhone 3" width={400} height={420} />
              </motion.div>
              <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.4, delay: 0.2 }} // Add delay for sequential appearance
                whileHover={{ scale: 1.05 }}
                className="absolute z-0 left-12 top-[-2rem] rotate-[-15deg] star-rotate"
              >
                <Image src="/images/ring.png" alt="ring" width={400} height={420} />
              </motion.div>

            </div>
          </div>
        </section>


    
        {/* Features Section */}
        <section className="py-16 relative">
          {/* Add rotating stars in the Features Section */}
          <Image src={star} alt="Star" className="absolute top-8 right-72 w-8 h-8 star-rotate" />
          <Image src={star} alt="Star" className="absolute bottom-32 left-16 w-6 h-6 star-rotate" />

          <div className="flex justify-between items-center">
            <div className="w-1/2 z-10">
            <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.4, delay: 0.2 }} // Add delay for sequential appearance
                whileHover={{ scale: 1.05 }}>
              <Image src="/images/Group 35933.png" alt="App preview" width={600} height={600} className="mx-auto" />
             </motion.div>
            </div>
            <div className="w-1/2 pl-16">
              <h2 className="text-2xl text-red-400 ">Features</h2>
              <h3 className="text-4xl font-extrabold gradient-text">Uifry Premium</h3>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-red-500 mt-1"></i>
                  <div>
                    <div className='flex gap-2'> 
                    <Image src="/images/star-05.png" alt="App preview" width={25} height={25} />
                    <h4 className="font-bold">Budgeting Intervals</h4>
                    </div>
                    <p className="text-gray-600">
                      Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-red-500 mt-1"></i>
                  <div>
                  <div className='flex gap-2'> 
                    <Image src="/images/cube-02.png" alt="App preview" width={25} height={25} />
                    <h4 className="font-bold">Budgeting Intervals</h4>
                    </div>
                    <p className="text-gray-600">
                      Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-star text-red-500 mt-1"></i>
                  <div>
                  <div className='flex gap-2'> 
                    <Image src="/images/cube-04.png" alt="App preview" width={25} height={25} />
                    <h4 className="font-bold">Budgeting Intervals</h4>
                    </div>
                    <p className="text-gray-600">
                      Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="pb-4 bg-black text-white rounded-lg relative">
          {/* Add rotating stars in the Footer Section */}
          <Image src={star} alt="Star" className="absolute top-8 left-10 w-6 h-6 star-rotate" />
          <Image src={star} alt="Star" className="absolute bottom-10 right-60 w-10 h-10 star-rotate" />

          <div className="flex items-center justify-between">
            <div className="text-left px-16">
              <h2 className="text-3xl font-bold">Ready To Get Started?</h2>
              <p className="mt-4">Risus Habitant Leo Egestas Mauris Diam Eget Monri Tempus Vulputate.</p>
              <button className="z-100 bg-white text-black px-6 py-3 mt-8 rounded flex items-center gap-4">Download App
              <Image src="/images/apple.png" alt="App preview" width={25} height={25} />
              </button>
            </div>
            <div className="mt-8 z-10">
              <Image src="/images/iPhone 13 Pro.png" alt="App preview" width={400} height={250} />
            </div>
             
          </div>
          <motion.div
                initial={{ x: -300, opacity: 0 }} // Start from outside the left
                animate={{ x: 0, opacity: 1 }} // Animate to the center
                transition={{ duration: 1.4, delay: 0.2 }} // Add delay for sequential appearance
                whileHover={{ scale: 1.05 }}
                className="absolute z-0 left-[-2rem] top-[7rem] rotate-[-15deg]"
              >
                <Image src="/images/ring 2.png" alt="ring" width={400} height={420} />
              </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8">
        <p>Copyright 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
}
