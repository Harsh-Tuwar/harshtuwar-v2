import React from 'react';
import Swal from "sweetalert2";

const ContactForm = () => {
	const [email, setEmail] = React.useState('');
	const [msg, setMsg] = React.useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		await Swal.fire({
			title: `<div style='color: black !important;'>Sending...</div>`,
			didOpen: () => {
				Swal.showLoading();
				fetch('https://api.harshtuwar.ml/send', {
					method: "POST",
					headers: {
						'Content-Type': 'application/json;charset=UTF-8'
					},
					body: JSON.stringify({
						name: "harshtuwar.ml v2.0",
						email: email,
						msg: msg,
						subject: "Contact Form v2"
					})
				}).then(() => {
					setEmail('');
					setMsg('');
					const sentDiv = document.createElement('div');
					sentDiv.style.color = "black !important";
					sentDiv.innerText = "Sent!";

					Swal.getTitle().outerHTML = sentDiv.outerHTML;
				}).finally(() => {
					Swal.hideLoading();
				});
			}
		});
	}

	return (
		<div className="mt-4 mb-100">
			<form>
				<div className="form-group">
					<label className="text-white">Email address</label>
					<input type="email" value={email} name="_replyto" onChange={(e) => setEmail(e.currentTarget.value)} className="form-control" placeholder="Enter email" required />
                </div>
					<div className="form-group mt-4">
						<label className="text-white">Message</label>
						<textarea type="text" name="name" value={msg} className="form-control" placeholder="Please share your message here..." onChange={(e) => setMsg(e.currentTarget.value)} required></textarea>
					</div>
					<button
						type="submit"
						className="btn btn-danger"
						style={{ display: "flex", width: 140, textAlign: "center", margin: "auto", justifyContent: "center" }}
						onClick={handleSubmit}
					>Submit</button>
            </form>
        </div>
	);
}
 
export default ContactForm;