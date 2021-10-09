import type { NextPage } from "next";
import SafeEnviroment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          " Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Julio.lima"}
        picture={"https://github.com/Juliolimahen.png"}
        rating={3}
        description={"Ouro Verde"}
      />
      <UserInformation
        name={"Julio.Henrique"}
        picture={"https://github.com/Juliolimahen.png"}
        rating={3}
        description={"Ouro Verde"}
      />
    </div>
  );
};

export default Home;
