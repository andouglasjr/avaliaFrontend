import React, { useState, useRef } from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

export default function comment(props) {
    const { ml, mr, mt, mb, zIndex, h, w, text, display, position, ...rest } = props;

    return(
        <div>
            <Flex display={display} ml={ ml } h={ h } w={ w } bg="red" zIndex={ zIndex } >
                <Text position={ position } left="12px" mt="8px" textColor="neutralDark.4" textStyle="Body" textAlign="left">{ text }</Text>
            </Flex>
        </div>
    )
}