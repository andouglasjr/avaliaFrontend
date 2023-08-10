import { ToastAction } from '../components/toast/Toast';

export default {
    title: 'Organisms/Toast',
    component: ToastAction,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
}

export const Default = {
    feedback: 'Redação X alterada com sucesso!',
    label: 'Mostrar Toast',
    type: 'success',
    variant: 'primary'
}