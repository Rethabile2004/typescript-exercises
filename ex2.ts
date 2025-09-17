type TextInput = { type: "text"; value: string };
type CheckboxInput = { type: "checkbox"; checked: boolean };
type SelectInput = { type: "select"; options: string[]; selected: string };

type FormInput=TextInput|CheckboxInput|SelectInput
function handleInput(input:FormInput):void{
    switch(input.type){
        case 'text':
            console.log('This is a text input');
            break;
        case 'checkbox':
            console.log('This is a checkbox input');
            break;
            case 'select':
        console.log('This is a text input');
            break;
            default:
                console.log('Invalid use input');
            break;
    }
}