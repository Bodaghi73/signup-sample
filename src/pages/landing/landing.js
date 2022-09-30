//pages & componnents
import Header from "../../components/header/header";
import PlanningTravel from "../../components/planning travel/planning-travel";

//styles
import "./landing.scss";

function Landing() {
    return (
        <div className="landing">
            <Header></Header>
            <PlanningTravel></PlanningTravel>
        </div>
    );
}

export default Landing;