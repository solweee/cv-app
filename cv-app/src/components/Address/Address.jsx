import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import "./Address.scss";

export function Address() {
  const contactsItems = [
    {
      name: "phone",
      icon: faPhone,
      label: "500 342 242",
      uri: "tel:500342242",
    },
    {
      name: "email",
      icon: faEnvelope,
      label: "office@kamsolutions.pl",
      uri: "mailto:office@kamsolutions.pl",
    },
    {
      name: "twitter",
      icon: faTwitter,
      label: "Twitter",
      uri: "https://twitter.com/wordpress",
    },
    {
      name: "facebook",
      icon: faFacebookF,
      label: "Facebook",
      uri: "https://www.facebook.com/facebook",
    },
    {
      name: "skype",
      icon: faSkype,
      label: "Skype",
      uri: "skype:kamsolutions.pl?call",
    },
  ];

  const handleClick = (event, uri) => {
    event.preventDefault();
    if (uri.startsWith("http") || uri.startsWith("https")) {
      window.open(uri);
    }
    window.location.href = uri;
  };

  return (
    <address className="address">
      {contactsItems.map((item) => (
        <dl key={item.name}>
          <dt>
            <FontAwesomeIcon icon={item.icon} />
          </dt>
          <dd>
            {item.uri.startsWith("tel") || item.uri.startsWith("mailto") ? (
              <a
                href={item.uri}
                onClick={(event) => handleClick(event, item.uri)}
              >
                <strong>{item.label}</strong>
              </a>
            ) : (
              <>
                <strong>{item.label}</strong>
                <br />
                <a href={item.uri} target="_blank" rel="noopener noreferrer">
                  {item.uri.startsWith("skype:")
                    ? item.uri.replace(/^skype:(.*)\?call/, "$1")
                    : item.uri}
                </a>
              </>
            )}
          </dd>
        </dl>
      ))}
    </address>
  );
}
