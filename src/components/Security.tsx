import type { ReactNode } from "react";

function ClockIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="10" />
      <path d="M14 8v6l4 2" />
    </svg>
  );
}

function VaultIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <rect x="5" y="12" width="18" height="12" rx="1" />
      <path d="M9 12V9a5 5 0 0 1 10 0v3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <path d="M14 4l9 4v5c0 6-4 9.5-9 11-5-1.5-9-5-9-11V8z" />
    </svg>
  );
}

function TickIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <path d="M5 14l6 6L23 7" />
    </svg>
  );
}

function HourglassIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <path d="M10 4h8M14 4v7M7 24h14l-4-7H11z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="3.5" />
      <path d="M2 14s4-8 12-8 12 8 12 8-4 8-12 8-12-8-12-8z" />
    </svg>
  );
}

const cells: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: "No single point of failure",
    body: "Threshold M-of-N on both chains, run by independent operators. The system keeps running when one node drops.",
    icon: <ClockIcon />,
  },
  {
    title: "Reserves leave only via multisig",
    body: "Funds can be released only by an M-of-N signature on the source chain. No Canton action can drain the vault.",
    icon: <VaultIcon />,
  },
  {
    title: "Non-upgradeable vault",
    body: "Fixed contract code, per-transaction and daily caps, a pause switch, and replay guards on every release.",
    icon: <ShieldIcon />,
  },
  {
    title: "Verifiable backing",
    body: "Supply and reserves are reconciled continuously, with a public certificate of reserves for every instrument.",
    icon: <TickIcon />,
  },
  {
    title: "Audited before mainnet",
    body: "The vault, the watcher, and the Canton wiring are independently audited, and proof-of-reserve is published, before any asset reaches mainnet.",
    icon: <HourglassIcon />,
  },
  {
    title: "Private by default",
    body: "Canton settlement is confidential. Counterparties see only what they need, with permissioning at the ledger level.",
    icon: <EyeIcon />,
  },
];

export function Security() {
  return (
    <section id="security">
      <div className="wrap">
        <div className="sec-head">
          <span className="mono">Security model</span>
          <h2>Built so no single party can break it</h2>
          <p>
            The source-chain multisig is the hard boundary. A compromised Canton side can, at worst, mint an unbacked
            token, which the certificate of reserves catches at once.
          </p>
        </div>
        <div className="grid2">
          {cells.map((cell) => (
            <div className="cell" key={cell.title}>
              <div className="ci">{cell.icon}</div>
              <h3>{cell.title}</h3>
              <p>{cell.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
