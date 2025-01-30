import { Banner } from "../../components/banner";
import Cadastrando from "../../components/cadastrando";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

export default function Cadastro() {
  return (
    <div>
      <Header />
      <Banner />
      <Main>
        <Cadastrando />
      </Main>
      <Footer />
    </div>
  );
}

// name={item.name}
// date={item.date}
// time={item.time}
// typedoc={item.typedoc}
// numdoc={item.numdoc}
// obs={item.obs}
