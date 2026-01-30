export default function RequisitionHeader({ refNo }) {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6b21a8, #7c3aed)",
        color: "#ffffff",
        padding: "20px 24px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "4px",
                lineHeight: "1.2",
              }}
            >
              Richcom Montessori School
            </h1>
            <p style={{ color: "#e9d5ff", fontSize: "12px", lineHeight: "1.2" }}>
              We Aim, We Plan, We Succeed
            </p>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "4px",
              lineHeight: "1.2",
            }}
          >
            REQUISITION VOUCHER
          </div>
          <div style={{ fontSize: "13px", color: "#e9d5ff" }}>
            Ref No: {refNo || "_______________"}
          </div>
        </div>
      </div>
    </div>
  );
}