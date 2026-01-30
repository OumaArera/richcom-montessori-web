export default function InvoiceLineItems({ lineItems, setLineItems, calculateLineTotal }) {
  const addLineItem = () => {
    setLineItems([
      ...lineItems,
      { accountCode: "", particulars: "", quantity: "", amount: "" },
    ]);
  };

  const removeLineItem = (index) => {
    if (lineItems.length > 1) {
      setLineItems(lineItems.filter((_, i) => i !== index));
    }
  };

  const updateLineItem = (index, field, value) => {
    const updated = [...lineItems];
    updated[index][field] = value;
    setLineItems(updated);
  };

  // Calculate grand total
  const grandTotal = lineItems.reduce((sum, item) => {
    return sum + calculateLineTotal(item.quantity, item.amount);
  }, 0);

  return (
    <div className="space-y-4">
      {lineItems.map((item, index) => {
        const lineTotal = calculateLineTotal(item.quantity, item.amount);
        
        return (
          <div
            key={index}
            className="p-4 border border-slate-200 rounded-lg bg-slate-50 space-y-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">
                Item {index + 1}
              </span>
              {lineItems.length > 1 && (
                <button
                  onClick={() => removeLineItem(index)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Account Code
                </label>
                <input
                  type="text"
                  value={item.accountCode}
                  onChange={(e) =>
                    updateLineItem(index, "accountCode", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="e.g., ACC-001"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Particulars
                </label>
                <input
                  type="text"
                  value={item.particulars}
                  onChange={(e) =>
                    updateLineItem(index, "particulars", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="Description"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  step="1"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => updateLineItem(index, "quantity", e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Amount (GH₵)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={item.amount}
                  onChange={(e) =>
                    updateLineItem(index, "amount", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Show calculated total for this line */}
            {lineTotal > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 text-sm">
                <span className="text-slate-600">Line Total:</span>{" "}
                <span className="font-semibold text-slate-800">
                  GH₵ {lineTotal.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        );
      })}

      <button
        onClick={addLineItem}
        className="w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition flex items-center justify-center gap-2 font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Line Item
      </button>

      {/* Grand Total Display */}
      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-slate-800">Grand Total:</span>
          <div className="text-2xl font-bold text-green-700">
            GH₵ {grandTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}