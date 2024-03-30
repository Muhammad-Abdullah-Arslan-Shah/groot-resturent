import React from "react";
import { Link } from "react-router-dom";
import { motion,useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook from react-intersection-observer library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  const controls = useAnimation(); // Initialize animation controls using useAnimation hook
  const [ref, inView] = useInView(); // Initialize ref and inView variables using useInView hook
  // Trigger animation when component comes into view
  if (inView) {
    controls.start({ opacity: 1, y: 0 }); // Start animation to set opacity to 1 and x position to 0
  }

  return (
    <motion.div
    className="mb-2 text-light" 
    style={{ backgroundColor: "black", padding: "30px 20px"}}
    ref={ref}
          initial={{ opacity: 0, y: 50 }} // Set initial animation properties for the logo div
          animate={controls} // Apply animation controls
          transition={{ duration: 0.3 }} // Set transition duration
        >
   
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <h3 className="my-3">
              <span className="border-bottom border-warning">
                The Groot Resturent
              </span>
            </h3>
            <p className="my-3">
           <h5>Address:</h5> Barki Rd, Block J Park View CHS, Near Paragon City Gate#1, Lahore, Punjab, Lahore 54000
            </p>
            <h5>Payment Method:</h5>
<p>Cash( Pickup, Delivery )</p>
            <p>
              <h5>Contact:</h5>
              <span className="mx-2">
                {" "}
                +92 323 1487456
              </span>
              <span className="mx-2">
                {" "}
                Email: info@groot.pk
              </span>
            </p>
            <p>
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-youtube  mx-2"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mr-5">
              <h5 className="my-3">
                <span className="border-bottom border-warning">
                  Useful Links
                </span>
              </h5>
              <Link to="/" className="d-block my-2">Home page</Link>
              <Link to="/Menu" className="d-block my-2">Menu</Link>
             

            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mr-3 my-3">
              <h5 className="my-3">
                <span className="border-bottom border-warning">
                  Opening hours:
                </span>
              </h5>
              
              <p>Monday - Sunday	05:00 PM - 02:00 AM</p>
              <span className="border-bottom border-warning">
             <h5>Delivery fees:</h5> 
                </span>
              
              <p>Min - Rs 0.00,Fee - Rs 50.00</p>
<p>Min - Rs 0.00,Fee - Rs 100.00</p>
<p>Min - Rs 2,000.00,Fee - Rs 150.00</p>
<p>Min - Rs 3,000.00,Fee - Rs 200.00</p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-top border-warning mt-3 pt-3">
        <small className="my-2">Copyright ©2024 The Groot. All Rights Reserved</small>
      </div>
    
    </motion.div>
  );
};

export default Footer;
