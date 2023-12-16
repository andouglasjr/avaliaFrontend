import React, { useState, useEffect } from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import ButtonsOfList from "./sidebarButtons";

function buttonList(props) {
    const { label, my, extra, mx, mb, mt, icon, w, h, ml, ...rest } = props;

    const mock = [
        {
        text: "A ciência é a luz que ilumina as trevas da ignorância",
        path: "/evaluationScreen",
        },
        {
        text: "A persistência da violência contra a mulher na sociedade brasileira",
        path: "/evaluationScreenn",
        },
        {
        text: "O estigma associado às doenças mentais na sociedade brasileira",
        path: "/evaluationScreenn",
        },
        {
        text: "Democratização do acesso ao cinema no Brasil",
        path: "/evaluationScreenn",
        },
    ];

    const simulacao = mock;

    return (
        <>
            <Flex flexDirection="column">
                {simulacao.map((s) => {
                    return <ButtonsOfList path={s.path} startText={s.text} mx={ mx } />
                })}
            </Flex>
        </>
    )
}

export default buttonList;