import { init, Form } from "@feathery/react";
import React from "react";

const RSVP = () => {
  const sdk = process.env.REACT_APP_FEATHERY_TOKEN;
  console.log("AMR", sdk);
  init(`${sdk}`);

  return <Form formName="Ridenour-Forst Wedding RSVP" />;
};

export default RSVP;
