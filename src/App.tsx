import "./App.scss";
import TextPage from "./components/TextPage";

import Navbar from "./container/Navbar/Navbar";
import Wrapper from "./wrapper/Wrapper";
import { useTranslation } from "react-i18next";
import Form from "./container/Form/Form";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="app">
      <Wrapper>
        <Navbar />
        <div className="wrapper_about">
        <TextPage
        title={t("about.title")}
        date={t("about.date")}
        chunkTitle={t("about.chunkTitle")}
        chunkSubtitle={t("about.chunkSubtitle")}
        chunkText={t("about.chunkText")}
        chunkLink={t("about.chunkLink")}
        locationText={t("about.locationText")}
        />
      <TextPage
        title={t("contacts.title")}
        date={t("contacts.date")}
        chunkTitle={t("contacts.chunkTitle")}
        chunkSubtitle={t("contacts.chunkSubtitle")}
        chunkText={t("contacts.chunkText")}
        chunkLink={t("contacts.chunkLink")}
        locationText={t("contacts.locationText")}
        />
        </div>
        <div className="wrapper_rest">

       <TextPage
        title={t("educationMas.title")}
        date={t("educationMas.date")}
        chunkTitle={t("educationMas.chunkTitle")}
        chunkSubtitle={t("educationMas.chunkSubtitle")}
        chunkText={t("educationMas.chunkText")}
        chunkLink={t("educationMas.chunkLink")}
        locationText={t("educationMas.locationText")}
      />
      <TextPage
        title={t("educationBS.title")}
        date={t("educationBS.date")}
        chunkTitle={t("educationBS.chunkTitle")}
        chunkSubtitle={t("educationBS.chunkSubtitle")}
        chunkText={t("educationBS.chunkText")}
        chunkLink={t("educationBS.chunkLink")}
        locationText={t("educationBS.locationText")}
        />
       <TextPage
        title={t("employment.title")}
        date={t("employment.date")}
        chunkTitle={t("employment.chunkTitle")}
        chunkSubtitle={t("employment.chunkSubtitle")}
        chunkText={t("employment.chunkText")}
        chunkLink={t("employment.chunkLink")}
        locationText={t("employment.locationText")}
      />
       <TextPage
        title={t("projects.title")}
        date={t("projects.date")}
        chunkTitle={t("projects.chunkTitle")}
        chunkSubtitle={t("projects.chunkSubtitle")}
        chunkText={t("projects.chunkText")}
        chunkLink={t("projects.chunkLink")}
        locationText={t("projects.locationText")}
      />
    </div>
    <Form />
      </Wrapper>
    </div>
  );
};

export default App;
