import React, {useState} from 'react';
import './Volunteer.css';

function CheckFormValidity(FormArray)
{
    for (var i = 0; i < FormArray.length; i++)
    {
        if (FormArray[i] == "" && (i != 3 && i != 4))
        {
            return false;
        }
    }
    return true;
}

function GetBody(FormArray)
{
    const label_array = ["Teacher Name", "Age", "Email", "Phone number", "Please contact by phone number", "Instrument", "Found out about us from", "Statement about why"];

    let body = "";

    for (let i = 0; i < 8; i++)
    {
        body += "<strong>" + label_array[i] + "</strong>" + ": " + FormArray[i] + "<br><br>";
    }

    return body;
}

function GetThankYou()
{
    var response = "Thank you so much for registering with us! We will be in touch within two weeks!";
	response += "<br><br>";
	response += "This is an automated email which is not monitored. Do not reply to this email. If you have any questions or concerns, please email us at info@musicunbounded.org";
    return response;
}

function Redirect()
{
    window.location.href = "/#/thank-you";
}

function HandleRegistration(e, FormArray)
{
    if (!CheckFormValidity(FormArray))
    {
        alert("Please fill all required fields")
        return;
    }

    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: "register.musicunbounded@gmail.com",
            From: "noreplymusicunbounded@gmail.com",
            Subject: "Automatic Teacher Registration",
            Body: GetBody(FormArray),
        }).then(() => null);

    window.Email.send(
        {
            SecureToken: "37a95e7b-7fdd-4c23-8164-65168edc77f4",
            To: FormArray[2],
            From: "MU@musicunbounded.org",
            Subject: "Application Confirmation from M.U.",
            Body: GetThankYou(),
        }).then(() => Redirect());
}

function Volunteer()
{
    const [teacher_name, SetTeacherName] = useState("");
    const [email, SetEmail] = useState("");
    const [age, SetAge] = useState("");
    const [phone_number, SetPhoneNumber] = useState("");
    const [contact_by_phone, SetContactByPhone] = useState(false);
    const [preferred_instrument, SetPreferredInstrument] = useState("");
    const [platform, SetPlatform] = useState("");
    const [statement, SetStatement] = useState("");
    const [show_success, SetShowSuccess] = useState(false);

    function HandleSubmit(event)
    {
        event.preventDefault();
        const FormArray = [teacher_name, age, email, phone_number, contact_by_phone, preferred_instrument, platform, statement];
        HandleRegistration(event, FormArray);
    }

    return (
        <div id = "register-page-wrapper">
            <div id = "register-title">Apply to be a Volunteer</div>
            <div id = "register-form">
                <form id = "form-register-form" onSubmit = {HandleSubmit}>
                    <div>
                        <label htmlFor = "teacher-full-name-field">Teacher Full Name</label>
                        <br />
                        <input id = "teacher-full-name-field" className = "registration-wide-input-field" name = "teacher_name" type = "text" value = {teacher_name} onChange = {(e) => SetTeacherName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "email-field">Email</label>
                        <br />
                        <input name = "email" id = "email-field" className = "registration-wide-input-field" type = "text" value = {email} onChange = {(e) => SetEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "age-field">Age</label>
                        <br />
                        <input name = "age" id = "age-field" className = "registration-wide-input-field" type = "text" value = {age} onChange = {(e) => SetAge(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "phone-number-field">Phone Number (optional)</label>
                        <br />
                        <input name = "phone_number" id = "phone-number-field" className = "registration-wide-input-field" type = "text" value = {phone_number} onChange = {(e) => SetPhoneNumber(e.target.value)} />
                    </div>
                    <div>
                        <input name = "contact_by_phone" id = "phone-checkbox" type = "checkbox" value = {contact_by_phone} onChange = {(e) => SetContactByPhone(!contact_by_phone)} />
                        <label htmlFor = "phone-checkbox"> I would prefer to be contacted by phone</label>
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor = "preferred-instrument-field">What instrument(s) would you like to teach?</label>
                        <input name = "preferred_instrument" className = "registration-wide-input-field" value = {preferred_instrument} onChange = {(e) => SetPreferredInstrument(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor = "preferred-instrument-field">How did you find out about us?</label>
                        <select name = "platform" className = "registration-wide-input-field" value = {platform} onChange = {(e) => SetPlatform(e.target.value)}>
                            <option value="">Select an option</option>
                            <option value="kijiji">Kijiji</option>
                            <option value="social_media">Social Media</option>
                            <option value="friends_or_family">Friends/Family</option>
                            <option value="news">News</option>
                            <option value="google">Google</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "lesson-times-field">Why do you want to join Music Unbounded?</label>
                        <br />
                        <textarea name = "statement" id = "lesson-times-field" className = "registration-wide-input-field" value = {statement} onChange = {(e) => SetStatement(e.target.value)} />
                    </div>
                    <input onClick = {() => SetShowSuccess(true)} id = "submit-button" type = "submit" />
                </form>
            </div>
        </div>
    )
}

export default Volunteer