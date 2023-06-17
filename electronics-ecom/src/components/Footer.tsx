
import "../Footer.css"

const Footer =()=>{
    return(
        <div className="footer-section-component">
        <div className="outer_footer_section">
            <div className="footer_section" >
                <div className="inner_footer_section_spans">
                    <span style={{ fontWeight: "500" }}>COMPANY</span>
                    <span>About Medizone</span>
                    <span>Customers Speak</span>
                    <span>In the News</span>
                    <span>Career</span>
                    <span>Contact</span>
                </div>
                <div className="inner_footer_section_spans">
                    <span style={{ fontWeight: "500" }} >OUR POLICIES</span>
                    <span>Terms and Conditions</span>
                    <span>Privacy Policy</span>
                    <span>Fees and Payments Policy</span>
                    <span>Shipping and Delivery Policy</span>
                    <span>Return, Refund and Cancellation Policy</span>
                </div>
                <div className="inner_footer_section_spans">
                    <span style={{ fontWeight: "500" }}>SHOPPING</span>
                    <span>Browse by A-Z</span>
                    <span>Browse by Manufacturers</span>
                    <span>Health Articles</span>
                    <span>Offers / Coupons</span>
                    <span>FAQs</span>
                </div>
                <div className="inner_footer_section_spans">
                    <span style={{ fontWeight: "500" }}>SOCIAL</span>
                    <span>Patients Alike</span>
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>LinkedIn</span>
                    <span>Youtube</span>
                </div>
                <div className="inner_footer_section_spans_last">
                    <span style={{ fontWeight: "500" }}>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <span>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</span>
                    <input style={{ width: "80%", padding: "14px 10px", margin: "auto", outline: "none", border: "0px" }} type="text" placeholder="Enter your email address" />
                </div>
            </div>
            <div className="payment_partners">
                <div className="inner_payment_partners">
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/google-pay.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/phonepe.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/paytm.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/simpl.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/rupay.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/visa.svg" alt="" />
                    <img src="https://www.netmeds.com/assets/global/images/footer-payment-icon/mastercard.svg" alt="" />

                </div>

                <p style={{ textAlign:"center", padding: "60px 0px 15px 0px" }}>Copyright© 2023. All Rights Reserved.</p>
            </div>
        </div>
    </div>
    )
}

export default Footer