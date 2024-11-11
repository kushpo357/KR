import Navbar from './navbar/Navbar'

// Import the image
import krtshirtImage from '../assets/tshirtkr.jpg';

const product = {
  name: 'ಕನ್ನಡ Rajyotsava ',
  price: '₹350',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: krtshirtImage, // Use the imported image here
    },
  ],
  
  description: `
    <p>Get your merch now</p>
  `
}


export default function Tshirt() {

  return (
    <>
      <Navbar />
      <div className="bg-[#151515] min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <img src= {krtshirtImage} className='w-[38vw] h-[22.5vw]' />

            {/* Product info */}
            <div className="mt-10 px-4  text-center ">
            <h1 className="text-[5.4vh] font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
  {product.name}
</h1>
<h1 className='text-[3.6vh] text-white'>T-shirt</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div
                  className="text-base text-white space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                <div className="mt-10 flex sm:flex-col1 justify-center">
                  <button
                    type="submit"
                    className="max-w-xs flex-1 bg-yellow-400  text-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium  hover:bg-red-500  hover:text-white shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                  >
                    Buy Now
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>
                {/* Additional details can go here */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
