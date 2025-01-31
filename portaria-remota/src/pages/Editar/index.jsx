import { Banner } from "../../components/banner";
import ButtonVoltar from "../../components/buttonvoltar";
import Editando from "../../components/editando";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/Main";

export default function Editar() {
  return (
    <div>
      <Header />
      <Banner />
      <ButtonVoltar />
      <Main isCadastro={true}> {/* Passando a prop isCadastro */}
        <Editando />
      </Main>
      <Footer />
    </div>
  );
}