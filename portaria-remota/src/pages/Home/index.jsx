import { Banner } from "../../components/banner";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import Listagem from "../../components/listagem";
import { Main } from "../../components/Main";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner showButtonVoltar={false} /> {/* Botão "Voltar" não será exibido */}
      <Main>
        <Listagem />
      </Main>
      <Footer />
    </div>
  );
}