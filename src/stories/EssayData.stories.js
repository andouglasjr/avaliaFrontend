import EssayData from '../components/essayData/EssayData'

export default {
    title: 'Organisms/EssayData',
    component: EssayData,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
};

export const Default = {
    args: {
        tema: "",
        redatores: "",
        nota: "",
        anulada: ""
    }
 
}