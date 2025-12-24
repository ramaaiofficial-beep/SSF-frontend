-- ============================================
-- DIAGNOSTIC SCRIPT: Check User Roles
-- ============================================
-- Run this in Supabase SQL Editor to diagnose role issues
-- ============================================

-- 1. Check all users and their roles
SELECT 
  up.id,
  up.user_id,
  up.email,
  up.full_name,
  up.role,
  up.created_at,
  up.updated_at,
  CASE 
    WHEN au.id IS NOT NULL THEN 'Auth user exists'
    ELSE 'NO AUTH USER - This is a problem!'
  END as auth_status
FROM user_profiles up
LEFT JOIN auth.users au ON up.user_id = au.id
ORDER BY up.created_at DESC;

-- 2. Check if there are any admin/manager users
SELECT 
  COUNT(*) as total_admins,
  'admin' as role_type
FROM user_profiles
WHERE role = 'admin'
UNION ALL
SELECT 
  COUNT(*) as total_managers,
  'manager' as role_type
FROM user_profiles
WHERE role = 'manager';

-- 3. Check for users with specific email (replace with your email)
-- SELECT 
--   email,
--   full_name,
--   role,
--   user_id
-- FROM user_profiles
-- WHERE email = 'your-email@example.com';

-- 4. Check RLS policies on user_profiles
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'user_profiles';

-- 5. Verify helper functions exist
SELECT 
  proname as function_name,
  proargtypes::regtype[] as argument_types
FROM pg_proc
WHERE proname IN ('is_admin', 'is_admin_or_manager');

