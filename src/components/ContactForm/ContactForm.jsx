import { useState } from "react"
import { Button } from "../Button/Button"
import { ContactFormStyled } from "./ContactForm.styled"

export const ContactForm = () => {

    return (
        <ContactFormStyled>
            <fieldset>
                <div>
                    <label htmlFor="fullname">Navn:</label>
                    <input type="text" name="fullname" id="fullname" onChange={e => setData(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email"  onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="message">Besked:</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <div>
                    <Button $btncolor="green" $txtcolor="white">Send</Button>
                </div>
            </fieldset>
        </ContactFormStyled>
    )
}
