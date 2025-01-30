import { Banner } from "../../components/banner";
import ButtonVoltar from "../../components/buttonvoltar";
import Cadastrando from "../../components/cadastrando";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/Main";

export default function Cadastro() {
  return (
    <div>
      <Header />
      <Banner />
      <Main>
        <Cadastrando />
      </Main>
      <ButtonVoltar />
      <Footer />
    </div>
  );
}