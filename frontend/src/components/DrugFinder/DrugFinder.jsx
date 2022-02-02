import React, { useState } from "react";
import "./DrugFinder.scss";
import { Link } from "react-router-dom";
import SearchDrug from "./SearchDrug";


const SUBSTANCE = ["Ibuprofen", "Paracetamol"]
const DRUG = ["Ibum Forte", "Ibufen", "Ibuprom", "Nurofen", "Paracetamol DOZ", "Pedicetamol", "Apap Junior"]

const DrugFinder = () => {
    const [sunstance, setSubstance] = useState("Ibuprofen", "Paracetamol")
    const [drug, setDrug] = useState("")
 
return (
    <div className="drug-finder">
        <form>
            <label htmlFor="substance">
                Substancja czynna
                <select
                    id="substance"
                    value={sunstance}
                    onChange={(e) => {
                        return setSubstance(e.target.value);
                    }}
                    onBlur={(e) => setSubstance(e.target.value)}
                >
                <option value=""></option>
                {SUBSTANCE.map(substance => (
                      <option value={substance} key={substance}>
                          {substance}
                      </option>
                ))}
                </select>
            </label>
            <label htmlFor="drug">
                Lekarstwo
                <select
                    id="drug"
                    value={drug}
                    onChange={(e) => setDrug(e.target.value)}
                    onBlur={(e) => setDrug(e.target.value)}>
                <option value=""></option>
                {DRUG.map(drug => (
                      <option value={drug} key={drug}>
                          {drug}
                      </option>
                    ))}
                </select>
            </label>
        </form>
    </div>
    );
}

export default DrugFinder;
