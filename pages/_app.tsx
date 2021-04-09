import { defaultConfig } from "next/dist/next-server/server/config-shared";
import { Component } from "react";
import "../styles/globals.css";

interface MyAppProps {
	Component: React.FC;
	pageProps: any;
}

const MyApp = ({ Component, pageProps }: MyAppProps) => {
	return <Component {...pageProps} />;
};

export default MyApp;
