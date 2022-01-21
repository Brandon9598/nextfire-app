import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
	const user = null;
	const username = null;

	return (
		<nav className="navbar">
			<ul>
				<Link href="/" passHref>
					<button className="btn-logo">FEED</button>
				</Link>

				{/* User is signed in and has username */}
				{username && (
					<React.Fragment>
						<li className="push-left">
							<Link href="/admin" passHref>
								<button className="btn-blue">Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`} passHref>
								{user && (
									<Image src={user.photoURL} alt="user profile picture" />
								)}
							</Link>
						</li>
					</React.Fragment>
				)}

				{/* User is not signed in or has not username */}
				{!username && (
					<li>
						<Link href="/enter" passHref>
							<button className="btn-blue">Log In</button>
						</Link>
					</li>
				)}
			</ul>
			<ul></ul>
			<ul></ul>
		</nav>
	);
}

export default Navbar;
