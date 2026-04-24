-- ============================================
-- SETUP ADMIN AND MANAGER ACCOUNTS
-- ============================================
-- This script sets up the admin and manager accounts
-- Run this in Supabase SQL Editor
-- ============================================

-- IMPORTANT: You must create the auth users FIRST in Supabase Dashboard
-- Steps:
-- 1. Go to Supabase Dashboard → Authentication → Users
-- 2. Click "Add User" → "Create new user"
-- 3. Create user with email: admin@shreesamrajyalakshmi.com, password: Amma@2025
-- 4. Copy the User ID (UUID) for admin
-- 5. Create user with email: manager@shreesamrajyalakshmi.com, password: Amma@2025
-- 6. Copy the User ID (UUID) for manager
-- 7. Replace 'ADMIN_USER_ID_HERE' and 'MANAGER_USER_ID_HERE' below with the actual UUIDs
-- 8. Run this script

-- ============================================
-- OPTION 1: If users already exist, just update their roles
-- ============================================
-- Try to update first (if profiles exist)

-- Set admin role
UPDATE user_profiles
SET role = 'admin',
    full_name = COALESCE(full_name, 'Admin User')
WHERE email = 'admin@shreesamrajyalakshmi.com';

-- Set manager role
UPDATE user_profiles
SET role = 'manager',
    full_name = COALESCE(full_name, 'Manager User')
WHERE email = 'manager@shreesamrajyalakshmi.com';

-- ============================================
-- OPTION 2: Create profiles if they don't exist
-- ============================================
-- Uncomment and use this if the profiles don't exist yet
-- Replace the user_id values with actual UUIDs from auth.users

-- INSERT INTO user_profiles (user_id, full_name, email, role)
-- VALUES 
--   (
--     'ADMIN_USER_ID_HERE',  -- Replace with admin user ID from auth.users
--     'Admin User',
--     'admin@shreesamrajyalakshmi.com',
--     'admin'
--   ),
--   (
--     'MANAGER_USER_ID_HERE',  -- Replace with manager user ID from auth.users
--     'Manager User',
--     'manager@shreesamrajyalakshmi.com',
--     'manager'
--   )
-- ON CONFLICT (user_id) 
-- DO UPDATE SET 
--   role = EXCLUDED.role,
--   email = EXCLUDED.email,
--   full_name = EXCLUDED.full_name;

-- ============================================
-- VERIFICATION
-- ============================================
-- After running, verify the accounts:
SELECT 
  email,
  full_name,
  role,
  user_id,
  created_at
FROM user_profiles
WHERE email IN (
  'admin@shreesamrajyalakshmi.com',
  'manager@shreesamrajyalakshmi.com'
)
ORDER BY role;

-- ============================================
-- TROUBLESHOOTING
-- ============================================
-- If you get "0 rows updated", the users don't exist in user_profiles yet.
-- You need to:
-- 1. Create the auth users first (in Supabase Dashboard)
-- 2. Then run the INSERT statement (Option 2) with the correct user IDs

-- To find user IDs if users already exist in auth:
-- SELECT id, email FROM auth.users 
-- WHERE email IN ('admin@shreesamrajyalakshmi.com', 'manager@shreesamrajyalakshmi.com');

