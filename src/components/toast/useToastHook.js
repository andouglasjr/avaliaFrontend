import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function useToastHook() {
    const [state, setState] = useState(undefined);
    const toast = useToast();

    useEffect(() => {
        if (state) {
            const { msg, status, title } = state;

            toast({
                title: title,
                description: msg,
                status: status,
                duration: 4000,
                isClosable: true
            })
        }
    }, [state, toast])

    return [state, setState];
}

