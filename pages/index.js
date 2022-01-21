import Link from "next/link";
import styles from "../styles/Home.module.css";

import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
	return (
		<div>
			<button
				onClick={() => {
					console.log("clicked");
					toast.success("hello toast");
				}}
			>
				Toast me
			</button>
		</div>
	);
}
