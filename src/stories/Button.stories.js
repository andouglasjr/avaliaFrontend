import { CustomButton } from "../components/button/Button";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Molecules/Button",
    component: CustomButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
    args: {
        label: "Label",

    },
};

export const Primary = {
    args: {
        variant: "primary",
        label: "Label",
    },
};

export const Secondary = {
    args: {
        variant: "secondary",
        label: "Label",
    },
};

export const Ghost = {
    args: {
        variant: "ghost",
        label: "Label",

    },
};

export const Link = {
    args: {
        variant: "link",
        label: "Label",
    },
};