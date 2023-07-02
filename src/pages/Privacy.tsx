import Title from "../components/Title";

function Privacy() {
  return (
    <>
      <Title>Privacy Policy</Title>
      <p>
        This Privacy Policy ("Policy") explains how I, Zhen(Warren) Wang,
        collect, use, and safeguard personal information when you use my Plant
        Recognition App ("App"). By using the App, you consent to the data
        practices described in this Policy.
      </p>
      <ol>
        <li>
          <h4>Information I Collect</h4>
          <ul className="list-no-indent">
            <li>
              Personal Information:
              <p>
                I do not collect any personally identifiable information (PII)
                such as your name, address, or contact details.
              </p>
            </li>
            <li>
              Non-Personal Information:
              <p>
                IP Address: I may collect your IP address for the purpose of
                limiting API usage in Redis, a database technology I use to
                manage resources. Your IP address is not linked to personal
                photos or any other personally identifiable information.
              </p>
            </li>
            <li>
              Photos:
              <p>
                To provide plant recognition services, I collect the photos you
                upload through the App. These photos will be securely
                transmitted and stored in the{" "}
                <a href="https://web.plant.id/" target="_blank">
                  Plant.ID
                </a>{" "}
                service, a third-party service that I use for plant recognition.
                Please refer to the Plant.ID service's privacy policy for
                information on how they handle and protect your data. Use of
                Collected Information
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Use of Collected Information</h4>
          <ul className="list-no-indent">
            <li>
              IP Address:
              <p>
                I use your IP address solely to manage resources and limit API
                usage in Redis. Your IP address is not used for any other
                purpose and is not linked to any personally identifiable
                information.
              </p>
            </li>
            <li>
              Photos:
              <p>
                The photos you upload through the App will be processed and
                analyzed by the Plant.ID service for plant recognition. Please
                refer to the Plant.ID service's privacy policy for information
                on how they handle and process the photos.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Data Sharing and Disclosure</h4>
          <ul className="list-no-indent">
            <li>
              I do not sell, trade, or otherwise transfer your personal
              information to third parties.
            </li>
            <li>
              I may share non-personal information, such as aggregated data and
              usage statistics, with third parties for analytics and research
              purposes. This information does not identify you personally.
            </li>
          </ul>
        </li>
        <li>
          <h4>Changes to this Privacy Policy</h4>
          <p>
            I reserve the right to update or modify this Privacy Policy at any
            time. Any changes to the Policy will be reflected on this page with
            a revised "Last Updated" date. I encourage you to review this Policy
            periodically for any updates.
          </p>
        </li>
        <li>
          <h4>Contact Me</h4>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact me at{" "}
            <a href="mailto:hyacinth.constellation@gmail.com">
              hyacinth.constellation@gmail.com
            </a>
            .
          </p>
        </li>
      </ol>
    </>
  );
}

export default Privacy;
