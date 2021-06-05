import React from "react";
import Synonyms from "./Synonyms"
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
              <strong>Definition:</strong> 
              <div className="definitions">
                {definition.definition}
              </div>
              <em> 
                <div className="example">
                  {definition.example}
                </div>
              </em>
              <div className="synonyms">
                <Synonyms synonyms={definition.synonyms} />
                </div>
                <br></br>
          </div>
        );
      })}
    </div>
  );
}
