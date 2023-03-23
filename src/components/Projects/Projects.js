import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Truly Amor"
              description="We’re a sentiment-first brand that freezes your most adored memories. Journals and keepsakes you’ll pass from generation to generation. Precious memories forever preserved and recorded so you can come back to them time and time again."
              ghLink="https://github.com/douglasmaringa"
              demoLink="https://www.trulyamor.com.au/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Poppy Socks"
              description="A Website built with shopify custom theme using html css javascript and liquid , set up klaviyo email campaigns to help boost sales."
              ghLink="https://github.com/douglasmaringa"
              demoLink="https://www.poppysocks.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kcchicdesigns"
              description="A family run Jewelery business based in Kansas City, MO. I built this website using shopify custom theme using html css javascript and liquid , set up klaviyo email campaigns to help boost sales."
              ghLink="https://github.com/douglasmaringa"
              demoLink="https://www.kcchicdesigns.com/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="The Woof Warehouse"
              description="A shopify store to sell products like face masks use the funds to help rescue Dogs. Built using shopify custom theme using html css javascript and liquid , set up klaviyo email campaigns to help boost sales."
              ghLink="https://thewoofwarehouse.com/"
              demoLink="https://thewoofwarehouse.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Peak and Valley"
              description="A shopify store to sell herbal blends. Built using shopify custom theme using html css javascript and liquid , set up klaviyo email campaigns to help boost sales."
              ghLink="https://peakandvalley.co/"
               demoLink="https://peakandvalley.co/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Premetech"
              description="A shopify Store to sell a single product the Gooseneck Electric Kettle. Built using shopify custom theme using html css javascript and liquid , set up klaviyo email campaigns to help boost sales."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://premetech.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
