import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Adminfooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='https://twitter.com/i/flow/login' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://google.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='
https://www.instagram.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='http://www.linkedin.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='http://github.com/' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Boston Travels
              </h6>
              <p>
              We believe that there is a better way to provide travel packages. Establised in early 2000s, we curate customised packages to people who need a breeze in their life. We are a team of 50, working tirelessly to provide you the best travel options.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Packages</h6>
              <p>

                <a href='/products/category/63936b563c96264d8767f114' className='text-reset'>
                  Boston Packages
                  
                </a>
              </p>
              <p>
                <a href='/products/category/639369233c96264d8767f0fd' className='text-reset'>
                  Vacation Packages
                </a>
              </p>
              <p>
                <a href='/products/category/639367943c96264d8767f0f9' className='text-reset'>
                   Visit Qatar 
                </a>
              </p>
               <p>
                <a href='/products/category/639365f63c96264d8767f0e4' className='text-reset'>
                  Family Packages
                </a>
              </p> 
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='/faq' className='text-reset'>
                  FAQ
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Boston, Massachussets 02215, USA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contactus@bostontravels.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright Boston Travels
        
      </div>
    </MDBFooter>
  );
}