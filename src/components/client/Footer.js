import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-3">
              <h5>Plan de site</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm-3">
              <h5>Espace Client</h5>
              <address>
                Inscription
                <br />
                Meilleures ventes
                <br />
                Nouveaux automobiles
                <br />
                
              </address>
            </div>
            <div className="col-6 col-sm-3">
              <h5>Guide pratique</h5>
              <address>
                Procédure d'achat
                <br />
                Demander avis
                <br />
                
              </address>
            </div>
            <div className="col-6 col-sm-3">
              <h5>Qui sommes-nous</h5>
              <address>
                Contacter-nous
                <br />
                A propos de nous
                <br />
                Tunis, Tunisia
                <br />
                <i className="fa fa-phone fa-lg" />: +216 58 380 123
                <br />
                
                <i className="fa fa-envelope fa-lg" />:{" "}
                <a href="mailto:confusion@food.net">ahmed@gmail.com</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google ml-1"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus" />
                </a>
                <a
                  className="btn btn-social-icon btn-facebook ml-1"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin ml-1"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  className="btn btn-social-icon btn-google ml-1"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube" />
                </a>
                <a className="btn btn-social-icon ml-1" href="mailto:">
                  <i className="fa fa-envelope-o" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2019 ABLAAAA :p</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
