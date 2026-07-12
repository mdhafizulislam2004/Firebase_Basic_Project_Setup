import { use } from "react";
import { AuthContexts } from "../Contexts/AuthContexts/AuthContexts";

const Home = () => {

    const authInfo=use(AuthContexts)
    console.log(authInfo);

    return (
        <div>
            <h1>This Is Home Secton</h1>
        </div>
    );
};

export default Home;