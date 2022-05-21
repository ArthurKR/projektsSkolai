import React from 'react'
import "./dati.css"
import { useNavigate } from "react-router-dom";
import HpNavig from './HpNavig';
export default function Dati() {

    const vielas = require('./vielas.json');
    const navigate = useNavigate();

    function backToHome() {
        navigate('/');
    }

    return (
        <>

            <div style={{ paddingTop: "100px", left: "20%", position: "absolute" }}>

                <HpNavig />

                <h1>PUBLISKĀ DATUBĀZE</h1>

                {vielas.map(function (key, val) {

                    return (<>
                        <div>
                            <p style={{ width: "100px" }}>{key.apakstips}</p>
                            <p style={{ width: "50px" }}>{key.daudzums}</p>
                            <p style={{ width: "50px" }}>{key.id}</p>
                            <p style={{ width: "400px" }}>{key.komentari}</p>
                            <p style={{ width: "30px" }}>{key.mervienibas}</p>
                            <p style={{ width: "200px" }}>{key.nosaukums}</p>
                            <p style={{ width: "50px" }}>{key.skaits}</p>
                            <p style={{ width: "100px" }}>{key.tips}</p>
                        </div>
                    </>
                    );
                })}
            </div>

        </>
    )

}
