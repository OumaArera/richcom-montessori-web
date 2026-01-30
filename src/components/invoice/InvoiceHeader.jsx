export default function InvoiceHeader({ invoiceNumber, date, payTo }) {
  return (
    <div 
      style={{
        background: "linear-gradient(to right, #1e3a8a, #1e40af)",
        color: "#ffffff",
        padding: "16px 24px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="Richcom Montessori School"
            style={{
              height: "48px",
              width: "48px",
              objectFit: "contain",
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              padding: "6px"
            }}
          />
          <div>
            <h1 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "2px", lineHeight: "1.2" }}>
              Richcom Montessori School
            </h1>
            <p style={{ color: "#bfdbfe", fontSize: "11px", lineHeight: "1.2" }}>
              We Aim, We Plan, We Succeed
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "2px", lineHeight: "1.2" }}>
            PAYMENT VOUCHER
          </div>
        </div>
      </div>

      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: "10px", 
          borderTop: "1px solid #1d4ed8",
          fontSize: "12px"
        }}
      >
        <div>
          <span style={{ color: "#bfdbfe" }}>Pay To:</span>{" "}
          <span style={{ fontWeight: "600", marginLeft: "6px" }}>
            {payTo || "_______________"}
          </span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <div>
            <span style={{ color: "#bfdbfe" }}>No.:</span>{" "}
            <span style={{ fontWeight: "600", marginLeft: "6px" }}>
              {invoiceNumber || "_______________"}
            </span>
          </div>
          <div>
            <span style={{ color: "#bfdbfe" }}>Date:</span>{" "}
            <span style={{ fontWeight: "600", marginLeft: "6px" }}>
              {date || "_______________"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}