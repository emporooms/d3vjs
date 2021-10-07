import { useState } from 'react';
import { decode } from 'html-entities'
import {
    Button,
    Label,
} from 'theme-ui/node_modules/@theme-ui/components';
import Input from 'components/input';

const NewsletterForm = ({ status, message, onValidated }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    /**
     * Handle form submit.
     *
     * @return {{value}|*|boolean|null}
     */
    const handleFormSubmit = () => {

        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    /**
     * Handle Input Key Event.
     *
     * @param event
     */
    const handleInputKeyEvent = (event) => {
        setError(null);
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            handleFormSubmit();
        }
    }

    /**
     * Extract message from string.
     *
     * @param {String} message
     * @return {null|*}
     */
    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", width: "100%", flexDirection: 'column', alignItems: 'center' }}>
                <Label htmlFor="email" variant="styles.srOnly">
                    Email
                </Label>
                <div style={{ display: 'flex', width: '100%' }}>
                    <Input
                        onChange={(event) => setEmail(event?.target?.value ?? '')}
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        onKeyUp={(event) => handleInputKeyEvent(event)}
                        style={{ marginRight: "20px" }}
                    />
                    <Button variant="primary" onClick={handleFormSubmit}>Request a Demo</Button>
                </div>
                <span style={{ paddingTop: '15px', paddingBottom: '15px', fontWeight: 'bold' }}>or</span>
                <Button style={{ width: '100%' }} onClick={() => window.open("https://gumroad.com/l/SceTf", "_blank")} variant="primary">
                    Reserve Your Spot</Button>
            </div>
            <div className="newsletter-form-info" style={{ paddingTop: "20px" }}>
                {status === "sending" && <div>Sending...</div>}
                {status === "error" || error ? (
                    <div
                        className="newsletter-form-error"
                        dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                    />
                ) : null}
                {status === "success" && status !== "error" && !error && (
                    <p>Thank you for Requesting a demo. We'll get back shortly.</p>
                )}
            </div>
        </div>
    );
}

const styles = {
    chimpInput: {
        mr: ['15px'],
        minHeight: ['45px', null, null, 60, 50, null, 60],
    },
    chimpButton: {

    }
}

export default NewsletterForm
