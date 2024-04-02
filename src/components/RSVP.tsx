import { init, Form } from "@feathery/react";
import React from "react";

function RSVP() {
  const sdk = process.env.FEATHERY_SDK;
  init(`${sdk}`);

  return <Form formName="Ridenour-Forst Wedding RSVP" />;
}

export default RSVP;
