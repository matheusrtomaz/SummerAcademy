import React from "react";
import HomeStyles from "./HomeStyles";
import { Input } from "../components/Input";
import { Title } from "../components/Title";

function Home() {
    return (
        <HomeStyles>
            <div className="home">
                <Title />
                <div>
                    <Input />
                    <Input />
                    <Input />
                </div>
            </div>
        </HomeStyles>
    );
}

export default Home;
