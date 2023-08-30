import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#45637d' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='6'>
              <div className='ratio ratio-16x9'>
                <iframe
                  className='shadow-1-strong rounded'
                  src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
                  title='YouTube video'
                  allowFullScreen
                  data-gtm-yt-inspected-2340190_699='true'
                  id='388567449'
                ></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}






// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white">
//       <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:text-left mb-4 md:mb-0">
//           <h3 className="text-xl font-semibold">Global Profit</h3>
//           <p className="text-gray-400">Все права защищены 2023г</p>
//         </div>
//         <div className="flex items-center space-x-6">
//           <a href="/" className="text-gray-400 hover:text-white">
//             Домой
//           </a>
//           <a href="image-list" className="text-gray-400 hover:text-white">
//             Галерея
//           </a>
//           <a href="cards" className="text-gray-400 hover:text-white">
//             Товары
//           </a>
//           <a href="about" className="text-gray-400 hover:text-white">
//             О Нас
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
