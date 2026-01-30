import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RequisitionHeader from "./RequisitionHeader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function RequisitionForm() {
    const navigate = useNavigate()
  const [requisitionData, setRequisitionData] = useState({
    refNo: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    cash: "",
    chequeNo: "",
    to: "",
  });

  const [signature, setSignature] = useState({
    preparedBy: "",
    preparedDate: new Date().toISOString().split("T")[0],
    approvedBy: "",
    signatureImage: null,
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    const element = document.getElementById("requisition-preview");

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png");

      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;
        let page = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = -(pageHeight * (page + 1));
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          page++;
        }
      }

      pdf.save(`Richcom-Requisition-${requisitionData.refNo || "draft"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature({ ...signature, signatureImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

 

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-purple-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Requisition Voucher Generator
          </h1>
          <p className="text-slate-600 mb-4">
            Create professional requisition vouchers for Richcom Montessori School
          </p>
          <button
            onClick={() => navigate("/richcom/payment-invoice")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md"
          >
            Switch to Payment Invoice
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Basic Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm">
                  1
                </span>
                Requisition Details
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Ref No.
                    </label>
                    <input
                      type="text"
                      value={requisitionData.refNo}
                      onChange={(e) =>
                        setRequisitionData({ ...requisitionData, refNo: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="REQ-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Amount (GH₵)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={requisitionData.amount}
                      onChange={(e) =>
                        setRequisitionData({ ...requisitionData, amount: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={requisitionData.date}
                    onChange={(e) =>
                      setRequisitionData({ ...requisitionData, date: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-800 mb-3 text-sm">
                    Method of Payment
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Cash
                      </label>
                      <input
                        type="text"
                        value={requisitionData.cash}
                        onChange={(e) =>
                          setRequisitionData({ ...requisitionData, cash: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                        placeholder="Cash amount"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Cheque No.
                      </label>
                      <input
                        type="text"
                        value={requisitionData.chequeNo}
                        onChange={(e) =>
                          setRequisitionData({ ...requisitionData, chequeNo: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    To
                  </label>
                  <input
                    type="text"
                    value={requisitionData.to}
                    onChange={(e) =>
                      setRequisitionData({ ...requisitionData, to: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Recipient"
                  />
                </div>
              </div>
            </div>

            {/* Signature Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-sm">
                  2
                </span>
                Signatures & Approval
              </h2>

              <div className="space-y-4">
                {/* Signature Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Upload Signature (for Approved By)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSignatureUpload}
                    className="hidden"
                    id="signature-upload"
                  />
                  <label
                    htmlFor="signature-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition"
                  >
                    {signature.signatureImage ? (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={signature.signatureImage}
                          alt="Signature preview"
                          className="max-h-28 object-contain"
                        />
                        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                          ✓ Uploaded
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-slate-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mt-1 text-sm text-slate-600">
                          Click to upload signature
                        </p>
                        <p className="text-xs text-slate-500">PNG, JPG up to 2MB</p>
                      </div>
                    )}
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Prepared By
                    </label>
                    <input
                      type="text"
                      value={signature.preparedBy}
                      onChange={(e) =>
                        setSignature({ ...signature, preparedBy: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={signature.preparedDate}
                      onChange={(e) =>
                        setSignature({ ...signature, preparedDate: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Approved By
                    </label>
                    <input
                      type="text"
                      value={signature.approvedBy}
                      onChange={(e) =>
                        setSignature({ ...signature, approvedBy: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
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
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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

              {/* Requisition Preview */}
              <div
                id="requisition-preview"
                style={{
                  minHeight: "600px",
                  backgroundColor: "#ffffff",
                  border: "2px solid #cbd5e1",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <RequisitionHeader refNo={requisitionData.refNo} />

                {/* Main Content Table */}
                <div style={{ padding: "24px" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      border: "2px solid #1e293b",
                    }}
                  >
                    <tbody>
                      {/* Amount and Date Row */}
                      <tr>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            width: "20%",
                          }}
                        >
                          Amount:
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {requisitionData.amount
                            ? `GH₵ ${parseFloat(requisitionData.amount).toFixed(2)}`
                            : ""}
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            width: "15%",
                          }}
                        >
                          Date:
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {requisitionData.date}
                        </td>
                      </tr>

                      {/* Method of Payment Header */}
                      <tr>
                        <td
                          colSpan={4}
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            textAlign: "center",
                            backgroundColor: "#f1f5f9",
                          }}
                        >
                          Method of Payment
                        </td>
                      </tr>

                      {/* Cash and Cheque Row */}
                      <tr>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Cash:
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {requisitionData.cash}
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          Cheque:
                        </td>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {requisitionData.chequeNo}
                        </td>
                      </tr>

                      {/* To Row */}
                      <tr>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          To:
                        </td>
                        <td
                          colSpan={3}
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                          }}
                        >
                          {requisitionData.to}
                        </td>
                      </tr>

                      {/* Being Row */}
                      <tr>
                        <td
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            fontWeight: "600",
                            verticalAlign: "top",
                          }}
                        >
                          Being:
                        </td>
                        <td
                          colSpan={3}
                          style={{
                            border: "1px solid #1e293b",
                            padding: "8px 12px",
                            fontSize: "12px",
                            minHeight: "60px",
                          }}
                        ></td>
                      </tr>

                      {/* Signatures Row */}
                      <tr>
                        <td
                          colSpan={2}
                          style={{
                            border: "1px solid #1e293b",
                            padding: "12px",
                            fontSize: "11px",
                            verticalAlign: "top",
                          }}
                        >
                          <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                            Approved By:
                          </div>
                          <div style={{ marginTop: "8px" }}>{signature.approvedBy}</div>
                          {signature.signatureImage && (
                            <img
                              src={signature.signatureImage}
                              alt="Signature"
                              style={{
                                height: "30px",
                                objectFit: "contain",
                                marginTop: "4px",
                              }}
                            />
                          )}
                        </td>
                        <td
                          colSpan={2}
                          style={{
                            border: "1px solid #1e293b",
                            padding: "12px",
                            fontSize: "11px",
                            verticalAlign: "top",
                          }}
                        >
                          <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                            Prepared By:
                          </div>
                          <div style={{ marginTop: "8px" }}>{signature.preparedBy}</div>
                          <div style={{ marginTop: "4px", color: "#64748b" }}>
                            Date: {signature.preparedDate}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}