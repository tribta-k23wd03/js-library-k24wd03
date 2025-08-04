import Heading from "./child-components/Heading";
import Section from "./child-components/Section";
import "./Page.css";

function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Section>
            <Heading>Sub-sub-Heading</Heading>
            <Heading>Sub-sub-Heading</Heading>
            <Heading>Sub-sub-Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default Page;
