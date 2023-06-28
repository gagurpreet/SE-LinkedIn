import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
	return (
		<footer style={{ paddingTop: "50px" }}>
			<Typography variant='body2' color='text.secondary' align='center'>
				This application is deployed on render, link is 
				<a
					href='https://se-linkedin.onrender.com'
					style={{ margin: "0 5px 0 5px" }}
				>
					here
				</a>
				
				and app is build using
				<a href='https://reactjs.org/' style={{ margin: "0 5px 0 5px" }}>
					React
				</a>
				and styled with
				<a href='https://mui.com/' style={{ margin: "0 5px 0 5px" }}>
					Material-UI (MUI)
				</a>
				. I hope you found my project Interesting.
			</Typography>
		</footer>
	);
};

export default Footer;