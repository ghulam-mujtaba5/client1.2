"use client";
import Image from "next/image";

// Services overview section
export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        width: "100%",
        background: "var(--accent-blue-light)",
        color: "var(--gray-dark)",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "var(--font-geist-sans)",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          color: "var(--primary-blue)",
        }}
      >
        Our Services
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
          width: "100%",
          maxWidth: 1000,
        }}
        className="services-grid"
      >
        <ServiceCard
          title="Security Guards"
          desc="Highly trained, vetted professionals for all sectors and occasions."
          tabIndex={0}
        />
        <ServiceCard
          title="Corporate Security"
          desc="Concierge, static, and mobile security for your business premises."
          tabIndex={0}
        />
        <ServiceCard
          title="Event Security"
          desc="Planning, crowd management, and on-site protection for safe events."
          tabIndex={0}
        />
        <ServiceCard
          title="Retail Security"
          desc="Reduce losses and protect assets with expert retail security solutions."
          tabIndex={0}
        />
        <ServiceCard
          title="Industrial Security"
          desc="Tailored security for factories, warehouses, and production facilities."
          tabIndex={0}
        />
        <ServiceCard
          title="Transport Security"
          desc="Protect high-value cargo from departure to destination."
          tabIndex={0}
        />
      </div>
      <style>{`
        @media (max-width: 700px) {
          .services-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({ title, desc }) {
  // Map service titles to image filenames
  const images = {
    "Security Guards": "/file.svg",
    "Corporate Security": "/globe.svg",
    "Event Security": "/window.svg",
    "Retail Security": "/vercel.svg",
    "Industrial Security": "/file.svg",
    "Transport Security": "/globe.svg",
  };
  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(26,35,126,0.10)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        minHeight: 210,
        transition:
          "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        border: "1.5px solid var(--accent-blue-light)",
        marginBottom: 8,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,35,126,0.13)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(26,35,126,0.10)";
      }}
    >
      <div style={{ marginBottom: 18, transition: "transform 0.3s" }}>
        <Image
          src={images[title]}
          alt={title}
          width={48}
          height={48}
          style={{
            filter: "drop-shadow(0 2px 8px #2196f322)",
          }}
        />
      </div>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: 10,
          color: "var(--primary-blue)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1.05rem",
          color: "#444",
          lineHeight: 1.6,
        }}
      >
        {desc}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 4,
          background:
            "linear-gradient(90deg, var(--primary-blue) 60%, var(--accent-blue) 100%)",
          opacity: 0.12,
        }}
      />
    </div>
  );
}
