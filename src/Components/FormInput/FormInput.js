

import { Group, FormInputLabel, FormInputStyle } from "./FormInput.styles";
const FormInput = ({
    label, ...otherProps
}) => {
    return (
        <Group>
            <FormInputStyle {...otherProps} />
            {
                label && (

                    <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
                )
            }
        </Group>
    )
}

export default FormInput