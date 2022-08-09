import React, { useState, useEffect } from "react";
import Link from "next/link";
import {  BsBagXFill } from "react-icons/bs";

const Canceled = () => {
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="cancel-icon">
          <BsBagXFill />
        </p>
        <h3>
          Votre commande n'a pu aboutir. Merci de vérifier votre moyen de
          paiement.
        </h3>

        <p className="description">
          Pour toutes questions, merci d'envoyer un email à
          <a className="email" href="mailto:mirnakona@gmail.com">
            order@kingdigital.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuer mes achats
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Canceled;
