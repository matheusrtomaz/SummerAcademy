import { Banner } from "../../components/banner";
import Footer from "../../components/footer";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

export default function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Main />
            <Footer />
        </div>
    )
}