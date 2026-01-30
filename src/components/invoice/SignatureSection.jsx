export default function SignatureSection({ signature, setSignature }) {
  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature({ ...signature, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateSignature = (field, value) => {
    setSignature({ ...signature, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Signature Upload */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Upload Signature
        </label>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleSignatureUpload}
            className="hidden"
            id="signature-upload"
          />
          <label
            htmlFor="signature-upload"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
          >
            {signature.image ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={signature.image}
                  alt="Signature preview"
                  className="max-h-28 object-contain"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
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
      </div>

      {/* Prepared By */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">
            P
          </span>
          Prepared By
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={signature.preparedBy}
              onChange={(e) => updateSignature("preparedBy", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Role/Title
            </label>
            <input
              type="text"
              value={signature.preparedRole}
              onChange={(e) => updateSignature("preparedRole", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="e.g., Finance Officer"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={signature.preparedDate}
              onChange={(e) => updateSignature("preparedDate", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>
        </div>
      </div>

      {/* Approved By */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span className="w-6 h-6 bg-green-600 text-white rounded flex items-center justify-center text-xs">
            A
          </span>
          Approved By (Optional)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={signature.approvedBy}
              onChange={(e) => updateSignature("approvedBy", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Approver name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Role/Title
            </label>
            <input
              type="text"
              value={signature.approvedRole}
              onChange={(e) => updateSignature("approvedRole", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="e.g., Director"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={signature.approvedDate}
              onChange={(e) => updateSignature("approvedDate", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>
        </div>
      </div>

      {/* Recorded By */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
          <span className="w-6 h-6 bg-purple-600 text-white rounded flex items-center justify-center text-xs">
            R
          </span>
          Recorded By (Optional)
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={signature.recordedBy}
              onChange={(e) => updateSignature("recordedBy", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Recorder name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Role/Title
            </label>
            <input
              type="text"
              value={signature.recordedRole}
              onChange={(e) => updateSignature("recordedRole", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="e.g., Accountant"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={signature.recordedDate}
              onChange={(e) => updateSignature("recordedDate", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}