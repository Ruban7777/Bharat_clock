import BCtitle from "./components/BCtitle";
import BCdisc from "./components/BCdisc";
import BCtime from "./components/Bctime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function BharatClock() {
  return (
    <div>
      <center>
        <BCtitle></BCtitle>
        <BCdisc></BCdisc>
        <BCtime></BCtime>
      </center>
    </div>
  );
}

export default BharatClock;
