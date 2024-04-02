import { init, Form } from "@feathery/react";
import React from "react";
import envFunction from "../../netlify/functions/functions.mjs";

const RSVP = () => {
  const sdk = envFunction();
  init(`${sdk}`);

  return <Form formName="Ridenour-Forst Wedding RSVP" />;
};

export default RSVP;
