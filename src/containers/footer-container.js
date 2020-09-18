import React from 'react';
import Footer from '../components/footer/index';

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Center</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>

            </Footer.Row>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Text>Netflix Vietnam</Footer.Text>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}