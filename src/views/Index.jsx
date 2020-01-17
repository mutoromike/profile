import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

// sections for this page/view
import Skills from "views/IndexSections/Skills.jsx";
import Tools from "views/IndexSections/Tools.jsx";
import Projects from "views/IndexSections/Projects.jsx";
import Download from "views/IndexSections/Download.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Skills />
            <Tools />
            <Projects />
            <Download />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
