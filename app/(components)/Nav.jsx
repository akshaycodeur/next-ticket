import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
	return (
		<div>
			<div className="TopNav">
				<Link href="/" className="flex">
					<FontAwesomeIcon icon={faHome} className="icon" />
					<h4>Home</h4>
				</Link>
				<Link href="/TicketPage/new" className="flex">
					<FontAwesomeIcon icon={faTicket} className="icon" />
					<h4>Tickets</h4>
				</Link>
			</div>
			<div className="bottomNav">Someone@test.com</div>
		</div>
	);
};

export default Nav;
