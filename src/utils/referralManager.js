const REF_KEY = "referral_data";

export const saveReferral = (code) => {
  const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days

  localStorage.setItem(
    REF_KEY,
    JSON.stringify({ code, expiry })
  );
};

export const getReferral = () => {
  const stored = localStorage.getItem(REF_KEY);
  if (!stored) return null;

  const parsed = JSON.parse(stored);

  if (Date.now() > parsed.expiry) {
    localStorage.removeItem(REF_KEY);
    return null;
  }

  return parsed.code;
};
