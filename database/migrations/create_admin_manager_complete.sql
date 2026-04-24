-- ============================================
-- COMPLETE SETUP: Admin and Manager Accounts
-- ============================================
-- IMPORTANT: You MUST create auth users FIRST in Supabase Dashboard
-- Then run this script to create the profiles with correct roles
-- ============================================

-- ============================================
-- STEP 1: Create Auth Users in Dashboard First
-- ============================================
-- Go to: Supabase Dashboard → Authentication → Users → Add User
-- 
-- Create Admin User:
--   Email: admin@shreesamrajyalakshmi.com
--   Password: Amma@2025
--   Auto Confirm: ✅
--   Copy the User ID (UUID)
--
-- Create Manager User:
--   Email: manager@shreesamrajyalakshmi.com
--   Password: Amma@2025
--   Auto Confirm: ✅
--   Copy the User ID (UUID)
-- ============================================

-- ============================================
-- STEP 2: Find the User IDs (if you forgot to copy them)
-- ============================================
-- Run this to find the user IDs after creating auth users:
SELECT 
  id as user_id,
  email,
  created_at
FROM auth.users
WHERE email IN (
  'admin@shreesamrajyalakshmi.com',
  'manager@shreesamrajyalakshmi.com'
);

-- ============================================
-- STEP 3: Create User Profiles with Roles
-- ============================================
-- Replace 'ADMIN_USER_ID_HERE' and 'MANAGER_USER_ID_HERE' 
-- with the actual UUIDs from Step 2

-- Create Admin Profile
INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT 
  id,
  'Admin User',
  'admin@shreesamrajyalakshmi.com',
  'admin'
FROM auth.users
WHERE email = 'admin@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) 
DO UPDATE SET 
  role = 'admin',
  email = 'admin@shreesamrajyalakshmi.com',
  full_name = COALESCE(user_profiles.full_name, 'Admin User');

-- Create Manager Profile
INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT 
  id,
  'Manager User',
  'manager@shreesamrajyalakshmi.com',
  'manager'
FROM auth.users
WHERE email = 'manager@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) 
DO UPDATE SET 
  role = 'manager',
  email = 'manager@shreesamrajyalakshmi.com',
  full_name = COALESCE(user_profiles.full_name, 'Manager User');

-- ============================================
-- STEP 4: Verify Setup
-- ============================================
-- Run this to verify both accounts are set up correctly:
SELECT 
  up.email,
  up.full_name,
  up.role,
  up.user_id,
  CASE 
    WHEN au.id IS NOT NULL THEN '✅ Auth user exists'
    ELSE '❌ NO AUTH USER'
  END as auth_status,
  up.created_at
FROM user_profiles up
LEFT JOIN auth.users au ON up.user_id = au.id
WHERE up.email IN (
  'admin@shreesamrajyalakshmi.com',
  'manager@shreesamrajyalakshmi.com'
)
ORDER BY up.role;

-- ============================================
-- ALTERNATIVE: Manual Insert (if SELECT doesn't work)
-- ============================================
-- If the SELECT-based INSERT doesn't work, use this instead:
-- (Replace UUIDs with actual values from Step 2)

/*
INSERT INTO user_profiles (user_id, full_name, email, role)
VALUES 
  (
    'ADMIN_USER_ID_HERE',  -- Replace with UUID from auth.users
    'Admin User',
    'admin@shreesamrajyalakshmi.com',
    'admin'
  ),
  (
    'MANAGER_USER_ID_HERE',  -- Replace with UUID from auth.users
    'Manager User',
    'manager@shreesamrajyalakshmi.com',
    'manager'
  )
ON CONFLICT (user_id) 
DO UPDATE SET 
  role = EXCLUDED.role,
  email = EXCLUDED.email,
  full_name = EXCLUDED.full_name;
*/

-- ============================================
-- TROUBLESHOOTING
-- ============================================

-- If you get "relation auth.users does not exist" error:
-- You need to use service role key or run this in Supabase Dashboard SQL Editor
-- (Not in a custom query tool)

-- If profiles already exist but roles are wrong:
UPDATE user_profiles
SET role = 'admin'
WHERE email = 'admin@shreesamrajyalakshmi.com';

UPDATE user_profiles
SET role = 'manager'
WHERE email = 'manager@shreesamrajyalakshmi.com';

-- If you get RLS (Row Level Security) errors:
-- Temporarily disable RLS, run the INSERT, then re-enable:
/*
ALTER TABLE user_profiles DISABLE ROW LEVEL SECURITY;
-- Run INSERT statements here
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
*/

