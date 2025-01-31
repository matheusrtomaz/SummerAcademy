import { Banner } from "../../components/banner";
import Cadastrando from "../../components/cadastrando";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/Main";

export default function Cadastro() {
  return (
    <div>
      <Header />
      <Banner showButtonVoltar={true} /> {/* Botão "Voltar" será exibido */}
      <Main isCadastro={true}>
        <Cadastrando />
      </Main>
      <Footer />
    </div>
  );
}