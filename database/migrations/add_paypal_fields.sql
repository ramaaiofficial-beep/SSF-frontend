-- ============================================
-- MIGRATION: Add PayPal-Specific Fields to Donations Table
-- ============================================
-- This migration adds optional columns to store additional
-- PayPal payment details for better tracking and audit trails.
-- ============================================

-- Add PayPal-specific columns to donations table
ALTER TABLE donations 
  ADD COLUMN IF NOT EXISTS paypal_order_id TEXT,
  ADD COLUMN IF NOT EXISTS paypal_capture_id TEXT,
  ADD COLUMN IF NOT EXISTS paypal_payer_id TEXT,
  ADD COLUMN IF NOT EXISTS paypal_payment_details JSONB;

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_donations_paypal_order_id ON donations(paypal_order_id);
CREATE INDEX IF NOT EXISTS idx_donations_paypal_capture_id ON donations(paypal_capture_id);
CREATE INDEX IF NOT EXISTS idx_donations_paypal_payer_id ON donations(paypal_payer_id);

-- Add comments for documentation
COMMENT ON COLUMN donations.paypal_order_id IS 'PayPal order ID from payment capture';
COMMENT ON COLUMN donations.paypal_capture_id IS 'PayPal capture/transaction ID';
COMMENT ON COLUMN donations.paypal_payer_id IS 'PayPal payer ID';
COMMENT ON COLUMN donations.paypal_payment_details IS 'Complete PayPal payment response (JSON) for audit trail';

-- ============================================
-- Note: These fields are optional and the backend
-- will work without them. They provide additional
-- tracking capabilities for PayPal payments.
-- ============================================

