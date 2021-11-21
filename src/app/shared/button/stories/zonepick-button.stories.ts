// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button/button.component'
// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Zonepick-btn',
    component: ButtonComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
    type: "button",
    btnMode: "primary",
    value: "Button"
};

export const Secondary = Template.bind({});
Secondary.args = {
    value: 'Submit',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    value: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    value: 'Button',
};
