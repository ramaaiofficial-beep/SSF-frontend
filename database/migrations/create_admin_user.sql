-- ============================================
-- CREATE ADMIN USER SCRIPT
-- ============================================
-- This script helps you create an admin user
-- Run this in Supabase SQL Editor
-- ============================================

-- STEP 1: First, you need to create the auth user in Supabase Dashboard
-- Go to: Authentication → Users → Add User → Create new user
-- Copy the User ID that's generated

-- STEP 2: Replace the values below with your actual data
-- Replace 'YOUR_USER_ID_HERE' with the User ID from Step 1
-- Replace 'Admin Name' with the admin's full name
-- Replace 'admin@shreesamrajyalakshmi.com' with the admin's email

-- ============================================
-- OPTION A: Create new admin user profile
-- ============================================
INSERT INTO user_profiles (user_id, full_name, email, role)
VALUES (
  'YOUR_USER_ID_HERE',  -- Replace with actual user ID from auth.users
  'Admin Name',         -- Replace with admin's name
  'admin@shreesamrajyalakshmi.com',  -- Replace with admin's email
  'admin'                -- Role: 'admin', 'manager', or 'donor'
)
ON CONFLICT (user_id) 
DO UPDATE SET 
  role = 'admin',
  full_name = EXCLUDED.full_name,
  email = EXCLUDED.email;

-- ============================================
-- OPTION B: Update existing user to admin
-- ============================================
-- If the user already exists, just update their role:
-- UPDATE user_profiles
-- SET role = 'admin'
-- WHERE email = 'your-email@example.com';

-- ============================================
-- OPTION C: Create manager user
-- ============================================
-- INSERT INTO user_profiles (user_id, full_name, email, role)
-- VALUES (
--   'YOUR_USER_ID_HERE',
--   'Manager Name',
--   'manager@shreesamrajyalakshmi.com',
--   'manager'
-- )
-- ON CONFLICT (user_id) 
-- DO UPDATE SET role = 'manager';

-- ============================================
-- VERIFICATION
-- ============================================
-- After running the script, verify the user was created:
-- SELECT 
--   email, 
--   full_name, 
--   role,
--   created_at
-- FROM user_profiles
-- WHERE email = 'admin@shreesamrajyalakshmi.com';

-- ============================================
-- TROUBLESHOOTING
-- ============================================
-- If you get an error about RLS (Row Level Security):
-- 1. Make sure you're running this as a service role or admin
-- 2. Or temporarily disable RLS for this operation:
--    ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
--    -- Run your INSERT/UPDATE
--    ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- ============================================
-- NOTES
-- ============================================
-- 1. The user_id must match an existing user in auth.users
-- 2. You can find user IDs in Supabase Dashboard → Authentication → Users
-- 3. After creating the admin, logout and login again to see the admin portal
-- 4. The admin portal will be available at /admin

