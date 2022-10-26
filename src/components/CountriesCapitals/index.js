import React, { useEffect, useState, useCallback, useRef } from "react";
import "./styles.css";

export default function CountriesCapitals({ countriescapitalslist }) {

    const [countcaplist, setCountcaplist] = useState([]);
    const [data, setData] = useState({});
    const [answer, setAnswer] = useState({ option1: '', option2: '' });
    const divRef = useRef();

    const shuffle = useCallback((arr) => {
        let ctr = arr.length;
        let temp;
        let index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;
    }, []);

    function checkAnswers(ev) {
        let option = ev.target.innerHTML;
        //console.log(option);
        if (!answer.option1) {
            console.log('option1', answer);
            setAnswer({ ...answer, option1: option });

        } else {
            console.log('option2', answer);
            setAnswer({ ...answer, option2: option });
        }
        ev.target.style.backgroundColor = "#fef0a5";
    }

    useEffect(() => {
        setData(countriescapitalslist);
        setCountcaplist(shuffle(Object.keys(countriescapitalslist).concat(Object.values(countriescapitalslist))))
    }, []);

    useEffect(() => {
        if (answer.option1 && answer.option2) {
            console.log("verificando: ", data.hasOwnProperty(answer.option1), data.hasOwnProperty(answer.option2))
            if (data.hasOwnProperty(answer.option1) || data.hasOwnProperty(answer.option2)) {
                console.log('kj')
                //#61d4b0
            } else {
                divRef.current.childNodes.forEach((el) => {
                    if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                        el.style.backgroundColor = "#c91842";
                    }
    
                })
            }
            setAnswer({ option1: '', option2: '' });
            divRef.current.childNodes.forEach((el) => {
                if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                    setTimeout(() => el.style.backgroundColor = "#fff", 700)
                }

            })
        }
    }, [answer]);

    return (
        <div ref={divRef} className="countcapcontainer">
            {countcaplist?.map((element) => {
                return (
                    <span
                        onClick={(e) => checkAnswers(e)}
                        key={element}
                        className="countcap"
                        style={{ backgroundColor: '#fff' }}
                    >
                        {element}
                    </span>
                )
            })}
        </div>
    );
}
