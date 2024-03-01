import "./div1.css";
import backgroundVedio from "../../assets/video (2160p)(1).mp4";
import { useState } from "react";
import photo from '../../assets/winner-trophy-award-group-happy-people-celebrate-winning-business-success-employee-achieveme_94574-14369.avif';

export default function Div1() {
  const [title, setTitle] = useState("Terry Baker");
  const [text, setText] = useState(
    "A program is never less than 90% complete, and never more than 95% complete"
  );
  const [exelence,setExlence] = useState(
    'Casey Beidel and Brian Sheng-Kai Li are the recipients of the 2024 Pyne Prize, the highest general distinction for undergraduates.'
    );
  const [Knowledge,setKnowledge] = useState(
    'Pasquale Toscano, José de Jesús Montaño López, Geneva Smith, and Ryan Unger are Jacobus Fellows, the top honor for graduate students. '
  );
  return (
    <>
      <div className="main-panel">
        <div className="upper">
          <video className="vediocontainer" autoPlay loop muted playsInline>
            <source src={backgroundVedio} />
          </video>
          <div className="uppertext">
            <span className="u-title">{title}</span>
            <span className="u-text">{text}</span>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="lower">
          <div className="c-col">
            <div className="imagecontainer">
            <img src={photo} className="image" />
            </div>
              <div className="textarea">
                <span className="title">
                Pursuing Excellence
                </span>
                <span className="text">
                 {exelence}
                </span>
              </div>
          </div>
          <div className="c-col">
           <div className="imagecontainer">
           <img src={photo} className="image" />
           </div>
              <div className="textarea">
                <span className="title">
                Advancing Scholarly Knowledge
                </span>
                <span className="text">
                {Knowledge}
                </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
