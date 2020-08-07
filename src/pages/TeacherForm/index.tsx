import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="We're glad that you wanna teach someone."
                description="First you have to fill our signup form." />

            <main>
                <fieldset>

                    <legend>Personal data</legend>
                    <Input name="name" label="Full name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />

                </fieldset>

                <fieldset>

                    <legend>About your classes</legend>
                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Cost per hour" />

                </fieldset>

                <footer>

                    <p>
                        <img src={warningIcon} alt="Wasrning"/>
                        Warning! <br/>
                        Please fill all form fields.
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;
