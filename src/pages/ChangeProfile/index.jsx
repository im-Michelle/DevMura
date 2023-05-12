import React from 'react'
import '../ChangeProfile/changeprofile.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextFields from '../../components/TextFields';
import { Formulario, Label, GroupInput, Input, LeyendaError, IconValidation } from './form';
import { faCoffee, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const ChangeProfile = () => {
    return (
        <div className="bodyChangeProfile">
            <Formulario action="">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <GroupInput>
                        <Input type="text" placeholder="Name" />
                        <IconValidation icon={faCheckCircle} />
                    </GroupInput>
                    <LeyendaError>Lorem Ipum</LeyendaError>
                </div>

                <div>
                    <Label >
                        <input type="checkbox" name="terms" id="terms" />
                        Agree terms and conditions.
                    </Label>
                </div>

                <div>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>ERROR:</b> Please fill the form correctly.
                    </p>
                </div>
            </Formulario>

        </div>
    )
}

export default ChangeProfile;