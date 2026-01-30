import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InvoiceHeader from "./InvoiceHeader";
import InvoiceLineItems from "./InvoiceLineItems";
import SignatureSection from "./SignatureSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function InvoiceForm() {
    const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState({
    number: "",
    date: new Date().toISOString().split("T")[0],
    payTo: "",
    bankAccount: "",
    chequeNo: "",
  });

  const [lineItems, setLineItems] = useState([
    { accountCode: "", particulars: "", quantity: "", amount: "" },
  ]);

  const [signature, setSignature] = useState({
    image: null,
    preparedBy: "",
    preparedRole: "",
    preparedDate: new Date().toISOString().split("T")[0],
    approvedBy: "",
    approvedRole: "",
    approvedDate: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  // Calculate line item total
  const calculateLineTotal = (quantity, amount) => {
    const qty = parseFloat(quantity) || 0;
    const amt = parseFloat(amount) || 0;
    return qty * amt;
  };

  // Calculate grand total
  const calculateGrandTotal = () => {
    return lineItems.reduce((sum, item) => {
      return sum + calculateLineTotal(item.quantity, item.amount);
    }, 0);
  };

  // Generate PDF
  const generatePDF = async () => {
    setIsGenerating(true);
    const element = document.getElementById("invoice-preview");

    try {
      // Capture the invoice as canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      // A4 dimensions in mm
      const pageWidth = 210;
      const pageHeight = 297;
      
      // Calculate image dimensions
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png");
      
      // If content fits on one page
      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      } else {
        // Handle multiple pages
        let heightLeft = imgHeight;
        let position = 0;
        let page = 0;

        // Add first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add subsequent pages
        while (heightLeft > 0) {
          position = -(pageHeight * (page + 1));
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          page++;
        }
      }

      // Download
      pdf.save(`Richcom-Invoice-${invoiceData.number || "draft"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const grandTotal = calculateGrandTotal();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
      {/* Force RGB colors for PDF generation */}
      <style>
        {`
          .invoice-pdf-container * {
            color-scheme: light !important;
          }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Invoice Generator
          </h1>
          <p className="text-slate-600">
            Create professional payment vouchers for Richcom Montessori School
          </p>
          <button
            onClick={() => navigate("/richcom/requisition-invoice")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md"
          >
            Switch to Requisition Invoice
          </button>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form Inputs */}
          <div className="space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">
                  1
                </span>
                Invoice Details
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Invoice No.
                    </label>
                    <input
                      type="text"
                      value={invoiceData.number}
                      onChange={(e) =>
                        setInvoiceData({ ...invoiceData, number: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="INV-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={invoiceData.date}
                      onChange={(e) =>
                        setInvoiceData({ ...invoiceData, date: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Pay To
                  </label>
                  <input
                    type="text"
                    value={invoiceData.payTo}
                    onChange={(e) =>
                      setInvoiceData({ ...invoiceData, payTo: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Recipient name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Bank Account
                    </label>
                    <input
                      type="text"
                      value={invoiceData.bankAccount}
                      onChange={(e) =>
                        setInvoiceData({
                          ...invoiceData,
                          bankAccount: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Account number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Cheque No.
                    </label>
                    <input
                      type="text"
                      value={invoiceData.chequeNo}
                      onChange={(e) =>
                        setInvoiceData({ ...invoiceData, chequeNo: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Line Items Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">
                  2
                </span>
                Line Items
              </h2>

              <InvoiceLineItems
                lineItems={lineItems}
                setLineItems={setLineItems}
                calculateLineTotal={calculateLineTotal}
              />
            </div>

            {/* Signature Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">
                  3
                </span>
                Signatures & Approval
              </h2>

              <SignatureSection signature={signature} setSignature={setSignature} />
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-800">Preview</h2>
                <button
                  onClick={generatePDF}
                  disabled={isGenerating}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2.5 rounded-lg font-semibold transition flex items-center gap-2 shadow-md"
                >
                  {isGenerating ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download PDF
                    </>
                  )}
                </button>
              </div>

              {/* Invoice Preview */}
              <div
                id="invoice-preview"
                className="invoice-pdf-container"
                style={{ 
                  minHeight: "600px",
                  backgroundColor: "#ffffff",
                  border: "2px solid #cbd5e1",
                  borderRadius: "8px",
                  overflow: "hidden"
                }}
              >
                <InvoiceHeader
                  invoiceNumber={invoiceData.number}
                  date={invoiceData.date}
                  payTo={invoiceData.payTo}
                />

                {/* Line Items Table */}
                <div style={{ padding: "12px 24px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #94a3b8" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#f1f5f9" }}>
                        <th style={{ 
                          border: "1px solid #94a3b8", 
                          padding: "6px 8px", 
                          textAlign: "left", 
                          fontSize: "11px", 
                          fontWeight: "600" 
                        }}>
                          Account Code
                        </th>
                        <th style={{ 
                          border: "1px solid #94a3b8", 
                          padding: "6px 8px", 
                          textAlign: "left", 
                          fontSize: "11px", 
                          fontWeight: "600" 
                        }}>
                          Particulars
                        </th>
                        <th style={{ 
                          border: "1px solid #94a3b8", 
                          padding: "6px 8px", 
                          textAlign: "center", 
                          fontSize: "11px", 
                          fontWeight: "600",
                          width: "70px"
                        }}>
                          Quantity
                        </th>
                        <th style={{ 
                          border: "1px solid #94a3b8", 
                          padding: "6px 8px", 
                          textAlign: "right", 
                          fontSize: "11px", 
                          fontWeight: "600",
                          width: "90px"
                        }}>
                          Amount (GH₵)
                        </th>
                        <th style={{ 
                          border: "1px solid #94a3b8", 
                          padding: "6px 8px", 
                          textAlign: "right", 
                          fontSize: "11px", 
                          fontWeight: "600",
                          width: "90px"
                        }}>
                          Total (GH₵)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lineItems.map((item, index) => {
                        const lineTotal = calculateLineTotal(item.quantity, item.amount);
                        return (
                          <tr key={index}>
                            <td style={{ border: "1px solid #94a3b8", padding: "5px 8px", fontSize: "11px" }}>
                              {item.accountCode}
                            </td>
                            <td style={{ border: "1px solid #94a3b8", padding: "5px 8px", fontSize: "11px" }}>
                              {item.particulars}
                            </td>
                            <td style={{ border: "1px solid #94a3b8", padding: "5px 8px", textAlign: "center", fontSize: "11px" }}>
                              {item.quantity || ""}
                            </td>
                            <td style={{ border: "1px solid #94a3b8", padding: "5px 8px", textAlign: "right", fontSize: "11px" }}>
                              {item.amount ? parseFloat(item.amount).toFixed(2) : ""}
                            </td>
                            <td style={{ border: "1px solid #94a3b8", padding: "5px 8px", textAlign: "right", fontSize: "11px" }}>
                              {lineTotal ? lineTotal.toFixed(2) : ""}
                            </td>
                          </tr>
                        );
                      })}
                      <tr style={{ backgroundColor: "#f8fafc", fontWeight: "600" }}>
                        <td
                          colSpan={4}
                          style={{ border: "1px solid #94a3b8", padding: "6px 8px", textAlign: "right", fontSize: "11px" }}
                        >
                          GRAND TOTAL
                        </td>
                        <td style={{ border: "1px solid #94a3b8", padding: "6px 8px", textAlign: "right", fontSize: "11px" }}>
                          GH₵ {grandTotal.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Footer Details */}
                <div style={{ padding: "12px 24px", fontSize: "11px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "8px" }}>
                    <div>
                      <span style={{ fontWeight: "600" }}>Bank Account:</span>{" "}
                      {invoiceData.bankAccount || "_______________"}
                    </div>
                    <div>
                      <span style={{ fontWeight: "600" }}>Cheque No.:</span>{" "}
                      {invoiceData.chequeNo || "_______________"}
                    </div>
                  </div>

                  <div 
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "24px",
                        paddingTop: "24px",
                        borderTop: "1px solid #cbd5e1",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: "600", marginBottom: "3px", fontSize: "11px" }}>Prepared by:</div>
                      <div style={{ fontSize: "10px", lineHeight: "1.4" }}>
                        <div style={{ marginBottom: "2px" }}>{signature.preparedBy || "_______________"}</div>
                        <div style={{ color: "#475569", marginBottom: "2px" }}>
                          {signature.preparedRole || "Role"}
                        </div>
                        {signature.image && (
                          <img
                            src={signature.image}
                            alt="Signature"
                            style={{ height: "24px", objectFit: "contain", marginBottom: "2px" }}
                          />
                        )}
                        <div style={{ color: "#475569" }}>
                          Date: {signature.preparedDate || "_______________"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontWeight: "600", marginBottom: "3px", fontSize: "11px" }}>Approved by:</div>
                      <div style={{ fontSize: "10px", lineHeight: "1.4" }}>
                        <div style={{ marginBottom: "2px" }}>{signature.approvedBy || "_______________"}</div>
                        <div style={{ color: "#475569", marginBottom: "2px" }}>
                          {signature.approvedRole || "Role"}
                        </div>
                        <div style={{ height: "24px", marginBottom: "2px" }}></div>
                        <div style={{ color: "#475569" }}>
                          Date: {signature.approvedDate || "_______________"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}