import { React } from "react";

const Home = props => {
    console.log(props);

    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}
export default Home;