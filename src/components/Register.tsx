const instruments = [
  { name: "cWETH", basis: "Wrapped Ether", custody: "Safe, EVM", status: "Testnet", tone: "live" },
  { name: "cSOL", basis: "Wrapped SOL", custody: "Squads, SOL", status: "In build", tone: "build" },
  {
    name: "Tokenized gold",
    basis: "Allocated reserve, XAU",
    custody: "Vault custodian",
    status: "Roadmap",
    tone: "road",
  },
  {
    name: "Tokenized securities",
    basis: "Regulated custodian, allowlisted",
    custody: "Transfer agent",
    status: "Roadmap",
    tone: "road",
  },
  {
    name: "Partner assets",
    basis: "Third-party issuers, e.g. GGBR",
    custody: "Per issuer",
    status: "Onboarding",
    tone: "part",
  },
];

export function Register() {
  return (
    <section className="band" id="assets">
      <div className="wrap">
        <div className="sec-head">
          <span className="mono">Instruments</span>
          <h2>The register</h2>
          <p>Crypto first, then reserve assets and securities. Third-party tokens can list through the same rails.</p>
        </div>
        <div className="ledger-t">
          <div className="lhead">
            <span>Instrument</span>
            <span>Reserve basis</span>
            <span>Custody</span>
            <span>Status</span>
          </div>
          {instruments.map((row) => (
            <div className="lrow" key={row.name}>
              <span className="nm">{row.name}</span>
              <span className="ds">{row.basis}</span>
              <span className="rz">{row.custody}</span>
              <span className={`st ${row.tone}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
