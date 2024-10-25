import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy   outlines how we collect, use, and protect your
        personal information when you interact with our website.
      </p>

      <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

      <p className="mb-4">
        We may collect the following types of personal information:
      </p>

      <ul className="list-disc ml-8 mb-4">
        <li>Name</li>
        <li>Email address</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>

      <p className="mb-4">
        We may use your personal information for the following purposes:
      </p>

      <ul className="list-disc ml-8 mb-4">
        <li>To provide and improve our services</li>
        <li>To communicate with you</li>
        <li>To analyze website usage</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Data Security</h2>

      <p className="mb-4">
        We implement security measures to protect your personal information from
        unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-2xl font-bold mb-4">Your Rights</h2>

      <p className="mb-4">
        You may have certain rights regarding your personal information, such as
        the right to access, correct, or delete it.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <Link className="text-blue-400" to="mailto:dev.himank.offcial@gamil.com">
          dev.himank.offcial@gamil.com
        </Link>
        .
      </p>
    </div>
  );
}

export default Privacy;
