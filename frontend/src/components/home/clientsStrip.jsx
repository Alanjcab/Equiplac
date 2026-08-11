import clients from "../../constants/clients.js";

import "./clientsStrip.css";

function ClientsStrip() {
  const duplicatedClients = [
    ...clients,
    ...clients,
    ...clients,
    ...clients,
  ];

  return (
    <section className="clients-strip">
      <div className="container">
        <div className="clients-strip__header">
          <span>Nuestros clientes</span>

          <h2>Empresas que formaron parte de nuestro recorrido.</h2>
        </div>
      </div>

      <div className="clients-strip__viewport">
        <div className="clients-strip__track">
          {duplicatedClients.map((client, index) => (
            <div
              className="clients-strip__item"
              key={`${client.id}-${index}`}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                />
              ) : (
                <span>{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsStrip;