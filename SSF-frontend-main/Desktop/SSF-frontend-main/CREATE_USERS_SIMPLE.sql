-- ============================================
-- SIMPLE SQL: Create Admin and Manager Profiles
-- ============================================
-- Run this AFTER creating auth users in Supabase Dashboard
-- ============================================

-- Step 1: Find user IDs (run this first to get the UUIDs)
SELECT id, email FROM auth.users 
WHERE email IN ('admin@shreesamrajyalakshmi.com', 'manager@shreesamrajyalakshmi.com');

-- Step 2: Create profiles (automatically finds user IDs by email)
INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT id, 'Admin User', 'admin@shreesamrajyalakshmi.com', 'admin'
FROM auth.users WHERE email = 'admin@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';

INSERT INTO user_profiles (user_id, full_name, email, role)
SELECT id, 'Manager User', 'manager@shreesamrajyalakshmi.com', 'manager'
FROM auth.users WHERE email = 'manager@shreesamrajyalakshmi.com'
ON CONFLICT (user_id) DO UPDATE SET role = 'manager';

-- Step 3: Verify (check that everything worked)
SELECT email, role, user_id FROM user_profiles 
WHERE email IN ('admin@shreesamrajyalakshmi.com', 'manager@shreesamrajyalakshmi.com');

