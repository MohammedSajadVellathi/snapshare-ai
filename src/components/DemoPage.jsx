import { useState } from "react";

function DemoPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://snapshare-backend-r37w.onrender.com/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(data.error || "Something went wrong");
    }

    setSubmitted(true);
    setEmail("");
  } catch (err) {
    alert(err.message);
  }
};
  return (
    <section className="demo-page">
      {!submitted ? (
        <>
          <h1 className="demo-title">
            Get a SnapShare AI Demo
          </h1>

          <p className="demo-subtitle">
            Leave your email and we’ll show you how instant AI-powered
            photo delivery works.
          </p>

          <form className="demo-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              Request demo →
            </button>
          </form>
        </>
      ) : (
        <div className="demo-success">
          <h2>Thank you.</h2>
          <p>We’ll get back to you shortly.</p>
        </div>
      )}
    </section>
  );
}

export default DemoPage;
