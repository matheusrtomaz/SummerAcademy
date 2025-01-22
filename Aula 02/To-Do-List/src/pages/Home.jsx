import React from "react";
import HomeStyles from "./HomeStyles";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { Items } from "../components/Items";
import { Finish } from "../components/Finish";

function Home() {
    return (
        <HomeStyles>
            <div className="home">
                <Title />
                <div>
                    <Input />
                </div>
                <div>
                    <Items />
                </div>
                <Finish />
            </div>
        </HomeStyles>
    );
}

export default Home;
