//Import from package.json
import React from "react";
//Import from components
import Section from "@component/Section";

// remove this when we get production photos.

const mountain = require("../../assets/images/jesus.png");
//Crafting the section for about
export default (props) => (
  <div>
    <Section {...props} nopad="true" reverse>
      <Section.Image src={mountain} />

      <Section.Body>
        <Section.Text>
          <Section.Heading>What is contemplative practice?</Section.Heading>
          <Section.Title></Section.Title>

          <p>
            Contemplative practice, also known as meditation, refers to the
            spiritual art of turning to the sacred within, through the
            disciplines of stillness and awareness. Through these simple
            practices we may be liberated from the resistances and
            self-orientated habits that veil the sacred.
          </p>

          <p>
            Ultimately, contemplative practice is not about mastering
            techniques, it’s about relationship. It’s the quiet, steady work of
            simply being here, fully present to the gift of our life. Which
            means it’s also the quiet, steady work of being present with and for
            those around us. Because all that we have, all that we are, is born
            in and from relationship.
          </p>
        </Section.Text>

        <Section.Link to="/guides">View our practice guides</Section.Link>
      </Section.Body>
    </Section>
  </div>
);
