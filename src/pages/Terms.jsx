import React from "react";

function Terms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">
        Terms of Service
      </h1>

      <p className="mb-4 text-gray-200">
        Please read these Terms of Service carefully before using our website.
      </p>

      <ul className="list-disc ml-8 mb-4 text-gray-200">
        <li>
          <h2 className="text-xl font-bold mb-2">User Conduct</h2>
          <ul>
            <li>You agree to use our website for lawful purposes only.</li>
            <li>
              You agree not to engage in any activity that may harm our website
              or other users.
            </li>
            <li>You agree not to post any offensive or harmful content.</li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Intellectual Property</h2>
          <ul>
            <li>
              All content on our website is protected by copyright and other
              intellectual property laws.
            </li>
            <li>
              You may not use any content from our website without our prior
              written consent.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Disclaimer of Warranties</h2>
          <ul>
            <li>Our website is provided "as is" without any warranties.</li>
            <li>
              We do not guarantee the accuracy or completeness of the
              information on our website.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Limitation of Liability</h2>
          <ul>
            <li>
              We shall not be liable for any damages or losses arising from the
              use of our website.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Indemnification</h2>
          <ul>
            <li>
              You agree to indemnify and hold us harmless from any claims or
              damages arising from your use of our website.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Termination</h2>
          <ul>
            <li>
              We may terminate your access to our website at any time without
              notice.
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-xl font-bold mb-2">Governing Law</h2>
          <ul>
            <li>
              These Terms of Service shall be governed by the laws of
              india .
            </li>
          </ul>
        </li>
      </ul>

      <p className="text-gray-300">
        By using our website, you agree to these Terms of Service.
      </p>
    </div>
  );
}

export default Terms;
