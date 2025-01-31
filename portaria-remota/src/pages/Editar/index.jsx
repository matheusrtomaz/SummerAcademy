import { Banner } from "../../components/banner";
import Editando from "../../components/editando";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/Main";

export default function Editar() {
    return (
        <div>
            <Header />
            <Banner showButtonVoltar={true} />
            <Main isCadastro={true}>
                <Editando />
            </Main>
            <Footer />
        </div>
    );
}
