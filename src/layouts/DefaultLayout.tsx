import React, { ReactElement } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IDefaultLayout {
    children?: ReactElement;
}

const DefaultLayout: React.FC<IDefaultLayout> = ({ children }) => {	
	return (
		<>
			<Header />
                {children}
			<Footer />
		</>
	);
};

export default DefaultLayout;