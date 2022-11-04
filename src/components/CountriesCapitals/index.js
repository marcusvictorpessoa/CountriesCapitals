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
        if (!answer.option1) {
            setAnswer({ ...answer, option1: option });
        } else {
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
            if (!!(data.hasOwnProperty(answer.option1) ^ data.hasOwnProperty(answer.option2))) {
                const option1 = Object.getOwnPropertyDescriptor(data, answer.option1);
                const option2 = Object.getOwnPropertyDescriptor(data, answer.option2);
                if (!!option1?.configurable) {
                    if (option1.value === answer.option2) {
                        divRef.current.childNodes.forEach((el) => {
                            if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                                el.style.backgroundColor = "#61d4b0";
                            }
                        })
                        setTimeout(() => setCountcaplist(countcaplist.filter((el) => {
                            if (!(answer.option1 !== el ^ answer.option2 !== el)) {
                                return el
                            }
                        })), 700);
                    } else {
                        divRef.current.childNodes.forEach((el) => {
                            if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                                el.style.backgroundColor = "#c91842";
                            }

                        })
                    }
                } else {
                    if (option2.value === answer.option1) {
                        divRef.current.childNodes.forEach((el) => {
                            if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                                el.style.backgroundColor = "#61d4b0";
                            }
                        })
                        setTimeout(() => setCountcaplist(countcaplist.filter((el) => {
                            if (!(answer.option1 !== el ^ answer.option2 !== el)) {
                                return el
                            }
                        })), 700);
                    } else {
                        divRef.current.childNodes.forEach((el) => {
                            if (el.style.backgroundColor !== 'rgb(255, 255, 255)') {
                                el.style.backgroundColor = "#c91842";
                            }

                        })
                    }
                }

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
            {countcaplist.length === 0 && <span className="congrulations">Congrulations!!</span>}
        </div>
    );
}
