import React, {useState, useEffect} from "react";
import Sidebar from "../sidebar/Sidebar";

export default function getEssay() {

    const [essayT, setEssay] = useState('-');
    const [essayP, setPath] = useState('-');

    useEffect(() => {
        fetch('', 
        {
            method:'GET', 
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
              },
        })
        .then(response => {
            console.log(response.ok);
            const jsonResponse = {"turnEssayList":[{"essayTheme":"O trabalho na construção da dignidade humana", "path": "http://localhost:5173/competences/O-trabalho-na-constru%C3%A7%C3%A3o-da-dignidade-humana"}]}
            return jsonResponse;
        })
        .then(turnEssayList => {
            const essayList = turnEssayList.turnEssayList;
            const essayT = essayList[0].essayTheme;
            const essayP = essayList[0].path;
            setEssay(essayT);
            setPath(essayP);
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
        });
    }, []);

    const routes = [{
            name: { essayT },
            path: { essayP },
        },
    ];

  return (
    <Sidebar essayThemes={ essayT } essayPaths={ essayP } />
  );
}