import React from 'react';
import Base from '../core/Base';


const Security = () => {

    return (
        <Base>
            <div style={{ "padding": "30px" }}><div ><div><h2>Safe and Secure Shopping</h2>
                <p><strong>Is it safe to use my credit/debit card on Buyout ?</strong></p>
                <p>Your online transaction on Buyout is secure with the highest levels of transaction security currently available on the Internet. Buyout uses 256-bit encryption technology to protect your card information while securely transmitting it to the respective banks for payment processing.
All credit card and debit card payments on Buyout are processed through secure and trusted payment gateways managed by leading banks. Banks now use the 3D Secure password service for online transactions, providing an additional layer of security through identity verification.</p>
                <p><strong>Does Buyout store my credit/debit card infomation?</strong></p>
                <p>Buyout stores the first 6 and last 4 digits of your card number in a secure and encrypted manner. The first 6 digits (also known as the Bank Identification Number) are used to identify the bank name and country where your card was issued. The first 6 and last 4 digits are together used for fraud detection and prevention purposes.</p>
                <h2 id="payment-options">Payment Options</h2>
                <p><strong>What credit/debit cards are accepted on Buyout?</strong></p>
                <p>We accept VISA, MasterCard, Maestro, Rupay, American Express, Diner's Club and Discover credit/debit cards.</p>
                <p><strong>Do you accept payment made by credit/debit cards issued in other countries?</strong></p>
                <p>Yes! We accept VISA, MasterCard, Maestro, American Express credit/debit cards issued by banks in India and in the following countries:
                Australia, Austria, Belgium, Canada, Cyprus, Denmark, Finland, France, Germany, Ireland, Italy, Luxembourg, the Netherlands, New Zealand, Norway, Portugal, Singapore, Spain, Sweden, the UK and the US.
Please note that we do not accept internationally issued credit/debit cards for eGV payments/top-ups.</p>
                <p><strong>What other payment options are available on Buyout?</strong></p>
                <p>Apart from Credit and Debit Cards, we accept payments by Internet Banking (covering 44 banks), Cash-on-Delivery, Equated Monthly Installments (EMI), E-Gift Vouchers, PhonePe UPI and PhonePe wallet.</p>


            </div></div></div>

        </Base>
    )
}



export default Security