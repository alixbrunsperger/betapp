import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class DefaultDocument extends Document {
    static getInitialProps (ctx) {
        return Document.getInitialProps(ctx);
    }

    render () {
        return (
            <html>
            <Head>
                <title>"BetApp, bet for the win !"</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content=""/>
                <meta name="description" content="" />
                <meta name="author" content="Thade" />
                <meta name="copyright" content="Thade" />
                <meta name="robots" content="index,follow" />
                <meta httpEquiv="content-language" content="en" />
                <meta property="og:site_name" content="betApp.ch" />
                <meta property="og:url" content="http://www.bet-app.se" />
                <meta property="og:image" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="BetApp, bet for the win !" />
                <meta property="og:description" content="BetApp, bet for the win !" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@betApp" />
                <meta property="twitter:title" content="BetApp, bet for the win !" />
                <meta property="twitter:description" content="" />
                <link type="text/css" rel="stylesheet" href="/static/style/app.css" />
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous" />
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
            </Head>
            <body className="custom_class">
                {this.props.customValue}
                <Main />
                <NextScript />
            </body>
            </html>
        );
    }
}

export default DefaultDocument;
