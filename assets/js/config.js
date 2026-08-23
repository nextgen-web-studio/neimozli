// NeiMozhi Configuration
// Equivalent of .env for static frontend
// DO NOT commit real production secrets here

window.NEIMOZHI_CONFIG = {
  razorpay: {
    keyId: 'rzp_test_TT7XUIBB6OX66r',
    // NOTE: API Secret must NEVER be placed here (frontend is public)
    // Secret: rA0JKeTg2CLs8aCe2AP8rzNv  <-- Keep this only on your backend/server
  },
  store: {
    name: 'NeiMozhi by Uthukuli',
    whatsapp: '919876543210',
    currency: 'INR',
    freeDeliveryWeightGrams: 1000,
    deliveryCharge: 80,
  },
  admin: {
    // Change this password before going live
    password: 'neimozhi@admin2026'
  }
};
